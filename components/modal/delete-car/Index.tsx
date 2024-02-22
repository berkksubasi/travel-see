import React, {useState} from 'react';
import {Sheet} from 'tamagui';
import {Button, Icon, Text, XStack, YStack} from '@ui/primitives';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

const Index = () => {
    const [modalOpen, setModalOpen] = useState(true);

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <Sheet
            open={modalOpen}
            animation={'medium'}
            defaultOpen={modalOpen}
            modal={true}
        >
            <Sheet.Overlay backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <YStack px={'$10'}>
                <YStack
                    display="inline-flex"
                    p={'$6'}
                    ai={'flex-end'}
                    borderRadius={'$8'}
                    borderWidth={'$px'}
                    borderColor={'$grayscale100'}
                    bg={'$white'}
                    {...APP_SHADOWS.medium}
                    top={'25%'}
                >
                    <XStack
                        alignSelf={'flex-end'}
                        onPress={handleCloseModal}
                    >
                        <Icon
                            name="CloseIcon"
                            color={'$grayscale900'}
                        />
                    </XStack>
                    <YStack
                        jc={'center'}
                        ai={'center'}
                        gap={'$6'}
                        w={'100%'}
                    >
                        <YStack
                            ai={'center'}
                            jc={'center'}
                            gap={'$4'}
                        >
                            <Text
                                {...TEXT_OPTIONS.Body2Xl}
                                color={'$grayscale900'}
                            >
                                Tebrikler!
                            </Text>
                            <Text
                                {...TEXT_OPTIONS.BodyMediumL}
                                color={'$grayscale900'}
                                ta={'center'}
                            >
                                Hangi işlemi yapmak istiyorsunuz?
                            </Text>
                        </YStack>
                        <YStack
                            ai={'flex-start'}
                            gap={'$3'}
                            w={'100%'}
                        >
                            <Button
                                width={'100%'}
                                py={'$4'}
                                px={'$8'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
                                borderColor={'$primary'}
                                variant="secondary"
                            >
                                <XStack
                                    ai={'center'}
                                    gap={'$2'}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodyMediumM}
                                        color={'$black'}
                                    >
                                        Hesabımı silmek istiyorum
                                    </Text>
                                </XStack>
                            </Button>
                            <Button
                                width={'100%'}
                                py={'$4'}
                                px={'$8'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
                                variant="primary"
                            >
                                <XStack
                                    ai={'center'}
                                    gap={'$2'}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodyMediumM}
                                        color={'$white'}
                                        ta={'center'}
                                    >
                                        Sadece QR'ı silmek istiyorum
                                    </Text>
                                </XStack>
                            </Button>
                        </YStack>
                    </YStack>
                </YStack>
            </YStack>
        </Sheet>
    );
};

export default Index;
