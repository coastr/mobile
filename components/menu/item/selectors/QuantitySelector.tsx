import * as React from "react";
import styles from "./QuantitySelector.styles.js";
import { Text, View } from "../../../../components/Themed";
import { TouchableOpacity } from "react-native";

const minAmount = 1;
const maxAmount = 99;

class QuantitySelector extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: this.props.values.quantity,
    };
  }

  increaseNum = () => {
    if (!this.isQuantityAboveMax()) {
      this.props.onQuantityValueChange(this.state.quantity + 1);
    }
  };

  decreaseNum = () => {
    if (!this.isQuantityBelowMin()) {
      this.props.onQuantityValueChange(this.state.quantity - 1);
    }
  };

  isQuantityBelowMin = () => {
    return this.state.quantity <= minAmount;
  };

  isQuantityAboveMax = () => {
    return this.state.quantity >= maxAmount;
  };

  isQuantityAtMin = () => {
    return this.state.quantity === minAmount;
  };

  isQuantityAtMax = () => {
    return this.state.quantity === maxAmount;
  };

  render() {
    const { values, onQuantityValueChange } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.decreaseNum}
          activeOpacity={0.8}
          style={[
            styles.button,
            !this.isQuantityAtMin() && styles.buttonAllowedInput,
          ]}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.counterText}>{this.state.quantity}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            !this.isQuantityAtMax() && styles.buttonAllowedInput,
          ]}
          activeOpacity={0.8}
          onPress={this.increaseNum}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default QuantitySelector;
