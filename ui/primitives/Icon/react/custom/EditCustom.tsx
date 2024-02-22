import { Svg, Path, SvgProps } from 'react-native-svg'

const EditCustom = (props: SvgProps) => (
  <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.43843 3.58772L6.41321 1.5625L0.850094 7.12874C0.761663 7.21499 0.697062 7.32266 0.662573 7.44127L0 10.0009L2.54716 9.33523C2.66583 9.30088 2.77353 9.23626 2.85969 9.14771L8.43843 3.58772Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.78234 0.208292C8.64823 0.0748872 8.46676 0 8.27759 0C8.08843 0 7.90696 0.0748872 7.77285 0.208292L6.9165 1.06151L8.9386 3.08361L9.79182 2.23039C9.92523 2.09628 10.0001 1.91481 10.0001 1.72565C10.0001 1.53648 9.92523 1.35501 9.79182 1.2209L8.78234 0.208292Z"
      fill="currentColor"
    />
  </Svg>
)

export default EditCustom
