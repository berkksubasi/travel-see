import React from 'react'
//UI Lib.
import { IconButton } from '@ui'


interface IProps {
  onClick?: () => void
}
const ButtonSetting: React.FC<IProps> = ({ onClick }) => {

  const handleBackClick = () => {
    if (onClick) {
      onClick()
    } else {
    }
  }

  return (
    <IconButton
      backgroundColor={'$transparent'}
      borderWidth={0}
      onPress={handleBackClick}
      // iconColor="$black"
      // @todo fix-icon
      icon="AccountSecondaryIcon"
    />
  )
}

export default ButtonSetting
