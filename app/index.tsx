import 'core-js/stable/atob';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import useAppImages from '@hooks/useAppImages';
// Common Components
import {
    LoginButton,
    RegisterButton,
    ScreenContainer,
} from '@/components';
// Constants
import {APP_CONFIG, TEXT_OPTIONS} from '@/constants';
// Lib Components
import {Icon, Image, Stack, Text, YStack} from '@ui';

export default function WelcomeScreen() {
    const {width} = useWindowDimensions();
    const {welcomeBg} = useAppImages();

    return (
        <ScreenContainer
            verticalPadding={true}
            horizontalPadding={true}
        >
            <Stack
                width={width}
                alignItems={'center'}
                position="absolute"
                bottom={0}
            ></Stack>
            <YStack
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                }}
                justifyContent="space-around"
                alignItems="center"
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={'$10'}
                >
                    {/*LOGO*/}
                    <YStack
                        gap={'$5'}
                        alignItems="center"
                    >
                        <Image
                            width={175}
                            height={175}
                            source={welcomeBg}
                        />
                        <Text
                            textAlign="center"
                            p={'$6'}
                            {...TEXT_OPTIONS.H1}
                        >
                            Travel See
                        </Text>
                    </YStack>
                </Stack>

                {/*Button */}
                <YStack
                    w={'100%'}
                    gap={'$4'}
                >
                    <LoginButton />
                    <RegisterButton />
                </YStack>
            </YStack>
        </ScreenContainer>
    );
}
