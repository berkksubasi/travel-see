import { Svg, Path, SvgProps } from 'react-native-svg'

const View = (props: SvgProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10Z"
      fill="#BDBDBD"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.882213 7.63133C1.87421 4.65067 4.68555 2.5 8.00088 2.5C11.3142 2.5 14.1242 4.64867 15.1175 7.62667C15.1975 7.868 15.1975 8.128 15.1175 8.36867C14.1262 11.3493 11.3142 13.5 7.99955 13.5C4.68621 13.5 1.87555 11.3513 0.88288 8.37333C0.802712 8.1325 0.802712 7.87217 0.88288 7.63133H0.882213ZM11.5002 8C11.5002 8.92826 11.1315 9.8185 10.4751 10.4749C9.81871 11.1313 8.92847 11.5 8.00021 11.5C7.07196 11.5 6.18172 11.1313 5.52534 10.4749C4.86896 9.8185 4.50021 8.92826 4.50021 8C4.50021 7.07174 4.86896 6.1815 5.52534 5.52513C6.18172 4.86875 7.07196 4.5 8.00021 4.5C8.92847 4.5 9.81871 4.86875 10.4751 5.52513C11.1315 6.1815 11.5002 7.07174 11.5002 8Z"
      fill="currentColor"
    />
  </Svg>
)

export default View