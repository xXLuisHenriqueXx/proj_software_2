import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  ButtonBack,
  ButtonRegister,
  Container,
  ContainerHeader,
  RegisterText,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { useThemeStore } from "@src/stores/ThemeStore";
import { PropsNavigationStack, PropsStack } from "@src/routes";
import { validateAddressFields } from "@src/utils/ValidateAddressFields";

export interface IFieldsAddress {
  street: string;
  number: string;
  neighborhood: string;
  extra?: string;
  city: string;
  state: string;
}

export interface IEditableFields {
  street: boolean;
  number: boolean;
  neighborhood: boolean;
  extra: boolean;
  city: boolean;
  state: boolean;
}

type Props = NativeStackScreenProps<PropsNavigationStack, "Address">;

const Address = ({ route }: Props) => {
  const { theme } = useThemeStore();
  const { fieldsData } = route.params || {};

  const navigation = useNavigation<PropsStack>();

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
  };

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

  const handleRegister = () => {
    const validFields = validateAddressFields(fields);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const address = { ...validFields, cep };
    const registerData = { user: fieldsData, address };

    console.log("[ADDRESS] handleRegister: ", registerData);
  };

  useEffect(() => {
    if (cep.length === 8) {
      handleFetchAddress();
    } else {
      handleCleanAddress();
    }
  }, [cep]);

  if (loadingCep) {
    return (
      <Container>
        <Title>Carregando...</Title>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      <ContainerHeader>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color={theme.colors.textPrimary} />
        </ButtonBack>
        <Title>Endereço</Title>
      </ContainerHeader>

      <Fields
        cep={cep}
        setCep={setCep}
        fields={fields}
        setFields={setFields}
        editableFields={editableFields}
        onRegister={handleRegister}
      />

      <ButtonRegister onPress={handleRegister} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.textContrast} />
        ) : (
          <RegisterText>Cadastrar-se</RegisterText>
        )}
      </ButtonRegister>
    </Container>
  );
};

export default Address;
