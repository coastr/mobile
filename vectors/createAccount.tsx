import * as React from "react"
import Svg, { Rect, Text } from "react-native-svg"

import { Dimensions} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CreateAccount(props) {
  return (
    <Svg
    width={366}
    height={59}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    
        <Rect x={4} y={3} width={358} height={51} rx={14} fill="#fff" />
        <Text dx={'32%'} y={29} text-anchor="middle" font-family="Verdana" font-size="35" fill="black">DEBUG CREATE ACCOUNT</Text>
  </Svg>
  )
}

export default CreateAccount
