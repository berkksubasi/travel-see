import { Svg, Path, SvgProps, LinearGradient, Defs, Stop, Rect } from 'react-native-svg'

const TaratFrame = (props: SvgProps) => (
  <Svg width="66" height="24" viewBox="0 0 66 24" fill="none" {...props}>
    <Path
      d="M63.6617 0H60.6338C60.2838 0 60 0.283775 60 0.633803C60 0.983831 60.2838 1.26761 60.6338 1.26761H63.6617C64.2521 1.26761 64.7324 1.74794 64.7324 2.33835V5.3662C64.7324 5.71623 65.0162 6 65.3662 6C65.7162 6 66 5.71623 66 5.3662V2.33835C66 1.04899 64.951 0 63.6617 0Z"
      fill="#BDBDBD"
    />
    <Path
      d="M0.633803 6C0.983831 6 1.26761 5.71623 1.26761 5.3662V2.33835C1.26761 1.74794 1.74794 1.26761 2.33831 1.26761H5.3662C5.71623 1.26761 6 0.983831 6 0.633803C6 0.283775 5.71623 0 5.3662 0H2.33831C1.04899 0 0 1.04899 0 2.33835V5.3662C0 5.71623 0.283775 6 0.633803 6Z"
      fill="#BDBDBD"
    />
    <Path
      d="M5.3662 22.7324H2.33831C1.74794 22.7324 1.26761 22.2521 1.26761 21.6616V18.6338C1.26761 18.2838 0.983831 18 0.633803 18C0.283775 18 0 18.2838 0 18.6338V21.6616C0 22.951 1.04899 24 2.33831 24H5.3662C5.71623 24 6 23.7162 6 23.3662C6 23.0162 5.71623 22.7324 5.3662 22.7324Z"
      fill="#BDBDBD"
    />
    <Path
      d="M65.3662 18C65.0162 18 64.7324 18.2838 64.7324 18.6338V21.6616C64.7324 22.2521 64.2521 22.7324 63.6617 22.7324H60.6338C60.2838 22.7324 60 23.0162 60 23.3662C60 23.7162 60.2838 24 60.6338 24H63.6617C64.9511 24 66 22.951 66 21.6616V18.6338C66 18.2838 65.7162 18 65.3662 18Z"
      fill="#BDBDBD"
    />

    <Defs>
      <LinearGradient
        id="Gradient"
        x1="32.5"
        y1="4"
        x2="32.5"
        y2="13"
        gradientUnits="userSpaceOnUse"
      />
      <LinearGradient
        id="Gradient"
        x1="32.5"
        y1="4"
        x2="32.5"
        y2="13"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D9D9D9" stopOpacity="0" />
        <Stop offset="1" stopColor="#D3D3D3" />
      </LinearGradient>
    </Defs>

    <Rect x="4" y="4" width="57" height="9" fill="url(#Gradient)" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M62.5 14H3.5V13H62.5V14Z" fill="#616161" />
  </Svg>
)

export default TaratFrame
