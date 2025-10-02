import { useCallback, useState } from "react";
import {
  Alert,
  InteractionManager,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";

import { PropsAuthStack } from "@src/routes/stacks/AuthStack";
import { IFieldsRegister } from "@src/common/Interfaces/Auth.interface";
import { validateForm } from "@src/utils/FormValidator";
import { registerSchema } from "@src/utils/ValidationSchemas";
import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
} from "@src/constants/Colors";

const Register = () => {
  const naviagtion = useNavigation<PropsAuthStack>();

  const [type, setType] = useState<"personal" | "enterprise">("personal");
  const [fields, setFields] = useState<IFieldsRegister>({
    name: "",
    cnpj: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const validateFields = useCallback(() => {
    const { values, error } = validateForm(fields as any, registerSchema(type));
    return { values, error };
  }, [fields, type]);

  const handleNavigateToAddress = useCallback(() => {
    const { values, error } = validateFields();
    if (error) {
      InteractionManager.runAfterInteractions(() => {
        Alert.alert("Aviso", error);
      });
      return;
    }

    if (values) {
      naviagtion.navigate("Address", { fieldsData: values });
    }
  }, [naviagtion, fields, type]);

  const isTypePersonal = type === "personal";

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => naviagtion.goBack()}
        >
          <ChevronLeft size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <Text style={styles.title}>Criar conta</Text>
      </View>

      <View style={styles.containerTypes}>
        <TouchableOpacity
          style={[
            styles.buttonType,
            {
              backgroundColor: isTypePersonal ? HIGHLIGHT_COLOR : "transparent",
            },
          ]}
          activeOpacity={0.85}
          onPress={() => setType("personal")}
        >
          <Text
            style={[
              styles.textType,
              {
                color: isTypePersonal
                  ? BACKGROUND_PRIMARY_COLOR
                  : PRIMARY_COLOR,
              },
            ]}
          >
            Conta pessoal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonType,
            {
              backgroundColor: !isTypePersonal
                ? HIGHLIGHT_COLOR
                : "transparent",
            },
          ]}
          activeOpacity={0.85}
          onPress={() => setType("enterprise")}
        >
          <Text
            style={[
              styles.textType,
              {
                color: !isTypePersonal
                  ? BACKGROUND_PRIMARY_COLOR
                  : PRIMARY_COLOR,
              },
            ]}
          >
            Conta jurídica
          </Text>
        </TouchableOpacity>
      </View>

      <Fields
        fields={fields}
        setFields={setFields}
        type={type}
        onNavigate={handleNavigateToAddress}
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
