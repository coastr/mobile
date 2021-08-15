import * as React from "react";
import styles from "./ViewOrderButton.styles.js";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../../Themed";

import { TouchableOpacity } from "react-native";

class ViewOrderButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(39, 61, 255, 0.92)', 'rgba(38, 151, 255, 0.92)']}
        style={styles.viewOrder}>
            <Text style={styles.text}>View Order</Text>
        </LinearGradient>
        </TouchableOpacity>
    );
  }
}

export default ViewOrderButton;
