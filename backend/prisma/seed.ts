import { prisma } from "../src/prisma";

async function main() {
  const user = await prisma.user.findFirst({
    where: { email: "test@example.com" },
  });
  if (!user) {
    throw new Error("User not found, register/login once first.");
  }

  // delete old toys (optional cleanup)
  await prisma.toy.deleteMany({ where: { ownerId: user.id } });

  const toy1 = await prisma.toy.create({
    data: {
      name: "Carrinho Hot Wheels",
      description: "Carro azul pequeno",
      price: 20,
      usageTime: 12,
      preservation: 4,
      ownerId: user.id,
      ageGroup: "SEIS_A_DOZE",
      isNew: false,
      canTrade: true,
      canLend: false,
      type: ["CARRINHOS"],
    },
  });

  const toy2 = await prisma.toy.create({
    data: {
      name: "Quebra-Cabeça 500 peças",
      description: "Desafio para toda a família",
      price: 50,
      usageTime: 2,
      preservation: 5,
      ownerId: user.id,
      ageGroup: "DOZE_OU_MAIS",
      isNew: true,
      canTrade: false,
      canLend: true,
      type: ["QUEBRA_CABEÇAS", "ESTRATÉGIA"],
    },
  });

  const toy3 = await prisma.toy.create({
    data: {
      name: "Boneca Barbie",
      description: "Boneca clássica em ótimo estado",
      price: 80,
      usageTime: 24,
      preservation: 3,
      ownerId: user.id,
      ageGroup: "TRES_A_SEIS",
      isNew: false,
      canTrade: true,
      canLend: true,
      type: ["BONECOS", "MENINAS"],
    },
  });

  console.log("Seed complete. Toy IDs:");
  console.log("Toy1:", toy1.id);
  console.log("Toy2:", toy2.id);
  console.log("Toy3:", toy3.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
