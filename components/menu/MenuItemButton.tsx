import * as React from "react";
import { Pressable, Image } from "react-native";
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
    console.log("handleItemPress");
    this.props.setCurrentItem(this.props.item);
    this.props.navigation.navigate("ItemScreen");
  };

  render() {
    const { item } = this.props;
    return (
      <Pressable onPress={this.handleItemPress} style={styles.container}>
        <View style={{ flexDirection: "row", height: 100 }}>
          <View
            style={{ flex: 2, width: 100, height: 100, alignItems: "center" }}
          >
            <Image
              style={styles.image}
              source={require("../../assets/images/coldDrinks.png")}
            />
          </View>
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text style={styles.title}>{item.menuItemName}</Text>
            <Text numberOfLines={2} style={styles.description}>
              {item.description}
            </Text>
            <Text style={styles.price}>{`$${item.menuItemPrice.toFixed(
              2
            )}`}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentItem: (data: Object) => dispatch(setCurrentItem(data)),
});

export default connect(null, mapDispatchToProps)(MenuItemButton);
