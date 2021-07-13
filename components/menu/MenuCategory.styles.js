import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    elevation: 4,
  },
  button: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",

    backgroundColor: "#FFFFFF",
    elevation: 4,
    borderRadius: 9,
    padding: 10,
    // justifyContent: "flex-start",
  },
  actions: {},
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
