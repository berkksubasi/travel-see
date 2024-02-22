import {map} from 'lodash';
import {useState} from 'react';
import {ButtonGoBack} from '@components/buttons';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import UnFollow from '@components/modal/UnFollow';
import {FollowerCard} from '@components/viewProfile';
import {Text, XStack, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface FollowerProps {
    username: string | undefined;
    name: string | undefined;
    following: boolean | undefined;
    follower: boolean | undefined;
    avatar?: string;
}

const followers: FollowerProps[] = [
    {
        name: 'Berk Subaşı',
        username: '@bobikshuman',
        following: true,
        follower: false,
        avatar: 'https://picsum.photos/200',
    },
    {
        name: 'Oğuz Sancaktar',
        username: '@oguzsancaktar',
        following: false,
        follower: true,
    },
    {
        name: 'Yağız Avşar',
        username: '@yagizavsar',
        following: false,
        follower: true,
        avatar: 'https://picsum.photos/333',
    },
    {
        name: 'Gökhan Doğulu',
        username: '@gokhandogulu',
        following: true,
        follower: true,
    },
];

const isFollowingScreen = false; //Takipçiler için false, Takip Edilenler için true yapılmalı. Şimdilik

const FollowingScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible((prev) => !prev);
    };

    const filteredFollowers = isFollowingScreen
        ? followers.filter((follower) => follower.following === true)
        : followers;
    return (
        <ScreenContainer
            horizontalPadding={false}
            verticalPadding={0}
        >
            <HeaderShown
                paddingHorizontal={false}
                variant="lined"
            >
                <XStack gap={'$4'}>
                    <ButtonGoBack />
                    <Text {...TEXT_OPTIONS.BodySemiBold2XL}>
                        {isFollowingScreen
                            ? 'Takip Edilenler'
                            : 'Takipçiler'}
                    </Text>
                </XStack>
                <Text {...TEXT_OPTIONS.BodyRegularL}>
                    {filteredFollowers.length} kişi
                </Text>
            </HeaderShown>

            <YStack mt={'$0.5'}>
                {map(filteredFollowers, (follower, index) => (
                    <FollowerCard
                        onUnfollow={toggleModal}
                        key={index}
                        {...follower}
                    />
                ))}
            </YStack>
            {isModalVisible && (
                <YStack>
                    <UnFollow />
                </YStack>
            )}
        </ScreenContainer>
    );
};

export default FollowingScreen;
