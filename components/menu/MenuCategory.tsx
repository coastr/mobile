import * as React from "react";
import {
  ScrollView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./MenuCategory.styles.js";
import Collapsible from "react-native-collapsible";

import MenuItemButton from "./MenuItemButton";

import { Text, View } from "../../components/Themed";

type MenuCategoryProps = {
  category: {
    name: string;
    items: Array<Object>;
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
        <TouchableNativeFeedback
          onPress={() => this.setState({ showItems: !showItems })}
        >
          <View style={styles.button}>
            <Text style={styles.name}>{category.name}</Text>
          </View>
        </TouchableNativeFeedback>
        <Collapsible collapsed={showItems}>
          {category.items.map((item) => {
            return <MenuItemButton item={item} key={item.position} />;
          })}
        </Collapsible>
      </View>
    );
  }
}

export default MenuCategory;
