import { StyleSheet, Dimensions } from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 55 / 138);

export default StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    justifyContent: "center",
    paddingTop: imageHeight / 3
  },
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
  button: {
    backgroundColor: "#788eec",
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
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 60,
    textAlign: "left",
    paddingBottom: 100,
    fontWeight: "bold",
  },
  subtitle: {
    marginLeft: 40,
    fontSize: 48,
    fontWeight: "bold",
  },
});
