import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FFFFFF",
    // elevation: 4,
    borderRadius: 9,
    padding: 10,
  },
  button: {
    flexDirection: "row",
    // justifyContent: "flex-start",
  },
  description: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
