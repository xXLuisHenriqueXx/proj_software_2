import { prisma } from "../prisma";
import { passwordHelper } from "../helpers/passwordHelper";
import { z } from "zod";
import { registerSchema, updateUserSchema } from "../schemas/authValidationSchemas";

type UserCreateData = z.infer<typeof registerSchema>;
type UserUpdateData = z.infer<typeof updateUserSchema>;

export const authService = {
  async createUser(userData: UserCreateData) {
    try {
      const { passwordConfirmation, ...restOfUserData } = userData;

      const hashedPassword = await passwordHelper.hashPassword(userData.password);

      const user = await prisma.user.create({
        data: {
          ...restOfUserData, 
          password: hashedPassword, 
        },
      });

      return user;
    } catch (error) {
      console.error("Erro no serviço ao criar usuário:", error);
      throw new Error(`Erro ao criar usuário: ${error}`);
    }
  },

  async updateUser(id: string, userData: UserUpdateData) {
    try {
      let updateData: Partial<UserUpdateData> = { ...userData };

      if (updateData.password) {
        updateData.password = await passwordHelper.hashPassword(updateData.password);
      }

      const user = await prisma.user.update({
        where: { id: id },
        data: updateData,
      });

      return user;
    } catch (error) {
      console.error("Erro no serviço ao atualizar usuário:", error);
      throw new Error(`Erro ao atualizar usuário: ${error}`);
    }
  },

  async updatePicture(userId: string, base64String: string) {
    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: { picture: base64String },
      });
      return user;
    } catch (error) {
      console.error("Erro no serviço ao atualizar foto:", error);
      throw new Error(`Erro ao atualizar foto do usuário: ${error}`);
    }
  },
};
