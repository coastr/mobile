import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./Account.styles.js";

import { Text, View } from "../../components/Themed";

import { Account } from "./MyAccount";

interface Props {
    navigation: any
}
  
interface State {
    user: Account;
}

export default class GetHelp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <Text style={styles.title} >GetHelp</Text>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}