import React, { useRef } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

import { IEditableFields, IFieldsAddress } from "../..";
import MaskedInput from "@src/components/MaskedInput";
import { CEP_MASK } from "@src/constants/Masks";

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

  const streetWidth = width * 0.7 - 28;
  const numberWidth = width * 0.3 - 28;
  const neighborhoodWidth = width * 0.6 - 28;
  const extraWidth = width * 0.4 - 28;
  const cityWidth = width * 0.8 - 28;
  const stateWidth = width * 0.2 - 28;

  return (
    <ScrollView
      className="w-full pt-12"
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

      <View className="w-full border border-dashed border-highlight" />

      <View className="flex-row items-center gap-x-4">
        <View className="flex-col" style={{ width: streetWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              Endereço*
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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

        <View className="flex-col" style={{ width: numberWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              Número*
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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

      <View className="flex-row items-center gap-x-4">
        <View className="flex-col" style={{ width: neighborhoodWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              Bairro*
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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

        <View className="flex-col" style={{ width: extraWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              Complemento
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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

      <View className="flex-row items-center gap-x-4">
        <View className="flex-col" style={{ width: cityWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              Cidade*
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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

        <View className="flex-col" style={{ width: stateWidth }}>
          <View className="relative flex-row items-center justify-center h-16 px-4 border border-highlight rounded-xl">
            <Text className="absolute -top-3 left-4 px-2 bg-backgroundPrimary text-sm font-redHatDisplayMedium text-highlight">
              UF*
            </Text>

            <TextInput
              className="flex-1 text-base font-redHatDisplayRegular text-primary"
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
