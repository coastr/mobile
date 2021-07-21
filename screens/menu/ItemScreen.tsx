import * as React from "react";
import styles from "./ItemScreen.styles.js";
import ItemList from "../../components/menu/item/ItemList";
import AddToOrderButton from "../../components/menu/item/AddToOrderButton";

import _ from "lodash";

import {
  addItemToOrder,
  updateItemInOrder,
  deleteItemFromOrder,
} from "../../redux/slices/orderSlice";
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
  price: Number;
}

class ItemScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: [],
      values: {},
      price: 0,
    };
  }

  async componentDidMount() {
    try {
      const { data: menuOptions } = await api.menu.getItemOptions(
        this.props.order.currentItem.menuItemId
      );

      this.setValues(menuOptions);
    } catch (error) {
      console.log(error);
    }
  }

  setValues = (menuOptions) => {
    const { currentItem } = this.props.order;
    const isEditing = !!currentItem.orderItemId;

    const values = { quantity: isEditing ? currentItem.numberOfItems : 1 };

    for (const optionCategory of menuOptions) {
      for (const singleOption of optionCategory.options) {
        let value = singleOption.default_value;

        if (
          isEditing &&
          currentItem.optionsMap[singleOption.option_id]?.value
        ) {
          value = currentItem.optionsMap[singleOption.option_id]?.value;
        }

        values[singleOption.option_id] = {
          defaultValue: singleOption.default_value,
          value,
          selectorType: singleOption.selector_type,
        };
      }
    }
    const price = isEditing
      ? currentItem.orderItemPrice
      : this.determineCurrentPrice(values, values.quantity);
    this.setState({
      values,
      options: menuOptions,
      price,
    });
  };

  handleOptionValueChange = (value, newId, oldId) => {
    const values = this.state.values;
    values[newId].value = value;
    if (oldId) values[oldId].value = 0;
    const price = this.determineCurrentPrice(values, values.quantity);
    this.setState({ values, price });
  };

  handleQuantityValueChange = (quantity) => {
    const price = this.determineCurrentPrice(this.state.values, quantity);
    this.setState({
      values: {
        ...this.state.values,
        quantity,
      },
      price,
    });
  };

  determineCurrentPrice = (values, quantity) => {
    if (!quantity) {
      return 0;
    }
    var priceTotal = 0;
    console.log("currentItem", this.props.order.currentItem);
    console.log(
      "currentItem.menuItemPrice",
      this.props.order.currentItem.menuItemPrice
    );

    priceTotal += this.props.order.currentItem.menuItemPrice;
    for (const optionCategory of this.state.options) {
      for (const singleOption of optionCategory.options) {
        const priceDelta = singleOption.price_delta;
        if (
          values[singleOption.option_id] &&
          values[singleOption.option_id].value
        ) {
          priceTotal += values[singleOption.option_id].value * priceDelta;
        }
      }
    }
    priceTotal *= quantity;
    return priceTotal;
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
    const { currentItem } = this.props.order;
    const isEditing = !!currentItem.orderItemId;

    if (isEditing) {
      this.props.updateItemInOrder({
        orderId: this.props.order?.activeOrder?.orderId,
        orderItemId: currentItem.orderItemId,
        quantity: this.state.values.quantity,
        optionValues: newValues,
      });
    } else {
      this.props.addItemToOrder({
        orderId: this.props.order?.activeOrder?.orderId ?? "new",
        restaurantId: "232d03a0-2001-4a1d-8d07-cbeaaf0ca99a",
        menuItemId: this.props.order.currentItem.menuItemId,
        quantity: this.state.values.quantity,
        optionValues: newValues,
      });
    }

    this.props.navigation.goBack();
  };

  handleItemDelete = () => {
    const { orderId } = this.props.order?.activeOrder;
    const { orderItemId } = this.props.order?.currentItem;
    this.props.deleteItemFromOrder({ orderId, orderItemId });
    this.props.navigation.goBack();
  };

  render() {
    const { currentItem } = this.props.order;
    const isEditing = !!currentItem.orderItemId;
    return (
      <View style={styles.container}>
        <ItemList
          item={this.props.order.currentItem}
          options={this.state.options}
          onOptionValueChange={this.handleOptionValueChange}
          onQuantityValueChange={this.handleQuantityValueChange}
          values={this.state.values}
          isEditing={isEditing}
          onItemDelete={this.handleItemDelete}
        />
        <AddToOrderButton
          onPress={this.handleAddToOrder}
          style={styles.addToOrderButton}
          quantity={this.state.values.quantity}
          price={this.state.price}
          isEditing={isEditing}
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
    updateItemInOrder: (data: Object) => dispatch(updateItemInOrder(data)),
    deleteItemFromOrder: (data: Object) => dispatch(deleteItemFromOrder(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen);
