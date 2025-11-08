import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import { Button } from "@src/components/Button";
import Fields from "./_components/Fields";
import SheetEmail from "./_components/SheetEmail";
import SheetCode from "./_components/SheetCode";

import { useLogin } from "./_hooks/useLogin";
import { ChevronLeft } from "lucide-react-native";

const Login = () => {
  const {
    loading,
    fields,
    setFields,
    email,
    setEmail,
    code,
    setCode,
    bottomSheetEmailRef,
    bottomSheetCodeRef,
    onLogin,
    onNavigateGoBack,
    onOpenSheetEmail,
    onCloseSheetEmail,
    onCloseSheetCode,
    onSendEmail,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Header.Root padding={16}>
        <Header.LeftIcon icon={ChevronLeft} onPress={onNavigateGoBack} />
        <Header.Content title="Acessar conta" />
      </Header.Root>

      <Fields
        fields={fields}
        setFields={setFields}
        onLogin={onLogin}
        onForgot={onOpenSheetEmail}
      />

      <Button.Primary text="Entrar" onPress={onLogin} loading={loading} />

      <SheetEmail
        ref={bottomSheetEmailRef}
        email={email}
        setEmail={setEmail}
        onSend={onSendEmail}
        onClose={onCloseSheetEmail}
      />
      <SheetCode
        ref={bottomSheetCodeRef}
        email={email}
        code={code}
        setCode={setCode}
        onClose={onCloseSheetCode}
      />
    </View>
  );
};

export default Login;
