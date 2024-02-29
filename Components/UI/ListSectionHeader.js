import * as React from "react";
import { Text, View } from "react-native";
import { styles } from "../../src/style";

export default function ListSectionHeader(props) {
  return <Text style={styles.listSectionHeader}>{props.section.title}</Text>;
}
