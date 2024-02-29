import * as React from "react";

import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../src/style";
import TransactionList from "../UI/TransactionList";

export default function ListTransactionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Transactions", { screen: "Add Transaction" })
        }>
        <Text>Add new transaction</Text>
      </Pressable>
      <TransactionList />
      <StatusBar style="auto" />
    </View>
  );
}
