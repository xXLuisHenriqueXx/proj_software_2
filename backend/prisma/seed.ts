// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Iniciando seed sem Faker...')

  await prisma.toy.deleteMany()
  await prisma.user.deleteMany()
  await prisma.benefit.deleteMany()
  await prisma.userBenefit.deleteMany()

  const hashedPassword = await hash('senha123', 10)

  // cria usuários fixos
  const alice = await prisma.user.create({
    data: {
      name: 'Alice Teste',
      email: 'alice@example.com',
      password: hashedPassword,
      cpf: '123.456.789-00',
      addressStreet: 'Rua das Flores',
      addressDistrict: 'Centro',
      addressNumber: 100,
      addressCep: '97000-000',
      addressDetail: 'Ap 101',
    },
  })

  const bob = await prisma.user.create({
    data: {
      name: 'Bob Teste',
      email: 'bob@example.com',
      password: hashedPassword,
      cpf: '987.654.321-00',
      addressStreet: 'Rua das Palmeiras',
      addressDistrict: 'Bairro Norte',
      addressNumber: 200,
      addressCep: '97100-000',
      addressDetail: 'Casa',
    },
  })

  // cria um benefício fixo
  const benefit = await prisma.benefit.create({
    data: {
      key: 'CLUBE_30_DIAS',
      title: '30 dias de Clube do Brinquedo grátis',
      description: 'Teste inicial da assinatura gratuita por 30 dias',
      durationDays: 30,
      active: true,
    },
  })

  // concede benefício à Alice
  const startsAt = new Date()
  const endsAt = new Date()
  endsAt.setDate(startsAt.getDate() + 30)

  await prisma.userBenefit.create({
    data: {
      userId: alice.id,
      benefitId: benefit.id,
      startsAt,
      endsAt,
      status: 'ACTIVE',
      source: 'SEED',
    },
  })

  console.log('Seed finalizado sem Faker!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
