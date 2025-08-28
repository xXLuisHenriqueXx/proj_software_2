import { prisma } from "../prisma";
import { passwordHelper } from "../helpers/passwordHelper";

export const authService = {
  async createUser(userData: {
    email: string;
    password: string;
    name: string;
    cpf?: string;
    cnpj?: string;
    addressStreet: string;
    addressDistrict: string;
    addressNumber: number;
    addressCep: string;
    addressDetail: string
  }) {
    try {
      const hashedPassword = await passwordHelper.hashPassword(userData.password);

      const user = await prisma.user.create({
        data: {
          email: userData.email,
          password: hashedPassword,
          name: userData.name,
          cpf: userData.cpf || undefined,
          cnpj: userData.cnpj || undefined,
          addressDistrict: userData.addressDistrict,
          addressStreet: userData.addressStreet,
          addressNumber: userData.addressNumber,
          addressCep: userData.addressCep,
          addressDetail: userData.addressDetail
        },
      });

      return user
    } catch (error) {
      throw new Error("Erro ao criar usuário", error);
    }
  },
  async updateUser(id: string, userData: {
    email?: string;
    password?: string;
    name?: string;
    cpf?: string;
    cnpj?: string;
    addressStreet?: string;
    addressDistrict?: string;
    addressNumber?: number;
    addressCep?: string;
    addressDetail?: string;
  }) {
    try {
      let updateData: any = { ...userData };

      if (updateData.password) {
        updateData.password = await passwordHelper.hashPassword(updateData.password);
      }

      Object.keys(updateData).forEach((key) => {
        if (updateData[key] === null || updateData[key] === undefined) {
          delete updateData[key];
        }
      });

      const user = await prisma.user.update({
        where: { id: id },
        data: updateData,
      });

      return user;
    } catch (error) {
      throw new Error("Erro ao atualizar usuário: " + error);
    }
  },
};
