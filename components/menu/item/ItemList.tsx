import * as React from "react";
import { ScrollView, FlatList, TouchableNativeFeedback } from "react-native";
import styles from "./ItemList.styles.js";

import SizeSelector from "./selectors/SizeSelector";
import NumberSelector from "./selectors/NumberSelector";

import ItemInfo from "./ItemInfo";
import Collapsible from "react-native-collapsible";

import { Text, View } from "../../../components/Themed";

interface Props {
  options: Array<Object>;
  navigation: Object;
}

class ItemList extends React.Component<Props> {
  render() {
    return (
      <FlatList
        data={this.props.options}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <ItemInfo item={this.props.item} />}
        renderItem={(optionCategory) => {
          console.log("optionCategory", optionCategory);

          switch (optionCategory.item.selectorType) {
            case "size":
              return (
                <SizeSelector
                  item={this.props.item}
                  options={optionCategory.item.options}
                  navigation={this.props.navigation}
                />
              );
              break;

            case "number":
              return (
                <NumberSelector
                  item={this.props.item}
                  options={optionCategory.item.options}
                  optionCategory={optionCategory.item}
                  navigation={this.props.navigation}
                />
              );
              break;
          }
        }}
      />
    );
  }
}

export default ItemList;
