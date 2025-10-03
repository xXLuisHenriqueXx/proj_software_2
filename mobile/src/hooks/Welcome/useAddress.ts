import { useCallback, useEffect, useState } from "react";
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

interface IParams {
  fieldsData: IFieldsRegister;
}

export function useAddress({ fieldsData }: IParams) {
  const { register } = useAuth();

  const navigation = useNavigation<PropsRoot>();

  const [cep, setCep] = useState<string>("");
  const [fields, setFields] = useState<IFieldsAddress>({
    street: "",
    number: "",
    neighborhood: "",
    extra: "",
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCep, setLoadingCep] = useState<boolean>(false);
  const [editableFields, setEditableFields] = useState<IEditableFields>({
    street: true,
    number: true,
    neighborhood: true,
    extra: true,
    city: true,
    state: true,
  });

  const handleFetchAddress = useCallback(async () => {
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

      setEditableFields({
        street: !data.logradouro,
        number: true,
        neighborhood: !data.bairro,
        extra: true,
        city: !data.localidade,
        state: !data.uf,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCep(false);
    }
  }, [cep]);

  const handleCleanAddress = () => {
    setFields({
      street: "",
      number: "",
      neighborhood: "",
      extra: "",
      city: "",
      state: "",
    });

    setEditableFields({
      street: true,
      number: true,
      neighborhood: true,
      extra: true,
      city: true,
      state: true,
    });
  };

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, addressSchema);
    if (error) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error,
      });
      return;
    }

    return values;
  }, [fields]);

  const handleRegister = useCallback(() => {
    setLoading(true);

    try {
      const validFields = validateFields();
      if (!validFields) return;

      const params: IRegister = {
        name: fieldsData.name,
        email: fieldsData.email,
        password: fieldsData.password,
        passwordConfirmation: fieldsData.passwordConfirmation,
        cpf: "662.59147768",
        cnpj: fieldsData.cnpj,
        addressDistrict: fields.neighborhood,
        addressStreet: fields.street,
        addressNumber: Number(fields.number),
        addressDetail: fields.extra,
        addressCep: cep,
      };

      register(params);

      navigation.replace("AppStack");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [cep, fields, fieldsData, navigation, register, validateFields]);

  useEffect(() => {
    if (cep.length === 8) {
      handleFetchAddress();
    } else {
      handleCleanAddress();
    }
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
