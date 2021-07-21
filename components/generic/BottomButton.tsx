import * as React from "react";
import { Pressable, TouchableOpacity } from "react-native";
import styles from "./BottomButton.styles.js";

export default function BottomButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}
