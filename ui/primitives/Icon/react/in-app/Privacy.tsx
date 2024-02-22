import { Svg, Path, SvgProps } from 'react-native-svg'

const Privacy = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 12.7508L11.25 15.0008L15 9.75084M12 2.71484C9.73574 4.86508 6.72026 6.04442 3.598 6.00084C3.20084 7.21082 2.99898 8.47635 3 9.74984C3 15.3418 6.824 20.0398 12 21.3728C17.176 20.0408 21 15.3428 21 9.75084C21 8.44084 20.79 7.17984 20.402 5.99984H20.25C17.054 5.99984 14.15 4.75184 12 2.71484Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Privacy
