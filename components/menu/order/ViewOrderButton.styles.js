import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    padding: 20,
    zIndex: 100,
  },
  viewOrder: {
    marginLeft: 10,
    marginRight: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    flex: 4,
  },
  viewMenu: {
    marginRight: 10,
    marginLeft: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: "center",
    flex: 2,
  },
  text: {
    fontFamily: "Poppins-BoldItalic",
    fontSize: 16,
    color: "#ffffff",
  },
});
