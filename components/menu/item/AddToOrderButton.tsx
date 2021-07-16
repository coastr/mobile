import * as React from "react";
import { Pressable } from "react-native";
import styles from "./AddToOrderButton.styles.js";
import { Text, View } from "../../../components/Themed";

export default function AddToOrderButton(props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.addToOrderText}>add 1 to order</Text>
      <Text style={styles.priceText}>$3.00</Text>
    </Pressable>
  );
}
