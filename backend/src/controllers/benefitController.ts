import type { FastifyRequest, FastifyReply } from "fastify"
import { prisma } from "../prisma"

export const BenefitController = {
  
  async listActiveForUser(req: FastifyRequest, reply: FastifyReply) {
    const { userId } = req.params as { userId: string }
    const now = new Date()

    const items = await prisma.userBenefit.findMany({
      where: {
        userId,
        status: "ACTIVE",
        startsAt: { lte: now },
        OR: [{ endsAt: null }, { endsAt: { gte: now } }],
      },
      include: { benefit: true },
      orderBy: { startsAt: "desc" },
    })

    return items.map((ub) => ({
      id: ub.id,
      key: ub.benefit.key,
      title: ub.benefit.title,
      description: ub.benefit.description ?? null,
      startsAt: ub.startsAt,
      endsAt: ub.endsAt,
      status: ub.status,
      source: ub.source ?? null,
      metadata: ub.metadata ?? null,
    }))
  },

  // Cria um benefício no catálogo
  async create(req: FastifyRequest, reply: FastifyReply) {
    const data = req.body as any
    const created = await prisma.benefit.create({ data })
    reply.code(201)
    return created
  },

  // Lista catálogo de benefícios
  async list(req: FastifyRequest) {
    return prisma.benefit.findMany({ orderBy: { createdAt: "desc" } })
  },

  // Atualiza benefício
  async update(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as { id: string }
    const data = req.body as any
    const updated = await prisma.benefit.update({ where: { id }, data })
    return updated
  },

  // Concede benefício a um usuário
  async grant(req: FastifyRequest, reply: FastifyReply) {
    const { userId } = req.params as { userId: string }
    const { benefitKey, source } = req.body as { benefitKey: string; source?: string }

    const benefit = await prisma.benefit.findUnique({ where: { key: benefitKey } })
    if (!benefit || !benefit.active) {
      reply.code(400)
      return { error: "Benefit not found or inactive" }
    }

    const startsAt = new Date()
    let endsAt: Date | null = null
    if (benefit.durationDays) {
      endsAt = new Date(startsAt)
      endsAt.setDate(endsAt.getDate() + benefit.durationDays)
    }

    const rec = await prisma.userBenefit.create({
      data: {
        userId,
        benefitId: benefit.id,
        startsAt,
        endsAt,
        status: "ACTIVE",
        source,
      },
      include: { benefit: true },
    })

    return rec
  },
}
