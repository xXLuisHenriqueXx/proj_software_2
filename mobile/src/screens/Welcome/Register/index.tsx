import { View } from "react-native";
import { styles } from "./styles";

import Header from "./_components/Header";
import TypeButton from "./_components/TypeButton";
import Fields from "./_components/Fields";
import NextButton from "./_components/NextButton";

import { useRegister } from "@src/hooks/Welcome/useRegister";

const Register = () => {
  const { type, setType, fields, setFields, handleNavigateToAddress } =
    useRegister();

  return (
    <View style={styles.container}>
      <Header />

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
        handleNavigateToAddress={handleNavigateToAddress}
      />

      <NextButton onNext={handleNavigateToAddress} />
    </View>
  );
};

export default Register;
