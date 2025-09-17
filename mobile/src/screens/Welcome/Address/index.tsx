import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { validateAddressFields } from "@src/utils/ValidateAddressFields";
import { AuthStackParamList } from "@src/routes/stacks/AuthStack";
import { PropsRoot } from "@src/routes";
import {
  IFieldsAddress,
  IRegister,
} from "@src/common/Interfaces/Auth.interface";
import useAuth from "@src/hooks/useAuth";

export interface IEditableFields {
  street: boolean;
  number: boolean;
  neighborhood: boolean;
  extra: boolean;
  city: boolean;
  state: boolean;
}

type Props = NativeStackScreenProps<AuthStackParamList, "Address">;

const Address = ({ route }: Props) => {
  const { fieldsData } = route.params || {};
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
    setLoading(true);

    try {
      const validFields = validateAddressFields(fields);
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
  };

  useEffect(() => {
    if (cep.length === 8) {
      handleFetchAddress();
    } else {
      handleCleanAddress();
    }
  }, [cep]);

  const statusBarHeight = Constants.statusBarHeight;

  if (loadingCep) {
    return (
      <View
        className="relative flex-1 flex-col items-center justify-center px-6 bg-backgroundPrimary"
        style={{ paddingTop: statusBarHeight + 32 }}
      >
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Carregando ...
        </Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      className="relative flex-1 flex-col items-center px-6 bg-backgroundPrimary"
      style={{ paddingTop: statusBarHeight + 32 }}
    >
      <View className="flex-row items-center gap-x-4 w-full py-4">
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={"#131313"} />
        </TouchableOpacity>

        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Endereço
        </Text>
      </View>

      <Fields
        cep={cep}
        setCep={setCep}
        fields={fields}
        setFields={setFields}
        editableFields={editableFields}
        onRegister={handleRegister}
      />

      <TouchableOpacity
        className="absolute bottom-6 flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
        activeOpacity={0.85}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={"#FEFEFE"} />
        ) : (
          <Text className="text-lg font-redHatDisplayMedium text-contrast">
            Cadastrar-se
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Address;
