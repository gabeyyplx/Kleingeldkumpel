import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";

export default function AddTransactionScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Transaction</Text>
      <StatusBar style="auto" />
    </View>
  );
}
