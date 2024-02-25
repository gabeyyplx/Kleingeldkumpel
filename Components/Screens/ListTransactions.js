import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";

export default function ListTransactionsScreen() {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
      <StatusBar style="auto" />
    </View>
  );
}
