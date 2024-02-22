import { Svg, Path, SvgProps } from 'react-native-svg'

const Vehicle = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.25002 18.75C8.25002 19.1478 8.09198 19.5293 7.81068 19.8107C7.52937 20.092 7.14784 20.25 6.75002 20.25C6.35219 20.25 5.97066 20.092 5.68936 19.8107C5.40805 19.5293 5.25002 19.1478 5.25002 18.75M8.25002 18.75C8.25002 18.3522 8.09198 17.9706 7.81068 17.6893C7.52937 17.408 7.14784 17.25 6.75002 17.25C6.35219 17.25 5.97066 17.408 5.68936 17.6893C5.40805 17.9706 5.25002 18.3522 5.25002 18.75M8.25002 18.75H14.25M5.25002 18.75H3.37502C3.07665 18.75 2.7905 18.6315 2.57952 18.4205C2.36855 18.2095 2.25002 17.9234 2.25002 17.625V14.25M14.25 18.75H16.5M14.25 18.75V14.25M2.25002 14.25V6.61499C2.24843 6.34116 2.34848 6.07648 2.53081 5.87217C2.71313 5.66786 2.96477 5.53845 3.23702 5.50899C6.57006 5.16302 9.92997 5.16302 13.263 5.50899C13.828 5.56699 14.25 6.04699 14.25 6.61499V7.57299M2.25002 14.25H14.25M19.5 18.75C19.5 19.1478 19.342 19.5293 19.0607 19.8107C18.7794 20.092 18.3978 20.25 18 20.25C17.6022 20.25 17.2207 20.092 16.9394 19.8107C16.6581 19.5293 16.5 19.1478 16.5 18.75M19.5 18.75C19.5 18.3522 19.342 17.9706 19.0607 17.6893C18.7794 17.408 18.3978 17.25 18 17.25C17.6022 17.25 17.2207 17.408 16.9394 17.6893C16.6581 17.9706 16.5 18.3522 16.5 18.75M19.5 18.75H20.625C21.246 18.75 21.754 18.246 21.715 17.626C21.5141 14.3236 20.4019 11.1416 18.502 8.43299C18.3211 8.17927 18.0848 7.97001 17.8111 7.82102C17.5373 7.67203 17.2333 7.58722 16.922 7.57299H14.25M14.25 7.57299V14.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Vehicle
