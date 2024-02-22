import { Svg, Path, SvgProps } from 'react-native-svg'

const Sort = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.75 6.75H20.25M7.5 12H20.25M12 17.25H20.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Sort
