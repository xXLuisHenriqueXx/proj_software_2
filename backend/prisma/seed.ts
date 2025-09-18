import { PrismaClient, ToyType, AgeRange } from '../src/generated/prisma';
import { passwordHelper } from '../src/helpers/passwordHelper';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o processo de seed...');

  await prisma.historyEntry.deleteMany();
  await prisma.toy.deleteMany();
  await prisma.user.deleteMany();
  console.log('Banco de dados limpo.');

  const users = [];
  const hashedPassword = await passwordHelper.hashPassword('senha123', 10);

  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        cpf: faker.helpers.replaceSymbols('###.###.###-##'),
        addressStreet: faker.location.streetAddress(),
        addressDistrict: faker.location.county(),
        addressNumber: faker.number.int({ min: 1, max: 2000 }),
        addressCep: faker.location.zipCode('#####-###'),
        addressDetail: faker.location.secondaryAddress(),
      },
    });
    users.push(user);
    console.log(`Usuário criado: ${user.name} (${user.email})`);
  }

  console.log('\nCriando brinquedos...');

  const allToyTypes = Object.values(ToyType);
  const allAgeRanges = Object.values(AgeRange);

  const toys = [];
  for (let i = 0; i < 30; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];

    const toy = await prisma.toy.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.number.int({ min: 0, max: 200 }),
        isNew: faker.datatype.boolean(),
        canTrade: faker.datatype.boolean(),
        canLend: faker.datatype.boolean(),
        usageTime: faker.number.int({ min: 1, max: 48 }),
        preservation: faker.number.int({ min: 1, max: 5 }),
        type: faker.helpers.arrayElements(allToyTypes, { min: 1, max: 2 }),
        ageGroup: faker.helpers.arrayElement(allAgeRanges),
        ownerId: randomUser.id,
      },
    });
    toys.push(toy);
  }
  console.log(`${toys.length} brinquedos criados com sucesso.`);

  console.log('\nCriando histórico para cada usuário...');

  for (const user of users) {
    const randomToys = faker.helpers.arrayElements(toys, 5);
    for (const toy of randomToys) {
      await prisma.historyEntry.create({
        data: {
          userId: user.id,
          toyId: toy.id,
        },
      });
    }
    console.log(`Histórico criado para usuário ${user.name}`);
  }

  console.log('\nSeed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
