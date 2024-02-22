import React, {useEffect, useState} from 'react';
import {
    launchCamera,
    launchImageLibrary,
} from 'react-native-image-picker';
import {Sheet} from 'tamagui';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {Button, Icon, IKeyOfIcons, Text, XStack, YStack} from '@ui';

const AddCover = () => {
    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        // Component mount olduğunda yapılacak işlemler
        return () => {
            // Component unmount olduğunda yapılacak temizlik işlemleri
        };
    }, []);

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const selectFromGallery = () => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            if (!response.didCancel) {
                console.log(response.uri);
            }
        });
    };

    // @todo oğuz takePhoto

    // const takePhoto = () => {
    //     launchCamera({mediaType: 'photo'}, (response) => {
    //         if (!response.didCancel) {
    //             console.log(response.uri);
    //         }
    //     });
    // };

    interface ButtonContentType {
        icon: IKeyOfIcons;
        text: string;
        color: string;
        onPress?: () => void;
    }

    const buttons: ButtonContentType[] = [
        {
            icon: 'GalleryIcon',
            text: 'Galeriden Seç',
            color: '$grayscale900',
            onPress: selectFromGallery,
        },
        {
            icon: 'CameraIcon',
            text: 'Fotoğraf Çek',
            color: '$grayscale900',
            // onPress: takePhoto,
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
                            {...TEXT_OPTIONS.BodyMediumL}
                            color={'$grayscale900'}
                        >
                            Kapak Fotoğrafı Ekle
                        </Text>
                        <YStack
                            ai={'flex-start'}
                            gap={'$3'}
                            w={'100%'}
                        >
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    onPress={button.onPress}
                                    bg={'$white'}
                                    width={'100%'}
                                    py={'$4'}
                                    px={'$8'}
                                    borderRadius={'$4'}
                                    borderWidth={'$px'}
                                    borderColor={'$grayscale300'}
                                >
                                    <XStack
                                        ai={'center'}
                                        gap={'$2'}
                                    >
                                        <Icon
                                            name={button.icon}
                                            color={button.color}
                                        />
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

export default AddCover;
