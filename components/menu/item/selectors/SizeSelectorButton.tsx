import * as React from "react";
import styles from "./SizeSelectorButton.styles.js";
import { Pressable } from "react-native";
import { Text, View } from "../../../../components/Themed";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
//import { RadioButtons } from 'react-native-radio-buttons';

class SizeSelectorButton extends React.Component {
  render() {
    const { item, option } = this.props;
    console.log("======= item", item);
    console.log("======= option", option);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.appButtonContainer}></TouchableOpacity>
        <Text style={styles.text}>{`${option.option_name[0]} $${
          item.price + option.price_delta
        }`}</Text>
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
    );
  }
}

export default SizeSelectorButton;
