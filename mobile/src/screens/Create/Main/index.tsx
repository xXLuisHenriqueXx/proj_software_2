import { Fragment, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import { ImagePlus, X } from "lucide-react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  EAgeRange,
  EToyCondition,
  IFieldsToyCreateMain,
} from "@src/common/Interfaces/Toy.interface";
import MaskInput, { Masks } from "react-native-mask-input";
import { useNavigation } from "@react-navigation/native";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { PropsCreateStack } from "@src/routes/stacks/CreateStack";

const Main = () => {
  const { width } = useWindowDimensions();
  const statusBarHeight = Constants.statusBarHeight;
  const rootNavigation = useNavigation<PropsAppStack>();
  const createNavigation = useNavigation<PropsCreateStack>();
  const [images, setImages] = useState<string[]>([]);
  const [fields, setFields] = useState<IFieldsToyCreateMain>({
    name: "",
    description: "",
    price: "",
    isNew: false,
    canTrade: false,
    canLend: false,
    usageTime: "",
    ageGroup: EAgeRange.ZERO_A_UM,
    pictures: [],
    discount: "",
  });

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 1,
      aspect: [4, 3],
      selectionLimit: 5,
      base64: true,
    });

    if (result.assets) {
      const images = result.assets.slice(0, 5);

      setImages(images.map((image) => image.uri));
      setFields({ ...fields, pictures: images.map((image) => image.base64) });
    }
  };

  const handleRemoveImage = (uri: string) => {
    setImages(images.filter((image) => image !== uri));
  };

  const handleNavigateToCategories = () => {
    createNavigation.navigate("Categories", { fields });
  };

  const formatPrice = (value: string) => {
    return value.replace(".", "").replace(",", ".").split(" ")[1];
  };

  console.log(fields.price);

  const bigImageWidth = (width - 48 - 16) / 2;
  const smallImageWidth = (width - 48 - 16 - 16) / 2 / 2;

  return (
    <ScrollView
      className="relative bg-backgroundSecondary"
      style={{ paddingTop: statusBarHeight + 64 }}
      contentContainerStyle={{
        paddingBottom: 124,
        rowGap: 48,
        paddingHorizontal: 24,
      }}
    >
      <View className="flex-row items-center justify-between w-full py-4">
        <Text className="text-2xl font-redHatDisplaySemiBold text-primary">
          Criar anúncio
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => rootNavigation.goBack()}
        >
          <X size={20} color={"#13131399"} />
        </TouchableOpacity>
      </View>

      <View className="flex-col items-start gap-y-4">
        <Text className="text-lg font-redHatDisplaySemiBold text-primary">
          Escolha até 5 das suas melhores fotos
        </Text>
        <TouchableOpacity
          className="flex-row items-center justify-between gap-x-4 w-full"
          activeOpacity={0.85}
          onPress={pickImages}
        >
          {images.length === 0 ? (
            <>
              <View
                className="items-center justify-center border border-dashed border-secondary rounded-xl"
                style={{ width: bigImageWidth, height: bigImageWidth }}
              >
                <ImagePlus size={24} color={"#316A41"} />
              </View>

              <View className="flex-row flex-wrap gap-4 w-1/2">
                {[1, 2, 3, 4].map((item) => (
                  <View
                    key={item}
                    className="items-center justify-center border border-dashed border-secondary rounded-xl"
                    style={{ width: smallImageWidth, height: smallImageWidth }}
                  >
                    <ImagePlus size={24} color={"#316A41"} />
                  </View>
                ))}
              </View>
            </>
          ) : (
            <>
              <View className="relative rounded-xl">
                <Image
                  source={{ uri: images[0] }}
                  className="rounded-xl"
                  style={{
                    width: bigImageWidth,
                    height: bigImageWidth,
                  }}
                />
                <TouchableOpacity
                  className="absolute top-2 right-2 p-0.5 bg-backgroundPrimary rounded-full z-10"
                  activeOpacity={0.85}
                  onPress={() => handleRemoveImage(images[0])}
                >
                  <X size={20} color={"#13131399"} />
                </TouchableOpacity>
              </View>

              <View className="flex-row flex-wrap gap-4 w-1/2">
                {images.slice(1, 5).map((image, index) => (
                  <View key={index} className="relative rounded-xl">
                    <Image
                      source={{ uri: image }}
                      className="rounded-xl"
                      style={{
                        width: smallImageWidth,
                        height: smallImageWidth,
                      }}
                    />
                    <TouchableOpacity
                      className="absolute top-2 right-2 p-0.5 bg-backgroundPrimary rounded-full z-10"
                      activeOpacity={0.85}
                      onPress={() => handleRemoveImage(image)}
                    >
                      <X size={20} color={"#13131399"} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </>
          )}
        </TouchableOpacity>
      </View>

      <View className="flex-col gap-y-2">
        <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
          <Text className="absolute -top-3 left-4 px-2 bg-backgroundSecondary text-base font-redHatDisplayMedium text-highlight">
            Título do anúncio
          </Text>

          <TextInput
            className="flex-1 text-base font-redHatDisplayRegular text-primary"
            placeholder="ex: Brinquedo Pelúcia Leãozinho"
            returnKeyType="done"
            value={fields.name}
            onChangeText={(text: string) =>
              setFields({ ...fields, name: text })
            }
          />
        </View>

        <Text className="text-base font-redHatDisplayRegular text-primary/75 ml-4">
          {fields.name.length} de 100
        </Text>
      </View>

      <View className="flex-col items-center gap-y-4 w-full">
        <View className="flex-col gap-y-2 w-full">
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundSecondary text-base font-redHatDisplayMedium text-highlight">
              Valor do anúncio
            </Text>

            {fields.canLend || fields.canTrade ? (
              <Text className="flex-1 text-base font-redHatDisplayRegular text-primary">
                Gratuito
              </Text>
            ) : (
              <MaskInput
                mask={Masks.BRL_CURRENCY}
                className="flex-1 text-base font-redHatDisplayRegular text-primary"
                placeholder="ex: R$ 50,00"
                returnKeyType="done"
                value={fields.price}
                onChangeText={(masked, unmasked) => {
                  setFields({ ...fields, price: formatPrice(masked) });
                }}
              />
            )}
          </View>
        </View>

        <View className="flex-row items-center gap-x-4">
          <View className="w-1/3 h-[1px] bg-secondary/50" />

          <Text className="text-base font-redHatDisplayRegular text-primary">
            ou
          </Text>

          <View className="w-1/3 h-[1px] bg-secondary/50" />
        </View>

        <View className="flex-col gap-y-6 w-full">
          <TouchableOpacity
            className="flex-row items-center justify-between w-full"
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, canLend: !fields.canLend })}
          >
            <View className="flex-col gap-y-1">
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                Disponibilizar para doação
              </Text>
              <Text className="text-sm font-redHatDisplayRegular text-secondary/75">
                Seu produto será gratuito
              </Text>
            </View>

            {fields.canLend ? (
              <View className="items-center justify-center w-6 h-6 border border-highlight">
                <View className="w-4 h-4 bg-highlight" />
              </View>
            ) : (
              <View className="w-6 h-6 border border-highlight" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between w-full"
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, canTrade: !fields.canTrade })}
          >
            <View className="flex-col gap-y-1">
              <Text className="text-lg font-redHatDisplayRegular text-primary">
                Aceitar trocas
              </Text>
              <Text className="text-sm font-redHatDisplayRegular text-secondary/75">
                Seu produto será gratuito
              </Text>
            </View>

            {fields.canTrade ? (
              <View className="items-center justify-center w-6 h-6 border border-highlight">
                <View className="w-4 h-4 bg-highlight" />
              </View>
            ) : (
              <View className="w-6 h-6 border border-highlight" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-col gap-y-2">
        <View className="relative flex-row items-start justify-start h-48 p-4 border border-highlight rounded-xl">
          <Text className="absolute -top-3 left-4 px-2 bg-backgroundSecondary text-base font-redHatDisplayMedium text-highlight">
            Descrição do anúncio
          </Text>

          <TextInput
            className="flex-1 text-base font-redHatDisplayRegular text-primary"
            placeholder="ex.: Pelúcia Leãozinho com plush macio, cor marrom clássica, antialérgico e tamanho 25cm"
            returnKeyType="done"
            multiline
            value={fields.description}
            onChangeText={(text: string) =>
              setFields({ ...fields, description: text })
            }
          />
        </View>

        <Text className="text-base font-redHatDisplayRegular text-primary/75 ml-4">
          {fields.description.length} de 350
        </Text>
      </View>

      <View className="flex-col items-start gap-y-4">
        <Text className="text-lg font-redHatDisplaySemiBold text-primary">
          Selecione a condição de uso do seu anúncio
        </Text>

        <View className="flex-col gap-y-4 w-full">
          <TouchableOpacity
            className="flex-row items-center justify-between w-full"
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, isNew: true })}
          >
            <Text className="text-lg font-redHatDisplayRegular text-secondary">
              Novo
            </Text>

            {fields.isNew ? (
              <View className="items-center justify-center w-6 h-6 border border-highlight rounded-full">
                <View className="w-4 h-4 bg-highlight rounded-full" />
              </View>
            ) : (
              <View className="w-6 h-6 border border-highlight rounded-full" />
            )}
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-highlight/50" />

          <TouchableOpacity
            className="flex-row items-center justify-between w-full"
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, isNew: false })}
          >
            <Text className="text-lg font-redHatDisplayRegular text-secondary">
              Usado
            </Text>

            {!fields.isNew ? (
              <View className="items-center justify-center w-6 h-6 border border-highlight rounded-full">
                <View className="w-4 h-4 bg-highlight rounded-full" />
              </View>
            ) : (
              <View className="w-6 h-6 border border-highlight rounded-full" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-col items-start gap-y-4">
        <Text className="text-lg font-redHatDisplaySemiBold text-primary">
          Selecione a faixa etária do seu anúncio
        </Text>

        <View className="flex-col gap-y-4 w-full">
          {[
            { name: "0 a 1 ano", value: EAgeRange.ZERO_A_UM },
            { name: "1 a 3 anos", value: EAgeRange.UM_A_TRES },
            { name: "3 a 6 anos", value: EAgeRange.TRES_A_SEIS },
            { name: "6 a 12 anos", value: EAgeRange.SEIS_A_DOZE },
            { name: "12 ou mais anos", value: EAgeRange.DOZE_OU_MAIS },
          ].map((item, index) => (
            <Fragment key={index}>
              <TouchableOpacity
                className="flex-row items-center justify-between w-full"
                activeOpacity={0.85}
                onPress={() => setFields({ ...fields, ageGroup: item.value })}
              >
                <Text className="text-lg font-redHatDisplayRegular text-secondary">
                  {item.name}
                </Text>

                {fields.ageGroup === item.value ? (
                  <View className="items-center justify-center w-6 h-6 border border-highlight rounded-full">
                    <View className="w-4 h-4 bg-highlight rounded-full" />
                  </View>
                ) : (
                  <View className="w-6 h-6 border border-highlight rounded-full" />
                )}
              </TouchableOpacity>

              {index !== 4 && (
                <View className="w-full h-[1px] bg-highlight/50" />
              )}
            </Fragment>
          ))}
        </View>
      </View>

      <TouchableOpacity
        className="flex-row items-center justify-center w-full h-16 bg-highlight rounded-xl"
        activeOpacity={0.85}
        onPress={handleNavigateToCategories}
      >
        <Text className="text-lg font-redHatDisplaySemiBold text-backgroundPrimary">
          Continuar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Main;
