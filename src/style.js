import { StyleSheet } from "react-native";

const background = "#ffffff";
const backgroundAccent = "#ECEFF4";
const fontColor = "#2e3440";
const buttonColor = "#88c0d0";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 33,
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
    marginBottom: 32,
  },

  list: {
    flex: 1,
    width: "100%",
  },

  listSectionHeader: {
    backgroundColor: backgroundAccent,
    padding: 8,
    margin: 8,
    letterSpacing: 2,
    textTransform: "uppercase",
  },

  listItem: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    borderBottomColor: backgroundAccent,
    borderBottomWidth: 1,
    fontSize: 20,
  },

  listItemLabel: {
    fontSize: 16,
  },

  listItemValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
