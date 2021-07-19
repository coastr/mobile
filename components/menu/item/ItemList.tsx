import * as React from "react";
import { FlatList } from "react-native";
import styles from "./ItemList.styles.js";

import SizeSelector from "./selectors/SizeSelector";
import NumberSelector from "./selectors/NumberSelector";
import QuantitySelector from "./selectors/QuantitySelector";
import DeleteItemButton from "./DeleteItemButton";

import ItemInfo from "./ItemInfo";

import { Text, View } from "../../../components/Themed";

interface Props {
  options: Array<Object>;
  navigation: Object;
  onOptionValueChange: (value: any, itemId: string, oldId: string) => void;
  onQuantityValueChange: (quantity: number) => void;
}

class ItemList extends React.Component<Props> {
  render() {
    return (
      <FlatList
        data={this.props.options}
        style={styles.list}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <>
            <ItemInfo item={this.props.item} />
            <View style={styles.separator} />
          </>
        )}
        ListFooterComponent={() => (
          <>
            <View style={styles.separator} />
            <QuantitySelector
              onQuantityValueChange={(quantity) =>
                this.props.onQuantityValueChange(quantity)
              }
              values={this.props.values}
            />
            <DeleteItemButton />
          </>
        )}
        renderItem={(optionCategory, index) => {
          switch (optionCategory.item.selectorType) {
            case "size":
              return (
                <SizeSelector
                  item={this.props.item}
                  options={optionCategory.item.options}
                  navigation={this.props.navigation}
                  onSizeSelected={(value, newId, oldId) =>
                    this.props.onOptionValueChange(value, newId, oldId)
                  }
                  values={this.props.values}
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
                  values={this.props.values}
                  onSizeSelected={(value, newId, oldId) =>
                    this.props.onOptionValueChange(value, newId, oldId)
                  }
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
