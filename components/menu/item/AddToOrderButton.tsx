import * as React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styles from "./AddToOrderButton.styles.js";
import { Text, View } from "../../../components/Themed";

export default function AddToOrderButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.addToOrderText}>
          {!props.isEditing ? `add ${props.quantity} to` : "update"} order
        </Text>
        <Text style={styles.priceText}> ${props.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state) => ({
  order: state.order,
});
