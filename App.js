import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import DashboardScreen from "./Components/Screens/Dashboard";
import TransactionsScreen from "./Components/Screens/Transactions";
import SettingsScreen from "./Components/Screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#88c0d0",
        })}>
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name="pie-chart-outline" size={size} color={color} />
              );
            },
            tabBarActiveTintColor: "#88c0d0",
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="list-outline" size={size} color={color} />;
            },
            tabBarActiveTintColor: "#88c0d0",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
            },
            tabBarActiveTintColor: "#88c0d0",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
