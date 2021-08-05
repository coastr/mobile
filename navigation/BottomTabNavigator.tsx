/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

// import AuthContext from "../contexts/authContext";
// import { firebase, user } from "../firebase";
// import api from "../api";
import { connect } from "react-redux";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MenuScreen from "../screens/menu/MenuScreen";
import ItemScreen from "../screens/menu/ItemScreen";
import LoginScreen from "../screens/account/LoginScreen";
import RegistrationScreen from "../screens/account/RegistrationScreen";
import AccountScreen from "../screens/account/AccountScreen";

import {
  BottomTabParamList,
  MenuParamList,
  AccountParamList,
  LoginParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator(props) {
  const colorScheme = useColorScheme();

  // const [token, setToken] = React.useState("");

  // const [state, dispatch] = React.useReducer(
  //   (prevState, action) => {
  //     console.log("action", action);
  //     switch (action.type) {
  //       case "RESTORE_TOKEN":
  //         return {
  //           ...prevState,
  //           userToken: action.token,
  //           isLoading: false,
  //         };
  //       case "SIGN_IN":
  //         return {
  //           ...prevState,
  //           isSignout: false,
  //           userToken: action.token,
  //         };
  //       case "SIGN_OUT":
  //         return {
  //           ...prevState,
  //           isSignout: true,
  //           userToken: null,
  //         };
  //     }
  //   },
  //   {
  //     isLoading: true,
  //     isSignout: false,
  //     userToken: null,
  //   }
  // );

  // React.useEffect(() => {
  //   // auth.onAuthStateChanged will return a firebase.Unsubrcibe function
  //   // which you can call to terminate the subscription
  //   const unsubscribe = firebase.auth().onAuthStateChanged(async (userAuth) => {
  //     const idToken = await userAuth?.getIdToken();
  //     console.log("====firebase refresh nav token", idToken);
  //     setToken(idToken);
  //   });

  //   // return a clean up function that will call unsubscribe to -
  //   // terminate the subscription when component unmounts
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []); // important set an empty array as dependency

  // // React.useEffect(() => {
  // //   // Fetch the token from storage then navigate to our appropriate place

  // //   console.log("useEffect");
  // //   const bootstrapAsync = async () => {
  // //     console.log("bootstrap");
  // //     let userToken;

  // //     try {
  // //       // userToken = await SecureStore.getItemAsync("userToken");
  // //       userToken = await user.getCurrentUserIdTokenAsync();
  // //       console.log("userToken", userToken);
  // //     } catch (e) {
  // //       // Restoring token failed
  // //     }

  // //     // After restoring token, we may need to validate it in production apps

  // //     // This will switch to the App screen or Auth screen and this loading
  // //     // screen will be unmounted and thrown away.
  // //     dispatch({ type: "RESTORE_TOKEN", token: userToken });
  // //   };

  // //   bootstrapAsync();
  // // }, []);

  // const authContext = React.useMemo(
  //   () => ({
  //     signIn: async (data) => {
  //       await firebase
  //         .auth()
  //         .signInWithEmailAndPassword(data.email, data.password)
  //         .then(async (userCredential) => {
  //           const token = await user.getCurrentUserIdTokenAsync();
  //           dispatch({ type: "SIGN_IN", token });
  //         });
  //       // In a production app, we need to send some data (usually username, password) to server and get a token
  //       // We will also need to handle errors if sign in failed
  //       // After getting token, we need to persist the token using `SecureStore`
  //       // In the example, we'll use a dummy token
  //     },
  //     signOut: async () => {
  //       firebase
  //         .auth()
  //         .signOut()
  //         .then(() => {
  //           dispatch({ type: "SIGN_OUT" });
  //         });
  //     },
  //     signUp: async (data) => {
  //       // In a production app, we need to send user data to server and get a token
  //       // We will also need to handle errors if sign up failed
  //       // After getting token, we need to persist the token using `SecureStore`
  //       // In the example, we'll use a dummy token

  //       firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(data.email, data.password)
  //         .then(async (userCredential) => {
  //           // console.log("userCredential", userCredential);
  //           const user = userCredential.user;
  //           // console.log("user", user);

  //           await api.account.createAccount({
  //             name: data.name,
  //             email: data.email,
  //           });
  //           dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
  //         })
  //         .catch((error) => {
  //           console.log("error", error);
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           // ..
  //         });
  //     },
  //     refreshToken: async () => {
  //       let userToken;
  //       try {
  //         // userToken = await SecureStore.getItemAsync("userToken");
  //         userToken = await user.getCurrentUserIdTokenAsync();
  //         console.log("refreshToken", userToken);
  //       } catch (err) {
  //         console.log("err", err);
  //       }
  //       dispatch({ type: "RESTORE_TOKEN", token: userToken });
  //     },
  //   }),
  //   []
  // );

  return (
    // <AuthContext.Provider value={authContext}>
    <BottomTab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Menu"
        component={MenuTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={
          props.account?.isAnonymous ? LoginNavigator : AccountNavigator
        }
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
    // </AuthContext.Provider>
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps)(BottomTabNavigator);

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const MenuStack = createStackNavigator<MenuParamList>();

function MenuTabNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: true }}
      />
      <MenuStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{ headerShown: true }}
      />
    </MenuStack.Navigator>
  );
}

const LoginStack = createStackNavigator<LoginParamList>();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <LoginStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: true }}
      />
    </LoginStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: true }}
      />
    </AccountStack.Navigator>
  );
}
