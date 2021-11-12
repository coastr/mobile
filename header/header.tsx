import * as React from "react"
import Svg, {  Path, G, Defs, LinearGradient, Stop } from "react-native-svg"

import { Dimensions} from 'react-native' ;
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 55 / 138);
const imageWidth = dimensions.width;


function Header(props) {
  return (
    <Svg
      width={imageWidth}
      height={imageHeight}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M439 118c-5.396 22.302-61.5 70-142.5 13.5-86.288-60.189-198.641 21.22-287-6.5-22.59-7.087-34.66-35.897-35.489-43.887a.893.893 0 01.007-.234l14.853-98.029a1 1 0 01.989-.85h424.619c.528 0 .967.437 1.002.964C420.64 61.108 453.939 56.253 439 118z"
        fill="url(#prefix__paint0_linear_637_3)"
      />
      <G filter="url(#prefix__filter0_d_637_3)">
        <Path
          d="M42.728 74.746c0-1.508.304-2.825.91-3.952.625-1.127 1.483-1.993 2.575-2.6 1.109-.607 2.374-.91 3.795-.91 1.82 0 3.337.477 4.55 1.43 1.231.953 2.037 2.297 2.419 4.03h-4.732c-.4-1.11-1.17-1.664-2.314-1.664-.815 0-1.465.32-1.95.962-.486.624-.729 1.525-.729 2.704 0 1.179.243 2.089.728 2.73.486.624 1.136.936 1.95.936 1.145 0 1.916-.555 2.315-1.664h4.732c-.382 1.699-1.188 3.033-2.418 4.004-1.231.97-2.748 1.456-4.55 1.456-1.422 0-2.687-.303-3.797-.91-1.092-.607-1.95-1.473-2.574-2.6-.606-1.127-.91-2.444-.91-3.952z"
          fill="url(#prefix__paint1_linear_637_3)"
        />
        <Path
          d="M65.439 82.208c-1.422 0-2.704-.303-3.848-.91a6.774 6.774 0 01-2.678-2.6c-.642-1.127-.962-2.444-.962-3.952 0-1.49.329-2.8.988-3.926a6.68 6.68 0 012.704-2.626c1.144-.607 2.426-.91 3.848-.91 1.421 0 2.704.303 3.848.91a6.68 6.68 0 012.704 2.626c.658 1.127.988 2.435.988 3.926 0 1.49-.338 2.808-1.014 3.952a6.687 6.687 0 01-2.73 2.6c-1.144.607-2.427.91-3.848.91zm0-3.848c.849 0 1.568-.312 2.158-.936.606-.624.91-1.517.91-2.678s-.295-2.054-.884-2.678a2.775 2.775 0 00-2.132-.936c-.867 0-1.586.312-2.158.936-.572.607-.858 1.5-.858 2.678 0 1.161.277 2.054.832 2.678a2.775 2.775 0 002.132.936z"
          fill="url(#prefix__paint2_linear_637_3)"
        />
        <Path
          d="M73.985 74.72c0-1.49.278-2.8.832-3.926.572-1.127 1.344-1.993 2.314-2.6.971-.607 2.054-.91 3.25-.91 1.023 0 1.916.208 2.678.624.78.416 1.378.962 1.794 1.638v-2.054H89.3V82h-4.446v-2.054c-.433.676-1.04 1.222-1.82 1.638-.762.416-1.655.624-2.678.624a5.962 5.962 0 01-3.224-.91c-.97-.624-1.742-1.5-2.314-2.626-.554-1.144-.832-2.461-.832-3.952zm10.868.026c0-1.11-.312-1.985-.936-2.626a2.957 2.957 0 00-2.236-.962c-.884 0-1.638.32-2.262.962-.606.624-.91 1.49-.91 2.6s.304 1.993.91 2.652c.624.641 1.378.962 2.262.962.884 0 1.63-.32 2.236-.962.624-.641.936-1.517.936-2.626z"
          fill="url(#prefix__paint3_linear_637_3)"
        />
        <Path
          d="M97.898 82.208c-1.266 0-2.392-.217-3.38-.65-.988-.433-1.768-1.023-2.34-1.768a4.752 4.752 0 01-.962-2.548h4.394c.052.503.286.91.702 1.222.416.312.927.468 1.534.468.554 0 .98-.104 1.274-.312.312-.225.468-.511.468-.858 0-.416-.217-.72-.65-.91-.434-.208-1.136-.433-2.106-.676-1.04-.243-1.907-.494-2.6-.754a4.668 4.668 0 01-1.794-1.274c-.503-.59-.754-1.378-.754-2.366 0-.832.225-1.586.676-2.262.468-.693 1.144-1.24 2.028-1.638.901-.399 1.967-.598 3.198-.598 1.82 0 3.25.45 4.29 1.352 1.057.901 1.664 2.097 1.82 3.588h-4.108c-.07-.503-.295-.901-.676-1.196-.364-.295-.85-.442-1.456-.442-.52 0-.919.104-1.196.312a.922.922 0 00-.416.806c0 .416.217.728.65.936.45.208 1.144.416 2.08.624 1.075.277 1.95.555 2.626.832.676.26 1.265.693 1.768 1.3.52.59.789 1.387.806 2.392a3.83 3.83 0 01-.728 2.288c-.468.659-1.153 1.179-2.054 1.56-.884.381-1.916.572-3.094.572z"
          fill="url(#prefix__paint4_linear_637_3)"
        />
        <Path
          d="M114.06 78.23V82h-2.262c-1.612 0-2.869-.39-3.77-1.17-.901-.797-1.352-2.089-1.352-3.874v-5.772h-1.768v-3.692h1.768v-3.536h4.446v3.536h2.912v3.692h-2.912v5.824c0 .433.104.745.312.936.208.19.555.286 1.04.286h1.586z"
          fill="url(#prefix__paint5_linear_637_3)"
        />
        <Path
          d="M120.462 69.91a5.74 5.74 0 011.95-1.872 4.958 4.958 0 012.6-.702v4.706h-1.222c-1.109 0-1.941.243-2.496.728-.554.468-.832 1.3-.832 2.496V82h-4.446V67.492h4.446v2.418z"
          fill="url(#prefix__paint6_linear_637_3)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_637_3"
          x1={254.837}
          y1={-80.758}
          x2={123.334}
          y2={162.338}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#3C4FFF" />
          <Stop offset={1} stopColor="#2996FB" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear_637_3"
          x1={105.5}
          y1={77}
          x2={104}
          y2={91}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Header