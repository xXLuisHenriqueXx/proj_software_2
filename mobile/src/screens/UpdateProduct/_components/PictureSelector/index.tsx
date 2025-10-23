import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { ImagePlus, X } from "lucide-react-native";

import { HIGHLIGHT_COLOR, SECONDARY_COLOR } from "@src/constants/Colors";

interface IPictureSelectorProps {
  setFieldPictures: (images: string[]) => void;
}

const PictureSelector = ({ setFieldPictures }: IPictureSelectorProps) => {
  const { width } = useWindowDimensions();
  const [images, setImages] = useState<string[]>([]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 0.7,
      aspect: [4, 3],
      selectionLimit: 5,
      base64: true,
    });

    if (result.assets) {
      const images = result.assets.slice(0, 5);

      const formattedImages = images.map((image) => {
        const type = image.type || "jpeg";
        return `data:image/${type};base64,${image.base64}`;
      });

      setImages(images.map((image) => image.uri));
      setFieldPictures(formattedImages);
    }
  };

  const handleRemoveImage = (uri: string) => {
    setImages(images.filter((image) => image !== uri));
  };

  const bigImageWidth = (width - 48 - 16) / 2;
  const smallImageWidth = (width - 48 - 16 - 16) / 2 / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha até 5 das suas melhores fotos</Text>
      <TouchableOpacity
        style={styles.buttonPick}
        activeOpacity={0.85}
        onPress={pickImages}
      >
        {images.length === 0 ? (
          <>
            <View
              style={[
                styles.imagePlaceholder,
                { width: bigImageWidth, height: bigImageWidth },
              ]}
            >
              <ImagePlus size={24} color={HIGHLIGHT_COLOR} />
            </View>

            <View style={styles.containerSmallImages}>
              {[1, 2, 3, 4].map((item) => (
                <View
                  key={item}
                  style={[
                    styles.imagePlaceholder,
                    { width: smallImageWidth, height: smallImageWidth },
                  ]}
                >
                  <ImagePlus size={24} color={HIGHLIGHT_COLOR} />
                </View>
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={styles.containerImage}>
              <Image
                style={{
                  width: bigImageWidth,
                  height: bigImageWidth,
                }}
                source={{ uri: images[0] }}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.buttonRemove}
                activeOpacity={0.85}
                onPress={() => handleRemoveImage(images[0])}
              >
                <X size={20} color={SECONDARY_COLOR} />
              </TouchableOpacity>
            </View>

            <View style={styles.containerSmallImages}>
              {images.slice(1, 5).map((image, index) => (
                <View key={index} style={styles.containerImage}>
                  <Image
                    source={{ uri: image }}
                    style={{
                      width: smallImageWidth,
                      height: smallImageWidth,
                    }}
                  />
                  <TouchableOpacity
                    style={styles.buttonRemove}
                    activeOpacity={0.85}
                    onPress={() => handleRemoveImage(image)}
                  >
                    <X size={20} color={SECONDARY_COLOR} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PictureSelector;
