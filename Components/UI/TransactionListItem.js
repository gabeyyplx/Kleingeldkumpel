import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../../src/style";

export default function TransactionListItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemLabel}>{props.item.description}</Text>
      <Text style={styles.listItemValue}>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(props.item.value)}
      </Text>
    </View>
  );
}
