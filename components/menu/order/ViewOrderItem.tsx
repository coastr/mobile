import * as React from "react";
import styles from "./ViewOrderItem.styles";
import { Text, View } from "../../Themed";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { setCurrentItem } from "../../../redux/slices/orderSlice";
import { connect } from "react-redux";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

class ViewOrderItem extends React.Component {
  handleItemPress = () => {
    const { item, navigation } = this.props;
    this.props.setCurrentItem(item.item);
    this.props.navigation.navigate("ItemScreen");
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.handleItemPress}>
        <View style={styles.container}>
          <View style={styles.quantityAndOptionsContainer}>
            <Text style={styles.quantityText}>{item.item.numberOfItems}</Text>
            <View>
              <Text style={styles.itemNameText}>{item.item.menuItemName}</Text>
              <FlatList
                data={item.item.options}
                keyExtractor={(item) => item.orderOptionId}
                renderItem={({ item: itemOption }) => {
                  return (
                    <Text style={styles.itemOptionText}>
                      {`${itemOption.value} ${itemOption.optionName} ${
                        itemOption.priceDelta
                          ? `[+$${itemOption.priceDelta.toFixed(2)}]`
                          : ""
                      }`}
                    </Text>
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              ${item.item.orderItemPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentItem: (data: Object) => dispatch(setCurrentItem(data)),
});

export default connect(null, mapDispatchToProps)(ViewOrderItem);
