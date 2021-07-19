import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    marginTop: 10,
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
    fontFamily: "Poppins-Bold",
    fontSize: 30,
    marginLeft: 15,
    marginBottom: -8,
  },
  addressText: {
    color: "#565656",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
  },
  hoursContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginLeft: 15,
  },
  todayText: {
    color: "#8C8C8C",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
  },
  hoursText: {
    color: "#565656",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    marginBottom: 6,
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
