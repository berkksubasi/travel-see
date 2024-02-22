import type { ComponentType } from 'react'
import { memo, useCallback, useMemo } from 'react'

import { useThemeValue } from '../../../hooks'
import { NavigationContext } from '../context'
import { makeModalStackNavigatorOptions } from '../GlobalScreenOptions'
import createModalNavigator from '../Modal/createModalNavigator'
import { createStackNavigator } from '../StackNavigator'

import { hasStackNavigatorModal } from './CommonConfig'

import type { ICommonNavigatorConfig, IScreenOptionsInfo } from './types'
import type { INavigationContextType } from '../context'
import type { IModalNavigationOptions } from '../ScreenProps'
import type { ParamListBase } from '@react-navigation/routers'

export interface IModalFlowNavigatorConfig<RouteName extends string, P extends ParamListBase>
  extends ICommonNavigatorConfig<RouteName, P> {
  allowDisableClose?: boolean
  disableClose?: boolean
}

export const makeModalComponent =
  (Component: ComponentType<any>) =>
  // eslint-disable-next-line react/display-name
  (props: any) => {
    const value = useMemo(
      () =>
        ({
          pageType: 'modal',
        } as INavigationContextType),
      []
    )

    return (
      <NavigationContext.Provider value={value}>
        <Component {...props} pageType="modal" />
      </NavigationContext.Provider>
    )
  }

interface IModalFlowNavigatorProps<RouteName extends string, P extends ParamListBase> {
  config: IModalFlowNavigatorConfig<RouteName, P>[]
}

const ModalStack = hasStackNavigatorModal ? createStackNavigator() : createModalNavigator()

function ModalFlowNavigator<RouteName extends string, P extends ParamListBase>({
  config,
}: IModalFlowNavigatorProps<RouteName, P>) {
  const [bgColor, titleColor] = useThemeValue(['bgApp', 'text'])

  const makeScreenOptions = useCallback(
    (optionsInfo: IScreenOptionsInfo<any>) => ({
      ...makeModalStackNavigatorOptions({
        optionsInfo,
        bgColor,
        titleColor,
      }),
    }),
    [bgColor, titleColor]
  )

  return (
    // @ts-expect-error
    <ModalStack.Navigator screenOptions={makeScreenOptions}>
      {config.map(({ name, component, options, allowDisableClose, disableClose }) => {
        const customOptions: IModalNavigationOptions = {
          ...options,
          allowDisableClose,
          disableClose,
          // @todo fix
          title: 'Page Title',
        }

        return (
          <ModalStack.Screen
            key={`Modal-Flow-${name as string}`}
            name={name}
            component={makeModalComponent(component)}
            // @ts-expect-error
            options={customOptions}
          />
        )
      })}
    </ModalStack.Navigator>
  )
}

export default memo(ModalFlowNavigator)
