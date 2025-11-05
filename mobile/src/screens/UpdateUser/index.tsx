import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
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

const UpdateUser = () => {
  const { appNavigation } = useAppNavigation();
  const { width } = useWindowDimensions();

  const [fields, setFields] = useState<IUpdateUser>({
    name: "",
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

  const streetWidth = width * 0.7 - 28;
  const numberWidth = width * 0.3 - 28;
  const neighborhoodWidth = width * 0.6 - 28;
  const extraWidth = width * 0.4 - 28;

  const [images, setImages] = useState<string>();

  const pickImage = async () => {
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
  };

  const compressImage = async (uri: string) => {
    const manipulated = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 800 } }],
      { compress: 0.6, format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );
    return `data:image/jpeg;base64,${manipulated.base64}`;
  };

  const handleRemoveImage = (uri: string) => {
    setImages(undefined);
    setFields({ ...fields, picture: "" });
  };

  const handleUpdate = async () => {
    setLoading(true);
    setSending(true);

    try {
      const params: IUpdateUser = {
        name: fields.name,
        pix_key: fields.pix_key,
        addressDistrict: fields.addressDistrict,
        addressStreet: fields.addressStreet,
        addressNumber: fields.addressNumber,
        addressDetail: fields.addressDetail,
        addressCep: fields.addressCep,
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
  };

  const handleFetchData = async () => {
    setLoading(true);

    try {
      const response = await userService.get();

      if (response) {
        const fields = {
          name: response.data.name,
          pix_key: response.data.pix_key,
          addressDistrict: response.data.addressDistrict,
          addressStreet: response.data.addressStreet,
          addressNumber: response.data.addressNumber,
          addressDetail: response.data.addressDetail,
          addressCep: response.data.addressCep,
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
  };

  useEffect(() => {
    handleFetchData();
  }, []);

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
        {images ? (
          <Image
            source={{ uri: images }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Pencil color={HIGHLIGHT_COLOR} size={48} />
        )}
      </Pressable>

      <Input.Normal
        label="Nome"
        value={fields.name}
        onChangeText={(value) => setFields({ ...fields, name: value })}
      />

      <Input.Normal
        label="Chave Pix"
        value={fields.pix_key}
        onChangeText={(value) => setFields({ ...fields, pix_key: value })}
      />

      <Input.Masked
        label="Cep"
        placeholder="00000-000"
        returnKeyType="done"
        value={fields.addressCep}
        onChangeText={(_, unmasked) => {
          setFields({ ...fields, addressCep: unmasked });
        }}
        mask={CEP_MASK}
      />

      <View style={{ flexDirection: "row", gap: 8 }}>
        <Input.Normal
          label="Rua"
          width={streetWidth}
          value={fields.addressStreet}
          onChangeText={(value) =>
            setFields({ ...fields, addressStreet: value })
          }
        />

        <Input.Normal
          label="Número"
          width={numberWidth}
          value={fields.addressNumber?.toString()}
          onChangeText={(value) =>
            setFields({ ...fields, addressNumber: Number(value) })
          }
        />
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Input.Normal
          label="Bairro"
          width={neighborhoodWidth}
          value={fields.addressDistrict}
          onChangeText={(value) =>
            setFields({ ...fields, addressDistrict: value })
          }
        />

        <Input.Normal
          label="Complemento"
          width={extraWidth}
          value={fields.addressDetail}
          onChangeText={(value) =>
            setFields({ ...fields, addressDetail: value })
          }
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
