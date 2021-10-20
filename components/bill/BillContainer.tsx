import * as React from "react";
import styles from "./BillContainer.styles.js";

import { Text, View } from "../../components/Themed";
import BillInfo from "./BillInfo";

class BillContainer extends React.Component {
  render() {
    return (
      <View>
        <BillInfo />
      </View>
    );
  }
}

export default BillContainer;
