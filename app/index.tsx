import 'core-js/stable/atob';
import React from 'react';
import useAppImages from '@hooks/useAppImages';
import {
    LoginButton,
    RegisterButton,
    ScreenContainer,
} from '@/components';
// Constants
import {TEXT_OPTIONS} from '@/constants';
import {Image, Stack, Text, YStack} from '@ui';

// Common Components

// Lib Components

export default function WelcomeScreen() {
    const {welcomeBg} = useAppImages();

    return (
        <ScreenContainer
            verticalPadding
            horizontalPadding
        >
            <YStack
                h="100%"
                style={{
                    width: '100%',
                    position: 'relative',
                }}
                justifyContent="space-around"
                alignItems="center"
            >
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    gap="$10"
                >
                    {/* LOGO */}
                    <YStack
                        gap="$5"
                        alignItems="center"
                    >
                        <Image
                            width={175}
                            height={175}
                            source={welcomeBg}
                        />
                        <Text
                            textAlign="center"
                            p="$6"
                            {...TEXT_OPTIONS.H1}
                        >
                            Travel Seeee
                        </Text>
                    </YStack>
                </Stack>

                {/* Button */}
                <YStack
                    w="100%"
                    gap="$4"
                >
                    <LoginButton />
                    <RegisterButton />
                </YStack>
            </YStack>
        </ScreenContainer>
    );
}
