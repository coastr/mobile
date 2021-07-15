import * as React from "react";
import { ScrollView, SectionList, TouchableNativeFeedback } from "react-native";
import styles from "./ItemScreen.styles.js";
import ItemList from "../../components/menu/item/ItemList";

import Collapsible from "react-native-collapsible";

import { MenuParamList } from "../../types";

import { Text, View } from "../../components/Themed";

import api from "../../api";
import { StackNavigationProp } from "@react-navigation/stack";

interface ItemScreenNavigationProp extends StackNavigationProp<MenuParamList, "ItemScreen"> {}

export interface Props {
  navigation: ItemScreenNavigationProp;
}

interface State {
  options: Array<Object>;
}

class ItemScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: [],
    };
  }

  onOptionValueChange = (value, index) => {
    const updatedOptions = this.state.options;
    updatedOptions[index] = {
      ...updatedOptions[index],
      value,
    };
    this.setState({ options: updatedOptions });
  };

  async componentDidMount() {
    console.log("before did mount");
    try {
      const { data } = await api.menu.getItem(this.props.route.params.itemId);

      const optionsWithValues = data.map((option) => {
        return {
          ...option,
          value: option ?? "",
        };
      });

      this.setState({ options: optionsWithValues });
      console.log("OPTIONS", data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log("ItemScreen this.props", this.props);
    return (
      <View style={styles.container}>
        <ItemList
          item={this.props.route.params.item}
          options={this.state.options}
          onOptionValueChange={this.onOptionValueChange}
        />
      </View>
    );
  }
}

export default ItemScreen;
