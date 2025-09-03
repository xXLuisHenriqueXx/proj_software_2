import { prisma } from "../prisma"
import { Toy, ToyType, AgeRange } from "@prisma/client"
import { pictureHelper } from "../helpers/pictureHelpers"

interface ToyFilter {
    orderBy?: "RELEVANTES" | "MENOR_PRECO" | "MAIOR_PRECO"
    condition?: "NOVO" | "USADO"
    ageRange?: AgeRange
    priceRange?: { min?: number; max?: number }
    donation?: boolean
    trade?: boolean
    lend?: boolean
    search?: string
}

export const ToyService = {
    async createToy(
        name: string,
        description: string,
        price: number,
        usageTime: number,
        preservation: number,
        pictures: string[],
        types: string[],
        ownerId: string,
        ageGroup: AgeRange,
        isNew: boolean,
        canTrade: boolean,
        canLend: boolean,
        discount?: number
    ): Promise<Toy> {
        const MAX_TOYNAME_LENGTH = 50
        if (name.length > MAX_TOYNAME_LENGTH) {
            throw new Error(`Nome do brinquedo não pode ultrapassar ${MAX_TOYNAME_LENGTH} caracteres`)
        }

        if (price <= 0) throw new Error("Preço deve ser maior que 0")
        if (discount && (discount < 0 || discount > price)) throw new Error("Desconto inválido")
        if (usageTime < 0) throw new Error("Tempo de uso não pode ser negativo")
        if (preservation < 0 || preservation > 5) throw new Error("Preservação deve estar entre 0 e 5")
        if (description.length > 300) throw new Error("A descrição do item é longa demais")

        pictures.forEach((pic) => {
            if (!pictureHelper.isValidBase64Image(pic)) {
                throw new Error("A foto precisa estar no formato base64")
            }
        })

        types.forEach((type) => {
            if (!Object.values(ToyType).includes(type as ToyType)) {
                throw new Error(`Tipo inválido: ${type}`)
            }
        })

        const toy = await prisma.toy.create({
            data: {
                name,
                description,
                price,
                discount,
                usageTime,
                preservation,
                ownerId,
                ageGroup,
                isNew,
                canTrade,
                canLend,
                ToyPictures: {
                    create: pictures.map((pic, index) => ({
                        picture: pic,
                        order: index + 1,
                    })),
                },
                type: types as ToyType[],
            },
        })


        return toy
    },

    async updateToy(
        toyId: string,
        data: {
            name?: string
            description?: string
            price?: number
            discount?: number
            usageTime?: number
            preservation?: number
            pictures?: string[]
            types?: string[]
            ageGroup?: AgeRange
            isNew?: boolean
            canTrade?: boolean
            canLend?: boolean
        },
        ownerId: string
    ): Promise<Toy> {
        const toy = await prisma.toy.findUnique({ where: { id: toyId } })
        if (!toy) throw new Error("Brinquedo não encontrado")
        if (toy.ownerId !== ownerId) throw new Error("Você não tem permissão para atualizar este brinquedo")

        if (data.name && data.name.length > 50) throw new Error("Nome não pode ultrapassar 50 caracteres")
        if (data.price && data.price <= 0) throw new Error("Preço deve ser maior que 0")
        if (data.discount && data.price && data.discount > data.price) {
            throw new Error("Desconto não pode ser maior que o preço")
        }
        if (data.usageTime && data.usageTime < 0) throw new Error("Tempo de uso não pode ser negativo")
        if (data.preservation && (data.preservation < 0 || data.preservation > 5)) {
            throw new Error("Preservação deve estar entre 0 e 5")
        }
        if (data.description && data.description.length > 300) throw new Error("A descrição do item é longa demais")


        if (data.pictures) {
            data.pictures.forEach((pic) => {
                if (!pictureHelper.isValidBase64Image(pic)) {
                    throw new Error("Todas as fotos devem estar em base64 válido")
                }
            })
        }

        if (data.types) {
            data.types.forEach((type) => {
                if (!Object.values(ToyType).includes(type as ToyType)) {
                    throw new Error(`Tipo inválido: ${type}`)
                }
            })
        }

        const updateData: any = { ...data }

        const updatedToy = await prisma.$transaction(async (tx) => {
            const updated = await tx.toy.update({
                where: { id: toyId },
                data: updateData,
            })

            if (data.pictures) {
                await tx.toyPicture.deleteMany({ where: { toyId } })
                await tx.toyPicture.createMany({
                    data: data.pictures.map((pic) => ({
                        toyId,
                        picture: pic,
                    })),
                })
            }

            return tx.toy.findUnique({
                where: { id: toyId },
                include: { ToyPictures: true },
            }) as unknown as Toy
        })

        return updatedToy
    },

    async deleteToy(toyId: string, ownerId: string): Promise<boolean> {
        const toy = await prisma.toy.findUnique({ where: { id: toyId } })
        if (!toy) throw new Error("Brinquedo não encontrado")
        if (toy.ownerId !== ownerId) throw new Error("Você não tem permissão para deletar este brinquedo")

        await prisma.toy.delete({ where: { id: toyId } })
        return true
    },

    async searchToys(userId: string | null, page: number, pageSize: number, filter?: ToyFilter) {
        const skip = (page - 1) * pageSize
        const take = pageSize

        if (pageSize > 100) throw new Error("Não é possível buscar mais que 100 itens por vez")

        const where: any = {}

        if (filter?.condition) {
            where.isNew = filter.condition === "NOVO"
        }

        if (filter?.ageRange) {
            where.ageGroup = filter.ageRange
        }

        if (filter?.priceRange) {
            where.price = {}
            if (filter.priceRange.min !== undefined) where.price.gte = filter.priceRange.min
            if (filter.priceRange.max !== undefined) where.price.lte = filter.priceRange.max
        }

        if (filter?.donation) {
            where.price = 0
        }
        if (filter?.trade !== undefined) where.canTrade = filter.trade
        if (filter?.lend !== undefined) where.canLend = filter.lend

        if (filter?.search) {
            where.OR = [
                { name: { contains: filter.search, mode: "insensitive" } },
                { description: { contains: filter.search, mode: "insensitive" } },
                { type: { has: filter.search.toUpperCase() as ToyType, mode: "insensitive" } },
            ]
        }

        let orderBy: any = { createdAt: "desc" }
        if (filter?.orderBy === "MENOR_PRECO") orderBy = { price: "asc" }
        if (filter?.orderBy === "MAIOR_PRECO") orderBy = { price: "desc" }
        if (filter?.orderBy === "RELEVANTES" && userId) {
            // Inserir aqui a função de buscar por relevantes caso seja usuário autenticado no futuro
            orderBy = { createdAt: "desc" }
        }
        if (!filter?.orderBy && userId) {
            // Não tem filtro de ordem especificado (como ao entrar na home) mas tem usuário, deve mostrar os mais relevantes por padrão
            orderBy = { createdAt: "desc" }
        }

        const [toys, total] = await Promise.all([
            prisma.toy.findMany({
                where,
                skip,
                take,
                orderBy,
                include: { ToyPictures: true },
            }),
            prisma.toy.count({ where }),
        ])

        return {
            page,
            pageSize,
            total,
            totalPages: Math.ceil(total / pageSize),
            toys,
        }
    },
}
