import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 30,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 17,
    paddingBottom: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  button: {
    flexDirection: "row",
    position: "relative",
    width: 55,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#D9D9D9",
  },

  buttonAllowedInput: {
    backgroundColor: "#353535",
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 15,
    backgroundColor: "transparent",
  },

  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: "100%",
    color: "#FFFFFF",
  },

  counterText: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 15,
    fontSize: 30,
    color: "#353535",
    fontWeight: "bold",
    position: "absolute",
  },
});
