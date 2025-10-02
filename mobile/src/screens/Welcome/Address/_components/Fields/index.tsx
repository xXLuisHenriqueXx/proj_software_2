import React, { useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "./styles";

import MaskedInput from "@src/components/MaskedInput";

import { IEditableFields } from "../..";
import { CEP_MASK } from "@src/constants/Masks";
import { IFieldsAddress } from "@src/common/Interfaces/Auth.interface";

interface IFieldsProps {
  cep: string;
  setCep: (cep: string) => void;
  fields: IFieldsAddress;
  setFields: (fields: IFieldsAddress) => void;
  editableFields: IEditableFields;
  onRegister: () => void;
}

const Fields = ({
  cep,
  setCep,
  fields,
  setFields,
  editableFields,
  onRegister,
}: IFieldsProps) => {
  const { width } = useWindowDimensions();

  const numberRef = useRef<any>();
  const neighborhoodRef = useRef<any>();
  const extraRef = useRef<any>();
  const cityRef = useRef<any>();
  const stateRef = useRef<any>();

  const streetWidth = width * 0.7 - 32;
  const numberWidth = width * 0.3 - 32;
  const neighborhoodWidth = width * 0.6 - 32;
  const extraWidth = width * 0.4 - 32;
  const cityWidth = width * 0.8 - 32;
  const stateWidth = width * 0.2 - 32;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ rowGap: 32, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <MaskedInput
        label="Cep"
        placeholder="00000-000"
        returnKeyType="done"
        value={cep}
        onChangeText={(masked, unmasked) => {
          setCep(unmasked);
        }}
        mask={CEP_MASK}
      />

      <View style={styles.line} />

      <View style={styles.containerInputGroup}>
        <View style={{ flexDirection: "column", width: streetWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Endereço*</Text>

            <TextInput
              style={styles.input}
              placeholder="Seu endereço"
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current?.focus()}
              blurOnSubmit={false}
              editable={editableFields.street}
              value={fields.street}
              onChangeText={(text: string) => {
                setFields({ ...fields, street: text });
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", width: numberWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Número*</Text>

            <TextInput
              style={styles.input}
              placeholder="000"
              returnKeyType="next"
              onSubmitEditing={() => neighborhoodRef.current?.focus()}
              blurOnSubmit={false}
              editable={editableFields.number}
              value={fields.number}
              onChangeText={(text: string) => {
                setFields({ ...fields, number: text });
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerInputGroup}>
        <View style={{ flexDirection: "column", width: neighborhoodWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Bairro*</Text>

            <TextInput
              style={styles.input}
              placeholder="Seu bairro"
              returnKeyType="next"
              onSubmitEditing={() => extraRef.current?.focus()}
              blurOnSubmit={false}
              editable={editableFields.neighborhood}
              value={fields.neighborhood}
              onChangeText={(text: string) => {
                setFields({ ...fields, neighborhood: text });
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", width: extraWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Complemento</Text>

            <TextInput
              style={styles.input}
              placeholder="Opcional"
              returnKeyType="next"
              onSubmitEditing={() => cityRef.current?.focus()}
              blurOnSubmit={false}
              editable={editableFields.extra}
              value={fields.extra}
              onChangeText={(text: string) => {
                setFields({ ...fields, extra: text });
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerInputGroup}>
        <View style={{ flexDirection: "column", width: cityWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>Cidade*</Text>

            <TextInput
              style={styles.input}
              placeholder="Sua cidade"
              returnKeyType="next"
              onSubmitEditing={() => stateRef.current?.focus()}
              blurOnSubmit={false}
              editable={editableFields.city}
              value={fields.city}
              onChangeText={(text: string) => {
                setFields({ ...fields, city: text });
              }}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", width: stateWidth }}>
          <View style={styles.containerInput}>
            <Text style={styles.labelText}>UF*</Text>

            <TextInput
              style={styles.input}
              placeholder="XX"
              returnKeyType="next"
              onSubmitEditing={onRegister}
              blurOnSubmit={true}
              editable={editableFields.state}
              value={fields.state}
              onChangeText={(text: string) => {
                setFields({ ...fields, state: text });
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Fields;
