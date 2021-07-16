import * as React from "react";
import styles from "./NumberSelectorStyles";
import { ScrollView, FlatList, TouchableNativeFeedback, Pressable } from "react-native";
import Collapsible from "react-native-collapsible";

import { Text, View } from "../../../../components/Themed";
import NumberSelectorOption from "./NumberSelectorOption";

class NumberSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showItems: false,
    };
  }

  handleOptionChange(id: string, value: number) {
    console.log("id", id);
    console.log("value", value);
    this.props.onSizeSelected(value, id);
  }

  render() {
    const { options, item, optionCategory } = this.props;
    const { showItems } = this.state;
    console.log("OPTION CATEGORY", optionCategory);
    return (
      <View style={styles.container}>
        <Pressable onPress={() => this.setState({ showItems: !showItems })}>
          <View>
            <Text>{optionCategory.name}</Text>
          </View>
        </Pressable>
        <Collapsible collapsed={!showItems}>
          <FlatList
            data={this.props.options}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={(option) => {
              return (
                <NumberSelectorOption
                  item={item}
                  option={option.item}
                  navigation={this.props.navigation}
                  values={this.props.values}
                  onPress={(id, value) => this.handleOptionChange(id, value)}
                />
              );
            }}
          />
        </Collapsible>
      </View>
    );
  }
}

export default NumberSelector;
