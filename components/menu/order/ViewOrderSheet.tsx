import * as React from "react";
import styles from "./ViewOrderSheet.styles.js";

import { Text, View } from "../../../components/Themed";
import {
  BottomSheetFlatList,
  BottomSheetSectionList,
} from "@gorhom/bottom-sheet";

import ViewOrderItem from "./ViewOrderItem";

class ViewOrderSheet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.order?.activeOrder?.length ? (
          <BottomSheetFlatList
            data={this.props.order.items}
            keyExtractor={(item) => item.orderItemId}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListHeaderComponent={() => (
              <View style={styles.restaurantContainer}>
                <Text style={styles.restaurantText}>Patriam</Text>
              </View>
            )}
            renderItem={(item) => (
              <ViewOrderItem item={item} navigation={this.props.navigation} />
            )}
          />
        ) : (
          <Text>Nothing in your cart!</Text>
        )}
      </View>
    );
  }
}

export default ViewOrderSheet;
