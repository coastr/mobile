import React, { useState } from "react";
//import {Text} from "react-native";
import Svg, { Circle, Text } from "react-native-svg"

import { Dimensions} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

// var tip = useState(16);

// /**
//  * setTip
//  */
// export function setTip(newTip) {
//     tip = newTip;
// }

function TipUnclicked(props) {

    //const  [ tip, setTip ] = useState(16);

    console.log(props);

    return (
        <Svg
            width={51}
            height={51}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={25.5} cy={25.5} r={25.5} fill="#F4F4F4" />
            <Text x={14} y={29} text-anchor="middle" font-family="Verdana" font-size="35" fill="black">{props.tip}%</Text>
        </Svg>
    )
}

export default TipUnclicked
