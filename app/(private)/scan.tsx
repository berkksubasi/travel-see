import {BarCodeScanner} from 'expo-barcode-scanner';
import {router} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {ButtonGoBack} from '@components/buttons';
import {IconButton} from '@ui/actions';
import {
    Button,
    Icon,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

const ScanPage = () => {
    const [hasPermission, setHasPermission] = useState<
        null | boolean
    >(null);
    const [scanned, setScanned] = useState(false);
    const [isTorchOn, setIsTorchOn] = useState(false);
    const [cameraType, setCameraType] = useState(
        BarCodeScanner.Constants.Type.back,
    );

    useEffect(() => {
        (async () => {
            const {status} =
                await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({data}: {data: any}) => {
        const kayitliQRLer = ['qr_kod_1', 'qr_kod_2', 'qr_kod_3'];

        if (!data) {
            alert('QR bulunamadı, lütfen tekrar deneyin!');
            return;
        }

        if (kayitliQRLer.includes(data)) {
            alert('Aktif QR bulundu!');
        } else {
            alert(`Yeni QR Bulundu: ${data}`);
        }

        console.log(`QR Code Scanned: ${data}`);
        setScanned(true);
    };

    const toggleTorch = () => {
        setIsTorchOn(!isTorchOn);
    };

    const toggleCameraType = () => {
        setCameraType(
            cameraType === BarCodeScanner.Constants.Type.back
                ? BarCodeScanner.Constants.Type.front
                : BarCodeScanner.Constants.Type.back,
        );
    };

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const {width, height} = Dimensions.get('window');

    return (
        <View
            style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <BarCodeScanner
                onBarCodeScanned={
                    scanned ? undefined : handleBarCodeScanned
                }
                style={{
                    zIndex: 1,
                    width: width * 1.8,
                    height: height * 1.1,
                }}
                type={cameraType}
                // torchMode={isTorchOn ? 'on' : 'off'}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginLeft: -width * 0.4,
                    }}
                >
                    <XStack
                        w={'44%'}
                        p={'$5'}
                        mt={'$-16'}
                    >
                        <ButtonGoBack color="$primary" />
                    </XStack>
                    <Stack>
                        <Icon
                            name="ScanRadius"
                            color={'$primary'}
                        />
                    </Stack>
                    <XStack
                        alignItems={'center'}
                        gap={'$41'}
                    >
                        {!scanned && (
                            <YStack
                                w={'30%'}
                                gap={'$19'}
                            >
                                <XStack justifyContent="space-between">
                                    <IconButton
                                        icon="SwitchCameraIcon"
                                        variant={'secondary'}
                                        bg={'$black04'}
                                        onPress={toggleCameraType}
                                    />
                                    <IconButton
                                        icon={
                                            isTorchOn
                                                ? 'FlashIcon'
                                                : 'NoFlashIcon'
                                        }
                                        focusStyle={{
                                            bg: '$red',
                                        }}
                                        bg={
                                            isTorchOn
                                                ? '$primary'
                                                : '$black04'
                                        }
                                        onPress={toggleTorch}
                                        color={'$grayscale600'}
                                    />
                                </XStack>

                                <Button
                                    variant={'tertiary'}
                                    width={'$49'}
                                    borderRadius={'$4'}
                                    alignSelf="center"
                                    mb={'$10'}
                                    onPress={() => {
                                        setScanned(false);
                                        router.back();
                                    }}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodySemiBoldL}
                                        color={'$primary'}
                                    >
                                        İptal
                                    </Text>
                                </Button>
                            </YStack>
                        )}
                    </XStack>
                </View>
            </BarCodeScanner>
        </View>
    );
};

export default ScanPage;
