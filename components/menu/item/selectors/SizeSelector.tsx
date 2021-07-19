import * as React from "react";
import styles from "./SizeSelector.styles.js";

import SizeSelectorButton from "./SizeSelectorButton";
import { Text, View } from "../../../../components/Themed";

interface Props {
  onSizeSelected: (sizeOption: any, newId: number, oldId: number) => void;
}
class SizeSelector extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentId: "",
    };
  }

  async componentDidMount() {
    for (const singleOption of this.props.options) {
      if (this.props.values[singleOption.option_id].value === 1) {
        this.setState({ currentId: singleOption.option_id });
      }
    }
  }

  handleSizeSelected = (id: string) => {
    if (id != this.state.currentId) {
      const oldId = this.state.currentId;
      this.setState({
        currentId: id,
      });
      this.props.onSizeSelected(1, id, oldId);
    }
  };

  render() {
    const { options, item } = this.props;
    return (
      <View style={styles.container}>
        {options.map((sizeOption) => (
          <SizeSelectorButton
            onPress={(id) => this.handleSizeSelected(id)}
            sizeOption={sizeOption}
            item={item}
            key={sizeOption.position.toString()}
            selected={this.props.values[sizeOption.option_id].value}
          />
        ))}
      </View>
    );
  }
}

export default SizeSelector;
