import * as React from "react";
import { StyleSheet } from "react-native";
import styles from "./MenuItemButton.styles.js";

import { Text, View } from "../../components/Themed";

type MenuItemButtonProps = {
  item: {
    item_name: string;
    description: string;
  };
};

class MenuItemButton extends React.Component<MenuItemButtonProps> {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{item.item_name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  }
}

export default MenuItemButton;
