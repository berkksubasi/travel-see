/* eslint-disable global-require */
import { Splash } from '@ui'
import type { PropsWithChildren } from 'react'
import { useCallback } from 'react'

// import backgroundApiProxy from '@onekeyhq/kit/background/instance/backgroundApiProxy';

const waitDataReady = () =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      // TODO：Hide the Splash View only when data is ready.
      resolve(true)
    }, 0)
  })

export function SplashProvider({ children }: PropsWithChildren<unknown>) {
  const handleReady = useCallback(() => waitDataReady(), [])
  return <Splash onReady={handleReady}>{children}</Splash>
}
