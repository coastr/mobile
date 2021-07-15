import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./AccountScreen.styles.js";

import api from "../../api";
import { firebase } from "../../firebase";
import AuthContext from "../../contexts/authContext";

export default class AccountScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {},
    };
  }
  async componentDidMount() {
    // await user.getCurrentUserIdTokenAsync();
    const { data } = await api.account.getAccount();

    console.log("data");

    this.setState({ account: data });
  }

  onSignOutPress = async () => {
    // const { signOut } = React.useContext(AuthContext);
    // signOut();

    firebase
      .auth()
      .signOut()
      .then(() => {
        // this.props.navigation.navigate("LoginScreen");
      });
    console.log("logout");
    // this.props.navigation.navigate("LoginScreen");
  };

  render() {
    console.log("this.state", this.state);
    return (
      <View style={styles.container}>
        <View style={styles.footerView}>
          <Text
            style={styles.footerText}
          >{`Hello ${this.state.account?.name}`}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onSignOutPress}>
          <Text style={styles.buttonTitle}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
