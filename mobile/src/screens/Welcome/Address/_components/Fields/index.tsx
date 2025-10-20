import React, { useRef } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { styles } from "./styles";

import { Input } from "@src/components/Input";

import { CEP_MASK } from "@src/constants/Masks";
import { IFieldsAddress } from "@src/common/Interfaces/Auth.interface";

interface IFieldsProps {
  cep: string;
  setCep: (cep: string) => void;
  fields: IFieldsAddress;
  setFields: (fields: IFieldsAddress) => void;
  onRegister: () => void;
}

const Fields = ({
  cep,
  setCep,
  fields,
  setFields,
  onRegister,
}: IFieldsProps) => {
  const { width } = useWindowDimensions();

  const numberRef = useRef<any>();
  const neighborhoodRef = useRef<any>();
  const extraRef = useRef<any>();
  const cityRef = useRef<any>();
  const stateRef = useRef<any>();

  const cepWidth = width - 48;
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
        width={cepWidth}
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
          value={fields.street}
          onChangeText={(text: string) => {
            setFields({ ...fields, street: text });
          }}
        />

        <Input.Normal
          label="Número*"
          width={numberWidth}
          ref={numberRef}
          placeholder="000"
          returnKeyType="next"
          onSubmitEditing={() => neighborhoodRef.current?.focus()}
          value={fields.number}
          onChangeText={(text: string) => {
            setFields({ ...fields, number: text });
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
          value={fields.neighborhood}
          onChangeText={(text: string) => {
            setFields({ ...fields, neighborhood: text });
          }}
        />

        <Input.Normal
          label="Complemento"
          width={extraWidth}
          ref={extraRef}
          placeholder="Opcional"
          returnKeyType="next"
          onSubmitEditing={() => cityRef.current?.focus()}
          value={fields.extra}
          onChangeText={(text: string) => {
            setFields({ ...fields, extra: text });
          }}
        />
      </View>

      <View style={styles.containerInputGroup}>
        <Input.Normal
          label="Cidade*"
          width={cityWidth}
          ref={cityRef}
          placeholder="Sua cidade"
          returnKeyType="next"
          onSubmitEditing={() => stateRef.current?.focus()}
          value={fields.city}
          onChangeText={(text: string) => {
            setFields({ ...fields, city: text });
          }}
        />

        <Input.Normal
          label="UF*"
          width={stateWidth}
          ref={stateRef}
          placeholder="XX"
          returnKeyType="next"
          onSubmitEditing={onRegister}
          value={fields.state}
          onChangeText={(text: string) => {
            setFields({ ...fields, state: text });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Fields;
