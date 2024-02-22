import { Svg, Path, SvgProps } from 'react-native-svg'

const CrossCircle = (props: SvgProps) => (
  <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" {...props}>
    <Path
      d="M7 6.5L10 9.5M10 6.5L7 9.5M14.5 8C14.5 8.78793 14.3448 9.56815 14.0433 10.2961C13.7417 11.0241 13.2998 11.6855 12.7426 12.2426C12.1855 12.7998 11.5241 13.2417 10.7961 13.5433C10.0681 13.8448 9.28793 14 8.5 14C7.71207 14 6.93185 13.8448 6.2039 13.5433C5.47595 13.2417 4.81451 12.7998 4.25736 12.2426C3.70021 11.6855 3.25825 11.0241 2.95672 10.2961C2.65519 9.56815 2.5 8.78793 2.5 8C2.5 6.4087 3.13214 4.88258 4.25736 3.75736C5.38258 2.63214 6.9087 2 8.5 2C10.0913 2 11.6174 2.63214 12.7426 3.75736C13.8679 4.88258 14.5 6.4087 14.5 8Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CrossCircle
