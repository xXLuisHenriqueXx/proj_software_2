import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "@src/components/CustomTabBar";
import Account from "@src/screens/Account";
import Home from "@src/screens/Home";
import Search from "@src/screens/Search";

export type AppTabsParamList = {
  Home: undefined;
  Search: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<AppTabsParamList>();

const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        animation: "shift",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default AppTabs;
