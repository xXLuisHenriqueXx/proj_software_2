import { View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ChevronLeft } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Button } from "@src/components/Button";
import Fields from "./_components/Fields";
import Loader from "@src/components/Loader";

import { AuthStackParamList } from "@src/routes/stacks/AuthStack";
import { useAddress } from "@src/hooks/Welcome/useAddress";

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
    handleRegister,
    handleNavigateGoBack,
    loading,
  } = useAddress({ fieldsData, type });

  if (loadingCep) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Header.Root padding={16}>
        <Header.LeftIcon icon={ChevronLeft} onPress={handleNavigateGoBack} />
        <Header.Content title="Endereço" />
      </Header.Root>

      <Fields
        cep={cep}
        setCep={setCep}
        fields={fields}
        setFields={setFields}
        onRegister={handleRegister}
      />

      <Button.Primary
        text="Cadastrar-se"
        onPress={handleRegister}
        loading={loading}
      />
    </View>
  );
};

export default Address;
