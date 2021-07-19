import * as React from "react";
import styles from "./ViewOrderItem.styles";
import { Text, View } from "../Themed";
import { FlatList } from "react-native";

export default function ViewOrderItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.quantityText}>{item.item.numberOfItems}</Text>
      <View>
        <Text style={styles.itemNameText}>{item.item.itemName}</Text>
        <FlatList
          data={item.item.options}
          keyExtractor={(item) => item.orderOptionId}
          renderItem={({ item: itemOption }) => {
            return (
              <Text style={styles.itemOptionText}>
                {`${itemOption.optionName} ${
                  itemOption.priceDelta ? `+[${itemOption.priceDelta}]` : ""
                }`}
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
}
