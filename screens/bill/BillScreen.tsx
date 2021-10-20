import * as React from "react";
import styles from "./BillScreen.styles.js";
import { connect } from "react-redux";

import { Text, View } from "../../components/Themed";
import BillContainer from "../../components/bill/BillContainer";

import { BillParamList } from "../../types.js";

import { StackNavigationProp } from "@react-navigation/stack";

interface BillScreenNavigationProp
  extends StackNavigationProp<BillParamList, "BillScreen"> {}

export interface Props {
  menu: Object;
  navigation: BillScreenNavigationProp;
}

interface State {
  menu: Array<Object>;
  activeOrder: Object;
}

class BillScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menu: [],
    };

    this.bottomSheetRef = React.createRef();
  }

  render() {
    console.log(this.props.restaurant);
    return (
      <View style={styles.container}>
        <BillContainer></BillContainer>
        {/* <MenuList
          menu={this.props.restaurant?.menu}
          navigation={this.props.navigation}
        />
        <ViewOrderButton onPress={this.handleViewOrderPress} />
        <BottomSheet ref={this.bottomSheetRef}>
          <ViewOrderSheet
            order={this.props.order.activeOrder}
            navigation={this.props.navigation}
          />
        </BottomSheet> */}
      </View>
    );
  }
}

export default connect(null, null)(BillScreen);
