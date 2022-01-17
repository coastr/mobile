import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    // elevation: 4,
    borderRadius: 9,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 17,
    paddingBottom: 17,
  },
  button: {
    flexDirection: "row",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#454545",
    backgroundColor: "#FFFFFF",
  },
  description: {
    fontSize: 11,
    color: "#A3A3A3",
    backgroundColor: "#FFFFFF",
  },
  price: {
    fontSize: 13,
    color: "#747474",
    backgroundColor: "#FFFFFF",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
