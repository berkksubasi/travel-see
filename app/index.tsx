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
        <ScreenContainer verticalPadding>
            <Stack
                width={width}
                alignItems={'center'}
                position="absolute"
                bottom={0}
            >
                <Image source={welcomeBg} />
            </Stack>
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
                        <Icon name="LogoSVG" />
                        <Icon name="LogoTextSVG" />
                    </YStack>

                    {/*Slogan */}
                    <Text
                        {...TEXT_OPTIONS.BodyRegularXl}
                        color={'$grayscale600'}
                        textAlign="center"
                        // {...homeLinkProps}
                    >
                        Hadi sen de{' '}
                        <Stack position={'relative'} alignItems='center' justifyContent='center'>
                            <Text
                                {...TEXT_OPTIONS.BodyRegularXl}
                                marginHorizontal="$space.1"
                                color={'$grayscale600'}
                            >
                                TARAT
                            </Text>
                            <Stack
                                zIndex={'$1'}
                                position={'absolute'}
                            >
                                <Icon
                                    width={66}
                                    height={24}
                                    name="TaratFrame"
                                />
                            </Stack>
                        </Stack>
                        {'\n'}
                        ile aracının kimliğini oluştur.
                    </Text>
                </Stack>

                {/*Button */}
                <YStack w={'100%'} gap={'$4'} mt={'$42'}>
                    <LoginButton />
                    <RegisterButton />
                </YStack>
            </YStack>
        </ScreenContainer>
    );
}
