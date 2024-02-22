import Svg, {
  Circle,
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  SvgProps,
} from 'react-native-svg'

const QrActiveFoundSVG = (props: SvgProps) => (
  <Svg width={138} height={80} viewBox="0 0 138 80" fill="none" {...props}>
    <Circle cx={69} cy={40} r={40} fill="url(#paint0_linear_1112_18137)" />
    <G filter="url(#filter0_dd_1112_18137)">
      <Rect x={21} y={40} width={96} height={29} rx={12} fill="#F5F5F5" />
      <Rect x={21.5} y={40.5} width={95} height={28} rx={11.5} stroke="#fff" strokeOpacity={0.35} />
    </G>
    <G filter="url(#filter1_dd_1112_18137)">
      <Rect x={6} y={13} width={126} height={49} rx={16} fill="#fff" />
      <Rect x={6.5} y={13.5} width={125} height={48} rx={15.5} stroke="#000" strokeOpacity={0.03} />
      <Rect x={59} y={34} width={59} height={6} rx={3} fill="#838383" />
      <Rect x={59} y={45} width={22} height={6} rx={3} fill="#BDBDBD" />
      <Rect x={59} y={24} width={41} height={6} rx={3} fill="#838383" />
      <Rect x={59.5} y={24.5} width={40} height={5} rx={2.5} stroke="#fff" strokeOpacity={0.14} />
      <G clipPath="url(#clip0_1112_18137)">
        <Path
          d="M32.131 45.385L28.252 47.5a3.488 3.488 0 00-.622.443A12.94 12.94 0 0036 51c3.166 0 6.067-1.133 8.322-3.014a3.444 3.444 0 00-.684-.459l-4.154-2.076a1.584 1.584 0 01-.875-1.417v-1.63c.117-.132.25-.303.393-.505.566-.8.994-1.679 1.291-2.602.533-.164.925-.656.925-1.24v-1.74c0-.383-.17-.725-.434-.964v-2.515S41.3 28.926 36 28.926c-5.3 0-4.783 3.913-4.783 3.913v2.515c-.265.24-.435.581-.435.964v1.74c0 .457.24.86.601 1.094a8.634 8.634 0 001.573 3.254v1.589c0 .579-.317 1.112-.826 1.39z"
          fill="url(#paint1_linear_1112_18137)"
        />
        <Path
          d="M36.222 25.002c-7.178-.123-13.097 5.597-13.22 12.776-.07 4.07 1.744 7.728 4.633 10.16.189-.164.391-.315.616-.438l3.88-2.115c.508-.278.825-.811.825-1.391v-1.59s-1.139-1.362-1.573-3.254a1.305 1.305 0 01-.601-1.094v-1.74c0-.382.17-.724.434-.964v-2.514S30.7 28.924 36 28.924c5.3 0 4.783 3.914 4.783 3.914v2.514c.265.24.435.582.435.964v1.74c0 .585-.392 1.077-.925 1.241A9.557 9.557 0 0139 41.899a6.287 6.287 0 01-.393.505v1.63c0 .6.339 1.149.876 1.417l4.153 2.076c.25.125.474.282.682.457a12.966 12.966 0 004.678-9.762c.124-7.178-5.596-13.097-12.775-13.22z"
          fill="#838383"
        />
        <Path
          d="M23.502 37.786h0a12.453 12.453 0 004.148 9.503c.113-.081.234-.158.362-.228l-4.51-9.275zm0 0c.118-6.902 5.81-12.402 12.712-12.284 6.903.118 12.402 5.81 12.283 12.712h0A12.46 12.46 0 0144.3 47.34a3.67 3.67 0 00-.44-.261h0l-4.153-2.076h0a1.083 1.083 0 01-.6-.97v-1.447c.097-.118.198-.252.302-.4h0c.55-.777.977-1.625 1.284-2.512a1.8 1.8 0 001.024-1.62v-1.739c0-.448-.167-.854-.434-1.165v-2.286-.003l.002-.025a3.956 3.956 0 00-.007-.657 4.004 4.004 0 00-.46-1.538c-.64-1.173-2.027-2.218-4.819-2.218-2.79 0-4.178 1.045-4.817 2.218a4.006 4.006 0 00-.461 1.538 3.993 3.993 0 00-.007.657c0 .01.002.02.003.028v2.286a1.786 1.786 0 00-.435 1.165v1.74c0 .562.26 1.06.658 1.388.238.932.627 1.727.961 2.296a9.13 9.13 0 00.555.837v1.417c0 .396-.217.761-.565.952 0 0 0 0 0 0l-3.879 2.115-4.51-9.275z"
          stroke="#fff"
          strokeOpacity={0.06}
        />
      </G>
      <Rect x={22.5} y={24.5} width={27} height={27} rx={13.5} stroke="#FFB800" />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1112_18137"
        x1={69}
        y1={0}
        x2={69}
        y2={80}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F8B401" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1112_18137"
        x1={35.9758}
        y1={28.9258}
        x2={35.9758}
        y2={51.0008}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#EDEAE4" />
      </LinearGradient>
      <ClipPath id="clip0_1112_18137">
        <Rect x={23} y={25} width={26} height={26} rx={13} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default QrActiveFoundSVG