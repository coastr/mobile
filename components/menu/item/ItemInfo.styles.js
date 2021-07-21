import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 17,
    paddingBottom: 17,
  },

  info: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#888888",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
