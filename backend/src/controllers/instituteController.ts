import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";

export const InstituteController = {
  async getAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const institutes = await prisma.user.findMany({
        where: {
          cnpj: { not: null },
          organizationInfo: {
            is: { approved: true },
          },
        },
        include: {
          organizationInfo: true,
        },
      });

      const result = institutes.map((inst) => {
        const info = inst.organizationInfo!;
        return {
          id: inst.id,
          name: inst.name,
          description: info.description,
          picture: inst.picture ?? "/public/assets/avatar_not_found.webp",
          phone: info.phone_number2
            ? [info.phone_number1.toString(), info.phone_number2.toString()]
            : [info.phone_number1.toString()],
          online: info.website_url ?? "",
          address: `${inst.addressStreet}, ${inst.addressNumber}${
            inst.addressDetail ? " - " + inst.addressDetail : ""
          }, ${inst.addressDistrict}, CEP: ${inst.addressCep}`,
          ageRange: info.ageRange,
          pix_key: inst.pix_key ?? "",
        };
      });

      return reply.status(200).send(result);
    } catch (error) {
      console.error("Erro ao buscar instituições:", error);
      return reply
        .status(500)
        .send({ error: "Erro interno do servidor", message: (error as Error).message });
    }
  },
};
