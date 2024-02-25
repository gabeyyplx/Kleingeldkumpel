import * as React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";
import AccountBalance from "../UI/AccountBalance";
import MonthlyChart from "../UI/MonthlyChart";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <AccountBalance />
      <MonthlyChart />
      <StatusBar style="auto" />
    </View>
  );
}
