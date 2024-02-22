import {map} from 'lodash';
import React, {useMemo, useState} from 'react';
import Carousel from 'react-native-snap-carousel-v4';
import CountryCard from '@components/viewHome/CountryCard';
import MainCard from '@components/viewHome/MainCard';
import useAppImages from '@hooks/useAppImages';
import {OrderCard, ScreenContainer} from '@components';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {Button, Icon, Input, Stack, Text, XStack, YStack} from '@ui';
// ScrollView importını kaldırdık
import {getTokenDetails} from '@utils';

const HomeScreen = () => {
    const {userAvatar} = useAppImages();
    const [activeTab, setActiveTab] = useState(0);
    const {token} = useAuthSession();
    const userInfo = useMemo(
        () => token && getTokenDetails(token),
        [token],
    );

    const mainCard = [
        {
            userPhoto: '',
            name: 'Berk Subaşı',
            userName: '@berksubasi',
            age: 29,
            description: 'Musician & Software Developer',
            backgroundImage: userAvatar,
        },
        {
            userPhoto: '',
            name: 'Limea Alexandra',
            userName: '@l.alexandra',
            age: 24,
            description: 'Influencer & Designer',
            backgroundImage: userAvatar,
        },
        {
            userPhoto: '',
            name: 'Alex Alexandra',
            userName: '@a.alexandra',
            age: 37,
            description: 'Influencer & Designer',
            backgroundImage: userAvatar,
        },
    ];

    const countryCard = [
        {
            countryName: 'Turkey',
            bg: userAvatar,
        },
        {
            countryName: 'India',
            bg: userAvatar,
        },
        {
            countryName: 'USA',
            bg: userAvatar,
        },
        {
            countryName: 'Japan',
            bg: userAvatar,
        },
        {
            countryName: 'China',
            bg: userAvatar,
        },
        {
            countryName: 'France',
            bg: userAvatar,
        },
        {
            countryName: 'Germany',
            bg: userAvatar,
        },
        {
            countryName: 'Greece',
            bg: userAvatar,
        },
        {
            countryName: 'Italy',
            bg: userAvatar,
        },

        {
            countryName: 'Spain',
            bg: userAvatar,
        },

        {
            countryName: 'Portugal',
            bg: userAvatar,
        },

        {
            countryName: 'Russia',
            bg: userAvatar,
        },

        {
            countryName: 'Australia',
            bg: userAvatar,
        },

        {
            countryName: 'Canada',
            bg: userAvatar,
        },

        {
            countryName: 'Brazil',
            bg: userAvatar,
        },

        {
            countryName: 'Mexico',
            bg: userAvatar,
        },
    ];

    const anyQrPosts = useMemo(
        () =>
            mainCard.reduce(
                (acc, curr) => acc + curr.name.length,
                0,
            ) > 0,
        [mainCard],
    );

    console.log('anyQrPosts', anyQrPosts);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding={0}
        >
            <YStack
                backgroundColor={'$background'}
                h={'100%'}
                w={'100%'}
            >
                {/* Header */}
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
                    {/* User Info */}
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
                                onPress={() => {
                                    console.log('asdfasd');
                                    // Show toast
                                }}
                            >
                                Hoş geldin,
                            </Text>
                            <Text color={'$white'}>
                                {userInfo?.username}
                            </Text>
                        </XStack>
                    </XStack>
                    {/* Order Card */}
                    <XStack
                        marginTop="$3"
                        marginBottom={'$size.5'}
                        gap={'$3'}
                        width={'100%'}
                        justifyContent={'space-between'}
                    >
                        <OrderCard />
                    </XStack>
                </YStack>
                {/* Main Content */}

                <Stack
                    paddingHorizontal={'$space.10'}
                    marginTop={'$space.10'}
                    ai={'center'}
                    gap={'$5'}
                    h={'100%'}
                    w={'100%'}
                    mt={'$13'}
                >
                    <YStack h={'$25'}>
                        <Carousel
                            data={countryCard}
                            renderItem={({item}) => (
                                <CountryCard
                                    countryName={item.countryName}
                                    bg={item.bg}
                                />
                            )}
                            sliderWidth={400}
                            itemWidth={100}
                        />
                    </YStack>
                    <XStack
                        w={'100%'}
                        gap={'$3'}
                    >
                        <Stack w={'100%'}>
                            <Input
                                size="large"
                                leftIconName="SearchIcon"
                                placeholder="Search locations or members"
                                backgroundColor={'$primaryLight'}
                                placeholderTextColor="$white"
                                color="$white"
                                w={'100%'}
                            />
                        </Stack>
                    </XStack>
                    {/* Main Card Carousel */}
                    <Carousel
                        data={mainCard}
                        renderItem={({item}) => (
                            <MainCard
                                backgroundImage={item.backgroundImage}
                                age={item.age}
                                description={item.description}
                                name={item.name}
                                userName={item.userName}
                                userPhoto={item.userPhoto}
                            />
                        )}
                        sliderWidth={400}
                        itemWidth={330}
                    />
                </Stack>
            </YStack>
        </ScreenContainer>
    );
};

export default HomeScreen;
