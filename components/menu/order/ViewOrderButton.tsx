import * as React from "react";
import styles from "./ViewOrderButton.styles.js";
import { Text, View } from "../../Themed";
import BottomButton from "../../generic/BottomButton";

class ViewOrderButton extends React.Component {
  render() {
    return (
      <BottomButton onPress={this.props.onPress}>
        <Text>View Order</Text>
      </BottomButton>
    );
  }
}

export default ViewOrderButton;
