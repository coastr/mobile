import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 30,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 17,
    paddingBottom: 17,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  button: {
    // position: "relative",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
  },

  buttonAllowedInput: {
    backgroundColor: "#353535",
  },

  buttonText: {
    color: "#EEEEEE",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: "100%",
  },

  text: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "transparent",
  },

  counterText: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 15,
    fontSize: 15,
    color: "#353535",
    fontWeight: "bold",
    position: "absolute",
  },
});
