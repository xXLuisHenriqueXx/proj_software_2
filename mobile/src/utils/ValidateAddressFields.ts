import { IFieldsAddress } from "@src/screens/Welcome/Address";
import { Alert } from "react-native";

export const validateAddressFields = (fields: IFieldsAddress) => {
  const streetTrimmed = fields.street.trim();
  const numberTrimmed = fields.number.trim() || "";
  const neighborhoodTrimmed = fields.neighborhood.trim();
  const cityTrimmed = fields.city.trim();
  const stateTrimmed = fields.state.trim();

  if (
    !streetTrimmed ||
    !numberTrimmed ||
    !neighborhoodTrimmed ||
    !cityTrimmed ||
    !stateTrimmed
  ) {
    Alert.alert("Aviso", "Preencha todos os campos");
    return null;
  }

  return {
    street: streetTrimmed,
    number: numberTrimmed,
    neighborhood: neighborhoodTrimmed,
    city: cityTrimmed,
    state: stateTrimmed,
  };
};
