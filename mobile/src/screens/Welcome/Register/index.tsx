import { View } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Button } from "@src/components/Button";
import TypeButton from "./_components/TypeButton";
import Fields from "./_components/Fields";

import { useRegister } from "@src/hooks/Welcome/useRegister";

const Register = () => {
  const {
    type,
    setType,
    fields,
    setFields,
    onNavigateToAddress,
    onNavigateGoBack,
  } = useRegister();

  return (
    <View style={styles.container}>
      <Header.Root padding={16}>
        <Header.LeftIcon icon={ChevronLeft} onPress={onNavigateGoBack} />
        <Header.Content title="Criar conta" />
      </Header.Root>

      <View style={styles.containerTypes}>
        <TypeButton
          label="Conta pessoal"
          isActive={type === "personal"}
          onPress={() => setType("personal")}
        />

        <TypeButton
          label="Conta jurídica"
          isActive={type === "enterprise"}
          onPress={() => setType("enterprise")}
        />
      </View>

      <Fields
        type={type}
        fields={fields}
        setFields={setFields}
        onNavigateToAddress={onNavigateToAddress}
      />

      <Button.Primary text="Proximo" onPress={onNavigateToAddress} />
    </View>
  );
};

export default Register;
