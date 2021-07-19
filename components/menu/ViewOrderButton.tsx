import * as React from "react";
import styles from "./ViewOrderButton.styles.js";
import { Text, View } from "../Themed";

import { TouchableOpacity } from "react-native";

class ViewOrderButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text>View Order</Text>
      </TouchableOpacity>
    );
  }
}

export default ViewOrderButton;
