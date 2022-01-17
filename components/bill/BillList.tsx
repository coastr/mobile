import * as React from "react";
import { ScrollView, FlatList, TouchableNativeFeedback } from "react-native";
import styles from "./BillList.styles.js";

import BillCategory from "./BillCategory";
import Info from "./BillInfo";

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
        ListHeaderComponent={Info}
        renderItem={({ item }) => {
          return (
            <BillCategory category={item} navigation={this.props.navigation} />
          );
        }}
      />
    );
  }
}

export default BillList;
