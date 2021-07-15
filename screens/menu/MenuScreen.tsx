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

import { firebase } from "../../firebase/";

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
      console.log("about to call...");
      const { data } = await api.restaurant.getMenu(
        "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
      );

      this.setState({ menu: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuList menu={this.state.menu} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default MenuScreen;
