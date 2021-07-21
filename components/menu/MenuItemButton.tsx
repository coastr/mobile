import * as React from "react";
import { Pressable } from "react-native";
import styles from "./MenuItemButton.styles.js";

import { setCurrentItem } from "../../redux/slices/orderSlice";
import { connect } from "react-redux";

import { Text, View } from "../../components/Themed";

interface Props {
  item: {
    item_name: string;
    description: string;
    item_id: string;
  };
  navigation: {
    navigate: any;
  };
}

class MenuItemButton extends React.Component<Props> {
  handleItemPress = () => {
    this.props.setCurrentItem(this.props.item);
    this.props.navigation.navigate("ItemScreen");
  };

  render() {
    const { item } = this.props;
    return (
      <Pressable style={styles.container} onPress={this.handleItemPress}>
        <View>
          <Text style={styles.title}>{item.menuItemName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{`$${item.menuItemPrice.toFixed(
            2
          )}`}</Text>
        </View>
      </Pressable>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentItem: (data: Object) => dispatch(setCurrentItem(data)),
});

export default connect(null, mapDispatchToProps)(MenuItemButton);
