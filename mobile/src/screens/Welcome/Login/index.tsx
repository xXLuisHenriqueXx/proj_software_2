import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";

import Fields from "./_components/Fields";
import SheetEmail from "../_components/SheetEmail";
import SheetCode from "../_components/SheetCode";

import { CONTRAST_COLOR, PRIMARY_COLOR } from "@src/constants/Colors";
import { useLogin } from "@src/hooks/useLogin";

const Login = () => {
  const { navigation, loading, handleLogin } = useLogin();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeft size={24} color={PRIMARY_COLOR} />
        </TouchableOpacity>

        <Text style={styles.title}>Acessar conta</Text>
      </View>

      <Fields />

      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.85}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={CONTRAST_COLOR} />
        ) : (
          <Text style={styles.textLogin}>Acessar</Text>
        )}
      </TouchableOpacity>

      <SheetEmail />
      <SheetCode />
    </View>
  );
};

export default Login;
