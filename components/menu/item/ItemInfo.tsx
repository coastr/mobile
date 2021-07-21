import * as React from "react";
import styles from "./ItemInfo.styles.js";

import { Text, View } from "../../../components/Themed";

class ItemInfo extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.menuItemName}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }
}

export default ItemInfo;
