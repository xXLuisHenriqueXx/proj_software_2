import { api } from "./Api";
import { IInstituteGetbyID } from "@src/common/Interfaces/Institute.interface";

export const instituteService = {
  get: async () => {
    const response = await api.get("/api/institutes");

    return response;
  },

  getByID: async (params: IInstituteGetbyID) => {
    const response = await api.get(`/api/institutes/${params.id}`);

    return response;
  },
};
