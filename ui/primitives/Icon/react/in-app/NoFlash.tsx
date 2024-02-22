import { Svg, Path, SvgProps } from 'react-native-svg'

const NoFlash = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.412 15.655L9.75 21.75L13.495 17.738M9.257 13.5H3.75L6.409 10.651M8.457 8.457L14.25 2.25L12 10.5H20.25L15.543 15.543M8.457 8.457L3 3M8.457 8.457L15.543 15.543M15.543 15.543L21 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default NoFlash
