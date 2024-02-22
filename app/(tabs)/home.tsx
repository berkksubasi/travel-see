//Lodash
import {router} from 'expo-router';
import {map, reduce} from 'lodash';
import React, {useMemo, useState} from 'react';
import {Platform} from 'react-native';
import toast from 'react-native-toast-message';
import {OrderCard, ScreenContainer, TabSwitch} from '@components';
//Common Lib.
import {Card, QrPost} from '@components';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {radius} from '@tamagui/themes';
//UI Lib.
import {
    Icon,
    ScrollView,
    Stack,
    Text,
    Toast,
    XStack,
    YStack,
} from '@ui';
import {getTokenDetails} from '@utils';
//Constants
import {APP_CONFIG, TEXT_OPTIONS} from '../../constants';

interface ICard {
    fillColor: string;
    title: string;
    count: number;
    width: string;
    onPress?: () => void;
}

const cardContentData: ICard[] = [
    {
        fillColor: '$success',
        title: 'Aktif QR',
        count: 2,
        width: 'calc(33.33% - $space.2)',
        onPress: () => {
            router.push(APP_CONFIG.APP_PATHS.ACTIVE);
        },
    },
    {
        fillColor: '$warning',
        title: 'Pasif QR',
        count: 3,
        width: 'calc(33.33% - $space.2)',
        onPress: () => {
            router.push(APP_CONFIG.APP_PATHS.INACTIVE);
        },
    },
    {
        fillColor: '$error',
        title: 'Silinmiş QR',
        count: 2,
        width: 'calc(33.33% - $space.2)',
        onPress: () => {
            router.push(APP_CONFIG.APP_PATHS.DELETED);
        },
    },
];

// dummy data
const qr_posts = [
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: '131',
            likeCount: '13',
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
];

const HomeScreen = () => {
    const [visibleModals, setVisibleModals] = useState<boolean[]>(
        qr_posts.map(() => false),
    );

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };
    const {token} = useAuthSession();

    const anyQrPosts = useMemo(() => {
        const totalQr = reduce(
            cardContentData,
            (acc, curr) => {
                return acc + curr.count;
            },
            0,
        );

        return totalQr > 0;
    }, [qr_posts]);

    console.log('anyQrPosts', anyQrPosts);
    const userInfo = useMemo(() => {
        if (!token) return null;
        return getTokenDetails(token);
    }, [token]);

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding={0}
            showOverlay={true}
        >
            <YStack backgroundColor={'$background'}>
                <YStack
                    alignItems={'center'}
                    backgroundColor={'$primary'}
                    width={'100%'}
                    height={'$32'}
                    borderBottomLeftRadius={'$6'}
                    borderBottomRightRadius={'$6'}
                />
                <YStack
                    w={'100%'}
                    paddingHorizontal={'$space.10'}
                    position={'absolute'}
                    top={'$9'}
                    zIndex={1}
                >
                    <XStack
                        borderBottomWidth={'$px'}
                        borderBottomColor={'#FFFFFF89'}
                        justifyContent={'space-between'}
                        paddingVertical={'$3'}
                    >
                        <XStack>
                            <Text
                                alignSelf="flex-start"
                                color={'$white'}
                                {...TEXT_OPTIONS.BodyMediumXl}
                                onPress={() => {
                                    console.log('asdfasd');
                                    toast.show({
                                        type: 'success',
                                        text1: 'This is a success toast!',
                                    });
                                    // Toast.success({
                                    //     type: 'success',
                                    //     title: 'Başarılı',
                                    //     mesge: 'Hoşgeldin',
                                    // toast.show({
                                    //     type: 'error',
                                    //     text1: 'This is an error toast!',
                                    // });
                                    // toast.show({
                                    //     type: 'warning',
                                    //     text1: 'This is a warning toast!',
                                    // });
                                }}
                            >
                                Hoş geldin,
                            </Text>
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldXL}
                                color={'$white'}
                            >
                                {' '}
                                {userInfo?.username}
                            </Text>
                        </XStack>
                        <XStack
                            alignItems={'center'}
                            onPress={() => {
                                router.push(
                                    APP_CONFIG.APP_PATHS.SEARCH,
                                );
                            }}
                        >
                            <Icon
                                name="SearchOutline"
                                //TODO OGUZ: $ sizes doesn't work replace after fix it
                                width={24}
                                height={24}
                                color={'$white'}
                            />
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldS}
                                color={'$white'}
                            >
                                Ara
                            </Text>
                        </XStack>
                    </XStack>

                    <XStack
                        marginTop="$3"
                        marginBottom={'$size.5'}
                        gap={'$3'}
                        width={'100%'}
                        justifyContent={'space-between'}
                    >
                        {anyQrPosts ? (
                            cardContentData.map(
                                (
                                    {
                                        fillColor,
                                        title,
                                        count,
                                        width,
                                        onPress,
                                    },
                                    index,
                                ) => (
                                    <Card
                                        key={index}
                                        fill={fillColor}
                                        title={title}
                                        count={count}
                                        onPress={onPress}
                                    />
                                ),
                            )
                        ) : (
                            <OrderCard />
                        )}
                    </XStack>
                </YStack>
                <YStack paddingHorizontal={'$space.10'}>
                    <XStack marginTop={'$space.10'}>
                        <TabSwitch
                            icon1="LocationIcon"
                            icon2="Users"
                            title1="Keşfet"
                            title2="Takip Ettiklerim"
                            onPress={() => {}}
                            onTabChange={() => {}}
                        />
                    </XStack>

                    <ScrollView
                        w={'100%'}
                        showCustomScrollBar={false}
                    >
                        <YStack
                            alignItems={'center'}
                            marginTop={'$space.5'}
                            backgroundColor={'$background'}
                        >
                            {map(qr_posts, (item, index) => {
                                const toggleModalVisible = () => {
                                    setVisibleModals((prev) =>
                                        prev.map(
                                            (bool, i) =>
                                                i === index && !bool,
                                        ),
                                    );
                                };
                                return (
                                    <YStack
                                        w={'100%'}
                                        mb={'$8'}
                                    >
                                        <QrPost
                                            key={index}
                                            isModalVisible={
                                                visibleModals[index]
                                            }
                                            toggleModalVisible={
                                                toggleModalVisible
                                            }
                                            {...item}
                                        />
                                    </YStack>
                                );
                            })}
                        </YStack>
                    </ScrollView>
                </YStack>
            </YStack>
        </ScreenContainer>
    );
};

export default HomeScreen;
