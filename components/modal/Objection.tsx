import React, {useState} from 'react';
import {Sheet} from 'tamagui';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {Button, Icon, Text, TextArea, XStack, YStack} from '@ui';

const Objection = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [messageLength, setMessageLength] = useState(0);
    const maxMessageLength = 100;

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    interface ButtonContentType {
        text: string;
        color: string;
        variant:
            | 'primary'
            | 'secondary'
            | 'tertiary'
            | 'destructive'
            | 'plain'
            | undefined;
        onPress?: () => void;
    }

    const buttons: ButtonContentType[] = [
        {
            text: 'Gönder',
            color: '$grayscale900',
            variant: 'primary',
        },
        {
            text: 'Kapat',
            color: '$grayscale900',
            variant: 'secondary',
            onPress: () => handleCloseModal(),
        },
    ];

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
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={'$grayscale900'}
                            ta={'center'}
                        >
                            Askıya alınan Taratınızı geri
                            aktifleştirin
                        </Text>
                        <YStack
                            width={'100%'}
                            gap={'$2'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale500'}
                                ta={'left'}
                                pl={'$4'}
                            >
                                İtiraz
                            </Text>
                            <YStack
                                h={'$27'}
                                pb={'$4'}
                                pt={'$2.5'}
                                px={'$1'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
                                borderColor={'$grayscale200'}
                            >
                                <TextArea
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    textAlignVertical="top"
                                    bg={'$transparent'}
                                    borderWidth={'$0'}
                                    placeholder="Nedeninizi açıklayınz..."
                                    maxLength={maxMessageLength}
                                    onChange={(text) => {
                                        setMessageLength(
                                            text.nativeEvent.text
                                                .length,
                                        );
                                    }}
                                />
                                <XStack
                                    justifyContent={'flex-end'}
                                    px={'$3'}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodyRegularS}
                                        color={
                                            messageLength >=
                                            maxMessageLength
                                                ? '$error'
                                                : '$grayscale500'
                                        }
                                    >
                                        {messageLength}/
                                        {maxMessageLength}
                                    </Text>
                                </XStack>
                            </YStack>
                        </YStack>
                        <YStack
                            ai={'flex-start'}
                            gap={'$3'}
                            w={'100%'}
                        >
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    onPress={button.onPress}
                                    width={'100%'}
                                    variant={button.variant}
                                    py={'$4'}
                                    px={'$8'}
                                    borderRadius={'$4'}
                                    borderWidth={'$px'}
                                >
                                    <XStack
                                        ai={'center'}
                                        gap={'$2'}
                                    >
                                        <Text
                                            {...TEXT_OPTIONS.BodyMediumL}
                                            color={button.color}
                                        >
                                            {button.text}
                                        </Text>
                                    </XStack>
                                </Button>
                            ))}
                        </YStack>
                    </YStack>
                </YStack>
            </YStack>
        </Sheet>
    );
};

export default Objection;
