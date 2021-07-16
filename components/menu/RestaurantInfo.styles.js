import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    // height: "109pt",
    // left: "11px",
    // top: "174px",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    // marginHorizontal: 1,

    // boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.35)",
    elevation: 4,
    borderRadius: 9,
    padding: 10,
  },
  info: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  nameText: {
    // fontFamily: "Poppins",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "700",

    // lineHeight: "46px",
    // letterSpacing: "0em",
    // textAlign: "left",
  },
  addressText: {
    color: "#565656",
    fontSize: 17,
  },
  hoursContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },
  todayText: {
    color: "#8C8C8C",
  },
  hoursText: {
    color: "#565656",
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
