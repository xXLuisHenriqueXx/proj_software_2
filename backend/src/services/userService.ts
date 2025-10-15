import { prisma } from "../prisma";

export async function getPublicUserById(userId: string) {
  const u = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      createdAt: true,
      email: true,
      name: true,
      parentalControl: true,
      cnpj: true,
      pix_key: true,
      picture: true,
      addressDistrict: true,
      addressStreet: true,
      addressNumber: true,
      addressDetail: true,
      addressCep: true,
      toys: { select: { id: true } }
    }
  });

  if (!u) return null;

  return {
    ...u,
    createdAt: u.createdAt.toISOString()
  };
}
