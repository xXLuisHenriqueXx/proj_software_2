import { useCallback, useEffect, useRef, useState } from "react";
import { Image, Pressable, ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { Pencil, X } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";
import Loader from "@src/components/Loader";

import { IUpdateUser } from "@src/common/Interfaces/User.interface";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { userService } from "@src/services/UserService";
import { CEP_MASK } from "@src/constants/Masks";
import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { WIDTH } from "@src/constants/Values";

const UpdateUser = () => {
  const { appNavigation } = useAppNavigation();

  const [fields, setFields] = useState<IUpdateUser>({
    name: "",
    email: "",
    pix_key: "",
    addressDistrict: "",
    addressStreet: "",
    addressNumber: 0,
    addressDetail: "",
    addressCep: "",
    picture: "",
  });
  const [sending, setSending] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const emailRef = useRef<TextInput>(null);
  const pixRef = useRef<TextInput>(null);
  const cepRef = useRef<TextInput>(null);
  const streetRef = useRef<TextInput>(null);
  const numberRef = useRef<TextInput>(null);
  const districtRef = useRef<TextInput>(null);
  const detailRef = useRef<TextInput>(null);

  const streetWidth = WIDTH * 0.7 - 28;
  const numberWidth = WIDTH * 0.3 - 28;
  const districtWidth = WIDTH * 0.6 - 28;
  const extraWidth = WIDTH * 0.4 - 28;

  const [images, setImages] = useState<string>();

  const pickImage = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 0.7,
      selectionLimit: 1,
    });

    if (result.assets) {
      const compressedImages = await Promise.all(
        result.assets.map((asset) => compressImage(asset.uri))
      );
      setImages(compressedImages[0]);
      setFields({ ...fields, picture: compressedImages[0] });
    }
  }, []);

  const compressImage = useCallback(async (uri: string) => {
    const manipulated = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 800 } }],
      { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );
    return `data:image/jpeg;base64,${manipulated.base64}`;
  }, []);

  const handleRemoveImage = useCallback((uri: string) => {
    setImages(undefined);
    setFields({ ...fields, picture: "" });
  }, []);

  const handleUpdate = useCallback(async () => {
    setLoading(true);
    setSending(true);

    try {
      const params: IUpdateUser = {
        name: fields.name,
        email: fields.email,
        pix_key: fields.pix_key,
        addressDistrict: fields.addressDistrict,
        addressStreet: fields.addressStreet,
        addressNumber: fields.addressNumber,
        addressDetail: fields.addressDetail,
        addressCep: fields.addressCep,
        picture: fields.picture,
      };

      const response = await userService.update(params);

      if (response?.status !== 200) {
        Toast.show({
          type: "error",
          text1: "Aviso",
          text2: "Erro ao atualizar o perfil",
        });

        return;
      }

      Toast.show({
        type: "success",
        text1: "Aviso",
        text2: "Perfil atualizado com sucesso",
      });

      appNavigation.replace("AppTabs");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao criar o produto",
      });
    } finally {
      setLoading(false);
      setSending(false);
    }
  }, [fields]);

  const handleFetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await userService.get();

      if (response) {
        const fields = {
          name: response.data.name,
          email: response.data.email,
          pix_key: response.data.pix_key,
          addressDistrict: response.data.addressDistrict,
          addressStreet: response.data.addressStreet,
          addressNumber: response.data.addressNumber,
          addressDetail: response.data.addressDetail,
          addressCep: response.data.addressCep,
          picture: response.data.picture,
        };

        setFields(fields);
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao carregar o produto",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchData();

    return () => {};
  }, [handleFetchData]);

  if (loading && !sending) return <Loader />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
    >
      <Header.Root padding={16}>
        <Header.Content title="Atualizar perfil" />
        <Header.RightIcon icon={X} onPress={() => appNavigation.goBack()} />
      </Header.Root>

      <Pressable
        style={{
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          width: 128,
          height: 128,
          borderRadius: 64,
          backgroundColor: BACKGROUND_SECONDARY_COLOR,
          borderWidth: 1,
          borderColor: HIGHLIGHT_COLOR,
          overflow: "hidden",
        }}
        android_ripple={{
          color: HIGHLIGHT_COLOR,
          borderless: false,
          foreground: true,
        }}
        onPress={pickImage}
      >
        {images || fields.picture ? (
          <Image
            source={{ uri: images || fields.picture }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Pencil color={HIGHLIGHT_COLOR} size={48} strokeWidth={1} />
        )}
      </Pressable>

      <Input.Normal
        label="Nome"
        value={fields.name}
        onChangeText={(value) => setFields({ ...fields, name: value })}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current?.focus()}
      />

      <Input.Normal
        ref={emailRef}
        label="E-mail"
        value={fields.email}
        onChangeText={(value) => setFields({ ...fields, email: value })}
        returnKeyType="next"
        onSubmitEditing={() => pixRef.current?.focus()}
      />

      <Input.Normal
        ref={pixRef}
        label="Chave Pix"
        value={fields.pix_key}
        onChangeText={(value) => setFields({ ...fields, pix_key: value })}
        returnKeyType="next"
        onSubmitEditing={() => cepRef.current?.focus()}
      />

      <Input.Masked
        ref={cepRef}
        label="Cep"
        placeholder="00000-000"
        value={fields.addressCep}
        onChangeText={(_, unmasked) => {
          setFields({ ...fields, addressCep: unmasked });
        }}
        mask={CEP_MASK}
        returnKeyType="next"
        onSubmitEditing={() => streetRef.current?.focus()}
      />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <Input.Normal
          ref={streetRef}
          label="Rua"
          width={streetWidth}
          value={fields.addressStreet}
          onChangeText={(value) =>
            setFields({ ...fields, addressStreet: value })
          }
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current?.focus()}
        />

        <Input.Normal
          ref={numberRef}
          label="Número"
          width={numberWidth}
          value={fields.addressNumber?.toString()}
          onChangeText={(value) =>
            setFields({ ...fields, addressNumber: Number(value) })
          }
          returnKeyType="next"
          onSubmitEditing={() => districtRef.current?.focus()}
        />
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Input.Normal
          ref={districtRef}
          label="Bairro"
          width={districtWidth}
          value={fields.addressDistrict}
          onChangeText={(value) =>
            setFields({ ...fields, addressDistrict: value })
          }
          returnKeyType="next"
          onSubmitEditing={() => detailRef.current?.focus()}
        />

        <Input.Normal
          ref={detailRef}
          label="Complemento"
          width={extraWidth}
          value={fields.addressDetail}
          onChangeText={(value) =>
            setFields({ ...fields, addressDetail: value })
          }
          returnKeyType="done"
          onSubmitEditing={handleUpdate}
        />
      </View>

      <Button.Primary
        text="Atualizar perfil"
        loading={sending}
        onPress={handleUpdate}
      />
    </ScrollView>
  );
};

export default UpdateUser;
