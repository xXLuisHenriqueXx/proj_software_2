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

type Props = NativeStackScreenProps<AuthStackParamList, "Address">;

const Address = ({ route }: Props) => {
  const { fieldsData } = route.params || {};

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
    const validFields = validateAddressFields(fields);
    if (!validFields) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const address = { ...validFields, cep };
    const registerData = { user: fieldsData, address };

    console.log("[ADDRESS] handleRegister: ", registerData);

    navigation.replace("AppTabs");
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
        style={{ paddingTop: statusBarHeight }}
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
      style={{ paddingTop: statusBarHeight }}
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
