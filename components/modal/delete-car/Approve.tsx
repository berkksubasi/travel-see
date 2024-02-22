import React, {useState} from 'react';
import {Sheet} from 'tamagui';
import {Input} from '@ui/forms';
import {Button, Icon, Text, XStack, YStack} from '@ui/primitives';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

const Approve = () => {
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
                            gap={'$3'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldL}
                                color={'$grayscale900'}
                                ta={'center'}
                            >
                                Kullancı adınız girerek işlemi
                                onaylayın
                            </Text>
                            <XStack
                                py={'$3'}
                                px={'$4'}
                                ai={'center'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
                                borderColor={'$primary05'}
                                bg={'$primary008'}
                            >
                                <Text
                                    {...TEXT_OPTIONS.BodyRegularM}
                                    color={'$grayscale600'}
                                >
                                    T**********
                                </Text>
                            </XStack>
                        </YStack>
                        <Input
                            placeholder="Kullanıcı Adı"
                            leftIconName="UserIcon"
                            size="large"
                        />
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
                                borderColor={'$grayscale300'}
                                variant="primary"
                            >
                                <XStack
                                    ai={'center'}
                                    gap={'$2'}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodyMediumM}
                                        color={'$white'}
                                    >
                                        Onayla
                                    </Text>
                                </XStack>
                            </Button>
                            <Button
                                width={'100%'}
                                py={'$1.5'}
                                px={'$8'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
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
                                        İptal
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

export default Approve;
