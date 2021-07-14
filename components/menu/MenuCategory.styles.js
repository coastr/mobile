import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    elevation: 4,
    backgroundColor: "#FFFFFF",
    marginTop: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#FFFFFF",
    elevation: 4,
    borderRadius: 9,
    paddingHorizontal: 22,
    paddingVertical: 18,
    // justifyContent: "flex-start",
  },
  actions: {},
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 22,
    color: "#343434",
  },
  separator: {
    backgroundColor: "#F4F4F4",
    height: 1,
  },
});
