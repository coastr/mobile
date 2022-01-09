/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Menu: undefined;
  Bill: undefined;
  Account: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  QrScan: undefined;
}

export type MenuParamList = {
  MenuScreen: undefined;
  ItemScreen: undefined;
};

export type BillParamList = {
  BillScreen: undefined;
  PayScreen: undefined
};

export type AccountParamList = {
  MyAccount: undefined;
  Settings: undefined;
  Favourites: undefined;
  OrderHistory: undefined;
  PaymentOptions: undefined;
  GetHelp: undefined;
  LoginScreen: undefined;
  RegistrationScreen: undefined;
};
