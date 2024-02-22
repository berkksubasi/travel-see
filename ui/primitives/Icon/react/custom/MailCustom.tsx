import { Svg, Path, SvgProps } from 'react-native-svg'

const MailCustom = (props: SvgProps) => (
  <Svg width="32" height="24" viewBox="0 0 32 24" fill="none" {...props}>
    <Path
      d="M18.6743 15.5895C17.8782 16.1202 16.9534 16.4008 16 16.4008C15.0466 16.4008 14.1219 16.1202 13.3258 15.5895L0.213062 6.84741C0.140312 6.79891 0.0694375 6.74835 0 6.69635V21.0212C0 22.6635 1.33281 23.967 2.94581 23.967H29.0541C30.6965 23.967 31.9999 22.6342 31.9999 21.0212V6.69629C31.9304 6.74841 31.8594 6.7991 31.7864 6.84766L18.6743 15.5895Z"
      fill="currentColor"
    />
    <Path
      d="M1.25312 5.287L14.3658 14.0291C14.8622 14.3601 15.4311 14.5255 15.9999 14.5255C16.5689 14.5255 17.1378 14.36 17.6342 14.0291L30.7469 5.287C31.5316 4.76419 32 3.88919 32 2.94481C32 1.321 30.6789 0 29.0552 0H2.94481C1.32106 6.25e-05 0 1.32106 0 2.94637C0 3.88919 0.4685 4.76419 1.25312 5.287Z"
      fill="currentColor"
    />
  </Svg>
)

export default MailCustom