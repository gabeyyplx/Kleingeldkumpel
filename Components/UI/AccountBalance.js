import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../../src/style";

export default function AccountBalance() {
  return (
    <View style={styles.balanceView}>
      <Text style={styles.headingSmall}>Current balance</Text>
      <Text style={styles.accountBalance}>{Math.random() * 1000} €</Text>
    </View>
  );
}
