import {router} from 'expo-router';
import React, {useMemo} from 'react';
import {Platform} from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import CountryCard from '@components/viewHome/CountryCard';
import MainCard from '@components/viewHome/MainCard';
import useAppImages from '@hooks/useAppImages';
import APP_CONFIG from '@constants/APP_CONFIG';
import {OrderCard, ScreenContainer} from '@components';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {Input, Stack, Text, XStack, YStack} from '@ui';
import {getTokenDetails} from '@utils';

function HomeScreen() {
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
    const {token} = useAuthSession();
    const userInfo = useMemo(
        () => token && getTokenDetails(token),
        [token],
    );

    const mainCardData = useMemo(
        () => [
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
        ],
        [user1, user2, user3, user4, user5, user6, user7, user8],
    );

    const countryCardData = useMemo(
        () => [
            {
                countryName: 'Turkey',
                bg: turkey,
            },
            {
                countryName: 'USA',
                bg: usa,
            },
            {
                countryName: 'Turkey',
                bg: turkey,
            },
            {
                countryName: 'USA',
                bg: usa,
            },
            {
                countryName: 'Turkey',
                bg: turkey,
            },
            {
                countryName: 'USA',
                bg: usa,
            },
            {
                countryName: 'Turkey',
                bg: turkey,
            },
        ],
        [turkey, usa],
    );

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding={0}
            showOverlay
        >
            <YStack
                backgroundColor="$background"
                h="100%"
                w="100%"
            >
                {/* Header */}
                <YStack
                    alignItems="center"
                    backgroundColor="$primary"
                    width="100%"
                    height="$32"
                    borderBottomLeftRadius="$6"
                    borderBottomRightRadius="$6"
                />
                <YStack
                    w="100%"
                    paddingHorizontal="$space.10"
                    position="absolute"
                    top="$9"
                    zIndex={1}
                >
                    {/* User Info */}
                    <XStack
                        borderBottomWidth="$px"
                        borderBottomColor="#FFFFFF89"
                        justifyContent="space-between"
                        paddingVertical="$3"
                    >
                        <XStack>
                            <Text
                                alignSelf="flex-start"
                                color="$white"
                                onPress={() => {
                                    console.log('Show TOAST');
                                    // Show toast
                                }}
                            >
                                Hoş geldin,
                            </Text>
                            <Text color="$white">
                                {userInfo?.username}
                            </Text>
                        </XStack>
                    </XStack>
                    {/* Order Card */}
                    <XStack
                        marginTop="$3"
                        marginBottom="$size.5"
                        gap="$3"
                        width="100%"
                        justifyContent="space-between"
                    >
                        <OrderCard />
                    </XStack>
                </YStack>
                {/* Main Content */}

                <Stack
                    paddingHorizontal="$space.10"
                    marginTop="$space.10"
                    ai="center"
                    gap="$5"
                    h="100%"
                    w="100%"
                    mt="$13"
                    borderColor="$primary"
                >
                    <YStack h="$25">
                        <Carousel
                            vertical={false}
                            data={countryCardData}
                            renderItem={({item, index}) => (
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
                        w="100%"
                        gap="$3"
                    >
                        <Stack w="100%">
                            <Input
                                size="large"
                                leftIconName="SearchIcon"
                                placeholder="Search locations or members"
                                backgroundColor="$white"
                                placeholderTextColor="$primaryLight"
                                color="$white"
                                w="100%"
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

                    {/* Main Card Carousel */}
                    <Stack
                        shadowColor={
                            Platform.OS === 'ios' ? 'black' : 'black'
                        }
                        shadowOffset={
                            Platform.OS === 'ios'
                                ? {width: 2, height: 2}
                                : {width: 2, height: 2}
                        }
                        shadowOpacity={
                            Platform.OS === 'ios' ? 0.4 : 0
                        }
                        shadowRadius={Platform.OS === 'ios' ? 7 : 0}
                    >
                        <Carousel
                            vertical={false}
                            data={mainCardData}
                            renderItem={({item}) => (
                                <MainCard
                                    age={item.age}
                                    description={item.description}
                                    name={item.name}
                                    userName={item.userName}
                                    userPhoto={item.userPhoto}
                                    onClick={() => {
                                        router.push(
                                            APP_CONFIG.APP_PATHS.TABS
                                                .PROFILE,
                                        );
                                    }}
                                />
                            )}
                            sliderWidth={400}
                            itemWidth={330}
                        />
                    </Stack>
                </Stack>
            </YStack>
        </ScreenContainer>
    );
}

export default HomeScreen;
