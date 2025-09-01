import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AnimatePresence, MotiText, MotiView } from "moti";
import { buttonsData } from "@src/static/TabBarButtonsData";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View
      className="absolute bottom-6 left-6 right-6 flex-row items-center justify-between gap-x-2 p-6 bg-contrast rounded-3xl"
      style={{ elevation: 8, shadowColor: "#13131399" }}
    >
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
            className="flex-row items-center justify-center gap-x-2 p-3 bg-highlight/15 rounded-xl"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
          >
            <Icon size={24} color={"#316A41"} />
            <AnimatePresence initial={false}>
              {isFocused && (
                <MotiView
                  from={{ width: 0, opacity: 0 }}
                  animate={{ width: button.width, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "timing", duration: 300 }}
                  style={{ overflow: "hidden" }}
                >
                  <MotiText
                    className="text-lg font-redHatDisplaySemiBold text-highlight"
                    numberOfLines={1}
                  >
                    {button.text}
                  </MotiText>
                </MotiView>
              )}
            </AnimatePresence>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(CustomTabBar);
