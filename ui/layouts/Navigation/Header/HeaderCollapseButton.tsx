import { memo, useCallback } from 'react'

import { MotiView } from 'moti'
import { getTokenValue } from 'tamagui'

import useProviderSideBarValue from '../../../hocs/Provider/hooks/useProviderSideBarValue'

import HeaderIconButton from './HeaderIconButton'
// import platformEnv from '@configuration/platformEnv'

function HeaderCollapseButton({ isRootScreen = true }: { isRootScreen?: boolean }) {
  const { leftSidebarCollapsed: isCollapse, setLeftSidebarCollapsed: setIsCollapse } =
    useProviderSideBarValue()

  const onPressCall = useCallback(() => {
    setIsCollapse?.(!isCollapse)
  }, [isCollapse, setIsCollapse])

  const paddingLeft = getTokenValue(
    isRootScreen && isCollapse ? '$20' : '$0',
    'size'
  )
  return (
    <MotiView
      testID="Desktop-AppSideBar-Container"
      animate={{ paddingLeft }}
      transition={{
        type: 'spring',
        damping: 20,
        mass: 0.1,
      }}
    >
      {/* @todo use correct icon */}
      <HeaderIconButton onPress={onPressCall} icon="AdIcon" />
    </MotiView>
  )
}

export default memo(HeaderCollapseButton)
