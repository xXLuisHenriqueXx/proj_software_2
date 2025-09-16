import { PrismaClient, ToyType, AgeRange } from '../src/generated/prisma';
import { hash } from 'bcryptjs';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o processo de seed...');

  await prisma.toy.deleteMany();
  await prisma.user.deleteMany();
  console.log('Banco de dados limpo.');

  const users = [];
  const hashedPassword = await hash('senha123', 10);

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

  for (let i = 0; i < 10; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];

    await prisma.toy.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: 0,
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
  }
  console.log('10 brinquedos criados com sucesso.');

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

