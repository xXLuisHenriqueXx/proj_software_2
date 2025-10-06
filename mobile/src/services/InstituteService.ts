import { api } from "./Api";
import { IInstituteGet } from "@src/common/Interfaces/Institute.interface";

export const instituteService = {
  get: async () => {
    const response = await api.get("/api/institutes");

    return response;
  },

  getByID: async (params: IInstituteGet) => {
    const response = await api.get(`/api/institutes/${params.id}`);

    return response;
  },
};
