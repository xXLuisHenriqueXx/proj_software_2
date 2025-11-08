import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import useAuth from "@src/hooks/useAuth";
import {
  IFieldsAddress,
  IFieldsRegister,
  IRegister,
} from "@src/common/Interfaces/Auth.interface";
import { validateForm } from "@src/utils/FormValidator";
import { addressSchema } from "@src/utils/ValidationSchemas";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const EMPTY_ADDRESS: IFieldsAddress = {
  addressStreet: "",
  addressNumber: 0,
  addressDistrict: "",
  addressDetail: "",
  addressCep: "",
};

interface IParams {
  fieldsData: IFieldsRegister;
  type: "personal" | "enterprise";
}

export function useAddress({ fieldsData, type }: IParams) {
  const { register } = useAuth();
  const { rootNavigation } = useAppNavigation();

  const [cep, setCep] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [fields, setFields] = useState<IFieldsAddress>(EMPTY_ADDRESS);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCep, setLoadingCep] = useState<boolean>(false);

  const validateFields = (): IFieldsAddress => {
    const { values, error } = validateForm(fields as any, addressSchema);
    if (error) throw new Error(error);

    return values;
  };

  const onRegister = async () => {
    setLoading(true);

    try {
      const validFields = validateFields();

      const cleanedFields = { ...fieldsData };
      if (type !== "enterprise") delete cleanedFields.cnpj;

      const params: IRegister = {
        ...cleanedFields,
        addressDistrict: validFields.addressDistrict,
        addressStreet: validFields.addressStreet,
        addressNumber: Number(validFields.addressNumber),
        addressDetail: validFields.addressDetail,
        addressCep: cep,
      };

      await register(params);

      rootNavigation.replace("AppStack");
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

  const onFetchAddress = async () => {
    setLoadingCep(true);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      const newAddressData: IFieldsAddress = {
        addressStreet: data.logradouro || "",
        addressNumber: 0,
        addressDistrict: data.bairro || "",
        addressDetail: "",
        addressCep: cep,
      };

      setCity(data.localidade || "");
      setState(data.uf || "");
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

  const onCleanAddress = () => setFields(EMPTY_ADDRESS);

  useEffect(() => {
    if (cep.length < 8) {
      onCleanAddress();
      return;
    }

    const timeout = setTimeout(() => {
      onFetchAddress();
    }, 400);

    return () => clearTimeout(timeout);
  }, [cep]);

  return {
    cep,
    setCep,
    fields,
    setFields,
    city,
    state,
    loading,
    loadingCep,
    onRegister,
    onNavigateGoBack: () => rootNavigation.goBack(),
  };
}
