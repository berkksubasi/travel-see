import {router} from 'expo-router';
import {map} from 'lodash';
import {useRef, useState} from 'react';
import {ColorValue, Linking, Platform} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ColorTokens} from 'tamagui';
import AddCover from '@components/modal/AddCover';
import DefaultProfileCoverPhotoSVG from '@ui/primitives/Icon/svg/DefaultProfileCoverPhotoSVG.tsx';
import {APP_CONFIG, TEXT_OPTIONS} from '@/constants';
import {
    HeaderShown,
    ProfileCard,
    QrFeedItem,
    ScreenContainer,
} from '@components';
import {
    Icon,
    IconButton,
    IIconButtonProps,
    ListItem,
    ScrollView,
    Stack,
    Text,
    View,
    XStack,
    YStack,
} from '@ui';
import {IKeyOfIcons} from '@ui';

// dummy data
const qr_feeds = [
    {
        feed: {
            plateNumber: '33 OST 33',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: 131,
            likeCount: 13,
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        feed: {
            plateNumber: '34 GKN 34',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: 131,
            likeCount: 13,
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        feed: {
            plateNumber: '35 BS 333',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: 131,
            likeCount: 13,
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
];

interface ItemListType {
    social?: {
        color: ColorValue;
        icon: IKeyOfIcons;
        iconAfter?: IKeyOfIcons;
        label: string;
        onPress?: () => void;
    }[];
    phone?: {
        color: ColorValue;
        icon: IKeyOfIcons;
        iconAfter?: IKeyOfIcons;
        label: string;
        onPress?: () => void;
    }[];
}

const items: ItemListType[] = [
    {
        social: [
            {
                color: '$purple',
                icon: 'InstagramIcon',
                label: 'John_doe32',
                iconAfter: 'ConnectIcon',
                onPress: () => {
                    Linking.openURL(
                        'instagram://user?username=gokhandogulu',
                    ).catch(() => {
                        Linking.openURL(
                            'https://www.instagram.com/gokhandogulu',
                        );
                    });
                },
            },
            {
                color: '$purple',
                icon: 'FacebookIcon',
                label: 'JohnDoe2',
                iconAfter: 'ConnectIcon',
                onPress: () => {
                    Linking.openURL(
                        'facebook://user?username=gokhandoguluu',
                    ).catch(() => {
                        Linking.openURL(
                            'https://www.facebook.com/gokhandoguluu',
                        );
                    });
                },
            },
            {
                color: '$purple',
                icon: 'XIcon',
                label: 'The_Johndoe',
                iconAfter: 'ConnectIcon',
                onPress: () => {
                    Linking.openURL(
                        'twitter://user?username=GokhanDogulu',
                    ).catch(() => {
                        Linking.openURL(
                            'https://www.twitter.com/GokhanDogulu',
                        );
                    });
                },
            },
        ],
    },
    {
        phone: [
            {
                color: '$purple',
                icon: 'SmartphoneIcon',
                label: '0-(555)-555-55-55',
                iconAfter: 'PhoneIcon',
                onPress: () => {
                    Linking.openURL('tel:0-(555)-555-55-55');
                },
            },
        ],
    },
];
const buttonStyles: Omit<IIconButtonProps, 'icon'> = {
    color: '$grayscale900' as ColorTokens,
    backgroundColor: '$black04' as ColorTokens,
    borderRadius: '$full',
    borderColor: '$primary05' as ColorTokens,
    borderWidth: '$px',
    marginHorizontal: '$0',
    variant: 'tertiary',
    width: 38.5,
    height: 38.5,
};
const ProfileScreen = () => {
    const [viewType, setViewType] = useState<'own' | 'other'>('own');
    const settingsButton = () => {
        router.push(APP_CONFIG.APP_PATHS.SETTINGS);
    };
    const bookmarkButton = () => {
        router.push(APP_CONFIG.APP_PATHS.BOOKMARK);
    };
    const feedIndexRef = useRef(0);

    const getNextFeedItem = () => {
        const nextFeedIndex = feedIndexRef.current;
        feedIndexRef.current = (nextFeedIndex + 1) % qr_feeds.length;
        return qr_feeds[nextFeedIndex].feed;
    };

    const renderItem = ({
        item,
        index,
    }: {
        item: any;
        index: number;
    }) => <QrFeedItem {...item.feed} />;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <ScreenContainer
            showOverlay={true}
            horizontalPadding={0}
            verticalPadding={0}
        >
            <HeaderShown variant="circular">
                <XStack
                    w={'100%'}
                    jc={'space-between'}
                    gap={'$4'}
                >
                    <XStack gap={'$6'}>
                        {viewType === 'other' ? (
                            <IconButton
                                icon="ChevronLeftIcon"
                                onPress={() => router.back()}
                                {...{
                                    color: '$grayscale900',
                                    backgroundColor: '$black04',
                                    borderRadius: '$full',
                                    borderColor: '$primary05',
                                    borderWidth: '$px',
                                    marginHorizontal: '$0',
                                    variant: 'tertiary',
                                    width: 38.5,
                                    height: 38.5,
                                }}
                            />
                        ) : (
                            <IconButton
                                icon="EditProfileIcon"
                                label="Arkaplan Ekle"
                                onPress={toggleModal}
                                {...buttonStyles}
                                w={'auto'}
                                px={'$2'}
                            />
                        )}
                    </XStack>
                    <XStack gap={'$3'}>
                        <IconButton
                            icon={'BookmarkIcon'}
                            onPress={bookmarkButton}
                            {...buttonStyles}
                        />
                        <IconButton
                            icon={'SettingsIcon'}
                            onPress={settingsButton}
                            {...buttonStyles}
                        />
                    </XStack>
                </XStack>
            </HeaderShown>

            <Stack
                alignItems={'center'}
                width={'100%'}
                height={'$64'}
                borderBottomLeftRadius={'$6'}
                borderBottomRightRadius={'$6'}
                position={'absolute'}
                overflow="hidden"
            >
                <DefaultProfileCoverPhotoSVG />
            </Stack>

            <ProfileCard viewType="own" />
            <Stack
                paddingHorizontal={'$10'}
                gap={'$3'}
            >
                {viewType === 'other' ? (
                    <>
                        <YStack
                            alignItems={'center'}
                            justifyContent={'center'}
                            position={'relative'}
                            width="100%"
                            mt={'$3'}
                        >
                            <Stack
                                backgroundColor="$grayscale100"
                                width={'100%'}
                                height={'$px'}
                                position={'absolute'}
                            />

                            <Text
                                {...TEXT_OPTIONS.BodyRegularM}
                                color={'$grayscale400'}
                                backgroundColor="$background"
                                paddingHorizontal={'$2'}
                            >
                                İletişim Bilgileri
                            </Text>
                        </YStack>
                        {map(items[1]?.phone || [], (item, index) => (
                            <ListItem
                                key={item + String(index)}
                                width={'100%'}
                                maxHeight={'$size.14'}
                                padding={'$space.4'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                borderColor={'$grayscale100'}
                                borderWidth={'$size.0.5'}
                                borderRadius={'$4'}
                                onPress={item.onPress}
                                gap={'$3'}
                            >
                                <XStack
                                    alignItems={'center'}
                                    gap={'$2'}
                                >
                                    <Icon
                                        name={item.icon}
                                        color={'$red'}
                                    />
                                    <Text
                                        height={'$4'}
                                        {...TEXT_OPTIONS.BodyMediumM}
                                    >
                                        {item.label}
                                    </Text>
                                </XStack>

                                <Icon
                                    //@ts-ignore
                                    name={item.iconAfter}
                                    color={'$primary'}
                                />
                            </ListItem>
                        ))}
                        <YStack
                            alignItems={'center'}
                            justifyContent={'center'}
                            position={'relative'}
                            width="100%"
                        >
                            <Stack
                                backgroundColor="$grayscale100"
                                width={'100%'}
                                height={'$px'}
                                position={'absolute'}
                            />

                            <Text
                                {...TEXT_OPTIONS.BodyRegularM}
                                color={'$grayscale400'}
                                backgroundColor="$background"
                                paddingHorizontal={'$2'}
                                mt={'$3'}
                            >
                                Sosyal Medya
                            </Text>
                        </YStack>
                        {map(
                            items[0]?.social || [],
                            (item, index) => (
                                <ListItem
                                    key={item + String(index)}
                                    width={'100%'}
                                    maxHeight={'$size.14'}
                                    padding={'$space.4'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    borderColor={'$grayscale100'}
                                    borderWidth={'$size.0.5'}
                                    borderRadius={'$4'}
                                    onPress={item.onPress}
                                >
                                    <XStack
                                        alignItems={'center'}
                                        gap={'$2'}
                                    >
                                        <Icon
                                            name={item.icon}
                                            color={
                                                item.color as ColorValue
                                            }
                                        />
                                        <Text
                                            height={'$4'}
                                            {...TEXT_OPTIONS.BodyMediumM}
                                        >
                                            {item.label}
                                        </Text>
                                    </XStack>

                                    <Icon
                                        //@ts-ignore
                                        name={item.iconAfter}
                                        color={'$grayscale400'}
                                    />
                                </ListItem>
                            ),
                        )}
                    </>
                ) : (
                    <>
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={'$grayscale800'}
                            marginTop={'$4'}
                            marginBottom={'$2'}
                        >
                            TARAT Listesi (15)
                        </Text>

                        {/* CAROUSEL TARAT LİST */}

                        <Stack
                            w={'100%'}
                            mt={Platform.OS === 'ios' ? '$-2' : '$-5'}
                        >
                            <View>
                                <Carousel
                                    data={qr_feeds}
                                    renderItem={renderItem}
                                    itemWidth={150}
                                    sliderHeight={
                                        Platform.OS === 'ios'
                                            ? 260
                                            : 250
                                    }
                                    itemHeight={180}
                                    vertical
                                    // scrollEnabled={true}
                                    pagination={true}
                                />
                            </View>
                        </Stack>
                    </>
                )}
            </Stack>
            {isModalVisible && (
                <YStack>
                    <AddCover />
                </YStack>
            )}
        </ScreenContainer>
    );
};

export default ProfileScreen;
