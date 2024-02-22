import React from 'react'
//UI Lib.
import { Icon, Text, YStack } from '@ui'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'

const EmptyIndicator = () => {
  return (
    <YStack width={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Icon name="EmptyIndicator" color={'$grayscale200'} size={'$16'} />
      <Text {...TEXT_OPTIONS.BodyRegularM} color={'$grayscale400'}>
        Henüz Taratınız yok!
      </Text>
    </YStack>
  )
}

export default EmptyIndicator
