import { useRef } from "react";
import { ScrollView, TextInput, useWindowDimensions, View } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";

import { CEP_MASK } from "@src/constants/Masks";
import { IFieldsAddress } from "@src/common/Interfaces/Auth.interface";

interface IFieldsProps {
  cep: string;
  setCep: (cep: string) => void;
  city: string;
  state: string;
  fields: IFieldsAddress;
  setFields: (fields: IFieldsAddress) => void;
}

const Fields = ({
  cep,
  setCep,
  city,
  state,
  fields,
  setFields,
}: IFieldsProps) => {
  const { width } = useWindowDimensions();

  const numberRef = useRef<TextInput>();
  const neighborhoodRef = useRef<TextInput>();
  const extraRef = useRef<TextInput>();
  const cityRef = useRef<TextInput>();

  const streetWidth = width * 0.7 - 28;
  const numberWidth = width * 0.3 - 28;
  const neighborhoodWidth = width * 0.6 - 28;
  const extraWidth = width * 0.4 - 28;
  const cityWidth = width * 0.7 - 28;
  const stateWidth = width * 0.3 - 28;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      showsVerticalScrollIndicator={false}
    >
      <Input.Masked
        label="Cep"
        placeholder="00000-000"
        returnKeyType="done"
        value={cep}
        onChangeText={(_, unmasked) => {
          setCep(unmasked);
        }}
        mask={CEP_MASK}
      />

      <View style={styles.line} />

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Endereço*"
          width={streetWidth}
          placeholder="Seu endereço"
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current?.focus()}
          value={fields.addressStreet}
          onChangeText={(text: string) => {
            setFields({ ...fields, addressStreet: text });
          }}
        />

        <Input.Normal
          label="Número*"
          width={numberWidth}
          ref={numberRef}
          placeholder="000"
          returnKeyType="next"
          onSubmitEditing={() => neighborhoodRef.current?.focus()}
          value={fields.addressNumber?.toString()}
          onChangeText={(text: string) => {
            setFields({ ...fields, addressNumber: Number(text) });
          }}
        />
      </View>

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Bairro*"
          width={neighborhoodWidth}
          ref={neighborhoodRef}
          placeholder="Seu bairro"
          returnKeyType="next"
          onSubmitEditing={() => extraRef.current?.focus()}
          value={fields.addressDistrict}
          onChangeText={(text: string) => {
            setFields({ ...fields, addressDistrict: text });
          }}
        />

        <Input.Normal
          label="Complemento"
          width={extraWidth}
          ref={extraRef}
          placeholder="Opcional"
          returnKeyType="next"
          onSubmitEditing={() => cityRef.current?.focus()}
          value={fields.addressDetail}
          onChangeText={(text: string) => {
            setFields({ ...fields, addressDetail: text });
          }}
        />
      </View>

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Cidade*"
          width={cityWidth}
          placeholder="Sua cidade"
          returnKeyType="next"
          value={city}
          editable={false}
        />

        <Input.Normal
          label="UF*"
          width={stateWidth}
          placeholder="XX"
          returnKeyType="next"
          value={state}
          editable={false}
        />
      </View>
    </ScrollView>
  );
};

export default Fields;
