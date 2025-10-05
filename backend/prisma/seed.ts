import { PrismaClient, HighlightType } from "../src/generated/prisma";
import { passwordHelper } from "../src/helpers/passwordHelper";
import { base64 } from "./base64_test";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();
const base64Placeholder = base64;

async function main() {
  console.log("Iniciando o seed do banco...");

  const userCount = await prisma.user.count();
  if (userCount >= 10) {
    console.log("O banco já possui usuários. Seed não será executado.");
    return;
  }

  // Limpeza do banco
  await prisma.toyPicture.deleteMany();
  await prisma.toy.deleteMany();
  await prisma.organizationInfo.deleteMany();
  await prisma.user.deleteMany();
  await prisma.highlight.deleteMany();
  console.log("Banco limpo.");

  // Caminho absoluto para os arquivos JSON
  const seedDir = path.join(__dirname, "seed");
  const usersJSON = JSON.parse(fs.readFileSync(path.join(seedDir, "users.json"), "utf-8")).users;
  const toysJSON = JSON.parse(fs.readFileSync(path.join(seedDir, "toys.json"), "utf-8")).toys;
  const orgsJSON = JSON.parse(fs.readFileSync(path.join(seedDir, "organizations.json"), "utf-8")).organizations;

  // ======== USUÁRIOS ========
  console.log("Criando usuários...");
  const userMap: Record<string, string> = {}; // id do JSON -> UUID real

  for (const u of usersJSON) {
    const createdUser = await prisma.user.create({
      data: {
        name: u.name,
        email: u.email,
        password: await passwordHelper.hashPassword(u.password, 10),
        picture: u.picture,
        addressDistrict: u.address.district,
        addressStreet: u.address.street,
        addressNumber: u.address.number,
        addressDetail: u.address.detail,
        addressCep: u.address.cep,
        parentalControl: u.parentalControl,
        active: u.active,
      },
    });

    userMap[u.id] = createdUser.id;
    console.log(`Usuário criado: ${createdUser.name}`);
  }

  // ======== ORGANIZAÇÕES ========
  console.log("Criando organizações...");
  const organizationsJSON = JSON.parse(
    fs.readFileSync(path.join(seedDir, "organizations.json"), "utf-8")
  ).organizations;

  for (const o of organizationsJSON) {
    // Cria o usuário da organização
    const createdUser = await prisma.user.create({
      data: {
        name: o.name, // nome da organização
        email: `${o.name.replace(/\s+/g, '').toLowerCase()}@orgfake.com`, // email fictício
        password: await passwordHelper.hashPassword("12345678", 10),
        picture: o.picture,
        addressDistrict: o.addressDistrict,
        addressStreet: o.addressStreet,
        addressNumber: o.addressNumber,
        addressDetail: o.addressDetail,
        addressCep: o.addressCep,
        parentalControl: false,
        active: true,
        cnpj: o.cnpj, // CNPJ fictício único
      },
    });

    // Cria a organizaçãoInfo associada ao usuário
    await prisma.organizationInfo.create({
      data: {
        organizationId: createdUser.id,
        description: o.description,
        phone_number1: o.phone_number1,
        phone_number2: o.phone_number2 ?? null,
        ageRange: o.ageRange,
        approved: o.approved,
        website_url: o.website_url,
        lat: o.lat,
        long: o.long,
      },
    });

    console.log(`Organização criada: ${o.name}`);
  }

  // ======== BRINQUEDOS ========
  console.log("Criando brinquedos...");
  for (const t of toysJSON) {
    const toy = await prisma.toy.create({
      data: {
        name: t.name,
        description: t.description,
        price: t.price,
        isNew: t.isNew,
        canTrade: t.canTrade,
        canLend: t.canLend,
        usageTime: t.usageTime,
        type: t.type,
        ageGroup: t.ageGroup,
        discount: t.discount,
        ownerId: userMap[t.ownerId],
      },
    });

    for (const pic of t.pictures) {
      await prisma.toyPicture.create({
        data: {
          order: pic.order,
          picture: pic.picture,
          toyId: toy.id,
        },
      });
    }
    console.log(`Brinquedo criado: ${t.name}`);
  }

  // ======== HIGHLIGHTS ========
  console.log("Criando highlights...");
  const highlightsData = [
    { name: "Brinquedos Gratuitos", type: HighlightType.FREE, description: "Brinquedos disponíveis para doação ou gratuitos.", picture: base64Placeholder },
    { name: "Mais Perto de Você", type: HighlightType.NEARBY, description: "Brinquedos próximos à sua localização.", picture: base64Placeholder },
    { name: "Mais Populares", type: HighlightType.POPULAR, description: "Brinquedos mais visualizados por outros usuários.", picture: base64Placeholder },
    { name: "Últimos Adicionados", type: HighlightType.RECENT, description: "Brinquedos recém adicionados na plataforma.", picture: base64Placeholder },
    { name: "Brinquedos Novos", type: HighlightType.NEW, description: "Brinquedos que estão como novos.", picture: base64Placeholder },
  ];

  for (const h of highlightsData) {
    await prisma.highlight.create({ data: h });
    console.log(`Highlight criado: ${h.name}`);
  }

  console.log("Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro durante o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
