import { APP_COLORS } from '@constants/index';
import { shorthands } from '@tamagui/shorthands'
import { createAnimations } from '@tamagui/animations-moti';
import { createMedia } from '@tamagui/react-native-media-driver';
import { themes } from '@tamagui/themes';
import { createFont, createTamagui, createTokens } from 'tamagui';
import type { Variable } from '@tamagui/web/types/createVariable';


const isTamaguiNative = process.env.TAMAGUI_TARGET === 'native';
const font = createFont({
  family: true
    ? 'System'
    : 'ui-sans-serif, system-ui, -apple-system, BR_Shape_Bold,BR_Shape_Medium,BR_Shape_Regular,BR_Shape_Semi_Bold, "Segoe UI", BR, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  size: {
    true: 16,
    heading5xl: 40,
    heading4xl: 32,
    heading3xl: 28,
    heading2xl: 24,
    headingXl: 20,
    headingLg: 18,
    headingMd: 16,
    headingSm: 14,
    headingXs: 12,
    headingXxs: 10,
    bodyLg: 16,
    bodyLgMedium: 16,
    bodyMd: 14,
    bodyMdMedium: 14,
    bodySm: 12,
    bodySmMedium: 12,
    4: 16,

  },
  lineHeight: {
    true: 24,
    heading5xl: 48,
    heading4xl: 40,
    heading3xl: 36,
    heading2xl: 32,
    headingXl: 28,
    headingLg: 28,
    headingMd: 24,
    headingSm: 20,
    headingXs: 16,
    headingXxs: 12,
    bodyLg: 24,
    bodyLgMedium: 24,
    bodyMd: 20,
    bodyMdMedium: 20,
    bodySm: 16,
    bodySmMedium: 16,
  },
  weight: {
    true: '400',
    heading5xl: '700',
    heading4xl: '600',
    heading3xl: '600',
    heading2xl: '600',
    headingXl: '600',
    headingLg: '600',
    headingMd: '600',
    headingSm: '600',
    headingXs: '600',
    headingXxs: '500',
    bodyLg: '400',
    bodyLgMedium: '500',
    bodyMd: '400',
    bodyMdMedium: '500',
    bodySm: '400',
    bodySmMedium: '500',
  },
  transform: {
    true: 'none',
    heading5xl: 'none',
    heading4xl: 'none',
    heading3xl: 'none',
    heading2xl: 'none',
    headingXl: 'none',
    headingLg: 'none',
    headingMd: 'none',
    headingSm: 'none',
    headingXs: 'uppercase',
    headingXxs: 'none',
    bodyLg: 'none',
    bodyLgMedium: 'none',
    bodyMd: 'none',
    bodyMdMedium: 'none',
    bodySm: 'none',
    bodySmMedium: 'none',
  },
  letterSpacing: {
    true: 0,
    heading5xl: 0,
    heading4xl: 0,
    heading3xl: 0,
    heading2xl: 0,
    headingXl: 0,
    headingLg: 0,
    headingMd: 0,
    headingSm: 0,
    headingXs: 0.8,
    headingXxs: 0,
    bodyLg: 0,
    bodyLgMedium: 0,
    bodyMd: 0,
    bodyMdMedium: 0,
    bodySm: 0,
    bodySmMedium: 0,
  },
});

const animations = createAnimations({
  quick: {
    type: 'spring',
    damping: 20,
    mass: 0.1,
  },
  '100ms': {
    type: 'timing',
    duration: 100,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 18,
    stiffness: 50,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  slow: {
    damping: 15,
    stiffness: 40,
  },
  // quick: {
  //   damping: 20,
  //   mass: 1.2,
  //   stiffness: 250,
  // },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});


const fontH4 = createFont({
  family: isTamaguiNative
    ? 'System'
    : 'BR_Shape_BOLD',
  size: {
    true: 24,
  },
  lineHeight: {
    true: 24,
  },
  weight: {
    true: "500",

  },
  transform: {
    true: 'none',

  },
  letterSpacing: {
    true: 2,
  },
});



function postfixObjKeys<
  A extends { [key: string]: Variable<string> | string },
  B extends string,
>(
  obj: A,
  postfix: B,
): {
    [Key in `${keyof A extends string ? keyof A : never}${B}`]:
    | Variable<string>
    | string;
  } {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]),
  ) as any;
}

