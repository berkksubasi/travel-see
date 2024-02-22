import React from 'react'
//Common Lib.
import { RegisterWizard } from '@components'
import { RegisterContextProvider } from '@context'
export default function SignUpScreen() {
    return (
        <RegisterContextProvider>
            <RegisterWizard />
        </RegisterContextProvider>
    )
}
