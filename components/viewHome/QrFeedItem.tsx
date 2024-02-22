import {router} from 'expo-router';
import React from 'react';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
//Hooks
import {useAppImages} from '@hooks';
//UI Lib.
import {Divider, Icon, Image, Text, XStack, YStack} from '@ui';
import APP_CONFIG from '@constants/APP_CONFIG';

const QrFeedItem = ({
    plateNumber,
    brand,
    model,
    viewCount,
    likeCount,
    qrType,
    qrStatus,
    qrDescription,
}: {
    plateNumber: string;
    brand: string;
    model: string;
    viewCount: string;
    likeCount: string;
    qrType: string;
    qrStatus: string;
    qrDescription: string;
}) => {
    const {bigCar} = useAppImages();
    return (
        <YStack
            width={'100%'}
            padding={'$4'}
            borderWidth={'$px'}
            borderColor={'$grayscale200'}
            backgroundColor={'$white'}
            borderRadius={'$4'}
            onPress={() => {
                router.push(APP_CONFIG.APP_PATHS.SCANNED_QR);
            }}
        >
            <XStack justifyContent={'space-between'}>
                <XStack gap={'$4'}>
                    <Image
                        source={bigCar}
                        borderRadius={8}
                        width={'$17'}
                        height={'$17'}
                    />
                    <YStack
                        alignItems={'center'}
                        gap={'$2'}
                    >
                        <Text
                            color={'$grayscale900'}
                            {...TEXT_OPTIONS.BodyMediumM}
                        >
                            {plateNumber}
                        </Text>
                        <YStack
                            backgroundColor={'$grayscale50'}
                            paddingHorizontal={'$3'}
                            paddingVertical={'$px'}
                            borderRadius={'$2'}
                        >
                            <Text
                                color={'$grayscale900'}
                                {...TEXT_OPTIONS.BodyMediumM}
                            >
                                {brand}
                            </Text>
                            <Text
                                color={'$grayscale600'}
                                {...TEXT_OPTIONS.BodyMediumS}
                            >
                                {model}
                            </Text>
                        </YStack>
                    </YStack>
                </XStack>
                <YStack gap={'$4'}>
                    <XStack gap={'$2'}>
                        <XStack gap={'$px'}>
                            <Icon
                                name="ShowIcon"
                                color={'$grayscale400'}
                                //TODO OGUZ: $ sizes doesn't work replace after fix it
                                width={16}
                                height={16}
                            />
                            <Text
                                color={'$grayscale400'}
                                {...TEXT_OPTIONS.BodyMediumS}
                            >
                                {viewCount}
                            </Text>
                        </XStack>
                        <XStack gap={'$px'}>
                            <Icon
                                name="ThumbsUpFill"
                                color={'$grayscale400'}
                                width={16}
                                height={16}
                            />
                            <Text
                                color={'$grayscale400'}
                                {...TEXT_OPTIONS.BodyMediumS}
                            >
                                {likeCount}
                            </Text>
                        </XStack>
                    </XStack>
                    <XStack justifyContent={'flex-end'}>
                        <YStack
                            gap={'$1.5'}
                            alignItems={'center'}
                        >
                            <XStack
                                paddingHorizontal={'$2'}
                                borderColor={'$primary'}
                                borderWidth={'$px'}
                                borderRadius={'$11'}
                            >
                                <Text
                                    textAlign={'center'}
                                    color={'$grayscale800'}
                                    {...TEXT_OPTIONS.BodyRegularXs}
                                >
                                    {qrType}
                                </Text>
                            </XStack>
                            <XStack>
                                <Text
                                    textAlign={'center'}
                                    color={'$grayscale800'}
                                    {...TEXT_OPTIONS.BodyRegularXs}
                                >
                                    {qrStatus}
                                </Text>
                            </XStack>
                        </YStack>
                    </XStack>
                </YStack>
            </XStack>
            <Divider marginVertical={'$4'} />
            <XStack
                backgroundColor={'$grayscale50'}
                padding={'$3'}
                borderRadius={10}
                borderColor={'$grayscale100'}
                borderWidth={'$px'}
            >
                <Text
                    color={'$grayscale600'}
                    {...TEXT_OPTIONS.BodyMediumS}
                >
                    {qrDescription}
                </Text>
            </XStack>
        </YStack>
    );
};

export default QrFeedItem;
