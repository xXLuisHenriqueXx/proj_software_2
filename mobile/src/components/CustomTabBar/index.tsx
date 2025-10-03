import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AnimatePresence, MotiText, MotiView } from "moti";
import { Plus } from "lucide-react-native";

import { buttonsData } from "@src/static/TabBarButtonsData";
import { CONTRAST_COLOR, HIGHLIGHT_COLOR } from "@src/constants/Colors";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const button = buttonsData.find(
          (b) => b.key === route.name.toLowerCase()
        );
        if (!button) return null;

        const Icon = button.icon;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={button.key}
            style={styles.buttonNav}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
          >
            <Icon size={24} color={HIGHLIGHT_COLOR} />
            <AnimatePresence initial={false}>
              {isFocused && (
                <MotiView
                  from={{ width: 0, opacity: 0 }}
                  animate={{ width: button.width, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "timing", duration: 300 }}
                  style={{ overflow: "hidden" }}
                >
                  <MotiText style={styles.navText} numberOfLines={1}>
                    {button.text}
                  </MotiText>
                </MotiView>
              )}
            </AnimatePresence>
          </TouchableOpacity>
        );
      })}

      <View style={styles.containerCreate}>
        <TouchableOpacity
          style={styles.buttonCreate}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("CreateStack")}
        >
          <Plus size={24} color={CONTRAST_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(CustomTabBar);
