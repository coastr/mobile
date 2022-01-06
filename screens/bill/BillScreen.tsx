import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./BillScreen.styles";
import {Text, View } from "../../components/Themed";
import api from "../../api";

export interface Props {
  bill: Object;
}

interface State {
  bill: Array<Object>;
}
class BillScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      bill: [],
    };
  }

  // async componentDidMount() {
  //   try {
  //     const {data} = await api.restaurant.getBill(
  //       "x"
  //     );
  //     this.setState({ bill: data });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {

    const onRegisterPress = () => {};

    return (
      <View style={[styles.container, {justifyContent: "space-around"}]}>
        
        <View style={{ width: "100%"}}>
          <Text style={styles.subtitle}>Daft Brewing</Text>
        </View>

        <View style={[styles.container, {justifyContent: "flex-start"}]}>
          <View style={[styles.billContainer, { flexDirection: "row"}]}>
            <View style={{flex: 1}}>
              <Text style={styles.billItemQuant}>1</Text>
            </View>
            <View style={{flex: 10}}>
              <Text style={styles.billItem}>Item 1</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.billItemPrice}>$6.90</Text>
            </View>
          </View>
          <View style={[styles.billContainer, {borderBottomColor: 'black', borderBottomWidth: 1}]}/>
          <View style={[styles.billContainer, { flexDirection: "row"}]}>
            <View style={{flex: 1}}>
              <Text style={styles.billItemQuant}>1</Text>
            </View>
            <View style={{flex: 10}}>
              <Text style={styles.billItem}>Item 1</Text>
            </View>
            <View style={{flex: 5}}>
              <Text style={styles.billItemPrice}>$1599.99</Text>
            </View>
          </View>
          <View style={[styles.billContainer, {borderBottomColor: 'black', borderBottomWidth: 1}]}/>
          <View style={[styles.billContainer, { flexDirection: "row"}]}>
            <View style={{flex: 1}}>
              <Text style={styles.billItemQuant}>2</Text>
            </View>
            <View style={{flex: 10}}>
              <Text style={styles.billItem}>Item 1</Text>
            </View>
            <View style={{flex: 5}}>
              <Text style={styles.billItemPrice}>$20.98</Text>
            </View>
          </View>
        </View>

        <View style={{width: "100%", paddingBottom: 10}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onRegisterPress()}
          >
            <Text style={styles.buttonTitle}>Pay Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}

export default BillScreen;