import * as React from "react"
import Svg, { Path } from "react-native-svg"

import { Dimensions} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Close(props) {
  return (
    <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.44.44a1.5 1.5 0 0 1 2.122 0l12.021 12.02a1.5 1.5 0 1 1-2.121 2.122L.44 2.56A1.5 1.5 0 0 1 .44.44Z"
      fill="#A3A3A3"
    />
    <Path
      d="M14.582.44a1.5 1.5 0 0 1 0 2.12L2.56 14.582a1.5 1.5 0 1 1-2.122-2.12L12.46.438a1.5 1.5 0 0 1 2.121 0Z"
      fill="#A3A3A3"
    />
  </Svg>
  )
}

export default Close