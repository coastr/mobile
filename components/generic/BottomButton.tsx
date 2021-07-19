import * as React from "react";
import styles from "./SizeSelector.styles.js";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import NumberSelectorOption from "./NumberSelectorOption";

class BottomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default BottomButton;
