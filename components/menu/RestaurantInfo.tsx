import * as React from "react";
import { StyleSheet } from "react-native";
import styles from "./RestaurantInfo.styles.js";

import { Text, View } from "../../components/Themed";

class RestaurantInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.nameText}>Patriam</Text>
          <Text style={styles.addressText}>731 Development Drive</Text>
          <View style={styles.hoursContainer}>
            <Text style={styles.todayText}>Today </Text>
            <Text style={styles.hoursText}>8:00am - 3:00pm</Text>
          </View>
        </View>
        <View style={styles.actions}></View>
      </View>
    );
  }
}

export default RestaurantInfo;
