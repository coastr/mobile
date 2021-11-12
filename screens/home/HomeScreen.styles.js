import { StyleSheet, Dimensions} from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 55 / 138);
const imageWidth = dimensions.width;

export default StyleSheet.create({
   button: {
    alignSelf: "center",
    width: 350,
    marginTop: 10,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 50 / 2,
    shadowColor: "#9E9E9E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .3,
    shadowRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebe8e8"
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    
    flex: 1,
    textAlign: "left",
    justifyContent: "center",
  },
  ImageIconStyle: {
    width: 228,
    height: 180
  },
  ImageEmojiStyle: {
    width: 100,
    height: 100,
    paddingLeft: 50
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
  scrollContainer: {
    // paddingBottom: 200,
  },
});
