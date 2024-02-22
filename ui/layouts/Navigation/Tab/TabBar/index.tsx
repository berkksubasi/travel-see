import { useMedia } from 'tamagui'

import MobileBottomTabBar from './MobileBottomTabBar'

import type { ITabNavigatorExtraConfig } from '../../Navigator/types'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs/types'

export default function TabBar({
  ...props
}: BottomTabBarProps & {
  extraConfig?: ITabNavigatorExtraConfig<string>
}) {
  const media = useMedia()

  if (media.md) {
    return <MobileBottomTabBar {...props} />
  }
}
