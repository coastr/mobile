import * as React from "react";
import styles from "./ViewOrderSheet.styles.js";

import { Text, View } from "../../components/Themed";
import { FlatList } from "react-native";
import ViewOrderItem from "./ViewOrderItem";

class ViewOrderSheet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.order.items}
          renderItem={(item) => <ViewOrderItem item={item} />}
        />
      </View>
    );
  }
}

export default ViewOrderSheet;
