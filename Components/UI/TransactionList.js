import * as React from "react";
import { SectionList } from "react-native";
import TransactionListItem from "./TransactionListItem";
import ListSectionHeader from "./ListSectionHeader";
import { styles } from "../../src/style";

const data = [
  { key: 0, description: "Starbuxx", value: -3.5 },
  { key: 1, description: "League of Legends Skins", value: -66.6 },
  { key: 2, description: "Walmart", value: -74.1 },
  { key: 3, description: "Ocarina of Time (Mint)", value: -999.9 },
  { key: 4, description: "Arch Linux ISO", value: 0.0 },
  { key: 5, description: "Neetbucks", value: 1337.69 },
];

export default function TransactionList() {
  return (
    <SectionList
      style={styles.list}
      sections={[
        { title: "Current month", data: data },
        { title: "Last month", data: data },
        { title: "1 year ago", data: data },
      ]}
      renderItem={({ item }) => <TransactionListItem item={item} />}
      renderSectionHeader={({ section }) => (
        <ListSectionHeader section={section} />
      )}
    />
  );
}
