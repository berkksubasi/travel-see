import React from 'react';
import {Avatar} from 'tamagui';
import useAppImages from '@hooks/useAppImages';
import {Button, Stack, Text, XStack, YStack} from '@ui/primitives';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

const OrderCard = () => {
    const {userAvatar} = useAppImages();
    return (
        <XStack
            {...APP_SHADOWS.small}
            w={'100%'}
            py={'$2'}
            px={'$3'}
            jc={'space-between'}
            flex={1}
            ai={'center'}
            borderRadius={'$4'}
            borderColor={'$grayscale50'}
            borderWidth={'$px'}
            backgroundColor={'$white'}
        >
            <XStack
                ai={'center'}
                gap={'$2.5'}
            >
                <Stack
                    width={3}
                    height={'$5'}
                    backgroundColor={'$primary'}
                    borderRadius={'$full'}
                />
                <Avatar>
                    <Avatar.Image source={userAvatar} />
                </Avatar>
                <YStack
                    jc={'center'}
                    ai={'flex-start'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={'$grayscale900'}
                    >
                        Upgrade Package
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyMediumM}
                        color={'$grayscale700'}
                    >
                        "Free Plan"
                    </Text>
                </YStack>
            </XStack>

            <Button
                borderRadius={'$4'}
                variant="primary"
                ai={'center'}
                jc={'center'}
            >
                <Stack>
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$white'}
                        textAlign="center"
                    >
                        Buy
                    </Text>
                </Stack>
            </Button>
        </XStack>
    );
};

export default OrderCard;
