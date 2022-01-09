import { StyleSheet, Dimensions} from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 55 / 138);
const imageWidth = dimensions.width;

export default StyleSheet.create({
   previewStyle: {
       height: 700,
       width: 1000,
       display: "flex",
       justifyContent: "center"
   },
   camStyle: {
       display: "flex",
       justifyContent: "center",
       marginTop: -50
   },
   textStyle: {
       fontSize: 30,
       textAlign: "center",
       marginTop: -50
   }
});
