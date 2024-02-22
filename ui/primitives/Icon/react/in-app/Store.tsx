import { Svg, Path, SvgProps } from 'react-native-svg'

const Store = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.5001 21V13.5C13.5001 13.3011 13.5791 13.1103 13.7198 12.9697C13.8604 12.829 14.0512 12.75 14.2501 12.75H17.2501C17.449 12.75 17.6398 12.829 17.7804 12.9697C17.9211 13.1103 18.0001 13.3011 18.0001 13.5V21M13.5001 21H2.36011M13.5001 21H18.0001M18.0001 21H21.6401M20.2501 21V9.349C20.6487 9.11891 20.989 8.80019 21.2447 8.41751C21.5004 8.03484 21.6646 7.59846 21.7247 7.14215C21.7847 6.68584 21.7389 6.22184 21.5909 5.78605C21.4429 5.35026 21.1966 4.95436 20.8711 4.629L19.6811 3.44C19.4001 3.15862 19.0188 3.00035 18.6211 3H5.37811C4.98042 3.00035 4.59915 3.15862 4.31811 3.44L3.12911 4.628C2.80435 4.95374 2.55873 5.3497 2.41118 5.78537C2.26364 6.22104 2.21811 6.68477 2.27811 7.14082C2.33811 7.59686 2.50204 8.03304 2.75725 8.41571C3.01246 8.79839 3.35215 9.11735 3.75011 9.348M3.75011 20.999V9.35C4.35013 9.69598 5.05136 9.82376 5.73486 9.71167C6.41835 9.59958 7.04203 9.25451 7.50011 8.735C7.78141 9.05445 8.12761 9.31022 8.51561 9.48525C8.9036 9.66028 9.32447 9.75054 9.75011 9.75C10.6461 9.75 11.4501 9.357 12.0001 8.734C12.2813 9.05363 12.6275 9.30959 13.0155 9.48479C13.4035 9.66 13.8244 9.75041 14.2501 9.75C15.1461 9.75 15.9501 9.357 16.5001 8.734C16.9583 9.25335 17.5821 9.59822 18.2656 9.71013C18.949 9.82204 19.6502 9.6941 20.2501 9.348M6.75011 17.999H10.5001C10.699 17.999 10.8898 17.92 11.0304 17.7793C11.1711 17.6387 11.2501 17.4479 11.2501 17.249V13.5C11.2501 13.3011 11.1711 13.1103 11.0304 12.9697C10.8898 12.829 10.699 12.75 10.5001 12.75H6.75011C6.5512 12.75 6.36043 12.829 6.21978 12.9697C6.07913 13.1103 6.00011 13.3011 6.00011 13.5V17.25C6.00011 17.665 6.33611 17.999 6.75011 17.999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Store
