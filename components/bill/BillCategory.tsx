import * as React from "react";
import { FlatList, TouchableHighlight, Pressable } from "react-native";
import styles from "./BillCategory.styles.js";
import Collapsible from "react-native-collapsible";

import BillItemButton from "./BillItemButton";

import { Text, View } from "../../components/Themed";

type BillCategoryProps = {
  category: {
    key: string;
    data: Array<Object>;
  };
};

type BillCategoryState = {
  showItems: boolean;
};

class BillCategory extends React.Component<
  BillCategoryProps,
  BillCategoryState
> {
  constructor(props: BillCategoryProps) {
    super(props);

    this.state = {
      showItems: false,
    };
  }
  render() {
    const { category } = this.props;
    const { showItems } = this.state;

    console.log("category.data", category.data);
    return (
      <View style={styles.container}>
        <Pressable onPress={() => this.setState({ showItems: !showItems })}>
          <View style={styles.button}>
            <Text style={styles.name}>{category.name}</Text>
          </View>
        </Pressable>
        <Collapsible collapsed={!showItems}>
          <FlatList
            data={category.items}
            keyExtractor={(item) => item.position.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => {
              console.log("item", item);
              return (
                <BillItemButton
                  item={item}
                  navigation={this.props.navigation}
                />
              );
            }}
          />
          {/* {category.items.map((item) => {
            return <MenuItemButton item={item} key={item.position} />;
          })} */}
        </Collapsible>
      </View>
    );
  }
}

export default BillCategory;
