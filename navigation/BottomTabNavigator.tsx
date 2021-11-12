/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {Image} from 'react-native' ;

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/home/HomeScreen"
import MenuScreen from "../screens/menu/MenuScreen";
import ItemScreen from "../screens/menu/ItemScreen";
import BillScreen from "../screens/bill/BillScreen";
import LoginScreen from "../screens/account/LoginScreen";
import RegistrationScreen from "../screens/account/RegistrationScreen";

import { BottomTabParamList, HomeParamList, MenuParamList, BillParamList, AccountParamList } from "../types";

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
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
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
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
        }}
      />
      <MenuStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{ 
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
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
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
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
        name="LoginScreen"
        component={LoginScreen}
        options={{ 
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
        }}
      />
      <AccountStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ 
          headerTitle: () => (
            <Image style={{ width: 450, height: 170 }} source={require("../assets/images/top.png")} />
          )
        }}
      />
    </AccountStack.Navigator>
  );
}
