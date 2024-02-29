import { StyleSheet } from "react-native";

const background = "#ffffff";
const backgroundAccent = "#ECEFF4";
const fontColor = "#2e3440";
const buttonColor = "#88c0d0";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: "center",
    justifyContent: "center",
    color: fontColor,
  },

  balanceView: {
    marginBottom: 64,
  },

  headingSmall: {
    textAlign: "center",
    letterSpacing: 2,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 16,
  },

  accountBalance: {
    fontSize: 32,
    textAlign: "center",
  },

  button: {
    backgroundColor: buttonColor,
    color: fontColor,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
});
