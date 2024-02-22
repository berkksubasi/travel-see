//React
import {router} from 'expo-router';
//Lodash
import {map} from 'lodash';
import React, {useMemo} from 'react';
//React-Native
import {useWindowDimensions} from 'react-native';
import type {IRegisterResultButton} from '@components/wizards/register/RegisterWizard';
import SuccessSVG from '@ui/primitives/Icon/svg/SuccessSVG';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {APP_CONFIG} from '@constants';
//Hooks
import {useAppImages, useAppRoutes} from '@hooks';
//UI Lib.
import {Button, Image, Stack, Text, YStack} from '@ui';
import ScannedQrBgSVG from '@ui/primitives/Icon/svg/ScannedQrBgSVG';

interface IProps {
    buttons?: IRegisterResultButton[];
    status?: 'success' | 'error';
    title?: string;
    message?: string;
}

const StatusResultContent: React.FC<IProps> = ({
    status,
    buttons,
    title,
    message,
}) => {
    const {width} = useWindowDimensions();
    const {height} = useWindowDimensions();

    return (
        <YStack
            height={'100%'}
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'$space.6'}
        >
            {/* BACKGROUND */}
            <Stack
                width={'100%'}
                height={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
                position="absolute"
                zIndex={-1}
                
            >
                <ScannedQrBgSVG />
            </Stack>

            {/* AVATAR */}
            <Stack
                width="$size.32"
                height="$size.32"
                justifyContent="center"
                alignItems={'center'}
            >
                <Stack
                    marginBottom={'$space.4'}
                    padding="$space.0.5"
                    borderRadius={'$full'}
                >
                    <SuccessSVG />
                </Stack>
            </Stack>

            <YStack
                alignItems={'center'}
                gap={'$px'}
            >
                <Text
                    fontSize={'$heading2xl'}
                    fontWeight={'$heading5xl'}
                    color={'$text'}
                >
                    {title}
                </Text>
                <Text
                    marginBottom={'$space.18'}
                    color={'gray'}
                >
                    {message}
                </Text>
            </YStack>
            <Stack width={'100%'}>
                {map(buttons, (button, index) => (
                    <Button
                        size="large"
                        marginBottom={'$space.3'}
                        width={'100%'}
                        key={index}
                        variant={'secondary'}
                        onPress={button.onPress}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={
                                button.variant === 'secondary'
                                    ? '$black'
                                    : '$white'
                            }
                        >
                            {button.title}
                        </Text>
                    </Button>
                ))}
            </Stack>
        </YStack>
    );
};

export default StatusResultContent;
