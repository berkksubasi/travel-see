import { Svg, Path, SvgProps } from 'react-native-svg'

const Flash = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24"  fill="none" {...props}>
    <Path
      d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Flash
