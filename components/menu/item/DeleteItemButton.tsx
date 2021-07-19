import * as React from "react";
import styles from "./DeleteItemButton.styles.js";
import { Button } from "react-native";
import { Text, View } from "../../../components/Themed";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

class DeleteItemButton extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <Text style={styles.buttonText}>remove item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeleteItemButton;
