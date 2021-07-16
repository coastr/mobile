import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },

  appButtonContainer: {
    flexDirection: "row",
    position: "relative",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#ABABAB",
  },

  buttonText: {
    color: "#ABBBBB",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 13,
  },
});
