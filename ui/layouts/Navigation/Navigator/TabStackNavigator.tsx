import { memo, useCallback, useMemo } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useMedia } from 'tamagui'

import { useThemeValue } from '../../../hooks'
import { makeTabScreenOptions } from '../GlobalScreenOptions'
import { createStackNavigator } from '../StackNavigator'
import NavigationBar from '../Tab/TabBar'

import type { ITabNavigatorProps, ITabSubNavigatorConfig } from './types'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs/types'

const Stack = createStackNavigator()

function TabSubStackNavigator({ config }: { config: ITabSubNavigatorConfig<string, any>[] }) {
  const [bgColor, titleColor] = useThemeValue(['bgApp', 'text'])
  return (
    <Stack.Navigator>
      {config
        .filter(({ disable }) => !disable)
        .map(({ name, component, headerShown = true }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={({ navigation }: { navigation: any }) => ({
              freezeOnBlur: true,
              headerShown,
              // @todo fix
              title: 'Title Plesace fix',
              ...makeTabScreenOptions({ navigation, bgColor, titleColor }),
            })}
          />
        ))}
    </Stack.Navigator>
  )
}

const TabSubStackNavigatorMemo = memo(TabSubStackNavigator)

const Tab = createBottomTabNavigator()

export function TabStackNavigator<RouteName extends string>({
  config,
  extraConfig,
}: ITabNavigatorProps<RouteName>) {
  const media = useMedia()

  const tabBarCallback = useCallback(
    (props: BottomTabBarProps) => <NavigationBar {...props} extraConfig={extraConfig} />,
    [extraConfig]
  )

  const tabComponents = useMemo(
    () =>
      config
        .filter(({ disable }) => !disable)
        .map(({ children, ...options }) => ({
          ...options,
          // eslint-disable-next-line react/no-unstable-nested-components
          children: () => <TabSubStackNavigatorMemo config={children} />,
        })),
    [config]
  )

  const tabScreens = tabComponents.map(({ name, children, ...options }) => (
    <Tab.Screen
      key={name}
      name={name}
      options={{
        ...options,
        // @todo fix
        tabBarLabel: 'Label message',
        // @ts-expect-error BottomTabBar V7
        tabBarPosition: media.md ? 'bottom' : 'left',
      }}
    >
      {children}
    </Tab.Screen>
  ))

  if (extraConfig) {
    const children = () => <TabSubStackNavigatorMemo config={extraConfig.children} />
    tabScreens.push(
      <Tab.Screen
        key={extraConfig.name}
        name={extraConfig.name}
        options={{
          freezeOnBlur: true,
          // @ts-expect-error BottomTabBar V7
          tabBarPosition: 'left',
        }}
      >
        {children}
      </Tab.Screen>
    )
  }
  return (
    <Tab.Navigator
      tabBar={tabBarCallback}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        // Native Load all tabs at once
        // Web Lazy load
        // lazy: !platformEnv.isNative,
      }}
    >
      {tabScreens}
    </Tab.Navigator>
  )
}
