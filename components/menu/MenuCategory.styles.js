import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    // elevation: 4,
    backgroundColor: "#FFFFFF",
    marginTop: 6,
  },
  list: {
    overflow: "visible",
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
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    marginLeft: 0,
    color: "#343434",
  },
  separator: {
    backgroundColor: "#F4F4F4",
    height: 1,
  },
});
