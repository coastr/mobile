import * as React from "react";
import styles from "./MenuScreen.styles.js";
import { connect } from "react-redux";

import MenuList from "../../components/menu/MenuList";
import { BottomTabParamList, MenuParamList } from "../../types";
import ViewOrderButton from "../../components/menu/ViewOrderButton";
import ViewOrderSheet from "../../components/menu/ViewOrderSheet";

import { getActiveOrder } from "../../redux/slices/orderSlice";
import { getMenuByRestaurantId } from "../../redux/slices/restaurantSlice";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { Text, View } from "../../components/Themed";

import { StackNavigationProp } from "@react-navigation/stack";

interface MenuScreenNavigationProp
  extends StackNavigationProp<MenuParamList, "MenuScreen"> {}
export interface Props {
  menu: Object;
  navigation: MenuScreenNavigationProp;
}

interface State {
  menu: Array<Object>;
  activeOrder: Object;
}

class MenuScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menu: [],
    };

    this.sheetRef = React.createRef();
  }

  async componentDidMount() {
    try {
      this.props.getMenuByRestaurantId("232d03a0-2001-4a1d-8d07-cbeaaf0ca99a");
      this.props.getActiveOrder();
    } catch (error) {
      console.error(error);
    }
  }

  renderContent = () => <ViewOrderSheet order={this.props.order.activeOrder} />;

  render() {
    console.log(this.props.restaurant);
    return (
      <View style={styles.container}>
        <MenuList
          menu={this.props.restaurant?.menu}
          navigation={this.props.navigation}
        />
        <ViewOrderButton onPress={() => this.sheetRef.current.snapTo(450)} />
        <BottomSheet
          ref={this.sheetRef}
          snapPoints={[450, 0]}
          borderRadius={10}
          renderContent={this.renderContent}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
  restaurant: state.restaurant,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getActiveOrder: () => dispatch(getActiveOrder()),
    getMenuByRestaurantId: (id: string) => dispatch(getMenuByRestaurantId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
