import Svg, { SvgProps, Path } from 'react-native-svg'

const BadgePipe = (props: SvgProps) => (
  <Svg width="3" height="20" viewBox="0 0 3 20" fill='none' {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 20.5C0.671573 20.5 -3.01081e-08 19.8112 -6.72483e-08 18.9615L-8.0698e-07 2.03846C-8.4412e-07 1.18879 0.671572 0.499998 1.5 0.499998C2.32843 0.499998 3 1.18879 3 2.03846L3 18.9615C3 19.8112 2.32843 20.5 1.5 20.5Z"
    />
  </Svg>
)

export default BadgePipe
