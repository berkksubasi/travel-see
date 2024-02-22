import {map} from 'lodash';
import React, {useState} from 'react';
import {ColorTokens} from 'tamagui';
import {ScreenContainer} from '@components/containers';
import AddPhoto from '@components/modal/AddPhoto';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {
    Button,
    Icon,
    Input,
    Stack,
    Text,
    TextArea,
    YStack,
} from '@ui';

interface IButton {
    label: string;
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    mb?: string;
    color: ColorTokens;
}

const FourthPage = () => {
    const handleNextButtonClick = () => {
        console.log('Sonraki button clicked!');
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const buttons: IButton[] = [
        {
            label: 'Sonraki',
            variant: 'primary',
            size: 'large',
            color: '$white',
        },
        {
            label: 'İptal',
            variant: 'secondary',
            size: 'large',
            color: '$black',
        },
    ];

    return (
        <ScreenContainer
            showOverlay={false}
            horizontalPadding={true}
            verticalPadding={true}
            showGoBackButton={true}
        >
            <YStack
                width={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Text
                    color={'$black'}
                    {...TEXT_OPTIONS.H4}
                >
                    TARAT'ının Bilgileri
                </Text>
                <Text
                    textAlign={'center'}
                    marginTop={'$4'}
                    color={'$grayscale600'}
                    {...TEXT_OPTIONS.BodyRegularL}
                >
                    Yeni Tarat'ınız için bir başlık ve açıklama gir,
                    görsel koyarak özelleştir
                </Text>

                <Stack
                    width={'100%'}
                    borderColor={'$grayscale400'}
                    borderWidth={'$px'}
                    borderStyle="dashed"
                    borderRadius={'$4'}
                    backgroundColor={'$primary02'}
                    pt={'$18'}
                    pb={'$3.5'}
                    paddingHorizontal={'$24'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    marginBottom={'$2'}
                    marginTop={'$9'}
                    onPress={toggleModal}
                >
                    <Stack
                        alignItems={'center'}
                        width={'100%'}
                    >
                        <Icon
                            name="UploadIcon"
                            color="$grayscale600"
                            size={'$6'}
                        />
                        <Text
                            textAlign={'center'}
                            color={'$grayscale600'}
                            {...TEXT_OPTIONS.BodyMediumS}
                            marginBottom={'$7'}
                        >
                            Görsel Yükleyin
                        </Text>
                    </Stack>

                    <Text
                        textAlign={'center'}
                        color={'$grayscale500'}
                        {...TEXT_OPTIONS.BodyMediumXs}
                    >
                        Yüklemeden devam edebilirisiniz
                    </Text>
                    <Text
                        textAlign={'center'}
                        color={'$grayscale400'}
                        {...TEXT_OPTIONS.BodyRegularXs}
                    >
                        Maximum Adet : 10
                    </Text>
                </Stack>

                <Stack
                    marginTop={'$5'}
                    width={'100%'}
                    alignItems={'center'}
                >
                    <Text
                        paddingHorizontal={'$4'}
                        alignSelf={'flex-start'}
                        {...TEXT_OPTIONS.BodyMediumM}
                        color={'$grayscale500'}
                    >
                        Başlık*
                    </Text>
                    <Input
                        p={'$4'}
                        borderRadius={'$3'}
                        placeholder="Başlık Giriniz"
                    />
                </Stack>

                <Stack
                    marginTop={'$4'}
                    width={'100%'}
                    alignItems={'center'}
                >
                    <Text
                        paddingHorizontal={'$4'}
                        alignSelf={'flex-start'}
                        {...TEXT_OPTIONS.BodyMediumM}
                        color={'$grayscale500'}
                    >
                        Detay
                    </Text>
                    <TextArea
                        width={'100%'}
                        height={'$24'}
                        p={'$4'}
                        borderRadius={'$4'}
                        placeholder="Detay Giriniz"
                    />
                </Stack>

                {isModalVisible && (
                    <YStack>
                        <AddPhoto />
                    </YStack>
                )}

                <Stack
                    width={'100%'}
                    alignItems={'center'}
                    marginTop={'$size.11'}
                >
                    {map(buttons, (button, index) => (
                        <Button
                            key={index}
                            variant={button.variant}
                            size={button.size}
                            width={'100%'}
                            marginBottom={button.mb}
                            borderColor={'$transparent'}
                            backgroundColor={
                                button.variant === 'primary'
                                    ? '$primary'
                                    : '$transparent'
                            }
                            onPress={
                                button.label === 'Sonraki'
                                    ? handleNextButtonClick
                                    : undefined
                            }
                        >
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldL}
                                color={button.color}
                            >
                                {button.label}
                            </Text>
                        </Button>
                    ))}
                </Stack>
            </YStack>
        </ScreenContainer>
    );
};

export default FourthPage;
