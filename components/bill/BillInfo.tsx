import * as React from "react";
import styles from "./BillInfo.styles.js";

import { Text, View } from "../../components/Themed";
import {
  BottomSheetFlatList,
  BottomSheetSectionList,
} from "@gorhom/bottom-sheet";

class BillInfo extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.titleText}>Welcome to Daft Brewing</Text>
        <Text style={styles.hoursText}>Today 12:00pm - 11:00pm</Text>
      </View>
    );
  }
}

export default BillInfo;
