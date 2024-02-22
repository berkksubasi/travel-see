import {router} from 'expo-router';
//Lodash
import {map} from 'lodash';
//React
import React, {useState} from 'react';
import {Clipboard} from 'react-native';
import {Share} from 'react-native';
//React-Native
import {TouchableOpacity} from 'react-native';
import APP_CONFIG from '@constants/APP_CONFIG';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
//Hooks
import {useAppImages} from '@hooks';
//UI Lib.
import {
    Avatar,
    Icon,
    IconButton,
    Image,
    Text,
    Toast,
    XStack,
    YStack,
} from '@ui';
//Common-Components
import QrFeedItem from './QrFeedItem';





const handleProfilePress = () => {
    router.push(APP_CONFIG.APP_PATHS.PROFILE);
};

const handleCopyLink = () => {
    const linkToCopy = 'BURAYA PROFIL LİNKİ GELECEK';

    try {
        Clipboard.setString(linkToCopy);
        Toast.success({title: 'Link kopyalandı.'});
    } catch (error) {
        console.error('Error copying link:', error);
    }
};

const handleShare = async () => {
    const message = 'BURAYA PROFIL LİNKİ GELECEK';

    try {
        const result = await Share.share({
            message: message,
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                console.log(`Shared via ${result.activityType}`);
            } else {
                console.log('Shared');
            }
        } else if (result.action === Share.dismissedAction) {
            console.log('Share dismissed');
        }
    } catch (error) {
        console.error('Error sharing:', error);
    }
};

const items = [
    {
        option: 'Profile Git',
        onPress: handleProfilePress,
    },
    {
        option: 'Linki Kopyala',
        onPress: handleCopyLink,
    },
    {
        option: 'Paylaş',
        onPress: handleShare,
    },
];

const QrPost = ({
    isModalVisible,
    toggleModalVisible,
    name,
    userName,
    timestamp,
    feed,
}: {
    isModalVisible: boolean;
    toggleModalVisible: () => void;
    name: string;
    userName: string;
    timestamp: string;
    feed: {
        plateNumber: string;
        brand: string;
        model: string;
        viewCount: string;
        likeCount: string;
        qrType: string;
        qrStatus: string;
        qrDescription: string;
    };
}) => {
    const {userAvatar} = useAppImages();
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    const handleSavedPress = () => {
        setIsSaved(!isSaved);
    };
    const handleModalToggle = () => {
        toggleModalVisible();
    };

    return (
        <YStack
            width={'100%'}
            gap={'$3.5'}
        >
            <XStack
                width={'100%'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <XStack
                    gap={'$2'}
                    onPress={handleProfilePress}
                >
                    <Avatar
                        borderRadius={'$full'}
                        backgroundColor={'$white'}
                    >
                        {/* @todo fix Image */}
                        <Image source={userAvatar} />
                    </Avatar>
                    <YStack>
                        <XStack
                            alignItems={'center'}
                            gap={'$2'}
                        >
                            <Text
                                color={'$grayscale900'}
                                {...TEXT_OPTIONS.BodyMediumM}
                            >
                                {name}
                            </Text>
                            <Text
                                color={'$grayscale700Light'}
                                {...TEXT_OPTIONS.BodyRegularS}
                            >
                                {timestamp}
                            </Text>
                        </XStack>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularS}
                            color={'$grayscale500'}
                        >
                            @{userName}
                        </Text>
                    </YStack>
                </XStack>

                {/* @todo TouchableOpacity */}
                <IconButton
                    icon={'OptionIcon'}
                    color={'$grayscale700'}
                    variant="tertiary"
                    position={'relative'}
                    onPress={handleModalToggle}
                />
            </XStack>
            {isModalVisible && (
                <YStack
                    width={'$38.5'}
                    padding={'$size.4'}
                    backgroundColor={'$white'}
                    borderRadius={'$4'}
                    borderWidth={'$px'}
                    borderColor={'$primary05'}
                    position={'absolute'}
                    top={'$space.10'}
                    right={0}
                    zIndex={'$1'}
                >
                    {map(items, (item, index) => (
                        <XStack
                            key={index}
                            width={'100%'}
                            alignItems={'center'}
                            height={'$size.12'}
                            borderRadius={'$2'}
                            pressStyle={{
                                backgroundColor: '$primary05',
                            }}
                            onPress={item.onPress}
                        >
                            <Text
                                paddingHorizontal={'$space.2'}
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale900'}
                            >
                                {item.option}
                            </Text>
                        </XStack>
                    ))}
                </YStack>
            )}
            <XStack>
                <QrFeedItem {...feed} />
            </XStack>
            <XStack
                justifyContent={'flex-end'}
                gap={'$4'}
            >
                {isLiked ? (
                    <TouchableOpacity onPress={handleLikePress}>
                        <Icon
                            name={'ThumbsUpFill'}
                            color={'$primary'}
                            width={24}
                            height={24}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleLikePress}>
                        <Icon
                            name={'ThumbUp'}
                            color={'$grayscale800'}
                            width={24}
                            height={24}
                        />
                    </TouchableOpacity>
                )}
                {isSaved ? (
                    <TouchableOpacity onPress={handleSavedPress}>
                        <Icon
                            name={'BookmarkFillIcon'}
                            color={'$black'}
                            fontSize={'$size.6'}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleSavedPress}>
                        <Icon
                            name="BookmarkIcon"
                            color={'$grayscale800'}
                            fontSize={'$size.6'}
                        />
                    </TouchableOpacity>
                )}
                <Icon
                    name={'Share'}
                    color={'$grayscale800'}
                    fontSize={'$size.6'}
                    onPress={handleShare}
                />
            </XStack>
        </YStack>
    );
};

export default QrPost;
