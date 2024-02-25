import * as React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { styles } from "../../src/style";

const chartData = [
  { text: "📅", value: Math.random() * 100 },
  { text: "🛒", value: Math.random() * 100 },
  { text: "🚗", value: Math.random() * 100 },
  { text: "🧘", value: Math.random() * 100 },
  { text: "💰", value: Math.random() * 100 },
];

export default function MonthlyChart() {
  return (
    <View style={styles.MonthlyChart}>
      <Text style={styles.headingSmall}>Expenses this month</Text>
      <PieChart data={chartData} showText={true} radius={150} />
    </View>
  );
}
