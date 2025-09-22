import {
  PrismaClient,
  ToyType,
  AgeRange,
  HighlightType,
} from "../src/generated/prisma";
import { passwordHelper } from "../src/helpers/passwordHelper";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { base64 } from "./base64_test";

const prisma = new PrismaClient();

// Base64 genérico (1x1 px branco)
const base64Placeholder = base64;

async function main() {
  console.log("Iniciando o processo de seed...");

  // Limpeza do banco
  await prisma.historyEntry.deleteMany();
  await prisma.toy.deleteMany();
  await prisma.user.deleteMany();
  await prisma.highlight.deleteMany();
  console.log("Banco de dados limpo.");

  // ======== USUÁRIOS ========
  const users = [];
  const hashedPassword = await passwordHelper.hashPassword("senha123", 10);

  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        cpf: faker.helpers.replaceSymbols("###.###.###-##"),
        addressStreet: faker.location.streetAddress(),
        addressDistrict: faker.location.county(),
        addressNumber: faker.number.int({ min: 1, max: 2000 }),
        addressCep: faker.location.zipCode("#####-###"),
        addressDetail: faker.location.secondaryAddress(),
      },
    });
    users.push(user);
    console.log(`Usuário criado: ${user.name} (${user.email})`);
  }

  // ======== BRINQUEDOS ========
  console.log("\nCriando brinquedos...");
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
        type: faker.helpers.arrayElements(allToyTypes, { min: 1, max: 2 }),
        ageGroup: faker.helpers.arrayElement(allAgeRanges),
        discount: faker.number.int({ min: 0, max: 100 }),
        ownerId: randomUser.id,
      },
    });
    toys.push(toy);
  }
  console.log(`${toys.length} brinquedos criados com sucesso.`);

  // ======== HISTÓRICO ========
  console.log("\nCriando histórico para cada usuário...");
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

  console.log("\nCriando highlights...");
  const highlightsData = [
    {
      name: "Brinquedos Gratuitos",
      type: HighlightType.FREE,
      description: "Brinquedos disponíveis para doação ou gratuitos.",
      picture: base64Placeholder,
    },
    {
      name: "Mais Perto de Você",
      type: HighlightType.NEARBY,
      description: "Brinquedos próximos à sua localização.",
      picture: base64Placeholder,
    },
    {
      name: "Mais Populares",
      type: HighlightType.POPULAR,
      description: "Brinquedos mais visualizados por outros usuários.",
      picture: base64Placeholder,
    },
    {
      name: "Últimos Adicionados",
      type: HighlightType.RECENT,
      description: "Brinquedos recém adicionados na plataforma.",
      picture: base64Placeholder,
    },
    {
      name: "Brinquedos Novos",
      type: HighlightType.NEW,
      description: "Brinquedos que estão como novos.",
      picture: base64Placeholder,
    },
  ];

  for (const data of highlightsData) {
    const highlight = await prisma.highlight.create({ data });
    console.log(`Highlight criado: ${highlight.name}`);
  }

  console.log("\nSeed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
