import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { AuthStackParamList } from "@src/routes/stacks/AuthStack";
import { PropsRoot } from "@src/routes";
import {
  IFieldsAddress,
  IRegister,
} from "@src/common/Interfaces/Auth.interface";
import useAuth from "@src/hooks/useAuth";
import { validateForm } from "@src/utils/FormValidator";
import { addressSchema } from "@src/utils/ValidationSchemas";
import { CONTRAST_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";

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

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, addressSchema);
    if (error) {
      Alert.alert("Aviso", error);

      return;
    }

    return values;
  }, [fields]);

  const handleRegister = () => {
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
  };

  useEffect(() => {
    if (cep.length === 8) {
      handleFetchAddress();
    } else {
      handleCleanAddress();
    }
  }, [cep]);

  if (loadingCep) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <Text style={styles.title}>Endereço</Text>
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
        style={styles.buttonRegister}
        activeOpacity={0.85}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={CONTRAST_COLOR} />
        ) : (
          <Text style={styles.textRegister}>Cadastrar-se</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Address;
