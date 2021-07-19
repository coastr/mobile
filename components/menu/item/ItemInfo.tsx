import * as React from "react";
import { StyleSheet } from "react-native";
import styles from "./ItemInfo.styles.js";

import { Text, View } from "../../../components/Themed";

class ItemInfo extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.item_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }
}

export default ItemInfo;
