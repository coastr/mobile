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
    const isAboveMax = this.props.option.max_options <= this.props.values[this.props.option.option_id];
    if (!isAboveMax) {
      this.props.onPress(this.props.option.option_id, this.props.values[this.props.option.option_id] + 1);
    }
  };

  decreaseNum = () => {
    const isBelowMin = this.props.option.min_options >= this.props.values[this.props.option.option_id];
    if (!isBelowMin) {
      this.props.onPress(this.props.option.option_id, this.props.values[this.props.option.option_id] - 1);
    }
  };

  render() {
    const { option } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.decreaseNum} style={styles.appButtonContainer}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.values[option.option_id]}</Text>
        <TouchableOpacity style={styles.appButtonContainer} onPress={this.increaseNum}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{option.option_name}</Text>
        {option.price_delta > 0 && <Text style={styles.text}>{`[${option.price_delta}]`}</Text>}
      </View>
    );
  }
}

export default NumberSelectorOption;
