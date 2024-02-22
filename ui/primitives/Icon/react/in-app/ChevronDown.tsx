import { Svg, Path, SvgProps } from 'react-native-svg'

const ChevronDown = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.22332 8.48854C5.92556 8.78632 5.92556 9.26905 6.22333 9.56683L11.9582 15.3017C12.256 15.5995 12.7387 15.5995 13.0365 15.3017L18.7714 9.56683C19.0691 9.26905 19.0691 8.78631 18.7714 8.48853L18.5062 8.22333C18.2084 7.92556 17.7256 7.92556 17.4279 8.22333L12.4973 13.1539L7.56684 8.22333C7.26906 7.92556 6.78627 7.92556 6.48849 8.22334L6.22332 8.48854ZM18.7453 9.25853C18.7181 9.31901 18.6796 9.37567 18.6299 9.42536L12.8951 15.1602C12.6754 15.3799 12.3193 15.3799 12.0996 15.1602L6.36476 9.42536C6.21975 9.28034 6.17047 9.07588 6.21691 8.89046C6.17045 9.07589 6.21973 9.28038 6.36475 9.42541L12.0996 15.1603C12.3193 15.38 12.6754 15.38 12.8951 15.1603L18.6299 9.42541C18.6796 9.37571 18.7181 9.31903 18.7453 9.25853ZM6.86021 8.22534C7.05335 8.1653 7.27247 8.21175 7.42543 8.36471L11.9635 12.9028L7.42571 8.36446C7.27274 8.21149 7.05345 8.16519 6.86021 8.22534Z"
      fill="currentColor"
    />
  </Svg>
)

export default ChevronDown
