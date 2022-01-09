/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/home/HomeScreen"
import MenuScreen from "../screens/menu/MenuScreen";
import ItemScreen from "../screens/menu/ItemScreen";
import BillScreen from "../screens/bill/BillScreen";
import PayScreen from "../screens/bill/PayScreen";
import LoginScreen from "../screens/account/LoginScreen";
import RegistrationScreen from "../screens/account/RegistrationScreen";

import { BottomTabParamList, HomeParamList, MenuParamList, BillParamList, AccountParamList } from "../types";
import Header from '../vectors/header';
import MyAccount from "../screens/account/MyAccount";
import Settings from "../screens/account/Settings";
import Favourites from "../screens/account/Favourites";
import OrderHistory from "../screens/account/OrderHistory";
import PaymentOptions from "../screens/account/PaymentOptions";
import GetHelp from "../screens/account/GetHelp";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      
      <BottomTab.Screen
        name="Menu"
        component={MenuTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Bill"
        component={BillTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="receipt" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

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

const HomeStack = createStackNavigator<HomeParamList>();

function HomeTabNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
    </HomeStack.Navigator>
  );
}

const MenuStack = createStackNavigator<MenuParamList>();

function MenuTabNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <MenuStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
    </MenuStack.Navigator>
  );
}

const BillStack = createStackNavigator<BillParamList>();

function BillTabNavigator() {
  return (
    <BillStack.Navigator>
      <BillStack.Screen
        name="BillScreen"
        component={BillScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <BillStack.Screen 
        name="PayScreen" 
        component={PayScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
    </BillStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountTabNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="Settings"
        component={Settings}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="Favourites"
        component={Favourites}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="PaymentOptions"
        component={PaymentOptions}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="GetHelp"
        component={GetHelp}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
      <AccountStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ 
          headerTitle: () => <Header />,
        }}
      />
    </AccountStack.Navigator>
  );
}
