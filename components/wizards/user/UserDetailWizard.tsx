// React
import React, { useState } from 'react'
//UI Lib.
import { Stack } from '@ui'

const UserDetailWizard = () => {
  const [stepIndex, setStepIndex] = useState(0)

  // const step = useMemo<{
  //   component?: React.ReactNode
  //   title?: string
  //   icon?: IKeyOfIcons
  // }>(() => {
  //   switch (stepIndex) {
  //     case 0:
  //       return {
  //         component: (
  //           <EnterPhoneStep
  //             // @todo-REPLACEMENT GET hardcoded string from messages
  //             onConfirm={() => setStepIndex((prev) => prev + 1)}
  //             description="Kodunuzu telefonunuza gönderdik."
  //           />
  //         ),

  //         title: 'Telefon Numaranı Gir',
  //         icon: 'PhoneCustomIcon',
  //       }
  //     case 1:
  //       return {
  //         component: (
  //           <OTPVerifyStep
  //             onConfirm={() => setStepIndex((prev) => prev + 1)}
  //             // @todo-REPLACEMENT GET hardcoded string from messages
  //             description="Kodunuzu telefonunuza gönderdik."
  //             phone="+90 555 *** 55 55"
  //             counter="03:15"
  //           />
  //         ),
  //         title: 'Numaranı Doğrula',
  //         icon: 'PhoneCustomIcon',
  //       }

  //     default:
  //       return {
  //         component: (
  //           <EnterPhoneStep
  //             // @todo-REPLACEMENT GET hardcoded string from messages
  //             onConfirm={() => setStepIndex((prev) => prev + 1)}
  //             description="Kodunuzu telefonunuza gönderdik."
  //           />
  //         ),
  //         title: 'Telefon Numaranı Gir',
  //         icon: 'PhoneCustomIcon',
  //       }
  //   }
  // }, [stepIndex])

  return <Stack>{null}</Stack>
}

export default UserDetailWizard
