import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";

export default function EditTransactionScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit Transaction</Text>
      <StatusBar style="auto" />
    </View>
  );
}
