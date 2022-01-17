import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    // height: "109pt",
    // left: "11px",
    // top: "174px",
    backgroundColor: "#FFFFFF",

    // boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.35)",
    elevation: 4,
    borderRadius: 9,
    padding: 10,
  },
  info: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  actions: {},
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
