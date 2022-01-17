import * as React from "react";
import { StyleSheet } from "react-native";
import styles from "./BillInfo.styles.js";

import { Text, View } from "../../components/Themed";

class BillInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text>Daft</Text>
          <Text>Recipt id: 450360287560287456</Text>
          <Text>Bill started 5:55pm</Text>
        </View>
        <View style={styles.actions}></View>
      </View>
    );
  }
}

export default BillInfo;
