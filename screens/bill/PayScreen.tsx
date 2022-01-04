import React, { useState } from "react";
import { Image, Pressable, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./BillScreen.styles";

/*
 * See the following: https://stackoverflow.com/questions/63132548/
 * react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
 */
export default function PayModal({ navigation }) {

  const [modalVisible, setPayModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.pay}> PAY FOR FOOD HERE</Text>
      </View>
    </View>
  )
}

