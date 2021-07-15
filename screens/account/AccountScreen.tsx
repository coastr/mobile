import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./AccountScreen.styles.js";

import api from "../../api";

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>Don't have an account?</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => onLoginPress()}
        >
          <Text style={styles.buttonTitle}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
