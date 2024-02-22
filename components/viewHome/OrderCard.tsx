import React from 'react';
import {Button, Stack, Text, XStack, YStack} from '@ui/primitives';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

const OrderCard = () => {
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
                <YStack
                    jc={'center'}
                    ai={'flex-start'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={'$grayscale700'}
                    >
                        Henüz QR'ınız bulunmamaktadır
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyMediumM}
                        color={'$grayscale900'}
                    >
                        QR Satın Alın
                    </Text>
                </YStack>
            </XStack>

            <Button
                borderRadius={'$4'}
                variant="primary"
            >
                <Stack>
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$white'}
                    >
                        Satın Al
                    </Text>
                </Stack>
            </Button>
        </XStack>
    );
};

export default OrderCard;
