import type { ComponentType } from 'react'
import { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native'

import { useThemeValue } from '../../hooks'
import { XStack } from '../../primitives'

import type { IStackNavigationOptions } from '../Navigation'
import platformEnv from '../../../configuration/platformEnv'

export type IPageHeaderProps = IStackNavigationOptions

const usePageHeaderSearchOptions = (
  props: IPageHeaderProps,
  colorList: { searchTextColor: string }
) => {
  if (!props) {
    return props
  }

  const { headerSearchBarOptions } = props

  if (headerSearchBarOptions) {
    return {
      ...props,
      headerSearchBarOptions: {
        hideNavigationBar: false,
        hideWhenScrolling: false,
        // @todo fix
        cancelButtonText: 'Cancel Name',
        textColor: colorList.searchTextColor,
        tintColor: colorList.searchTextColor,
        ...headerSearchBarOptions,
      },
    }
  }
  return props
}

function HeaderRightContainerHOC(Component?: ComponentType) {
  if (!Component) {
    return null
  }
  // eslint-disable-next-line react/no-unstable-nested-components
  return function HeaderRightContainer(...props: any) {
    return (
      <XStack alignSelf="center">
        <Component {...props} />
      </XStack>
    )
  }
}

const useHeaderRightProps = (props: IPageHeaderProps) => {
  if (platformEnv.isNativeIOS) {
    return {
      ...props,
      headerRight: HeaderRightContainerHOC(props.headerRight as any),
    }
  }
  return props
}

const PageHeader = (props: IPageHeaderProps) => {
  const textColor = useThemeValue('text')
  const reloadOptions = usePageHeaderSearchOptions(props, {
    searchTextColor: textColor,
  })
  const headerProps = useHeaderRightProps(reloadOptions)
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions(headerProps)
  }, [navigation, headerProps])

  return null
}

PageHeader.usePageHeaderSearchOptions = usePageHeaderSearchOptions

export { PageHeader }
