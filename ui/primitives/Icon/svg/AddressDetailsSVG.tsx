import * as React from 'react'
import Svg, {
  Ellipse,
  G,
  Rect,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps,
} from 'react-native-svg'

const AddressDetailsSVG = (props: SvgProps) => (
  <Svg width={160} height={80} viewBox="0 0 160 80" fill="none" {...props}>
    <Ellipse cx={81.1503} cy={40} rx={39.8756} ry={40} fill="url(#paint0_linear_1112_18131)" />
    <G filter="url(#filter0_dd_1112_18131)">
      <Rect x={31.3057} y={40} width={97.3886} height={29.2308} rx={14.6154} fill="#F5F5F5" />
      <Rect
        x={31.8057}
        y={40.5}
        width={96.3886}
        height={28.2308}
        rx={14.1154}
        stroke="#fff"
        strokeOpacity={0.35}
      />
    </G>
    <G filter="url(#filter1_dd_1112_18131)">
      <Rect x={6} y={13.0762} width={148} height={49.2308} rx={16} fill="#fff" />
      <Rect
        x={6.5}
        y={13.5762}
        width={147}
        height={48.2308}
        rx={15.5}
        stroke="#000"
        strokeOpacity={0.03}
      />
      <Rect x={48} y={45} width={84} height={6} rx={3} fill="#E0E0E0" />
      <Rect x={48.5} y={45.5} width={83} height={5} rx={2.5} stroke="#fff" strokeOpacity={0.14} />
      <Path d="M50 40h60" stroke="#D0D0D0" strokeWidth={4} strokeLinecap="round" />
      <G clipPath="url(#clip0_1112_18131)">
        <G filter="url(#filter2_dd_1112_18131)">
          <Path
            d="M131.914 36.447l-1.812-6.931a.39.39 0 00-.463-.294l-3.044.795.002.002.825 3.153a.223.223 0 01-.054.21.224.224 0 01-.205.067l-.816-.211a.225.225 0 00-.283.073l-.614.588a.227.227 0 01-.212.041.226.226 0 01-.149-.157l-.825-3.155-3.042.796a.39.39 0 00-.261.48l1.812 6.934a.393.393 0 00.465.292l8.417-2.202a.389.389 0 00.259-.481z"
            fill="#9E9E9E"
          />
          <Path
            d="M131.817 36.472h0l-1.812-6.931-.001-.003h0a.287.287 0 00-.342-.219l-2.943.77.8 3.058h0a.327.327 0 01-.214.39.324.324 0 01-.161.01l-.007-.001h.001l-.816-.212-.01-.002-.009-.004a.124.124 0 00-.157.04l-.006.008-.007.007-.614.588-.005.004h0a.323.323 0 01-.443-.026.325.325 0 01-.079-.14m6.825 2.663l-6.728-2.69m6.728 2.69l.001.003m-.001-.003l.001.003m-6.826-2.667l.097-.025m-.097.025h0l.097-.025m-.097.025l-.799-3.058m.896 3.033l-.825-3.155m-.071.122l.096-.025-.025-.097m-.071.122l-.026-.096.097-.026m-.071.122l.071-.122m7.554 5.847a.286.286 0 01-.191.357l.191-.357zm-10.569-4.955h.002l-.029-.096.025.096h.002zm1.965 7.512l-.002.001.026.097-.022-.098h-.002z"
            stroke="#fff"
            strokeOpacity={0.39}
            strokeWidth={0.2}
          />
        </G>
        <Path
          d="M133.136 39.046l-9.7 2.538-2.872-1.82-3.225-12.327-2.619-1.533a.685.685 0 01.174-1.242.683.683 0 01.514.065l2.864 1.677a.689.689 0 01.317.428c0 .005.003.008.003.013l3.314 12.668.26.994.925-.242 9.701-2.536a.682.682 0 01.344 1.317z"
          fill="#E0E0E0"
        />
        <Path
          d="M123.386 40.892a1.89 1.89 0 00-3.309-.688 1.888 1.888 0 103.309.688zm-1.647 1.168a.711.711 0 11-.355-1.378.711.711 0 01.355 1.378z"
          fill="#E0E0E0"
        />
      </G>
      <Circle cx={53} cy={29} r={3} fill="#F6F6F6" />
      <Circle cx={101.5} cy={32.5} r={1.5} fill="#F6F6F6" />
      <Circle cx={69} cy={32} r={3} fill="#EAEAEA" />
      <Circle cx={86.5} cy={23.5} r={4.5} fill="#D1D1D1" />
      <Circle cx={86.5} cy={23.5} r={4} stroke="#fff" strokeOpacity={0.62} />
      <Circle cx={32} cy={37} r={14} fill="#FAFAFA" />
      <G filter="url(#filter3_dd_1112_18131)">
        <Path
          d="M39.57 35.96v-.002l-6.528-6.526A1.463 1.463 0 0032 29c-.393 0-.763.153-1.042.431l-6.524 6.524-.006.006a1.475 1.475 0 001.025 2.512h.26v4.803c0 .95.774 1.724 1.725 1.724h2.554c.258 0 .468-.21.468-.469v-3.765c0-.434.353-.787.787-.787h1.506c.434 0 .787.353.787.787v3.765c0 .26.21.469.469.469h2.553c.951 0 1.724-.773 1.724-1.724v-4.803h.242c.393 0 .763-.153 1.041-.431a1.475 1.475 0 00.001-2.083z"
          fill="#9E9E9E"
        />
        <Path
          d="M32.865 29.608h0A1.213 1.213 0 0032 29.25c-.327 0-.633.127-.865.358l-.176-.176.176.176-6.524 6.523s0 0 0 0v.001l-.006.006a1.225 1.225 0 00.002 1.727h0c.218.217.505.343.812.356h.013v.001l.021.001h.51v5.053c0 .813.662 1.474 1.475 1.474h2.554c.12 0 .218-.098.218-.219v-3.765c0-.572.465-1.037 1.037-1.037h1.506c.572 0 1.037.465 1.037 1.037v3.765c0 .121.098.219.219.219h2.553c.813 0 1.474-.661 1.474-1.474v-5.053h.492c.327 0 .633-.127.865-.358 0 0 0 0 0 0m-6.528-8.257l6.528 8.257m-6.528-8.257l6.527 6.527h0m-6.527-6.527l6.527 6.527m0 1.73a1.225 1.225 0 00.001-1.729m0 1.729v-1.729m0 0h0m0 0h0m0-.001h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0v.001m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0m0 0h0"
          stroke="#fff"
          strokeOpacity={0.8}
          strokeWidth={0.5}
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1112_18131"
        x1={81.1503}
        y1={0}
        x2={81.1503}
        y2={80}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F8B401" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
      </LinearGradient>
      <ClipPath id="clip0_1112_18131">
        <Path fill="#fff" transform="translate(114 24)" d="M0 0H20V20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default AddressDetailsSVG
