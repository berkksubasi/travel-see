import React from 'react'
//UI Lib.
import { Button, IKeyOfIcons, Stack, Text, XStack, YStack } from '@ui'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
//Common Components
import { ScreenContainer } from '../../containers'
import { ObjectPicker } from '../../object-picker'
//Lodash
import { map } from 'lodash'

interface IButton {
  label: string
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
  mb?: string
  borderColor?: string
  backgroundColor?: string
  iconAfter?: IKeyOfIcons
}

const SecondPage = () => {
  const onButtonPress = () => {
    console.log('Button pressed!')
  }

  const buttons: IButton[] = [
    {
      label: 'Sonraki',
      variant: 'primary',
      size: 'large',
      mb: '$4',
      iconAfter: 'ChevronRightIcon',
    },
    {
      label: 'İptal',
      borderColor: '$transparent',
      backgroundColor: '$transparent',
      variant: 'secondary',
      size: 'large',
      mb: '$4',
    },
  ]

  return (
    <ScreenContainer showGoBackButton={true}>
      <YStack width={'100%'} height={'100%'} alignItems={'center'} marginTop={'$5'} justifyContent={'space-between'}>
        <Stack alignItems={'center'} width={'100%'}>
          <YStack alignItems={'center'} gap={'$4'}>
            <Text color={'$grayscale900'} {...TEXT_OPTIONS.H4}>
              Senin TARAT’ın hangisi?
            </Text>
            <Text textAlign={'center'} color={'$grayscale600'} {...TEXT_OPTIONS.BodyRegularL}>
              Bilgileri kolayca girebilmen için TARAT’ı tiplere ayırdık bu sayede bilgilerini
              girebilirsin.
            </Text>
          </YStack>

          <XStack marginTop={'$10'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
            <ObjectPicker />
          </XStack>
        </Stack>
        <YStack width={'100%'} alignItems={'center'}>
          {map(buttons, (button, index) => (
            <Button
              width={'100%'}
              key={index}
              variant={button.variant}
              size={button.size}
              marginBottom={button.mb}
              iconAfter={button.iconAfter}
              borderColor={button.borderColor}
              backgroundColor={button.backgroundColor}
              onPress={onButtonPress}
            >
              {button.label}
            </Button>
          ))}
        </YStack>
      </YStack>
    </ScreenContainer>
  )
}

export default SecondPage