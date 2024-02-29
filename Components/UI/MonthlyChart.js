import * as React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { styles } from "../../src/style";

const chartData = [
  { text: "📅", value: Math.random() * 100, color: "#bf616a" },
  { text: "🛒", value: Math.random() * 100, color: "#d08770" },
  { text: "🚗", value: Math.random() * 100, color: "#ebcb8b" },
  { text: "🧘", value: Math.random() * 100, color: "#a3be8c" },
  { text: "💰", value: Math.random() * 100, color: "#b48ead" },
];

const totalExpenses = () => {
  return (
    <Text>
      {new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Math.random() * 1000)}
    </Text>
  );
};

export default function MonthlyChart() {
  return (
    <View style={styles.MonthlyChart}>
      <Text style={styles.headingSmall}>Expenses this month</Text>
      <PieChart
        data={chartData}
        centerLabelComponent={totalExpenses}
        donut
        showText
        focusOnPress
        radius={150}
      />
    </View>
  );
}
