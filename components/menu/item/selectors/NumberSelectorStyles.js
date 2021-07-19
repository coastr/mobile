import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginTop: 6,
  },
  list: {
    overflow: "visible",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },

  headerText: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  actions: {},
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 22,
    color: "#343434",
  },
  separator: {
    backgroundColor: "#F4F4F4",
    height: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFFFFF",
    elevation: 4,
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingRight: 50,
    paddingVertical: 18,
  },
});
