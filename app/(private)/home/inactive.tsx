import React from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {ButtonGoBack, HeaderShown} from '@components';
import {QrCard, ScreenContainer} from '@components';
import {Text, XStack, YStack} from '@ui';

const inactive = () => {
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown variant="lined">
                <XStack gap={'$4'}>
                    <ButtonGoBack />
                    <Text {...TEXT_OPTIONS.BodySemiBold2XL}>
                        Pasif QR
                    </Text>
                </XStack>
            </HeaderShown>
            <YStack
                w={'100%'}
                h={'100%'}
                alignItems={'center'}
                backgroundColor={'$background'}
            >
                <QrCard
                    title={'Mercedes'}
                    qrDescription={'Satılık aracım'}
                    qrStatus={'Otomobil'}
                    qrType={'Araç'}
                />
                <QrCard
                    title={'Mercedes'}
                    qrDescription={'Satılık aracım'}
                    qrStatus={'Otomobil'}
                    qrType={'Araç'}
                />
                <QrCard
                    title={'Mercedes'}
                    qrDescription={'Satılık aracım'}
                    qrStatus={'Otomobil'}
                    qrType={'Araç'}
                />
            </YStack>
        </ScreenContainer>
    );
};

export default inactive;
