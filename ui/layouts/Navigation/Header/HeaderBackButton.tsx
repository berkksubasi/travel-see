import { memo } from 'react'

import { useIsVerticalLayout } from '../../../hooks'

import HeaderButtonGroup from './HeaderButtonGroup'
import HeaderCollapseButton from './HeaderCollapseButton'
import HeaderIconButton from './HeaderIconButton'

import type { IOnekeyStackHeaderProps } from './HeaderScreenOptions'
import type { HeaderBackButtonProps } from '@react-navigation/elements'
// import platformEnv from '@configuration/platformEnv'

function HeaderBackButton({
  isModelScreen,
  isRootScreen,
  canGoBack,
  disableClose,
  ...props
}: IOnekeyStackHeaderProps & HeaderBackButtonProps) {
  const isVerticalLayout = useIsVerticalLayout()

  const showCloseButton = isModelScreen && !isRootScreen && !canGoBack
  const showCollapseButton = isRootScreen && !isVerticalLayout
  const showBackButton = canGoBack || showCloseButton

  const renderBackButton = () => {
    if (canGoBack) {
      return (
        <HeaderIconButton
          onPress={props.onPress}
          // @todo use correct icon
          icon="CheckCircleIcon"
        // {...(platformEnv.isNativeIOS && { pressStyle: undefined })}
        />
      )
    }
    if (showCloseButton) {
      return (
        <HeaderIconButton
          onPress={props.onPress}
          testID="header-button-close"
          // @todo use correct icon
          icon="AccountCustomIcon"
        />
      )
    }
    return null
  }

  const renderCollapseButton = () =>
    showCollapseButton ? <HeaderCollapseButton isRootScreen={isRootScreen} /> : null

  // If neither button should be shown, return null early.
  if (!showCollapseButton && !showBackButton) {
    return null
  }

  return (
    <HeaderButtonGroup mr="$4">
      {renderCollapseButton()}
      {!disableClose && renderBackButton()}
    </HeaderButtonGroup>
  )
}

export default memo(HeaderBackButton)
