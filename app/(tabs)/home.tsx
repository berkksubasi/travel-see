import {map} from 'lodash';
import React, {useMemo, useState} from 'react';
import Carousel from 'react-native-snap-carousel-v4';
import CountryCard from '@components/viewHome/CountryCard';
import MainCard from '@components/viewHome/MainCard';
import useAppImages from '@hooks/useAppImages';
import {OrderCard, ScreenContainer} from '@components';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {Button, Icon, Input, Stack, Text, XStack, YStack} from '@ui';
import {getTokenDetails} from '@utils';

const HomeScreen = () => {
    const {
        user1,
        user2,
        user3,
        user4,
        user5,
        user6,
        user7,
        user8,
        turkey,
        usa,
    } = useAppImages();
    const [activeTab, setActiveTab] = useState(0);
    const {token} = useAuthSession();
    const userInfo = useMemo(
        () => token && getTokenDetails(token),
        [token],
    );

    const mainCard = [
        {
            userPhoto: user1,
            name: 'Berk Subaşı',
            userName: '@berksubasi',
            age: 29,
            description: 'Musician & Software Developer',
        },
        {
            userPhoto: user2,
            name: 'Limea Alexandra',
            userName: '@l.alexandra',
            age: 24,
            description: 'Influencer & Designer',
        },
        {
            userPhoto: user3,
            name: 'Alex Alexandra',
            userName: '@a.alexandra',
            age: 37,
            description: 'Influencer & Designer',
        },
        {
            userPhoto: user4,
            name: 'Berk Subaşı',
            userName: '@berksubasi',
            age: 29,
            description: 'Musician & Software Developer',
        },
        {
            userPhoto: user5,
            name: 'Limea Alexandra',
            userName: '@l.alexandra',
            age: 24,
            description: 'Influencer & Designer',
        },
        {
            userPhoto: user6,
            name: 'Alex Alexandra',
            userName: '@a.alexandra',
            age: 37,
            description: 'Influencer & Designer',
        },
        {
            userPhoto: user7,
            name: 'Berk Subaşı',
            userName: '@berksubasi',
            age: 29,
            description: 'Musician & Software Developer',
        },
        {
            userPhoto: user8,
            name: 'Limea Alexandra',
            userName: '@l.alexandra',
            age: 24,
            description: 'Influencer & Designer',
        },
    ];

    const countryCard = [
        {
            countryName: 'Turkey',
            bg: turkey,
        },
        {
            countryName: 'India',
            bg: usa,
        },
        {
            countryName: 'USA',
            bg: turkey,
        },
        {
            countryName: 'Japan',
            bg: user4,
        },
        {
            countryName: 'China',
            bg: user5,
        },
        {
            countryName: 'France',
            bg: user6,
        },
        {
            countryName: 'Germany',
            bg: user7,
        },

        {
            countryName: 'Greece',
            bg: user8,
        },
        {
            countryName: 'Italy',
            bg: user1,
        },

        {
            countryName: 'Spain',
            bg: user2,
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
    console.log('mainCard', mainCard);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding={0}
            showOverlay={true}
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
                    borderColor={'$primary'}
                >
                    <YStack h={'$25'}>
                        <Carousel
                            vertical={false}
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
                                backgroundColor={'$white'}
                                placeholderTextColor="$primaryLight"
                                color="$white"
                                w={'100%'}
                                addOns={[
                                    {
                                        iconName: 'Filter',
                                        iconColor: '$primary',
                                    },
                                ]}
                            />
                        </Stack>
                    </XStack>
                    {/* Main Card Carousel */}
                    <Carousel
                        vertical={false}
                        data={mainCard}
                        renderItem={({item}) => (
                            <MainCard
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
