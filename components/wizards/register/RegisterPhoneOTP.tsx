import React from 'react'
//UI Lib
import { Input, YStack } from '@ui'
//Context
import {
  useRegisterStateContext,
  useRegisterApiContext,
} from '@context/registerContext'

const RegisterPhoneOTP = () => {
  const { data: registerState, validation } = useRegisterStateContext()
  const { setData } = useRegisterApiContext()

  const handleInputChange = (val: string, key: string) => {
    const tempState = { ...registerState }
    tempState[key] = val
    setData(tempState)
  }

  return (
    <YStack>
      <Input
        // name="phone"
        // onChange={handleInputChange}
        // icon="call"
        error={validation.phone}
        value={registerState.phone}
        placeholder="Telefon Numarası"
      />
    </YStack>
  )
}

export default RegisterPhoneOTP
