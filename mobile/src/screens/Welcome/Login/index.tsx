import { View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import Fields from "./_components/Fields";
import LoginButton from "./_components/LoginButton";
import SheetEmail from "./_components/SheetEmail";
import SheetCode from "./_components/SheetCode";

import { useLogin } from "@src/hooks/Welcome/useLogin";
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
    handleLogin,
    handleNavigateGoBack,
    handleOpenSheetEmail,
    handleCloseSheetEmail,
    handleCloseSheetCode,
    handleSendEmail,
  } = useLogin();

  return (
    <View style={styles.container}>
      <Header.Root padding={16}>
        <Header.LeftIcon icon={ChevronLeft} onPress={handleNavigateGoBack} />
        <Header.Content title="Acessar conta" />
      </Header.Root>

      <Fields
        fields={fields}
        setFields={setFields}
        onLogin={handleLogin}
        onForgot={handleOpenSheetEmail}
      />

      <LoginButton loading={loading} onLogin={handleLogin} />

      <SheetEmail
        ref={bottomSheetEmailRef}
        email={email}
        setEmail={setEmail}
        onSend={handleSendEmail}
        onClose={handleCloseSheetEmail}
      />
      <SheetCode
        ref={bottomSheetCodeRef}
        code={code}
        setCode={setCode}
        onClose={handleCloseSheetCode}
      />
    </View>
  );
};

export default Login;
