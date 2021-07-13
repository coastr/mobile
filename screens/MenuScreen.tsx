import * as React from "react";
import {
  ScrollView,
  SectionList,
  TouchableNativeFeedback,
  StickyHeaderComponent,
} from "react-native";
import styles from "./MenuScreen.styles.js";

import RestaurantInfo from "../components/menu/RestaurantInfo";
import MenuCategory from "../components/menu/MenuCategory";
import MenuItemButton from "../components/menu/MenuItemButton";
import Collapsible from "react-native-collapsible";

import { Text, View } from "../components/Themed";

import api from "../api";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

type MenuScreenProps = {
  menu: Object;
};

type MenuScreenState = {
  menu: Array<Object>;
};

class MenuScreen extends React.Component<MenuScreenProps, MenuScreenState> {
  // function MenuScreen({navigation}) {
  constructor(props: MenuScreenProps) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  async componentDidMount() {
    console.log("before did mount");
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
    console.log("this.state.menu", this.state.menu);
    console.log("this.state.menu.length", this.state.menu.length);
    return (
      <View style={styles.container}>
        <RestaurantInfo></RestaurantInfo>

        {/* <SectionList
          sections={this.state.menu}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Collapsible collapsed={showItems}>
              {category.items.map((item) => {
                return <MenuItemButton item={item} key={item.position} />;
              })}
            </Collapsible>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <TouchableNativeFeedback
              activeOpacity={0.1}
              underlayColor="#000000"
              onPress={() => this.setState({ showItems: !showItems })}
            >
              <View style={styles.button}>
                <Text style={styles.name}>{category.name}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
        /> */}
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {this.state.menu.map((cat) => {
            console.log("cat", cat);
            return <MenuCategory category={cat} key={cat.name}></MenuCategory>;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default MenuScreen;
