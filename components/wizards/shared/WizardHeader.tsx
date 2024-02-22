import React from 'react'
//UI Lib.
import { YStack, Text, IKeyOfIcons } from '@ui'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
//Common Lib.
import { CircleIconButton } from '../../buttons'

export interface IWizzardHeaderProps {
  icon?: IKeyOfIcons
  svg?: IKeyOfIcons
  description: string
  title: string
}

const WizardHeader: React.FC<IWizzardHeaderProps> = ({ description, icon, title }) => {
  return (
    <YStack alignItems={'center'} marginBottom={'$13'}>
      {icon && <CircleIconButton variant="primary" icon={icon} />}

      <Text {...TEXT_OPTIONS.H4} color={'$grayscale900'}>
        {title}
      </Text>

      <Text textAlign={'center'} marginTop={'$space.3'} color={'$grayscale600'} {...TEXT_OPTIONS.BodyRegularM}>
        {description}
      </Text>
    </YStack>
  )
}

export default WizardHeader
