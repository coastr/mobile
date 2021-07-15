import * as React from "react";
import styles from "./SizeSelector.styles.js";
import { ScrollView, FlatList, TouchableNativeFeedback } from "react-native";

import { Text, View } from "../../../../components/Themed";
import NumberSelectorOption from "./NumberSelectorOption";

class NumberSelector extends React.Component {
  render() {
    const { options, item, optionCategory } = this.props;
    return (
      <FlatList
        data={this.props.options}
        keyExtractor={(item) => item.position.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text>{optionCategory.name} </Text>}
        renderItem={(option) => {
          return (
            <NumberSelectorOption
              item={item}
              option={option.item}
              navigation={this.props.navigation}
            />
          );
        }}
      />
    );
  }
}

export default NumberSelector;
