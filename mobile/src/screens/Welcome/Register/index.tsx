import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";
import { PRIMARY_COLOR } from "@src/constants/Colors";
import { useRegister } from "@src/hooks/Welcome/useRegister";
import TypeButton from "./_components/TypeButton";

const Register = () => {
  const {
    navigation,
    type,
    setType,
    fields,
    setFields,
    handleNavigateToAddress,
  } = useRegister();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <Text style={styles.title}>Criar conta</Text>
      </View>

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

      <TouchableOpacity
        style={styles.buttonNext}
        activeOpacity={0.85}
        onPress={handleNavigateToAddress}
      >
        <Text style={styles.textNext}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
