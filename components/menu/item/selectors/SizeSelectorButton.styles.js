import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  appButtonContainer: {
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    position: "relative",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#F5F5F5",
  },
  appButtonText: {},
  text: {
    color: "#3D3D3D",
    alignSelf: "center",
    textTransform: "uppercase",
    //fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
  },
});
