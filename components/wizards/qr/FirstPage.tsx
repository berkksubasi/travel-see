import React from 'react'
// Lib
import { Text, YStack, Stack, Button } from '@ui'
// Common
import { ScreenContainer } from '@components/containers'
// Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
import { map } from 'lodash'

interface ButtonsProps {
  title: string
  color: string
  variant: 'primary' | 'tertiary'
}

export default function FirstPage() {
  const buttons: ButtonsProps[] = [
    {
      title: 'Başla',
      variant: 'primary',
      color: '$white',
    },
    {
      title: 'İptal',
      variant: 'tertiary',
      color: '$black',
    },
  ]

  return (
    <ScreenContainer verticalPadding={true}>
      <YStack justifyContent="space-between" alignItems="center">
        <Stack>
          {/* @todo fix-icon */}
          {/* <QrWizardFirstPageSVG /> */}
        </Stack>

        <Stack gap={'$17'} width="100%">
          <Stack gap={'$4'}>
            <Text {...TEXT_OPTIONS.H4} color={'$grayscale900'} textAlign={'center'}>
              Başarı ile TARAT'ın
            </Text>
            <Text {...TEXT_OPTIONS.BodyRegularL} color={'$grayscale600'} textAlign={'center'}>
              Şimdi taratını kullanan insanları bilgilendirmek için siharbazı kullanarak tamamla.
            </Text>
          </Stack>
          <Stack gap={'$6'}>
            {map(buttons, (item, index) => (
              <Button borderColor={'$transparent'} key={index} size="large" variant={item.variant}>
                <Text color={item.color} {...TEXT_OPTIONS.BodySemiBoldL}>
                  {item.title}
                </Text>
              </Button>
            ))}
          </Stack>
        </Stack>
      </YStack>
    </ScreenContainer>
  )
}
