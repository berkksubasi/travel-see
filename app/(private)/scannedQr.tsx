import {router} from 'expo-router';
import {map} from 'lodash';
import React, {useState} from 'react';
import {Share} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ObjectPicker} from '@components/object-picker';
import ScannedQrBgSVG from '@ui/primitives/Icon/svg/ScannedQrBgSVG';
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
    Slider,
} from '@components';
import {APP_CONFIG, APP_SHADOWS, TEXT_OPTIONS} from '@constants';
import {
    Button,
    Icon,
    IconButton,
    IIconButtonProps,
    Image,
    LinearGradient,
    ScrollView,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';

interface FAQFeatures {
    price: string;
    owner: string;
    brand: string;
    seri: string;
    model: string;
    model_year: string;
    fuel: string;
    gear: string;
    vehicle_status: string;
    km: string;
    case_type: string;
    engine_power: string;
    traction: string;
    color: string;
    damage_record: string;
    plate: string;
    from_who: string;
    swap: string;
}

const keyMap: Record<keyof FAQFeatures, string> = {
    price: 'Fiyat',
    owner: 'Sahibi',
    brand: 'Marka',
    seri: 'Seri',
    model: 'Model',
    model_year: 'Yıl',
    fuel: 'Yakıt',
    gear: 'Vites',
    vehicle_status: 'Araç Durumu',
    km: 'KM',
    case_type: 'Kasa Tipi',
    engine_power: 'Motor Gücü',
    traction: 'Çekiş',
    color: 'Renk',
    damage_record: 'Ağır Hasar Kayıtlı',
    plate: 'Plaka / Uyruk',
    from_who: 'Kimden',
    swap: 'Takas',
};

const faqData = {
    timestamp: '11.11.2023',
    title: 'Mercedes EQE 350+ AMG 2022 GMG',
    adNo: '234567898765',
    description: 'Elektrik ve temiz bir araba çok yaklaşmayın',
    image: 'logoLight',
    features: {
        price: '1.500.450 ₺',
        owner: 'Berk Subaşı',
        brand: 'Mercedes-Benz',
        seri: 'EQE',
        model: '350+ AMG',
        model_year: '2022',
        fuel: 'Elektrik',
        gear: 'Otomatik',
        vehicle_status: 'İkinci El',
        km: '1.000',
        case_type: 'Sedan',
        engine_power: '292 hp',
        traction: 'Arkadan İtiş',
        color: 'gri',
        damage_record: 'Hayır',
        plate: 'TR',
        from_who: 'Galeriden',
        swap: 'Evet',
    },
};

const imageList = [
    {
        id: 1,
        img: require('@/assets/images/placeholder/big-car.png'),
    },
    {
        id: 2,
        img: require('@/assets/images/placeholder/big-car.png'),
    },
    {
        id: 3,
        img: require('@/assets/images/placeholder/big-car.png'),
    },
    {
        id: 4,
        img: require('@/assets/images/placeholder/big-car.png'),
    },
    {
        id: 5,
        img: require('@/assets/images/placeholder/big-car.png'),
    },
];

const buttonStyles: Omit<IIconButtonProps, 'icon'> = {
    color: '$grayscale900',
    borderRadius: '$full',
    borderWidth: '$px',
    marginHorizontal: '$0',
    backgroundColor: '$transparent',
    variant: 'tertiary',
    width: 38.5,
    height: 38.5,
};

const handleProfilePress = () => {
    router.push(APP_CONFIG.APP_PATHS.PROFILE);
};
const ScannedQr = () => {
    const [qrType, setQrType] = useState<'ad' | 'other'>('ad');
    const [viewType, setViewType] = useState<'own' | 'other'>('own');

    const shareButton = () => {
        Share.share({
            message: `https://tarat.app/${faqData.adNo}`,
            url: `https://tarat.app/${faqData.adNo}`,
            title: 'QR Paylaş',
        });
    };
    const bookmarkButton = () => {
        router.push(APP_CONFIG.APP_PATHS.BOOKMARK);
    };
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
                <XStack gap={'$6'}>
                    <IconButton
                        icon="Share"
                        onPress={shareButton}
                        {...buttonStyles}
                    />
                    <IconButton
                        icon="BookmarkIcon"
                        onPress={bookmarkButton}
                        {...buttonStyles}
                    />
                </XStack>
            </HeaderShown>
            <YStack
                pos={'absolute'}
                alignSelf="center"
                top={'$36'}
            >
                <ScannedQrBgSVG />
            </YStack>
            <YStack
                borderWidth={'$1'}
                borderColor={'$white'}
                borderRadius={'$7'}
                backgroundColor={'$background'}
                {...APP_SHADOWS.xlarge}
                mt={qrType === 'other' && '$20'}
            >
                <YStack
                    px={'$6'}
                    py={'$3'}
                    gap={'$4'}
                    borderWidth={'$px'}
                    borderColor={'$grayscale100'}
                    borderRadius={'$6'}
                >
                    <YStack
                        gap={'$3'}
                        ai={'center'}
                    >
                        <XStack mb={'$1'}>
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale500'}
                            >
                                {qrType === 'ad' ? 'İlan' : 'Kayıt'}{' '}
                                Tarihi:{' '}
                            </Text>
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale900'}
                            >
                                {faqData.timestamp}
                            </Text>
                        </XStack>

                        <Stack
                            h={126}
                            w={226}
                            alignItems="center"
                        >
                            {/* @todo fix design @berk */}
                            {true ? (
                                <XStack
                                    justifyContent="center"
                                    ai={'center'}
                                    width={'100%'}
                                    height={'100%'}
                                    borderRadius={'$4'}
                                    backgroundColor={'$primary02'}
                                    borderColor={'$grayscale100'}
                                    borderWidth={'$px'}
                                >
                                    <Icon name="LogoSVG" />
                                </XStack>
                            ) : (
                                <Carousel
                                    data={imageList}
                                    renderItem={({item}) => (
                                        <Image
                                            source={item.img}
                                            style={{
                                                width: 226,
                                                height: 126,
                                                ObjectPicker: 'cover',
                                                borderRadius: 16,
                                            }}
                                        />
                                    )}
                                    sliderWidth={226}
                                    itemWidth={226}
                                    sliderHeight={126}
                                    itemHeight={126}
                                    leftAlign
                                    renderItem={({item, index}) => (
                                        <React.Fragment>
                                            <Image
                                                source={item.img}
                                                style={{
                                                    width: 226,
                                                    height: 126,
                                                    ObjectPicker:
                                                        'cover',
                                                    borderRadius: 16,
                                                }}
                                            />
                                            <Stack
                                                style={{
                                                    position:
                                                        'absolute',
                                                    top: 5,
                                                    right: 5,
                                                    color: '$white',
                                                    backgroundColor:
                                                        'rgba(0, 0, 0, 0.2)',
                                                    padding: 2,
                                                    borderRadius: 5,
                                                    marginRight: 5,
                                                    zIndex: 1,
                                                }}
                                            >
                                                <Text
                                                    {...TEXT_OPTIONS.BodySemiBoldXs}
                                                >
                                                    {index + 1}/
                                                    {imageList.length}
                                                </Text>
                                            </Stack>
                                        </React.Fragment>
                                    )}
                                />
                            )}
                        </Stack>

                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            alignSelf="center"
                            color={'$grayscale900'}
                            mt={'$4'}
                        >
                            {faqData.title}
                        </Text>
                        {qrType === 'ad' && (
                            <XStack>
                                <Text
                                    color={'$grayscale600'}
                                    {...TEXT_OPTIONS.BodyRegularM}
                                >
                                    İlan No: {''}
                                </Text>
                                <Text
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    color={'$primary'}
                                >
                                    {faqData.adNo}
                                </Text>
                            </XStack>
                        )}
                    </YStack>
                    {qrType === 'ad' && (
                        <YStack
                            borderWidth={'$px'}
                            borderColor={'$grayscale100'}
                            borderRadius={'$2.5'}
                            h={'$50'}
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                            >
                                <YStack
                                    px={'$3'}
                                    py={'$1.5'}
                                    gap={'$3'}
                                >
                                    {map(
                                        faqData.features,
                                        (value, key) => {
                                            const displayKey =
                                                (
                                                    keyMap as Record<
                                                        string,
                                                        string
                                                    >
                                                )[key] || key;
                                            const displayValue =
                                                value || '-';
                                            return (
                                                <XStack
                                                    jc={
                                                        'space-between'
                                                    }
                                                    key={key}
                                                >
                                                    <Text
                                                        {...TEXT_OPTIONS.BodyRegularM}
                                                        color={
                                                            '$grayscale500'
                                                        }
                                                    >
                                                        {displayKey}
                                                    </Text>
                                                    <Text
                                                        {...(key ===
                                                        'price'
                                                            ? TEXT_OPTIONS.BodySemiBoldM
                                                            : TEXT_OPTIONS.BodyRegularM)}
                                                        color={
                                                            key ===
                                                            'price'
                                                                ? '$primary'
                                                                : '$grayscale900'
                                                        }
                                                    >
                                                        {displayValue}
                                                    </Text>
                                                </XStack>
                                            );
                                        },
                                    )}
                                </YStack>
                            </ScrollView>
                        </YStack>
                    )}

                    <YStack
                        p={'$3'}
                        gap={'$2'}
                        backgroundColor={'$grayscale50'}
                        borderWidth={'$px'}
                        borderColor={'$grayscale100'}
                        borderRadius={'$2.5'}
                        h={'$32'}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodyMediumS}
                            color={'$grayscale900'}
                        >
                            Açıklama
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyMediumS}
                            color={'$grayscale600'}
                        >
                            {faqData.description
                                ? faqData.description
                                : '-'}
                        </Text>
                    </YStack>
                    {viewType === 'own' ? (
                        <YStack gap={'$2'}>
                            <Button
                                variant="primary"
                                h={'$14'}
                                py={'$2'}
                                px={'$8'}
                                borderRadius={'$4'}
                            >
                                <XStack
                                    ai={'center'}
                                    gap={'$2'}
                                >
                                    <Icon
                                        name="EditIcon"
                                        color={'$white'}
                                    />
                                    <Text
                                        {...TEXT_OPTIONS.BodySemiBoldL}
                                        color={'$white'}
                                    >
                                        Düzenle
                                    </Text>
                                </XStack>
                            </Button>
                            <LinearGradient
                                colors={['$whiteButton', '$white']}
                                borderRadius={'$4'}
                            >
                                <Button
                                    variant="secondary"
                                    h={'$14'}
                                    py={'$2'}
                                    px={'$8'}
                                    borderRadius={'$4'}
                                    borderColor={'$primary'}
                                    bg={'$transparent'}
                                >
                                    <XStack
                                        ai={'center'}
                                        gap={'$2'}
                                    >
                                        <Icon
                                            name={
                                                qrType === 'ad'
                                                    ? 'AdIcon'
                                                    : 'DeleteIcon'
                                            }
                                            color={'$black'}
                                        />
                                        <Text
                                            {...TEXT_OPTIONS.BodySemiBoldL}
                                            color={'$black'}
                                        >
                                            {qrType === 'ad'
                                                ? 'Aracımı Sattım'
                                                : "Tarat'ı Sil"}
                                        </Text>
                                    </XStack>
                                </Button>
                            </LinearGradient>
                        </YStack>
                    ) : (
                        <XStack
                            ai={'center'}
                            jc={'space-between'}
                        >
                            <IconButton
                                icon="UserIcon"
                                color={'$grayscale900'}
                                variant="secondary"
                                backgroundColor={'$background'}
                                w={'$14'}
                                h={'$14'}
                                borderColor={'$primary'}
                                borderRadius={'$4'}
                                onPress={handleProfilePress}
                            />
                            <Button
                                variant="primary"
                                h={'$14'}
                                py={'$2'}
                                px={'$8'}
                                borderRadius={'$4'}
                            >
                                <XStack
                                    ai={'center'}
                                    gap={'$2'}
                                >
                                    <Icon
                                        name="SendIcon"
                                        color={'$black'}
                                    />
                                    <Text
                                        {...TEXT_OPTIONS.BodySemiBoldL}
                                        color={'$black'}
                                    >
                                        Mesaj Gönder
                                    </Text>
                                </XStack>
                            </Button>
                        </XStack>
                    )}
                </YStack>
            </YStack>
        </ScreenContainer>
    );
};

export default ScannedQr;
