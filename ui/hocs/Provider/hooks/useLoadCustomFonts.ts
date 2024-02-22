import { useFonts } from 'expo-font';

const customFont = {
  'BR_Shape_Bold': require('../fonts/BR_Shape_Bold.otf'),
  'BR_Shape_Regular': require('../fonts/BR_Shape_Regular.otf'),
  'BR_Shape_Medium': require('../fonts/BR_Shape_Medium.otf'),
  'BR_Shape_Light': require('../fonts/BR_Shape_Semi_Bold.otf'),
};

export default function useLoadCustomFonts() {
  return useFonts(customFont);
}
