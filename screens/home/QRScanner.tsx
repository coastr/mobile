import React, {Component} from "react";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";
import QrReader from 'react-qr-scanner';
import styles from "../home/QRScanner.styles.js";

import { HomeParamList } from "../../types"
import api from "../../api";
import { StackNavigationProp } from "@react-navigation/stack";

interface QrScanNavigationProp
  extends StackNavigationProp<HomeParamList, "QrScan"> {}

export interface Props {
  navigation: QrScanNavigationProp;
}

class QrScan extends React.Component<Props> {

    constructor(props: Props){
        super(props)
        this.state = { 
            result: 'Hold QR Code Steady', 
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(result){
        this.setState({
        result: data
        })
    }

    handleError(err){
        console.error(err)
    }

    render(){
        
        return(
            <React.Fragment>
                <div style = {styles.camStyle}>
                    <QrReader delay = {100} style={styles.previewStyle} onError={this.handleError} onScan={this.handleScan} />
                </div>
                <p style = {styles.textStyle}>
                    (this.state.result)
                </p>
            </React.Fragment>
        )
    }
}
export default QrScan