import * as React from "react";
import { StyleSheet } from "react-native";
import styles from "./RestaurantInfo.styles.js";

import { Text, View } from "../../components/Themed";

class RestaurantInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text>Daft</Text>
          <Text>731 Development Drive</Text>
          <Text>Today: 8:00am - 3:00pm</Text>
        </View>
        <View style={styles.actions}></View>
      </View>
    );
  }
}

export default RestaurantInfo;
