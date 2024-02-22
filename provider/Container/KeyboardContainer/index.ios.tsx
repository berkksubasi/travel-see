import { useLayoutEffect } from 'react'

import KeyboardManager from 'react-native-keyboard-manager'

export function KeyboardContainer() {
  useLayoutEffect(() => {
    // 暂时关闭 IQKeyboardManager, 因为 Modal 上的 textField 会让最底层的 View 跟着键盘移动
    // KeyboardManager.setEnable(false)
    // KeyboardManager.setEnableDebugging(false)
    // // KeyboardManager.setKeyboardDistanceFromTextField(10)
    // KeyboardManager.setLayoutIfNeededOnUpdate(true)
    // KeyboardManager.setEnableAutoToolbar(true)
    // KeyboardManager.setToolbarDoneBarButtonItemText(
    //   // @todo fix
    //   'done'
    // )
    // KeyboardManager.setToolbarPreviousNextButtonEnable(false)
    // KeyboardManager.setKeyboardAppearance('default')
    // KeyboardManager.setShouldPlayInputClicks(true)
  }, [])
  return null
}
