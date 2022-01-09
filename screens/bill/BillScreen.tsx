import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./BillScreen.styles";
<<<<<<< HEAD
import Bar from "../../vectors/bar";
import Close from "../../vectors/close";
import TipUnclicked from "../../vectors/tipUnclicked";
import TipCustom from "../../vectors/tipCustom";
import { BillParamList } from "../../types";

/*
 * See the following: https://stackoverflow.com/questions/63132548/
 * react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
 */

interface BillScreenNavigationProp
  extends StackNavigationProp<BillParamList, "BillScreen"> {}
export interface Props {
  //Will have ites with prices, etc
  Tip: Object;
  navigation: BillScreenNavigationProp;
}

export default function BillScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [payModalVisible, setPayModalVisible] = useState(false);
=======
import BillList from "../../components/bill/BillList";
import api from "../../api";
import { MenuParamList } from "../../types";

import {StackNavigationProp} from "@react-navigation/stack";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";
interface BillScreenNavigationProp
  extends StackNavigationProp<MenuParamList, "MenuScreen"> {}

export interface Props {
  bill: Object;
  navigation: BillScreenNavigationProp;
}
>>>>>>> 179abd0 (api result in frontend)

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

  async componentDidMount() {
    try {
      const { data } = await api.order.getSquareOrder(
        "DT45TjUz4AbhFzmmIPjdAuJoktaZY"
      );
      console.log(data);
      this.setState({ bill: data.order});
      
    
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    //console.log("BillScreen this.props", this.props);
    return (
      <View style={styles.container}>
        <BillList bill={this.state.bill} navigation={this.props.navigation}/>
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
