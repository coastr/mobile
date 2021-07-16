import * as React from "react";
import { ScrollView, FlatList, TouchableNativeFeedback } from "react-native";
import styles from "./MenuList.styles.js";

import MenuCategory from "./MenuCategory";
import MenuItemButton from "./MenuItemButton";
import RestaurantInfo from "./RestaurantInfo";
import Collapsible from "react-native-collapsible";

import { Text, View } from "../../components/Themed";

interface Props {
  menu: Array<Object>;
  navigation: Object;
}

class MenuList extends React.Component<Props> {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.menu}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={RestaurantInfo}
        renderItem={({ item }) => {
          console.log("item", item);
          return (
            <MenuCategory category={item} navigation={this.props.navigation} />
          );
        }}
      />
    );
  }
}

export default MenuList;
