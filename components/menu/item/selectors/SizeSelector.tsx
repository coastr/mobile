import * as React from "react";
import styles from "./SizeSelector.styles.js";

import SizeSelectorButton from "./SizeSelectorButton";
import { Text, View } from "../../../../components/Themed";

class SizeSelector extends React.Component {
  render() {
    const { options, item } = this.props;
    return (
      <View style={styles.container}>
        {options.map((option) => (
          <SizeSelectorButton
            option={option}
            item={item}
            key={option.position.toString()}
          />
        ))}
      </View>
    );
  }
}

export default SizeSelector;
