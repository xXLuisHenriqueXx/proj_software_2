import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Plus } from "lucide-react-native";

import { Button } from "../Button";

import { buttonsData } from "@src/static/TabBarButtonsData";
import { HIGHLIGHT_COLOR, PRIMARY_COLOR_50 } from "@src/constants/Colors";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const visibleRoutes = state.routes
    .map((route, routeIndex) => {
      const found = buttonsData.find((b) => b.key === route.name.toLowerCase());
      return { route, button: found, routeIndex };
    })
    .filter(({ button }) => !!button && button.key !== "create");

  const left = visibleRoutes.slice(0, 2);
  const right = visibleRoutes.slice(2, 4);

  const renderButton = ({ route, button, routeIndex }: any) => {
    const { options } = descriptors[route.key];
    const isFocused = state.index === routeIndex;
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
        key={route.key}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        style={styles.buttonNav}
      >
        <Icon
          size={28}
          color={isFocused ? HIGHLIGHT_COLOR : PRIMARY_COLOR_50}
          strokeWidth={isFocused ? 1.5 : 1}
        />
        <Text
          style={[
            styles.navText,
            { color: isFocused ? HIGHLIGHT_COLOR : PRIMARY_COLOR_50 },
          ]}
        >
          {button.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.duoGroup}>{left.map(renderButton)}</View>

      <View style={styles.createWrapper}>
        <Button.Square
          style={styles.createButton}
          icon={Plus}
          onPress={() => navigation.navigate("CreateProduct")}
        />
      </View>

      <View style={styles.duoGroup}>{right.map(renderButton)}</View>
    </View>
  );
};

export default memo(CustomTabBar);
