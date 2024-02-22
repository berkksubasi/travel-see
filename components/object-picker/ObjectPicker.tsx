import React, { useState } from 'react'
//UI Lib.
import { YStack, Text, Icon, XStack, IKeyOfIcons } from '@ui'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
import { map } from 'lodash'

interface ObjectPickerProps {
  label?: string
  description?: string
  icon?: IKeyOfIcons
  active?: boolean
  variant?: 'vehicle' | 'store' | 'tag' | 'ad'
}

const ObjectPickerContents: ObjectPickerProps[] = [
  {
    label: 'Araç',
    description: 'Araba gemi motor gibi\naraçlarınıza\nsize bilgi versinler',
    icon: 'VehicleIcon',
    variant: 'vehicle',
    active: true,
  },
  {
    label: 'Mekan',
    description: 'Ev ofis fabrika gibi\nalanlarda siz yokken\nsize ulaşabilsinler',
    icon: 'StoreIcon',
    variant: 'store',
    active: false,
  },
  {
    label: 'Tasma',
    description: 'Bazen evcil hayvanlar\nistemeden bizden\nuzaklaşabiliyor.',
    icon: 'TagIcon',
    variant: 'tag',
    active: false,
  },
  {
    label: 'İlan',
    description: 'Satış yapmak için ilan birebir.',
    icon: 'AdIcon',
    variant: 'ad',
    active: false,
  },
]

const ObjectPicker: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const toggleSelection = (index: number) => {
    if (ObjectPickerContents[index]?.active) {
      setSelectedItems((prevSelectedItems) => {
        if (prevSelectedItems.includes(index)) {
          return prevSelectedItems.filter((item) => item !== index)
        } else {
          return [...prevSelectedItems, index]
        }
      })
    }
  }

  const isItemSelected = (index: number) =>
    ObjectPickerContents[index]?.active && selectedItems.includes(index)

  return (
    <XStack alignItems={'center'} width={'100%'} justifyContent={'center'} gap={'$2'} flex={1} flexWrap="wrap">
      {map(ObjectPickerContents, (item, index) => (
        <YStack
          key={item.variant}
          width={'$40'}
          height={'$40'}
          gap={'$2'}
          p={'$4'}
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={isItemSelected(index) ? '$primaryAlpha25' : '$white'}
          borderRadius={'$4'}
          borderColor={isItemSelected(index) ? '$primary' : '$primaryAlpha25'}
          borderWidth={'$px'}
          onPress={() => toggleSelection(index)}
        >
          <XStack
            width={'$10.5'}
            height={'$10.5'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={'$2'}
            backgroundColor={isItemSelected(index) ? '$white' : '$primary008'}
          >
            <Icon name={item.icon} size={'$6'} color={'$primary'} />
          </XStack>

          <Text {...TEXT_OPTIONS.BodyMediumL} color={'$grayscale900'}>
            {item.label}
          </Text>

          <Text textAlign={'center'} {...TEXT_OPTIONS.BodyRegularS} color={'$grayscale600'}>
            {item.description}
          </Text>
        </YStack>
      ))}
    </XStack>
  )
}

export default ObjectPicker
