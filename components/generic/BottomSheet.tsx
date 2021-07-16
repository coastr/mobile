import * as React from "react";
import styles from "./SizeSelector.styles.js";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import NumberSelectorOption from "./NumberSelectorOption";

class NumberSelector extends React.Component {
  render() {
    const { options, item, optionCategory } = this.props;
    return (
      <BottomSheet
        // ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    );
  }
}

export default NumberSelector;
