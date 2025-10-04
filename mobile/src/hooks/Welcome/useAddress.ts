import { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import {
  IFieldsAddress,
  IFieldsRegister,
  IRegister,
} from "@src/common/Interfaces/Auth.interface";
import useAuth from "../useAuth";
import { PropsRoot } from "@src/routes";
import { IEditableFields } from "@src/screens/Welcome/Address";
import { validateForm } from "@src/utils/FormValidator";
import { addressSchema } from "@src/utils/ValidationSchemas";

const EMPTY_ADDRESS: IFieldsAddress = {
  street: "",
  number: "",
  neighborhood: "",
  extra: "",
  city: "",
  state: "",
};

interface IParams {
  fieldsData: IFieldsRegister;
  type: "personal" | "enterprise";
}

export function useAddress({ fieldsData, type }: IParams) {
  const { register } = useAuth();
  const navigation = useNavigation<PropsRoot>();

  const [cep, setCep] = useState<string>("");
  const [fields, setFields] = useState<IFieldsAddress>(EMPTY_ADDRESS);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCep, setLoadingCep] = useState<boolean>(false);
  const editableFields = useMemo<IEditableFields>(
    () => ({
      street: !fields.street,
      number: true,
      neighborhood: !fields.neighborhood,
      extra: true,
      city: !fields.city,
      state: !fields.state,
    }),
    [fields]
  );

  const validateFields = (): IFieldsAddress => {
    const { values, error } = validateForm(fields as any, addressSchema);
    if (error) throw new Error(error);

    return values;
  };

  const handleRegister = async () => {
    setLoading(true);

    try {
      const validFields = validateFields();

      const cleanedFields = { ...fieldsData };
      if (type !== "enterprise") delete cleanedFields.cnpj;

      const params: IRegister = {
        ...cleanedFields,
        addressDistrict: validFields.neighborhood,
        addressStreet: validFields.street,
        addressNumber: Number(validFields.number),
        addressDetail: validFields.extra,
        addressCep: cep,
      };

      await register(params);

      navigation.replace("AppStack");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao fazer cadastro",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFetchAddress = async () => {
    setLoadingCep(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      const newAddressData: IFieldsAddress = {
        street: data.logradouro || "",
        number: "",
        neighborhood: data.bairro || "",
        extra: "",
        city: data.localidade || "",
        state: data.uf || "",
      };

      setFields(newAddressData);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao buscar CEP",
      });
    } finally {
      setLoadingCep(false);
    }
  };

  const handleCleanAddress = () => setFields(EMPTY_ADDRESS);

  useEffect(() => {
    if (cep.length < 8) {
      handleCleanAddress();
      return;
    }

    const timeout = setTimeout(() => {
      handleFetchAddress();
    }, 400);

    return () => clearTimeout(timeout);
  }, [cep]);

  return {
    cep,
    setCep,
    fields,
    setFields,
    editableFields,
    loading,
    loadingCep,
    handleRegister,
  };
}
