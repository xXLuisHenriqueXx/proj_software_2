import React, { useRef } from "react";
import {
  ContainerField,
  ContainerFields,
  ContainerInput,
  GroupField,
  InputField,
  Label,
  Separator,
} from "./styles";
import { IEditableFields, IFieldsAddress } from "../..";
import { useWindowDimensions } from "react-native";
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

  const streetWidth = width * 0.7 - 24;
  const numberWidth = width * 0.3 - 24;
  const neighborhoodWidth = width * 0.6 - 24;
  const extraWidth = width * 0.4 - 24;
  const cityWidth = width * 0.8 - 24;
  const stateWidth = width * 0.2 - 24;

  return (
    <ContainerFields
      contentContainerStyle={{ rowGap: 32, paddingBottom: 82 }}
      showsVerticalScrollIndicator={false}
    >
      <MaskedInput
        label="Cep"
        placeholder="00000-000"
        returnKeyType="done"
        blurOnSubmit={true}
        value={cep}
        onChangeText={(masked, unmasked) => {
          setCep(unmasked);
        }}
        mask={CEP_MASK}
      />

      <Separator />

      <GroupField>
        <ContainerField style={{ width: streetWidth }}>
          <ContainerInput>
            <Label>Endereço*</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>

        <ContainerField style={{ width: numberWidth }}>
          <ContainerInput>
            <Label>Número*</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>
      </GroupField>

      <GroupField>
        <ContainerField style={{ width: neighborhoodWidth }}>
          <ContainerInput>
            <Label>Bairro*</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>

        <ContainerField style={{ width: extraWidth }}>
          <ContainerInput>
            <Label>Complemento</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>
      </GroupField>

      <GroupField>
        <ContainerField style={{ width: cityWidth }}>
          <ContainerInput>
            <Label>Cidade*</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>

        <ContainerField style={{ width: stateWidth }}>
          <ContainerInput>
            <Label>UF*</Label>
            <InputField
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
          </ContainerInput>
        </ContainerField>
      </GroupField>
    </ContainerFields>
  );
};

export default Fields;
