import { Platform } from "react-native";

const xsmallBoxShadow = "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)";
const smallBoxShadow = '0px 2px 4px -2px rgba(0, 0, 0, 0.03), 0px 4px 8px -2px rgba(0, 0, 0, 0.05)'
const mediumBoxShadow = '0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)'
const largeBoxShadow = '0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08)'
const xlargeBoxShadow = '0px 24px 48px -12px rgba(0, 0, 0, 0.18);'

function parseBoxShadow(boxShadow: string) {
  const shadowValues = boxShadow.split(',').map((value: string) => value.trim())

  const shadowObj = {
    shadowColor: '$black',
    shadowOffset: {
      width: parseInt(shadowValues[0]) || 0,
      height: parseInt(shadowValues[1]) || 0,
    },
    shadowOpacity: parseFloat(shadowValues[3]) || 0,
    shadowRadius: parseFloat(shadowValues[2]) || 0,
    ...(Platform.OS === "ios" ? { elevation: 2 } : { elevationAndroid: 2 })
  }


  return shadowObj
}

const APP_SHADOWS = {
  xsmall: parseBoxShadow(xsmallBoxShadow),
  small: parseBoxShadow(smallBoxShadow),
  medium: parseBoxShadow(mediumBoxShadow),
  large: parseBoxShadow(largeBoxShadow),
  xlarge: parseBoxShadow(xlargeBoxShadow)
}

export default APP_SHADOWS
