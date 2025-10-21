import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Masks } from "react-native-mask-input";
import Toast from "react-native-toast-message";
import { X } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";
import ConditionList from "./_components/ConditionList";
import AgeGroupList from "./_components/AgeGroupList";
import PictureSelector from "./_components/PictureSelector";
import Checkbox from "@src/components/Checkbox";
import Categories from "./_components/Categories";

import {
  EAgeRange,
  EToyType,
  IToyCreate,
  IToyCreateFields,
} from "@src/common/Interfaces/Toy.interface";
import { formatPrice } from "@src/utils/FormatPrice";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { toyService } from "@src/services/ToyService";

const CreateProduct = () => {
  const { appNavigation } = useAppNavigation();

  const [fields, setFields] = useState<IToyCreateFields>({
    name: "",
    description: "",
    price: "",
    isNew: true,
    canTrade: false,
    canLend: false,
    usageTime: "",
    type: [],
    ageGroup: EAgeRange.ZERO_TO_ONE,
    pictures: [],
    discount: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreate = async () => {
    setLoading(true);

    try {
      const params: IToyCreate = {
        name: fields.name,
        description: fields.description,
        price: fields.canLend || fields.canTrade ? 0 : Number(fields.price),
        isNew: fields.isNew,
        canTrade: fields.canTrade,
        canLend: fields.canLend,
        usageTime: 1,
        type: fields.type,
        ageGroup: fields.ageGroup,
        pictures: fields.pictures,
        discount: 0,
      };

      await toyService.create(params);

      appNavigation.replace("AppTabs");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Erro ao criar o produto",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCategory = (category: EToyType) => {
    if (fields.type.includes(category)) {
      setFields({
        ...fields,
        type: fields.type.filter((item) => item !== category),
      });
    } else {
      setFields({ ...fields, type: [...fields.type, category] });
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
    >
      <Header.Root padding={16}>
        <Header.Content title="Criar anúncio" />
        <Header.RightIcon icon={X} onPress={() => appNavigation.goBack()} />
      </Header.Root>

      <PictureSelector
        setFieldPictures={(images) =>
          setFields({ ...fields, pictures: images })
        }
      />

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Título"
          placeholder="ex: Brinquedo Pelúcia Leãozinho"
          returnKeyType="done"
          value={fields.name}
          onChangeText={(text: string) => setFields({ ...fields, name: text })}
        />

        <Text style={styles.infoText}>{fields.name.length} de 100</Text>
      </View>

      <View style={styles.containerInputGroup}>
        <Input.TextArea
          label="Descrição"
          multiline
          placeholder="ex.: Pelúcia Leãozinho com plush macio, cor marrom clássica, antialérgico e tamanho 25cm"
          returnKeyType="done"
          value={fields.description}
          onChangeText={(text: string) =>
            setFields({ ...fields, description: text })
          }
        />

        <Text style={styles.infoText}>{fields.description.length} de 350</Text>
      </View>

      <View style={styles.containerSelectGroup}>
        <Input.Masked
          label="Valor"
          mask={Masks.BRL_CURRENCY}
          placeholder="R$ XX,XX"
          returnKeyType="done"
          value={fields.canLend || fields.canTrade ? "R$ 0,00" : fields.price}
          onChangeText={(masked, _) => {
            setFields({ ...fields, price: formatPrice(masked) });
          }}
          editable={!fields.canLend && !fields.canTrade}
        />

        <View style={styles.containerOr}>
          <View style={styles.line} />

          <Text style={styles.orText}>OU</Text>

          <View style={styles.line} />
        </View>

        <View style={styles.containerCheckboxes}>
          <TouchableOpacity
            style={styles.containerCheckbox}
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, canLend: !fields.canLend })}
          >
            <View style={styles.containerCheckboxText}>
              <Text style={styles.checkboxTitle}>
                Disponibilizar para doação
              </Text>
              <Text style={styles.checkboxSubtitle}>
                Seu produto será gratuito
              </Text>
            </View>

            <Checkbox checked={fields.canLend} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.containerCheckbox}
            activeOpacity={0.85}
            onPress={() => setFields({ ...fields, canTrade: !fields.canTrade })}
          >
            <View style={styles.containerCheckboxText}>
              <Text style={styles.checkboxTitle}>Aceitar trocas</Text>
              <Text style={styles.checkboxSubtitle}>
                Seu produto será gratuito
              </Text>
            </View>

            <Checkbox checked={fields.canTrade} />
          </TouchableOpacity>
        </View>
      </View>

      <ConditionList
        isNew={fields.isNew}
        onPressTrue={() => setFields({ ...fields, isNew: true })}
        onPressFalse={() => setFields({ ...fields, isNew: false })}
      />

      <AgeGroupList
        ageGroup={fields.ageGroup}
        setFieldAgeGroup={(ageGroup: EAgeRange) =>
          setFields({ ...fields, ageGroup })
        }
      />

      <Categories categories={fields.type} onSelect={handleSelectCategory} />

      <Button.Primary
        text="Criar anúncio"
        loading={loading}
        onPress={handleCreate}
      />
    </ScrollView>
  );
};

export default CreateProduct;
