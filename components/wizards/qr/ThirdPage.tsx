//React
import React, { useState } from 'react'
//React-Native
import { Dimensions } from 'react-native'

//UI Lib.
import {
  Button,
  ColorTokens,
  IKeyOfIcons,
  Input,
  ScrollView,
  Select,
  Stack,
  Text,
  YStack,
  useForm,
} from '@ui'
//Common Components
import { ScreenContainer } from '../../containers'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
//Lodash
import { map } from 'lodash'

// @todo yağız km  fiyat input olacak
interface ISelectType {
  label: string
  title: string
  name: string
  defaultOpen: boolean
  defaultValue: string
  items: { label: string; value: string }[]
}

interface ISelectedType {
  [key: string]: string
}

interface IButton {
  label: string
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
  mb?: string
  borderColor?: ColorTokens
  backgroundColor?: ColorTokens
  iconAfter?: IKeyOfIcons
  color: ColorTokens
}

const buttons: IButton[] = [
  {
    label: 'Sonraki',
    variant: 'primary',
    size: 'large',
    iconAfter: 'ChevronRightIcon',
    color: '$white',
  },
  {
    label: 'İptal',
    borderColor: '$transparent',
    backgroundColor: '$white',
    variant: 'secondary',
    size: 'large',
    color: '$black',
  },
]

const ThirdPage = () => {
  const [selectedType, setSelectedType] = useState<ISelectedType>({})

  const handleInfoChange = (name: string, value: string) => {
    setSelectedType((prevSelectedType) => ({
      ...prevSelectedType,
      [name]: value,
    }))
  }

  const handleNextButtonClick = () => {
    console.log('Sonraki button clicked!', selectedType)
  }

  const type: ISelectType[] = [
    {
      label: 'Araç Tipi*',
      title: 'Araç Tipi Seçiniz',
      name: 'type',
      defaultOpen: false,
      defaultValue: 'Otomobil',
      items: ['Otomobil', 'Motosiklet', 'Ağır Vasıta', 'Diğer'].map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      label: 'Marka*',
      title: 'Marka Seçiniz',
      name: 'brand',
      defaultOpen: false,
      defaultValue: 'Audi',
      items: ['Mercedes', 'Fiat', 'Audi', 'Citroen'].map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      label: 'Model*',
      title: 'Model Seçiniz',
      name: 'model',
      defaultOpen: false,
      defaultValue: 'A5',
      items: ['Q2', 'A3', 'A4', 'A5'].map((item) => ({
        label: item,
        value: item,
      })),
    },
    {
      label: 'Plaka*',
      title: 'Plaka Giriniz',
      name: 'plate',
      defaultOpen: false,
      defaultValue: '',
      items: [],
    },
    {
      label: 'Km*',
      title: 'Km Giriniz',
      name: 'km',
      defaultOpen: false,
      defaultValue: '',
      items: [],
    },
    {
      label: 'Yıl*',
      title: 'Yıl Giriniz',
      name: 'year',
      defaultOpen: false,
      defaultValue: '',
      items: [],
    },
    {
      label: 'Fiyat*',
      title: 'Fiyat Giriniz',
      name: 'price',
      defaultOpen: false,
      defaultValue: '',
      items: [],
    },
    {
      label: 'Yakıt Türü*',
      title: 'Yakıt Türü Seçiniz',
      name: 'fuelType',
      defaultOpen: false,
      defaultValue: '',
      items: ['Benzin', 'Dizel', 'LPG', 'Elektrik'].map((item) => ({
        label: item,
        value: item,
      })),
    },
  ]

  const form = useForm()
  const getWindowHeight = Dimensions.get('window').height

  return (
    <ScreenContainer showGoBackButton={true} horizontalPadding={true} verticalPadding={true}>
      <YStack width={'100%'} height={'100%'}>
        <Stack alignItems={'center'} gap={'$4'}>
          <Text {...TEXT_OPTIONS.H4} color={'$grayscale900'}>
            Araç bilgilerini Doldur
          </Text>
          <Text textAlign={'center'} {...TEXT_OPTIONS.BodyRegularL} color={'$grayscale600'}>
            Aracın hakkında TARAT’ının bilgilenmesini sağla.
          </Text>
        </Stack>

        <Stack my={'$9'} height={getWindowHeight - 380}>
          {/* ScrollView Indicator should be fixed, also design of the modal when item selected in the Select component is not fit for this page.  */}
          <ScrollView>
            {map(type, (typeItem, index) => (
              <Stack alignItems={'center'} key={index} marginBottom={'$space.3'}>
                <Text
                  paddingHorizontal={'$3.5'}
                  alignSelf="baseline"
                  color={'$grayscale500'}
                  {...TEXT_OPTIONS.BodyMediumM}
                >
                  {typeItem.label}
                </Text>
                {typeItem.items.length > 0 ? (
                  <Select
                    key={index}
                    icon="ChevronDownIcon"
                    defaultOpen={false}
                    items={typeItem.items}
                    title={typeItem.title}
                    triggerProps={{ h: '$14', borderRadius: '$4' }}
                    defaultValue={typeItem.defaultValue}
                    onValueChange={(value) => handleInfoChange(typeItem.name, value)}
                  />
                ) : (
                  <Input
                    key={index}
                    borderRadius={'$4'}
                    paddingHorizontal={'$4'}
                    height={'$14'}
                    placeholder={typeItem.title}
                    onChange={(e) => handleInfoChange(typeItem.name, e.target.value)}
                  />
                )}
              </Stack>
            ))}
          </ScrollView>
        </Stack>

        <Stack>
          {map(buttons, (button, index) => (
            <Button
              key={index}
              variant={button.variant}
              size={button.size}
              width={'100%'}
              marginBottom={button.mb}
              borderColor={button.borderColor}
              backgroundColor={button.backgroundColor}
              iconAfter={button.iconAfter}
              onPress={button.label === 'Sonraki' ? handleNextButtonClick : undefined}
            >
              <Text {...TEXT_OPTIONS.BodySemiBoldL} color={button.color}>
                {button.label}
              </Text>
            </Button>
          ))}
        </Stack>
      </YStack>
    </ScreenContainer>
  )
}

export default ThirdPage
