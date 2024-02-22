import { Svg, Path, SvgProps } from 'react-native-svg'

const AddCustom = (props: SvgProps) => (
  <Svg
    width="12"
    height="12"
    viewBox="0 -960 960 960"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill="currentColor" />
  </Svg>
)

export default AddCustom
