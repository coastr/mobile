import * as React from "react";
import styles from "./SizeSelectorButton.styles.js";
import { Text, View } from "../../../../components/Themed";
import { TouchableOpacity, Image } from "react-native";
interface Props {
  item: any;
  sizeOption: any;
  onPress: any;
  selected: boolean;
}

interface sizeSelectionButtonPhotoInterface {
  [key: string]: any;
}

const sizeSelectionButtonPhoto: sizeSelectionButtonPhotoInterface = {
  Small: require("../../../../images/Small_Drink_Image.png"),
  Medium: require("../../../../images/Medium_Drink_Image.png"),
  Large: require("../../../../images/Large_Drink_Image.png"),
};

class SizeSelectorButton extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { item, sizeOption, onPress, selected } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onPress(sizeOption.option_id)}
          style={[
            styles.appButtonContainer,
            selected && styles.appButtonContainerSelected,
          ]}
        >
          <Image source={sizeSelectionButtonPhoto[sizeOption.option_name]} />
        </TouchableOpacity>
        <View style={styles.sizeSelectorText}>
          <Text
            style={[
              styles.text,
              styles.textBolded,
              selected && styles.textSelected,
            ]}
          >{`${sizeOption.option_name[0]} `}</Text>
          <Text style={[styles.text, selected && styles.textSelected]}>{`$${(
            item.menuItemPrice + sizeOption.price_delta
          ).toFixed(2)}`}</Text>
        </View>
      </View>
    );
  }
}

export default SizeSelectorButton;