const mergedTokens = createTokens({
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
  size: {
    0: 0,
    px: 1,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    4.5: 18,
    5: 20,
    5.5: 22,
    6: 24,
    6.5: 26,
    7: 28,
    7.5: 30,
    8: 32,
    8.5: 34,
    9: 36,
    9.5: 38,
    10: 40,
    10.5: 42,
    true: 44,
    11: 44,
    11.5: 46,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
    21: 84,
    22: 88,
    23: 92,
    24: 96,
    25: 100,
    26: 106,
    27: 108,
    28: 112,
    29: 116,
    30: 120,
    31: 124,
    32: 128,
    33: 132,
    34: 136,
    35: 140,
    36: 144,
    37: 148,
    38: 152,
    38.5: 154,
    39: 156,
    40: 160,
    41: 164,
    42: 168,
    43: 172,
    44: 176,
    45: 180,
    46: 184,
    47: 188,
    48: 192,
    49: 196,
    50: 200,
    51: 204,
    52: 208,
    53: 212,
    54: 216,
    55: 220,
    56: 224,
    57: 228,
    58: 232,
    59: 236,
    60: 240,
    61: 244,
    62: 248,
    63: 252,
    64: 256,
    65: 260,
    66: 264,
    67: 268,
    68: 272,
    69: 278,
    70: 280,
    71: 284,
    72: 288,
    73: 292,
    74: 296,
    75: 300,
    76: 304,
    77: 308,
    78: 312,
    79: 316,
    80: 320,
    81: 324,
    82: 328,
    83: 332,
    84: 336,
    85: 342,
    86: 344,
    87: 348,
    88: 352,
    89: 356,
    90: 360,
    91: 364,
    92: 368,
    93: 372,
    94: 376,
    95: 380,
    96: 384,
    97: 388,
    98: 392,
    99: 396,
    100: 400,
    160: 640,
  },
  radius: {
    0: 0,
    px: 1,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    4.5: 18,
    5: 20,
    5.5: 22,
    6: 24,
    6.5: 26,
    7: 28,
    7.5: 30,
    8: 32,
    8.5: 34,
    9: 36,
    9.5: 38,
    10: 40,
    10.5: 42,
    true: 44,
    11: 44,
    11.5: 46,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
    21: 84,
    22: 88,
    23: 92,
    24: 96,
    25: 100,
    26: 106,
    27: 108,
    28: 112,
    29: 116,
    30: 120,
    31: 124,
    32: 128,
    33: 132,
    34: 136,
    35: 140,
    36: 144,
    37: 148,
    38: 152,
    38.5: 154,
    39: 156,
    40: 160,
    41: 164,
    42: 168,
    43: 172,
    44: 176,
    45: 180,
    46: 184,
    47: 188,
    48: 192,
    49: 196,
    50: 200,
    51: 204,
    52: 208,
    53: 212,
    54: 216,
    55: 220,
    56: 224,
    57: 228,
    58: 232,
    59: 236,
    60: 240,
    61: 244,
    62: 248,
    63: 252,
    64: 256,
    65: 260,
    66: 264,
    67: 268,
    68: 272,
    69: 278,
    70: 280,
    71: 284,
    72: 288,
    73: 292,
    74: 296,
    75: 300,
    76: 304,
    77: 308,
    78: 312,
    79: 316,
    80: 320,
    81: 324,
    82: 328,
    83: 332,
    84: 336,
    85: 342,
    86: 344,
    87: 348,
    88: 352,
    89: 356,
    90: 360,
    91: 364,
    92: 368,
    93: 372,
    94: 376,
    95: 380,
    96: 384,
    97: 388,
    98: 392,
    99: 396,
    100: 400,
    160: 640,
    full: 9999,
  },
  space: {
    0: 0,
    px: 1,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    4.5: 18,
    5: 20,
    5.5: 22,
    6: 24,
    6.5: 26,
    7: 28,
    7.5: 30,
    8: 32,
    8.5: 34,
    9: 36,
    9.5: 38,
    10: 40,
    10.5: 42,
    true: 44,
    11: 44,
    11.5: 46,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
    21: 84,
    22: 88,
    23: 92,
    24: 96,
    25: 100,
    26: 106,
    27: 108,
    28: 112,
    29: 116,
    30: 120,
    31: 124,
    32: 128,
    33: 132,
    34: 136,
    35: 140,
    36: 144,
    37: 148,
    38: 152,
    38.5: 154,
    39: 156,
    40: 160,
    41: 164,
    42: 168,
    43: 172,
    44: 176,
    45: 180,
    46: 184,
    47: 188,
    48: 192,
    49: 196,
    50: 200,
    51: 204,
    52: 208,
    53: 212,
    54: 216,
    55: 220,
    56: 224,
    57: 228,
    58: 232,
    59: 236,
    60: 240,
    61: 244,
    62: 248,
    63: 252,
    64: 256,
    65: 260,
    66: 264,
    67: 268,
    68: 272,
    69: 278,
    70: 280,
    71: 284,
    72: 288,
    73: 292,
    74: 296,
    75: 300,
    76: 304,
    77: 308,
    78: 312,
    79: 316,
    80: 320,
    81: 324,
    82: 328,
    83: 332,
    84: 336,
    85: 342,
    86: 344,
    87: 348,
    88: 352,
    89: 356,
    90: 360,
    91: 364,
    92: 368,
    93: 372,
    94: 376,
    95: 380,
    96: 384,
    97: 388,
    98: 392,
    99: 396,
    100: 400,
    160: 640,
    '-px': -1,
    '-0.5': 2,
    '-1': -4,
    '-1.5': -6,
    '-2': -8,
    '-2.5': -10,
    '-3': -12,
    '-3.5': -14,
    '-4': -16,
    '-5': -20,
    '-6': -24,
    '-6.5': -26,
    '-7': -28,
    '-8': -32,
    '-10': -40,
    '-12': -48,
    '-16': -64,
    '-20': -80,
    '-24': -96,
    '-25': -100,
    '-26': -104,
    '-27': -108,
    '-28': -112,
    '-29': -116,
    '-30': -120,
    '-32': -128,
    '-33': -132,
    '-34': -136,

  },
  color: {
    ...postfixObjKeys(APP_COLORS.lightColors, 'Light'),
    ...postfixObjKeys(APP_COLORS.darkColors, 'Dark'),
  },
});


