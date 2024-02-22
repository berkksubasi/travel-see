import { Svg, Path, SvgProps } from 'react-native-svg'

const X = (props: SvgProps) => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      d="M11 0C4.92508 0 0 4.92508 0 11C0 17.0749 4.92508 22 11 22C17.0749 22 22 17.0749 22 11C22 4.92508 17.0749 0 11 0Z"
      fill="black"
    />
    <Path
      d="M12.2038 10.0045L16.9128 4.53076H15.7969L11.7081 9.28359L8.44239 4.53076H4.67578L9.61416 11.7179L4.67578 17.458H5.79172L10.1096 12.4388L13.5584 17.458H17.325L12.2035 10.0045H12.2038ZM6.1938 5.37083H7.90781L15.7974 16.6561H14.0834L6.1938 5.37083Z"
      fill="white"
    />
  </Svg>
)

export default X
