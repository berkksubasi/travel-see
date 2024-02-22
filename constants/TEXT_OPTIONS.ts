import { FontTokens, FontWeightTokens } from "@tamagui/core"

export const TEXT_SIZES = {
  H1: 48,
  H2: 40,
  H3: 32,
  H4: 24,
  H5: 20,
  H6: 18,

  BodyXl: 18,
  BodyL: 16,
  BodyM: 14,
  BodyS: 12,
  BodyXs: 10,

  BodySemiBoldXL: 18,
  BodySemiBoldL: 16,
  BodySemiBoldM: 14,
  BodySemiBoldS: 12,
  BodySemiBoldXs: 10,

  BodyMediumXL: 18,
  BodyMediumL: 16,
  BodyMediumM: 14,
  BodyMediumS: 12,
  BodyMediumXs: 10,

  BodyRegularXL: 18,
  BodyRegularL: 16,
  BodyRegularM: 14,
  BodyRegularS: 12,
  BodyRegularXs: 10,




}

const calculateLineHeight = (key: keyof typeof TEXT_SIZES) => {
  const fontSize = TEXT_SIZES[key]
  return (fontSize * 40 / 100) + fontSize
}

const TEXT_OPTIONS = {

  //HEADING
  H1: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: TEXT_SIZES.H1,
    fontWeight: "700" as FontWeightTokens,

  },
  H2: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 40,
    fontWeight: "700" as FontWeightTokens,

  },
  H3: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 32,
    fontWeight: "700" as FontWeightTokens,


  },
  H4: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 24,
    fontWeight: "700" as FontWeightTokens,

  },
  H5: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 20,
    fontWeight: "700" as FontWeightTokens,

  },
  H6: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 18,
    fontWeight: "700" as FontWeightTokens,

  },

  //BODY


  //Body_Bold
  Body2Xl: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 20,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyXl"),
    letterSpacing: 0.2,
  },

  BodyXl: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: TEXT_SIZES.BodyXl,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyXl"),
    letterSpacing: 0.2,
  },

  BodyL: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 16,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyL"),
    letterSpacing: 0.2,
  },

  BodyM: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 14,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyM"),
    letterSpacing: 0.2,
  },

  BodyS: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 12,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyS"),
    letterSpacing: 0.2,
  },

  BodyXs: {
    fontFamily: "BR_Shape_Bold" as FontTokens,
    fontSize: 10,
    fontWeight: "700" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyXs"),
    letterSpacing: 0.2,
  },


  //Body_Semibold
  BodySemiBold2XL: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 20,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldXL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldXL: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 18,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldXL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldL: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 16,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldM: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 14,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldM"),
    letterSpacing: 0.2,
  },

  BodySemiBoldS: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 12,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldS"),
    letterSpacing: 0.2,
  },

  BodySemiBoldXs: {
    fontFamily: "BR_Shape_Semi_Bold" as FontTokens,
    fontSize: 10,
    fontWeight: "600" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodySemiBoldXs"),
    letterSpacing: 0.2,
  },


  //Body_Medium
  BodyMedium2Xl: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 20,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumXL"),
    letterSpacing: 0.2,
  },

  BodyMediumXl: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 18,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumXL"),
    letterSpacing: 0.2,
  },

  BodyMediumL: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 16,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumL"),
    letterSpacing: 0.2,
  },


  BodyMediumM: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 14,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumM"),
    letterSpacing: 0.2,
  },


  BodyMediumS: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 12,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumS"),
    letterSpacing: 0.2,
  },

  BodyMediumXs: {
    fontFamily: "BR_Shape_Medium" as FontTokens,
    fontSize: 10,
    fontWeight: "500" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyMediumXs"),
    letterSpacing: 0.2,
  },




  //Body_Regular
  BodyRegular2Xl: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 20,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularXL"),
    letterSpacing: 0.2,
  },

  BodyRegularXl: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 18,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularXL"),
    letterSpacing: 0.2,
  },

  BodyRegularL: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 16,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularL"),
    letterSpacing: 0.2,
  },

  BodyRegularM: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 14,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularM"),
    letterSpacing: 0.2,
  },

  BodyRegularS: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 12,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularS"),
    letterSpacing: 0.2,
  },

  BodyRegularXs: {
    fontFamily: "BR_Shape_Regular" as FontTokens,
    fontSize: 10,
    fontWeight: "400" as FontWeightTokens,
    lineHeight: calculateLineHeight("BodyRegularXs"),
    letterSpacing: 0.2,
  },
}




export default TEXT_OPTIONS
