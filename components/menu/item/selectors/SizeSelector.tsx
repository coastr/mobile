import * as React from "react";
import styles from "./SizeSelector.styles.js";

import SizeSelectorButton from "./SizeSelectorButton";
import { Text, View } from "../../../../components/Themed";

interface Props {
  onSizeSelected: (value: any) => void;
}
class SizeSelector extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentSizeSelected: 0,
    };
  }

  handleSizeSelected = (sizeOption: string, index: number) => {
    this.setState({
      currentSizeSelected: index,
    });

    this.props.onSizeSelected(sizeOption);
  };

  render() {
    const { options, item } = this.props;
    const { currentSizeSelected } = this.state;
    return (
      <View style={styles.container}>
        {options.map((sizeOption, index) => (
          <SizeSelectorButton
            onPress={() => this.handleSizeSelected(sizeOption, index)}
            sizeOption={sizeOption}
            item={item}
            key={sizeOption.position.toString()}
            index={index}
            selected={index === currentSizeSelected}
          />
        ))}
      </View>
    );
  }
}

export default SizeSelector;
