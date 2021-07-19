import * as React from "react";
import { FlatList, TouchableHighlight, Pressable } from "react-native";
import styles from "./MenuCategory.styles.js";
import Collapsible from "react-native-collapsible";

import MenuItemButton from "./MenuItemButton";

import { Text, View } from "../../components/Themed";

type MenuCategoryProps = {
  category: {
    key: string;
    data: Array<Object>;
  };
};

type MenuCategoryState = {
  showItems: boolean;
};

class MenuCategory extends React.Component<
  MenuCategoryProps,
  MenuCategoryState
> {
  constructor(props: MenuCategoryProps) {
    super(props);

    this.state = {
      showItems: false,
    };
  }
  render() {
    const { category } = this.props;
    const { showItems } = this.state;

    return (
      <View style={styles.container}>
        <Pressable onPress={() => this.setState({ showItems: !showItems })}>
          <View style={styles.button}>
            <Text style={styles.name}>{category.name}</Text>
          </View>
        </Pressable>
        <Collapsible collapsed={!showItems}>
          <FlatList
            style={styles.list}
            data={category.items}
            keyExtractor={(item) => item.position.toString()}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => {
              return (
                <MenuItemButton
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

export default MenuCategory;
