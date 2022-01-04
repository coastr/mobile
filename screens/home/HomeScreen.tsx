import * as React from "react";
import {Image, TextInput, TouchableOpacity} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import styles from "./HomeScreen.styles.js";

import RestaurantInfo from "../../components/menu/RestaurantInfo";
import MenuList from "../../components/menu/MenuList";
import { BottomTabParamList, MenuParamList } from "../../types";

import { Text, View } from "../../components/Themed";
import QrScan from "./QRScanner";

import api from "../../api";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Navigation from "../../navigation/index.js";

interface HomeScreenNavigationProp
  extends StackNavigationProp<HomeParamList, "HomeScreen"> {}
export interface Props {
  menu: Object;
  navigation: HomeScreenNavigationProp;
}

interface State {
  menu: Array<Object>;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menu: [],
    };
  }

  // async componentDidMount() {
  //   try {
  //     const { data } = await api.restaurant.getMenu(
  //       "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a"
  //     );

  //     this.setState({ menu: data });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    console.log("HomeScreen this.props", this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {'Hello\t  '}
        <Image
        style={styles.ImageEmojiStyle}
        source={require('../../assets/images/wave.png')}
        />
        </Text>
        <Text style={styles.subtitle}>At a table?</Text>
        {/* BUTTON W QR CODE IMAGE*/}
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // console.log("item press");
          // this.props.navigation.navigate("QrScan", {});
        }}
        >
        <Image
        style={styles.ImageIconStyle}
        source={require('../../assets/images/QR.png')}
        />
          </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
