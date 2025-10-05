import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../prisma";

export const InstituteController = {
  async getAll(req: FastifyRequest, reply: FastifyReply) {
    try {
      const institutes = await prisma.user.findMany({
        where: {
          cnpj: { not: null },
          organizationInfo: { is: { approved: true } },
        },
        include: { organizationInfo: true },
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
          latitude: info.lat,
          longitude: info.long,
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

  async getById(req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    try {
      const { id } = req.params;

      console.log(id)
      const inst = await prisma.user.findUnique({
        where: { id },
        include: { organizationInfo: true },
      });
      console.log(inst)

      if (!inst || !inst.organizationInfo) {
        return reply.status(404).send({ error: "Instituição não encontrada" });
      }

      const info = inst.organizationInfo;

      const result = {
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
        latitude: info.lat,
        longitude: info.long,
      };
      console.log(result)
      return reply.status(200).send(result);
    } catch (error) {
      console.error("Erro ao buscar instituição:", error);
      return reply
        .status(500)
        .send({ error: "Erro interno do servidor", message: (error as Error).message });
    }
  },
};
