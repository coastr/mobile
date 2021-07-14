import * as React from "react";
import { ScrollView, SectionList, TouchableNativeFeedback } from "react-native";
import styles from "./MenuScreen.styles.js";

import RestaurantInfo from "../../components/menu/RestaurantInfo";
import MenuList from "../../components/menu/MenuList";
import MenuCategory from "../../components/menu/MenuCategory";
import MenuItemButton from "../../components/menu/MenuItemButton";
import Collapsible from "react-native-collapsible";
import { BottomTabParamList, MenuParamList } from "../../types";

import { Text, View } from "../../components/Themed";

import api from "../../api";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

interface MenuScreenNavigationProp
  extends StackNavigationProp<MenuParamList, "MenuScreen"> {}
export interface Props {
  menu: Object;
  navigation: MenuScreenNavigationProp;
}

interface State {
  menu: Array<Object>;
}

class MenuScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await api.restaurant.getMenu(
        "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
      );

      this.setState({ menu: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("MenuScreen this.props", this.props);
    return (
      <View style={styles.container}>
        {/* <RestaurantInfo></RestaurantInfo> */}
        <MenuList menu={this.state.menu} navigation={this.props.navigation} />
        {/* <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {this.state.menu.map((cat) => {
            console.log("cat", cat);
            return <MenuCategory category={cat} key={cat.name}></MenuCategory>;
          })}
        </ScrollView> */}
      </View>
    );
  }
}

export default MenuScreen;
