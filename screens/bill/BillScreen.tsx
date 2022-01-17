import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./BillScreen.styles";
import BillList from "../../components/bill/BillList";
import api from "../../api";
import { BillParamList } from "../../types";

import {StackNavigationProp} from "@react-navigation/stack";
interface BillScreenNavigationProp
  extends StackNavigationProp<BillParamList, "BillScreen"> {}

export interface Props {
  bill: Object;
  navigation: BillScreenNavigationProp;
}

interface State {
  bill: Object;
}

class BillScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      bill: Object
    };
  }

  async componentDidMount() {
    try {
      const { data } = await api.order.getSquareOrder(
        "DT45TjUz4AbhFzmmIPjdAuJoktaZY"
      );
      console.log("api call result" + data.order);
      this.setState({ bill: data.order});
      console.log(data.order.totalMoney.amount);
      
    
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    //console.log("BillScreen this.props", this.props);
    return (
      <View style={styles.container}>
        {/* <BillList bill={this.state.bill} navigation={this.props.navigation}/> */}
        <Text>ahhhhh {this.state.bill.order.totalMoney.amount}</Text>
      </View>  
    );
  }

<<<<<<< HEAD
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={payModalVisible}
        onRequestClose={() => {
          setPayModalVisible(!payModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.topBar}>
              <View style={styles.text}>
                <Text style={styles.header}>Tip</Text>
              </View>
              <View style={styles.bar}>
                <Bar/>
              </View>
              <View style={styles.buttonClose}>
                <Pressable
                  onPress={() => setPayModalVisible(!payModalVisible)}
                >
                  <Close />
                </Pressable>
              </View>
            </View>
            <View style={styles.tipBar}>
              <TipUnclicked tip={15} />
              <TipUnclicked tip={18}/>
              <TipUnclicked tip={20}/>
              <TipCustom custom={'Custom'} tip={''} percent={''} />
            </View>
            <View style={styles.buttonPay}>
            <Pressable
              style={[styles.button]}
              onPress={() => onRegisterPress()}
            >
              <Text style={styles.textStyle}>Pay and Leave</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <Text>Bill</Text>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPayModalVisible(!payModalVisible)}
        >
          <Text style={styles.buttonTitle}>Pay Now</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
=======
}

export default BillScreen;
>>>>>>> 179abd0 (api result in frontend)
