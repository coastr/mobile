import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
  },
  billContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  billItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
  billItemPrice: {
    fontSize: 20,
    textAlign: "right",
  },
  billItemQuant: {
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2B5DE7",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  subtitle: {
    marginLeft: 40,
    fontSize: 48,
    fontWeight: "bold",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});
