import * as React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styles from "./AddToOrderButton.styles.js";
import { Text, View } from "../../../components/Themed";

export default function AddToOrderButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.addToOrderText}>add {props.quantity} to order</Text>
      <Text style={styles.priceText}>$3.00</Text>
    </TouchableOpacity>
  );
}
