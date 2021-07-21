import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    // elevation: 4,
    borderRadius: 9,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 15,
    color: "#333333",
    backgroundColor: "#FFFFFF",
    marginBottom: 3,
    letterSpacing: -0.2,
  },
  description: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
    color: "#949494",
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
    letterSpacing: -0.3,
  },
  price: {
    fontFamily: "OpenSans-SemiBold",
    alignSelf: "flex-start",
    fontSize: 13,
    color: "#747474",
    backgroundColor: "#FFFFFF",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});
