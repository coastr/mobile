import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./BillScreen.styles";
import Bar from "../../vectors/bar";
import Close from "../../vectors/close";

/*
 * See the following: https://stackoverflow.com/questions/63132548/
 * react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
 */

export default function BillScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [payModalVisible, setPayModalVisible] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate("Bill");
  };

  const onRegisterPress = () => {
    setPayModalVisible(!payModalVisible)
    navigation.navigate('PayScreen')
  };

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

// const BillStack = createStackNavigator();

// function BillStackScreen() {
//   return (
//     <BillStack.Navigator>
//       <BillStack.Screen name="Bill" component={BillScreen} />
//     </BillStack.Navigator>
//   );
// }
