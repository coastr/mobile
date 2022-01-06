import React, { useState } from "react";
//import {Text} from "react-native";
import Svg, { Rect, Text } from "react-native-svg"

import { Dimensions, Pressable} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

// var tip = useState(16);

// /**
//  * setTip
//  */
// export function setTip(newTip) {
//     tip = newTip;
// }

// const onCustomPress = (props) => {
//     this.state.
// }

// this.setState(oldState => {
//     oldState.isLoggedIn = false;

//     console.log(oldState.isLoggedIn);
//     return oldState;
// });

function TipCustom(props, state) {

    

    //const  [ tip, setTip ] = useState(16);

    console.log(props);
    console.log(state);

    return (
        <Pressable onPress={() => console.log(state)} >
            <Svg
                width={117}
                height={51}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Rect width={117} height={51} rx={25.5} fill="#F4F4F4" />
                <Text dx={'32%'} y={29} text-anchor="middle" font-family="Verdana" font-size="35" fill="black">{props.custom}</Text>
                <Text dx={'32%'} y={29} text-anchor="middle" font-family="Verdana" font-size="35" fill="black">{props.tip}{props.percent}</Text>
            </Svg>
        </Pressable>
    )
}

export default TipCustom
