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
const allToyTypes = Object.values(ToyType);
const allAgeRanges = Object.values(AgeRange);

async function main() {
  console.log("Iniciando o processo de seed...");
  
  const userCount = await prisma.user.count();
  if (userCount > 3) {
    console.log("O banco de dados já está populado. Seed não será executado.");
    return;
  }
  // Se não houver usuários, o script continua
  console.log("Banco de dados vazio. Iniciando o processo de seed...");
  
  // Limpeza do banco em ordem de dependência
  await prisma.message.deleteMany(); 
  await prisma.chat.deleteMany(); 
  await prisma.rate.deleteMany(); 
  await prisma.toyPicture.deleteMany(); 
  await prisma.historyEntry.deleteMany();
  await prisma.highlight.deleteMany();
  await prisma.organizationInfo.deleteMany(); 
  await prisma.toy.deleteMany();
  await prisma.user.deleteMany();
  console.log("Banco de dados limpo.");

  // ======== USUÁRIOS ========
  const users = [];
  const hashedPassword = await passwordHelper.hashPassword("senha123", 10);

  console.log("\nCriando usuários...");
  for (let i = 0; i < 15; i++) {
    const isOrganization = i < 5;

    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password: hashedPassword,
        addressStreet: faker.location.streetAddress(),
        addressDistrict: faker.location.county(),
        addressNumber: faker.number.int({ min: 1, max: 2000 }),
        addressCep: faker.location.zipCode("#####-###"),
        addressDetail: faker.location.secondaryAddress(),
        picture: faker.image.avatar(),

        cnpj: isOrganization
          ? faker.helpers.replaceSymbols("##.###.###/####-##")
          : null,
        pix_key: isOrganization ? faker.finance.bic() : null,

        organizationInfo: isOrganization
          ? {
              create: {
                description: faker.company.catchPhrase(),
                phone_number1: 987654321,
                phone_number2: 987654322,
                ageRange: faker.helpers.arrayElement(allAgeRanges),
                website_url: faker.internet.url(),
                approved: true,
                lat: parseFloat(faker.location.latitude()),
                long: parseFloat(faker.location.longitude()),
              },
            }
          : undefined,
      },
    });
    users.push(user);
    console.log(`Usuário criado: ${user.name} (${user.email})`);
  }

  // ======== BRINQUEDOS E FOTOS ========
  console.log("\nCriando brinquedos...");

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
        ToyPictures: {
          create: Array.from({
            length: faker.number.int({ min: 1, max: 3 }),
          }).map((_, index) => ({
            order: index + 1,
            picture: faker.image.urlLoremFlickr({ category: 'toys' }),
          })),
        },
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

  // ======== AVALIAÇÕES (RATE) ========
  console.log("\nCriando avaliações...");
  for (const user of users) {
    // Cada usuário avalia 3 outros usuários aleatoriamente
    const otherUsers = users.filter((u) => u.id !== user.id);
    const usersToRate = faker.helpers.arrayElements(otherUsers, 3);
    for (const ratedUser of usersToRate) {
      await prisma.rate.create({
        data: {
          value: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentence(),
          userId: ratedUser.id, // ID do usuário que está sendo avaliado
        },
      });
    }
    console.log(`Avaliações criadas pelo usuário ${user.name}`);
  }

  // ======== HIGHLIGHTS ========
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
