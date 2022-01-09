import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./Account.styles.js";

import { Text, View } from "../../components/Themed";

import Settings from "../../vectors/settings"
import Favouites from "../../vectors/favourites"
import GetHelp from "../../vectors/getHelp"
import OrderHistory from "../../vectors/orderHistory"
import PaymentOptions from "../../vectors/paymentOptions"
import SignIn from "../../vectors/signIn"
import SignOut from "../../vectors/signOut"
import CreateAccount from "../../vectors/createAccount"

interface Props {
  navigation: any
}

interface State {
  user: Account;
}

export class Account {
    first: String;
    last: String;
    phone: Object;

    constructor(first: String, last: String, phone: Object){
        this.first = first;
        this.last = last;
        this.phone = phone;
    }
}

export default class MyAccount extends React.Component<Props, State> {
  // console.log("navigation", navigation);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  constructor(props: Props) {
    super(props);

    this.state = {
      user: new Account('Mathew', 'Jennings', 6473304286)

    };
  }

  onFooterLinkPress = () => {
    this.props.navigation.navigate("MyAccount");
  };

//   // const onLoginPress = () => {};

//   componentDidMount() {
//     this.initAsync();
//   }

//   initAsync = async () => {
//     await GoogleSignIn.initAsync({
//       // You may ommit the clientId when the firebase `googleServicesFile` is configured
//       clientId: "<YOUR_IOS_CLIENT_ID>",
//     });
//     this._syncUserWithStateAsync();
//   };

//   _syncUserWithStateAsync = async () => {
//     const user = await GoogleSignIn.signInSilentlyAsync();
//     this.setState({ user });
//   };

//   signOutAsync = async () => {
//     await GoogleSignIn.signOutAsync();
//     this.setState({ user: null });
//   };

//   signInAsync = async () => {
//     try {
//       await GoogleSignIn.askForPlayServicesAsync();
//       const { type, user } = await GoogleSignIn.signInAsync();
//       if (type === "success") {
//         this._syncUserWithStateAsync();
//       }
//     } catch ({ message }) {
//       alert("login: Error:" + message);
//     }
//   };

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
        <Text style={styles.title}>Hi, { this.state.user.first }</Text>
        <Settings onPress={() => this.props.navigation.navigate('Settings')} ></Settings>
        <Favouites onPress={() => this.props.navigation.navigate('Favourites')} ></Favouites>
        <OrderHistory onPress={() => this.props.navigation.navigate('OrderHistory')} ></OrderHistory>
        <PaymentOptions onPress={() => this.props.navigation.navigate('PaymentOptions')} ></PaymentOptions>
        <GetHelp onPress={() => this.props.navigation.navigate('GetHelp')} ></GetHelp>
        <SignIn onPress={() => this.props.navigation.navigate('LoginScreen')}></SignIn>
        <CreateAccount onPress={() => this.props.navigation.navigate('RegistrationScreen')} ></CreateAccount>
        <SignOut ></SignOut>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
