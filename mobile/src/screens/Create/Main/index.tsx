import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { styles } from "./styles";
import { X } from "lucide-react-native";

import { Header } from "@src/components/Header";
import { Input } from "@src/components/Input";
import ConditionList from "./_components/ConditionList";
import AgeGroupList from "./_components/AgeGroupList";
import PictureSelector from "./_components/PictureSelector";
import Checkbox from "@src/components/Checkbox";
import ButtonNext from "./_components/ButtonNext";

import { EAgeRange } from "@src/common/Interfaces/Toy.interface";
import { formatPrice } from "@src/utils/FormatPrice";
import { useMain } from "@src/hooks/Create/useMain";
import { Masks } from "react-native-mask-input";

const Main = () => {
  const { fields, setFields, rootNavigation, handleNavigateToCategories } =
    useMain();
  const { width } = useWindowDimensions();

  const lineWidth = width / 2 - 48;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
    >
      <Header.Root padding={16}>
        <Header.Content title="Criar anúncio" />
        <Header.RightIcon icon={X} onPress={() => rootNavigation.goBack()} />
      </Header.Root>

      <PictureSelector
        setFieldPictures={(images) =>
          setFields({ ...fields, pictures: images })
        }
      />

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Título"
          width={width - 48}
          placeholder="ex: Brinquedo Pelúcia Leãozinho"
          returnKeyType="done"
          value={fields.name}
          onChangeText={(text: string) => setFields({ ...fields, name: text })}
        />

        <Text style={styles.infoText}>{fields.name.length} de 100</Text>
      </View>

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Descrição"
          width={width - 48}
          height={192}
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
          width={width - 48}
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
          <View style={[styles.line, { width: lineWidth }]} />

          <Text style={styles.orText}>ou</Text>

          <View style={[styles.line, { width: lineWidth }]} />
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

      <ButtonNext onPress={handleNavigateToCategories} />
    </ScrollView>
  );
};

export default Main;
