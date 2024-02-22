import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditProfileIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.438 6.588L9.413 4.562 3.85 10.13a.716.716 0 00-.187.312L3 13.001l2.547-.666a.711.711 0 00.313-.187l5.578-5.56zM11.782 3.208a.716.716 0 00-1.01 0l-.856.854 2.023 2.022.853-.854a.716.716 0 000-1.01l-1.01-1.012z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default EditProfileIcon
