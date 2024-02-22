import React from 'react'
//UI Lib.
import { Button, IconButton, IKeyOfIcons, Text, XStack, YStack, ColorTokens } from '@ui'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'

interface IProps {
  title?: string
  description: string
  isSelected?: boolean
  value: string
  icon?: IKeyOfIcons
  iconAfter?: IKeyOfIcons
  iconColor?: ColorTokens
  borderColor?: string
  handleClick: (value: string) => void
}
const RatioButton: React.FC<IProps> = ({
  isSelected = false,
  value,
  title,
  description,
  icon,
  iconColor,
  handleClick,
}) => {
  return (
    <Button
      onPress={() => handleClick(value)}
      alignItems="center"
      justifyContent="flex-start"
      paddingVertical="$3"
      paddingHorizontal="$4"
      style={{ height: 'auto' }}
      borderColor={isSelected ? '$grayscale200' && '$primary' : '$primary19'}
      backgroundColor={isSelected ? '$primary19' : '$background'}
      borderRadius={isSelected ? '$radius.4' && '$radius.2' : '$radius.4'}
    >
      <XStack alignItems="center" width={'100%'}>
        {icon && (
          <IconButton
            icon={icon}
            variant="tertiary"
            borderRadius={'$radius.2'}
            width={'$9'}
            height={'$9'}
          />
        )}
        <YStack ml="$space.5">
          <Text {...TEXT_OPTIONS.BodyMediumL} color={'$grayscale900'}>
            {title}
          </Text>
          <Text {...TEXT_OPTIONS.BodyRegularS} color={'$grayscale600'}>
            {description}
          </Text>
        </YStack>
      </XStack>
    </Button>
  )
}
export default RatioButton
