import {  View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Header from "./_components/Header";
import Fields from "./_components/Fields";
import Loader from "@src/components/Loader";

import { AuthStackParamList } from "@src/routes/stacks/AuthStack";
import { useAddress } from "@src/hooks/Welcome/useAddress";
import RegisterButton from "./_components/RegisterButton";

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
  const { fieldsData, type } = route.params || {};

  const {
    loadingCep,
    cep,
    setCep,
    fields,
    setFields,
    editableFields,
    handleRegister,
    loading,
  } = useAddress({ fieldsData, type });

  if (loadingCep) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Header />

      <Fields
        cep={cep}
        setCep={setCep}
        fields={fields}
        setFields={setFields}
        editableFields={editableFields}
        onRegister={handleRegister}
      />

      <RegisterButton loading={loading} onRegister={handleRegister} />
    </View>
  );
};

export default Address;
