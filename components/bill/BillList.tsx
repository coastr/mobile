import * as React from "react";
import { ScrollView, FlatList, TouchableNativeFeedback } from "react-native";
import styles from "./MenuList.styles.js";

import MenuCategory from "./MenuCategory";
import MenuItemButton from "./MenuItemButton";
import RestaurantInfo from "./RestaurantInfo";
import Collapsible from "react-native-collapsible";

import { Text, View } from "../../components/Themed";

interface Props {
  bill: Array<Object>;
  navigation: Object;
}

class BillList extends React.Component<Props> {
  render() {
    return (
      <FlatList
        data={this.props.bill}
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
