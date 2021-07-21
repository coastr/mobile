import * as React from "react";
import styles from "./ViewOrderButton.styles.js";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../Themed";

import { TouchableOpacity } from "react-native";

class ViewOrderButton extends React.Component {
  render() {
    return (
      <View style={{flexDirection:"row", height:68, backgroundColor:'rgba(0, 0, 0, 0)'}}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(39, 61, 255, 0.92)', 'rgba(38, 151, 255, 0.92)']}
        style={styles.viewOrder}>
          <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
            <Text style={styles.text}>View Order</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(39, 61, 255, 0.92)', 'rgba(38, 151, 255, 0.92)']}
        style={styles.viewMenu}>
          <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
            <Text style={styles.text}>Menu</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

export default ViewOrderButton;
