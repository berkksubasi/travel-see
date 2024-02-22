import React from 'react'
//React-Native
import { Dimensions } from 'react-native'
//Containers
import { ScreenContainer } from '../../containers'
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS'
//UI lib.
import { YStack, Text, Button, Stack } from '@ui'
//Wizards
import { WizardHeader } from '../../wizards'
import { IWizzardHeaderProps } from '../../wizards/shared/WizardHeader'

interface IProps {
  children: React.ReactNode
  stepIndex: number
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  isNextDisabled: boolean
  headerProps?: IWizzardHeaderProps
  setParentStepIndex?: React.Dispatch<React.SetStateAction<number>>
}

const WizardFormLayout: React.FC<IProps> = ({
  children,
  stepIndex,
  setStepIndex,
  isNextDisabled,
  headerProps,
  setParentStepIndex,
}) => {
  const handlePrev = () => {
    setStepIndex(stepIndex - 1)
  }

  const handleNext = () => {
    if (stepIndex === 0) {
      setStepIndex(stepIndex + 1)
    }
  }

  return (
    <ScreenContainer
      customGoBackEvent={
        stepIndex === 0
          ? setParentStepIndex
            ? () => setParentStepIndex((p) => p - 1)
            : undefined
          : handlePrev
      }
      showGoBackButton={true}
    >
      <YStack height={'100%'} alignItems="center">
        {headerProps && <WizardHeader {...headerProps} />}

        <Stack width={'100%'} height={Dimensions.get('window').height - 500}>
          {children}
        </Stack>

        <Button
          onPress={handleNext}
          disabled={isNextDisabled}
          size="large"
          width={'100%'}
          variant="primary"
        >
          <Text {...TEXT_OPTIONS.BodySemiBoldL} color="$white">
            DEVAM ET
          </Text>
        </Button>
      </YStack>
    </ScreenContainer>
  )
}

export default WizardFormLayout
