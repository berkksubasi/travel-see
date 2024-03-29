import Svg, { SvgProps, Path } from 'react-native-svg'

const XCircle = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 9-6 6m6 0L9 9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
)

export default XCircle
