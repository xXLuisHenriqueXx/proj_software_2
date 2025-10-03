import React, { Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check } from "lucide-react-native";

import { EAgeRange } from "@src/common/Interfaces/Toy.interface";
import { CONTRAST_COLOR } from "@src/constants/Colors";

interface IAgeGroupListProps {
  ageGroup: EAgeRange;
  setFieldAgeGroup: (ageGroup: EAgeRange) => void;
}

const AgeGroupList = ({ ageGroup, setFieldAgeGroup }: IAgeGroupListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a faixa etária do seu anúncio</Text>

      <View style={styles.containerContent}>
        {[
          { name: "0 a 1 ano", value: EAgeRange.ZERO_TO_ONE },
          { name: "1 a 3 anos", value: EAgeRange.ONE_TO_THREE },
          { name: "3 a 6 anos", value: EAgeRange.THREE_TO_SIX },
          { name: "6 a 12 anos", value: EAgeRange.SIX_TO_TWELVE },
          { name: "12 ou mais anos", value: EAgeRange.TWELVE_OR_MORE },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            activeOpacity={0.85}
            onPress={() => setFieldAgeGroup(item.value)}
          >
            {ageGroup === item.value ? (
              <View style={styles.containerCheckbox}>
                <View style={styles.checkbox}>
                  <Check size={12} color={CONTRAST_COLOR} />
                </View>
              </View>
            ) : (
              <View style={styles.containerCheckbox} />
            )}

            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AgeGroupList;
