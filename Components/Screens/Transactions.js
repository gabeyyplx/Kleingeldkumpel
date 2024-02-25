import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListTransactionsScreen from "./ListTransactions";
import EditTransactionScreen from "./EditTransaction";
import AddTransactionScreen from "./AddTransaction";

const Stack = createStackNavigator();

export default function TransactionsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transaction List"
        component={ListTransactionsScreen}
        options={{ title: "Transactions" }}
      />
      <Stack.Screen name="Add Transaction" component={AddTransactionScreen} />
      <Stack.Screen name="Edit Transaction" component={EditTransactionScreen} />
    </Stack.Navigator>
  );
}
