import * as React from "react";
import {
  RecyclerViewBackedScrollViewBase,
  ScrollView,
  SectionList,
  TouchableNativeFeedback,
} from "react-native";
import styles from "./ItemScreen.styles.js";
import ItemList from "../../components/menu/item/ItemList";

import Collapsible from "react-native-collapsible";
import AddToOrderButton from "../../components/menu/item/AddToOrderButton";

import { MenuParamList } from "../../types";

import { Text, View } from "../../components/Themed";

import api from "../../api";
import { StackNavigationProp } from "@react-navigation/stack";

interface ItemScreenNavigationProp
  extends StackNavigationProp<MenuParamList, "ItemScreen"> {}

export interface Props {
  navigation: ItemScreenNavigationProp;
}

interface State {
  options: Array<Object>;
  values: Object;
}

class ItemScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: [],
      values: {},
    };
  }

  onOptionValueChange = (value, newId, oldId) => {
    const values = this.state.values;
    values[newId] = value;
    if (oldId) values[oldId] = 0;
    this.setState({ values });
  };

  async componentDidMount() {
    try {
      const values = {};
      const { data } = await api.menu.getItem(this.props.route.params.itemId);
      console.log("========================================data", data);
      for (const optionCategory of data) {
        for (const singleOption of optionCategory.options) {
          values[singleOption.option_id] = singleOption.default_value;
        }
      }
      this.setState({ values, options: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ItemList
          item={this.props.route.params.item}
          options={this.state.options}
          onOptionValueChange={this.onOptionValueChange}
          values={this.state.values}
        />
        <AddToOrderButton style={styles.addToOrderButton} />
      </View>
    );
  }
}

export default ItemScreen;
