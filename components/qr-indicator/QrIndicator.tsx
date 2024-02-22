import React from 'react';
import {Separator} from 'tamagui';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
//Hooks
import {useAppImages} from '@hooks';
//UI Lib.
import {Image, Stack, Text, XStack, YStack} from '@ui';
import {trimText} from '@utils/trimUtils';

const QrIndicator = () => {
    const {bigCar} = useAppImages();

    return (
        <YStack
            w={'$58'}
            p={'$3'}
            jc={'center'}
            ai={'center'}
            gap={'$2'}
            // @todo OGUZ: border radius verince dashed border görünmüyor baktım android desteklemiyormş falan filan sen bak

            borderRadius={'$4'}
            borderWidth={'$px'}
            borderColor={'$primary'}
            borderStyle="dashed"
            backgroundColor={'$primary02'}
        >
            <Text
                {...TEXT_OPTIONS.BodyMediumM}
                color={'$black'}
            >
                Okutulan Qr
            </Text>
            <Separator
                width={'80%'}
                borderColor={'$primary05'}
            />
            <XStack
                alignItems={'center'}
                jc={'space-between'}
                ai={'center'}
                alignSelf="stretch"
            >
                <XStack
                    jc={'center'}
                    ai={'center'}
                    gap={'$2'}
                >
                    <Stack
                        borderRadius={'$2'}
                        overflow="hidden"
                    >
                        <Image
                            width={'$9'}
                            height={'$9'}
                            flexShrink={0}
                            source={bigCar}
                        />
                    </Stack>
                    <YStack ai={'flex-start'}>
                        <Text
                            {...TEXT_OPTIONS.BodyMediumS}
                            color={'$grayscale900'}
                        >
                            Ev Arabam
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularXs}
                            color={'$grayscale500'}
                        >
                            {trimText(
                                'Benim güzel arabama hoşgeldiniz.',
                                'qrindicator',
                            )}
                        </Text>
                    </YStack>
                </XStack>

                <XStack
                    paddingHorizontal={'$2'}
                    ai={'flex-start'}
                    gap={'$2.5'}
                    borderWidth={'$px'}
                    borderColor={'$primary'}
                    borderRadius={'$11'}
                    backgroundColor={'$primary02'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyRegularXs}
                        color={'$grayscale800'}
                    >
                        Araç
                    </Text>
                </XStack>
            </XStack>
        </YStack>
    );
};

export default QrIndicator;
