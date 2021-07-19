import * as React from "react";
import styles from "./NumberSelectorOption.styles.js";
import { Button } from "react-native";
import { Text, View } from "../../../../components/Themed";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

class NumberSelectorOption extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  increaseNum = () => {
    const isAboveMax =
      this.props.option.max_options <=
      this.props.values[this.props.option.option_id].value;
    if (!isAboveMax) {
      this.props.onPress(
        this.props.option.option_id,
        this.props.values[this.props.option.option_id].value + 1
      );
    }
  };

  decreaseNum = () => {
    const isBelowMin =
      this.props.option.min_options >=
      this.props.values[this.props.option.option_id].value;
    if (!isBelowMin) {
      this.props.onPress(
        this.props.option.option_id,
        this.props.values[this.props.option.option_id].value - 1
      );
    }
  };

  isQuantityAtMin = () => {
    return (
      this.props.option.min_options ===
      this.props.values[this.props.option.option_id].value
    );
  };

  isQuantityAtMax = () => {
    return (
      this.props.option.max_options ===
      this.props.values[this.props.option.option_id].value
    );
  };

  render() {
    const { option } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.decreaseNum}
          activeOpacity={0.5}
          style={[
            styles.button,
            !this.isQuantityAtMin() && styles.buttonAllowedInput,
          ]}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.counterText}>
            {this.props.values[option.option_id].value}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            !this.isQuantityAtMax() && styles.buttonAllowedInput,
          ]}
          activeOpacity={0.5}
          onPress={this.increaseNum}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{option.option_name}</Text>
        {option.price_delta > 0 && (
          <Text style={styles.text}>{`[+$${option.price_delta}]`}</Text>
        )}
      </View>
    );
  }
}

export default NumberSelectorOption;
