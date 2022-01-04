import * as React from "react"
import Svg, { Rect } from "react-native-svg"

import { Dimensions} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Bar(props) {
  return (
    <Svg
    width={200}
    height={4}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={200} height={4} rx={3} fill="#DDD" />
  </Svg>
  )
}

export default Bar
