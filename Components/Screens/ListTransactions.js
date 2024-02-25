import * as React from "react";

import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";

export default function ListTransactionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Add new transaction"
        onPress={() =>
          navigation.navigate("Transactions", { screen: "Add Transaction" })
        }></Button>
      <StatusBar style="auto" />
    </View>
  );
}
