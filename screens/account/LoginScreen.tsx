import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AccountScreen from "./AccountScreen";

import { user } from "../../firebase";
// import * as GoogleSignIn from "expo-google-sign-in";
import styles from "./LoginScreen.styles.js";

export default class LoginScreen extends React.Component {
  // console.log("navigation", navigation);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  onFooterLinkPress = () => {
    this.props.navigation.navigate("RegistrationScreen");
  };

  // const onLoginPress = () => {};

  state = { user: null };

  // componentDidMount() {
  //   this.initAsync();
  // }

  // initAsync = async () => {
  //   await GoogleSignIn.initAsync({
  //     // You may ommit the clientId when the firebase `googleServicesFile` is configured
  //     clientId: "<YOUR_IOS_CLIENT_ID>",
  //   });
  //   this._syncUserWithStateAsync();
  // };

  // _syncUserWithStateAsync = async () => {
  //   const user = await GoogleSignIn.signInSilentlyAsync();
  //   this.setState({ user });
  // };

  // signOutAsync = async () => {
  //   await GoogleSignIn.signOutAsync();
  //   this.setState({ user: null });
  // };

  // signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === "success") {
  //       this._syncUserWithStateAsync();
  //     }
  //   } catch ({ message }) {
  //     alert("login: Error:" + message);
  //   }
  // };

  // onGooglePress = () => {
  //   if (this.state.user) {
  //     this.signOutAsync();
  //   } else {
  //     this.signInAsync();
  //   }
  // };

  async componentDidMount() {
    const signedIn = await user.getCurrentUserIdTokenAsync();
    this.setState({ signedIn });
  }

  render() {
    if (this.state.signedIn) {
      return <AccountScreen />;
    }

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          {/* <Image
          style={styles.logo}
          source={require("../../../assets/icon.png")}
        /> */}
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            // onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => this.onGooglePress()}
          >
            <Text style={styles.buttonTitle}>Sign in with Google</Text>
          </TouchableOpacity> */}
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text onPress={this.onFooterLinkPress} style={styles.footerLink}>
                Sign up
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
