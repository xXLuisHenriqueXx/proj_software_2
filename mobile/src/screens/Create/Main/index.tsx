import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks } from "react-native-mask-input";
import { X } from "lucide-react-native";

import ConditionList from "./_components/ConditionList";
import AgeGroupList from "./_components/AgeGroupList";
import PictureSelector from "./_components/PictureSelector";

import {
  EAgeRange,
  IFieldsToyCreateMain,
} from "@src/common/Interfaces/Toy.interface";
import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { PropsCreateStack } from "@src/routes/stacks/CreateStack";
import { SECONDARY_COLOR } from "@src/constants/Colors";

const Main = () => {
  const rootNavigation = useNavigation<PropsAppStack>();
  const createNavigation = useNavigation<PropsCreateStack>();
  const [fields, setFields] = useState<IFieldsToyCreateMain>({
    name: "",
    description: "",
    price: "",
    isNew: false,
    canTrade: false,
    canLend: false,
    usageTime: "",
    ageGroup: EAgeRange.ZERO_TO_ONE,
    pictures: [],
    discount: "",
  });

  const handleNavigateToCategories = () => {
    createNavigation.navigate("Categories", { fields });
  };

  const formatPrice = useCallback(
    (value: string) => {
      return value.replace(".", "").replace(",", ".").split(" ")[1];
    },
    [fields.price]
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        rowGap: 48,
        paddingBottom: 124,
        paddingHorizontal: 24,
      }}
    >
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Criar anúncio</Text>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => rootNavigation.goBack()}
        >
          <X size={20} color={SECONDARY_COLOR} />
        </TouchableOpacity>
      </View>

      <PictureSelector
        setFieldPictures={(images) =>
          setFields({ ...fields, pictures: images })
        }
      />

      <View style={styles.containerInputGroup}>
        <View style={styles.containerInput}>
          <Text style={styles.labelText}>Título do anúncio</Text>

          <TextInput
            style={styles.input}
            placeholder="ex: Brinquedo Pelúcia Leãozinho"
            returnKeyType="done"
            value={fields.name}
            onChangeText={(text: string) =>
              setFields({ ...fields, name: text })
            }
          />
        </View>

        <Text style={styles.infoText}>{fields.name.length} de 100</Text>
      </View>

      <View style={styles.containerSelectGroup}>
        <View style={styles.containerFree}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Valor do anúncio</Text>

            {fields.canLend || fields.canTrade ? (
              <Text style={styles.input}>Gratuito</Text>
            ) : (
              <MaskInput
                mask={Masks.BRL_CURRENCY}
                style={styles.input}
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

        <View style={styles.containerOr}>
          <View style={styles.line} />

          <Text style={styles.orText}>ou</Text>

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

            {fields.canLend ? (
              <View style={styles.checkboxActive}>
                <View style={styles.checkboxContent} />
              </View>
            ) : (
              <View style={styles.checkboxInactive} />
            )}
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

            {fields.canTrade ? (
              <View style={styles.checkboxActive}>
                <View style={styles.checkboxContent} />
              </View>
            ) : (
              <View style={styles.checkboxInactive} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerInputGroup}>
        <View style={styles.containerTextArea}>
          <Text style={styles.labelText}>Descrição do anúncio</Text>

          <TextInput
            style={styles.input}
            placeholder="ex.: Pelúcia Leãozinho com plush macio, cor marrom clássica, antialérgico e tamanho 25cm"
            returnKeyType="done"
            multiline
            value={fields.description}
            onChangeText={(text: string) =>
              setFields({ ...fields, description: text })
            }
          />
        </View>

        <Text style={styles.infoText}>{fields.description.length} de 350</Text>
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

      <TouchableOpacity
        style={styles.buttonNext}
        activeOpacity={0.85}
        onPress={handleNavigateToCategories}
      >
        <Text style={styles.nextText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Main;
