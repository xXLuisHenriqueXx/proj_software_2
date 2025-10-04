import { EAgeRange } from "@src/common/Interfaces/Toy.interface";

export const getAgeGroup = (ageGroup: EAgeRange): string => {
  switch (ageGroup) {
    case EAgeRange.ZERO_TO_ONE:
      return "0 a 1 ano";
    case EAgeRange.ONE_TO_THREE:
      return "1 a 3 anos";
    case EAgeRange.THREE_TO_SIX:
      return "3 a 6 anos";
    case EAgeRange.SIX_TO_TWELVE:
      return "6 a 12 anos";
    case EAgeRange.TWELVE_OR_MORE:
      return "12 ou mais anos";
  }
};
