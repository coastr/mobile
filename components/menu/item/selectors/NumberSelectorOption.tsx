import * as React from "react";
import styles from "./NumberSelectorOption.styles.js";
import { Button } from "react-native";
import { Text, View } from "../../../../components/Themed";

class SizeSelectorButton extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{option.option_name}</Text>
        {option.price_delta > 0 && <Text>{`[${option.price_delta}]`}</Text>}
      </View>
    );
  }
}

export default SizeSelectorButton;