const config = createTamagui({
  animations,

  defaultTheme: 'light',

  shouldAddPrefersColorThemes: false,

  themeClassNameOnRoot: false,

  shorthands,

  fonts: {
    body: font,
    heading: font,
    H4: fontH4,
  },

  themes: {
    light: {
      ...themes.light,
      ...APP_COLORS.lightColors,

      // override default theme
      // 'background': mergedTokens.color.bgAppLight,
      // 'backgroundHover': mergedTokens.color.bgHoverLight,
      // 'backgroundPress': mergedTokens.color.bgActiveLight,
      // 'backgroundFocus': mergedTokens.color.bgHoverLight,
      // 'backgroundTransparent': mergedTokens.color.transparentLight,
      // 'borderColor': mergedTokens.color.neutral4Light,
      // 'borderColorHover': mergedTokens.color.neutral5Light,
      // 'borderColorPress': mergedTokens.color.borderActiveLight,
      // 'borderColorFocus': mergedTokens.color.borderActiveLight,
      // 'color': mergedTokens.color.textLight,
      // 'colorHover': mergedTokens.color.textLight,
    },
    dark: {
      ...themes.dark,
      ...APP_COLORS.darkColors,

      // override default theme
      // 'background': mergedTokens.color.bgAppDark,
      // 'backgroundHover': mergedTokens.color.bgHoverDark,
      // 'backgroundPress': mergedTokens.color.bgActiveDark,
      // 'backgroundFocus': mergedTokens.color.neutral5Dark,
      // 'backgroundTransparent': mergedTokens.color.transparentDark,
      // 'borderColor': mergedTokens.color.neutral4Dark,
      // 'borderColorHover': mergedTokens.color.neutral5Dark,
      // 'borderColorPress': mergedTokens.color.borderActiveDark,
      // 'borderColorFocus': mergedTokens.color.borderActiveDark,
      // 'color': mergedTokens.color.textDark,
      // 'colorHover': mergedTokens.color.textDark,
    },
  },

  tokens: mergedTokens,

  media: createMedia({
    sm: { maxWidth: 639 },
    gtSm: { minWidth: 640 },
    md: { maxWidth: 767 },
    gtMd: { minWidth: 768 },
    lg: { maxWidth: 1023 },
    gtLg: { minWidth: 1024 },
    xl: { maxWidth: 1279 },
    gtXl: { minWidth: 1280 },
    '2xl': { maxWidth: 1535 },
    'gt2xl': { minWidth: 1536 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TamaguiCustomConfig extends AppConfig { }
}

export default config;
