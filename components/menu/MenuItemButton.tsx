import * as React from "react";
import { Pressable, Image } from "react-native";
import styles from "./MenuItemButton.styles.js";

import { Text, View} from "../../components/Themed";

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
  render() {
    const { item } = this.props;
    return (
      <Pressable
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate("ItemScreen", {
            itemId: item.item_id,
            item,
          });
        }}
      >
        <View style={{flexDirection:"row", height:100}}>
          <View style={{flex:2, width:100, height:100, alignItems: "center"}}>
            <Image style={styles.image} source={require('../../assets/images/coldDrinks.png')}/>
          </View>
          <View style={{flex:4, justifyContent:'center'}}>
            <Text style={styles.title}>{item.item_name}</Text>
            <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
          </View>

        </View>

      </Pressable>
    );
  }
}

export default MenuItemButton;
