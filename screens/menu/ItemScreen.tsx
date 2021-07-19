import * as React from "react";
import styles from "./ItemScreen.styles.js";
import ItemList from "../../components/menu/item/ItemList";
import AddToOrderButton from "../../components/menu/item/AddToOrderButton";

import _ from "lodash";

import { addItemToOrder } from "../../redux/slices/orderSlice";
import { connect } from "react-redux";

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

  handleOptionValueChange = (value, newId, oldId) => {
    const values = this.state.values;
    values[newId].value = value;
    if (oldId) values[oldId].value = 0;
    this.setState({ values });
  };

  handleQuantityValueChange = (quantity) => {
    this.setState({
      values: {
        ...this.state.values,
        quantity,
      },
    });
  };

  formatValuesObject = (values) => {
    const valuesOnly = _.cloneDeep(values);
    delete valuesOnly.quantity;
    for (const [key, singleOption] of Object.entries(valuesOnly)) {
      if (singleOption.selectorType === "size" && singleOption.value == 0) {
        delete valuesOnly[key];
      } else if (singleOption.value == 0 && singleOption.defaultValue == 0) {
        delete valuesOnly[key];
      }
    }
    return valuesOnly;
  };

  handleAddToOrder = async () => {
    const newValues = this.formatValuesObject(this.state.values);

    this.props.addItemToOrder({
      orderId: this.props.order?.activeOrder?.orderId ?? "new",
      restaurantId: "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a",
      menuItemId: this.props.route.params.itemId,
      quantity: this.state.values.quantity,
      optionValues: newValues,
    });

    this.props.navigation.goBack();
  };

  async componentDidMount() {
    try {
      const values = { quantity: 1 };
      const { data } = await api.menu.getItemOptions(
        this.props.route.params.itemId
      );
      for (const optionCategory of data) {
        for (const singleOption of optionCategory.options) {
          values[singleOption.option_id] = {
            defaultValue: singleOption.default_value,
            value: singleOption.default_value,
            selectorType: singleOption.selector_type,
          };
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
          onOptionValueChange={this.handleOptionValueChange}
          onQuantityValueChange={this.handleQuantityValueChange}
          values={this.state.values}
        />
        <AddToOrderButton
          onPress={this.handleAddToOrder}
          style={styles.addToOrderButton}
          quantity={this.state.values.quantity}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToOrder: (data: Object) => dispatch(addItemToOrder(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen);
