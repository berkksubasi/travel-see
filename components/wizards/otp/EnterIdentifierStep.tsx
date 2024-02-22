import React from 'react'
//UI Lib.
import { Input, Text, YStack, Form, IKeyOfIcons, Stack } from '@ui'
//Constants
import { MESSAGES, TEXT_OPTIONS } from '@constants'
//React - HOOK
import type { UseFormReturn } from 'react-hook-form'
//Lodash
import { map } from 'lodash'

interface IInputMockType {
  label: string
  placeholder: string
  icon: IKeyOfIcons
}

interface IInputMock {
  username: IInputMockType
  email: IInputMockType
  phone: IInputMockType
}
const inputMock: IInputMock = {
  username: {
    label: 'johndoe',
    placeholder: 'Kullanıcı adı',
    icon: 'UserIcon',
  },
  email: {
    label: 'ör. johndoe@gmail.com',
    placeholder: 'E-posta adresi',
    icon: 'MailIcon',
  },
  phone: {
    label: '+90 555 555 55 55',
    placeholder: 'Telefon numarası',
    icon: 'PhoneIcon',
  },
}

interface IProps {
  verifyType?: 'email' | 'phone' | 'username'
  form: UseFormReturn<any, any, undefined>
}

const EnterIdentifierStep: React.FC<IProps> = ({ form, verifyType }) => {
  return (
    <YStack width={'100%'}>
      {map(inputMock, (item, key) => {
        if (verifyType === key) {
          return (
            <Stack key={key} marginBottom={'$space.6'}>
              <Form.Field
                rules={{
                  // @todo-REPLACEMENT replace hardcoded string with MESSAGES
                  required: {
                    value: true,
                    message: MESSAGES.KEY_MESSAGES[key] + ' alanı gereklidir.',
                  },
                  onChange: (e) => {
                    form.clearErrors(key)
                    form.setValue(key, e.target.value)
                  },
                }}
                name={key}
              >
                <Input
                  size="large"
                  leftIconName={inputMock[key]?.icon}
                  // onChange={handleInputChange}
                  // error={validation[key]}
                  placeholder={inputMock[key]?.placeholder}
                />

                <Text paddingHorizontal={'$4'} pt={'$1.5'} {...TEXT_OPTIONS.BodyRegularM} color={'$grayscale600'}>
                  {inputMock[key]?.label}
                </Text>
              </Form.Field>
            </Stack>
          )
        }
      })}
    </YStack>
  )
}

export default EnterIdentifierStep
