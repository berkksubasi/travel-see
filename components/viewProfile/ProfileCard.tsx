import {router} from 'expo-router';
import {map} from 'lodash';
import React, {useMemo, useState} from 'react';
import {Platform, Share} from 'react-native';
import {GestureResponderEvent} from 'react-native';
import {Linking} from 'react-native';
import UnFollow from '@components/modal/UnFollow';
import DefaultProfilePhotoSVG from '@ui/primitives/Icon/svg/DefaultProfilePhotoSVG';
import {
    Avatar,
    Button,
    Icon,
    IconButton,
    IKeyOfIcons,
    LinearGradient,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';
import {APP_CONFIG, TEXT_OPTIONS} from '../../constants';

interface IShowProfileProps {
    title: string;
    id: string;
}

const userData = {
    id: '34',
    name: 'John',
    surname: 'Doe',
    username: 'johndoe',
    about: 'Web developer & Designer  Yaşamaya devam 🙌🏻  Sevdiğim aktivite Bobik ile oynamak',
    qr_amount: 15,
    followers: 20,
    following: 3,
};

const ShowProfileData: IShowProfileProps[] = [
    {
        title: 'QR Sayısı',
        id: 'qr_amount',
    },
    {
        title: 'Takipçi',
        id: 'followers',
    },
    {
        title: 'Takip Edilen',
        id: 'following',
    },
];
interface ProfileCardProps {
    viewType: 'own' | 'other';
}

interface ISocialIcon {
    icon: IKeyOfIcons;
    link?: string;
    text?: string;
}

const socialIcons: ISocialIcon[] = [
    {
        icon: 'InstagramSmallIcon',
        link: 'https://instagram.com',
    },
    {
        icon: 'FacebookSmallIcon',
        link: 'https://facebook.com',
    },
    {
        icon: 'XSmallIcon',
        link: 'https://x.com',
    },
    {
        icon: 'EditCustomIcon',
        text: 'Profili Düzenle',
    },
];

const ProfileCard: React.FC<ProfileCardProps> = ({viewType}) => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const isOwn = useMemo(() => viewType === 'other', [viewType]);

    const fetched_user = userData;

    function handleFollow() {
        setIsFollowing((current) => !current);
        if (isFollowing) {
            setIsModalVisible(true);
        } else {
            setIsModalVisible(false);
        }
    }

    return (
        <YStack
            paddingHorizontal={'$10'}
            marginTop={'$14'}
            w="100%"
        >
            <YStack
                p={'$6'}
                gap={'$4'}
                backgroundColor={'$white'}
                borderRadius={'$6'}
                position={'relative'}
            >
                <Stack
                    position={'absolute'}
                    left={0}
                    top={-65}
                    right={0}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Avatar
                        size={'$31'}
                        backgroundColor={'$grayscale100'}
                        borderRadius={'$full'}
                        borderWidth={'$px'}
                        borderColor={'$white'}
                    >
                        {/* @todo OĞUZ: Profile Fotoğrafı mevcutsa gösterilecek yoksa <DefaultProfilePhotoSVG /> gösterilecek */}
                        <DefaultProfilePhotoSVG />
                    </Avatar>
                </Stack>

                <Stack
                    alignSelf="flex-end"
                    marginBottom={'$2'}
                    onPress={() => {
                        Share.share({
                            message: `https://tarat.app/${fetched_user.username}`,
                            url: `https://tarat.app/${fetched_user.username}`,
                            title: 'Profili Paylaş',
                        });
                    }}
                >
                    <Icon
                        name={!isOwn ? 'UserIcon' : 'Share'}
                        color={'$grayscale900'}
                    />
                </Stack>
                <YStack
                    alignItems={'center'}
                    gap={'$4'}
                >
                    <YStack>
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldXL}
                            color={'$grayscale800'}
                        >
                            {fetched_user.name} {fetched_user.surname}
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyMediumM}
                            color={'$grayscale600'}
                        >
                            @{fetched_user.username}
                        </Text>
                    </YStack>

                    <XStack
                        gap={'$2'}
                        alignItems={'center'}
                    >
                        {map(ShowProfileData, (item, index) => (
                            <XStack
                                gap={'$2'}
                                alignItems={'center'}
                                key={item.title + index}
                            >
                                <YStack
                                    alignItems={'center'}
                                    gap={2}
                                >
                                    <Stack
                                        ai={'center'}
                                        onPress={() => {
                                            (item.id ===
                                                'followers' ||
                                                'following') &&
                                                router.push(
                                                    APP_CONFIG
                                                        .APP_PATHS
                                                        .FOLLOWER,
                                                );
                                        }}
                                    >
                                        <Text
                                            {...TEXT_OPTIONS.BodyMediumS}
                                            color={'$grayscale600'}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            {...TEXT_OPTIONS.BodySemiBoldXL}
                                            color={'$grayscale800'}
                                        >
                                            {
                                                fetched_user[
                                                    item.id as keyof typeof fetched_user
                                                ]
                                            }
                                        </Text>
                                    </Stack>
                                </YStack>
                                {index !==
                                    ShowProfileData.length - 1 && (
                                    <Stack
                                        backgroundColor={
                                            '$grayscale400'
                                        }
                                        borderRadius={'$full'}
                                        height={'$1'}
                                        width={'$1'}
                                        marginHorizontal={'$2'}
                                    />
                                )}
                            </XStack>
                        ))}
                    </XStack>
                    <XStack gap={'$3'}>
                        {map(socialIcons, (item, index) => {
                            return (
                                <>
                                    {!item?.text ? (
                                        <IconButton
                                            key={index}
                                            icon={item.icon}
                                            borderRadius={'$full'}
                                            borderColor={'$primary'}
                                            w={'$8.5'}
                                            h={'$8.5'}
                                            onPress={async () => {
                                                const url =
                                                    item?.link ||
                                                    'https://tarat.app';
                                                const supported =
                                                    await Linking.canOpenURL(
                                                        url,
                                                    );

                                                if (supported) {
                                                    await Linking.openURL(
                                                        url,
                                                    );
                                                } else {
                                                    // Fallback to browser
                                                    Linking.openURL(
                                                        url,
                                                    );
                                                }
                                            }}
                                        />
                                    ) : !isOwn ? (
                                        <IconButton
                                            key={index}
                                            icon={'EditProfileIcon'}
                                            borderRadius={'$full'}
                                            borderColor={'$primary'}
                                            h={'$8.5'}
                                            label={item.text}
                                            onPress={() =>
                                                router.push(
                                                    APP_CONFIG
                                                        .APP_PATHS
                                                        .FORMS
                                                        .PROFILE_INFORMATIONS_STEP,
                                                )
                                            }
                                        />
                                    ) : (
                                        <IconButton
                                            key={index}
                                            icon={'WhatsappSmallIcon'}
                                            borderRadius={'$full'}
                                            borderColor={'$primary'}
                                            w={'$8.5'}
                                            h={'$8.5'}
                                            onPress={async () => {
                                                const url =
                                                    item?.link ||
                                                    'https://wa.me/905555555555';
                                                const supported =
                                                    await Linking.canOpenURL(
                                                        url,
                                                    );

                                                if (supported) {
                                                    await Linking.openURL(
                                                        url,
                                                    );
                                                } else {
                                                    // Fallback to browser
                                                    Linking.openURL(
                                                        url,
                                                    );
                                                }
                                            }}
                                        />
                                    )}
                                </>
                            );
                        })}
                    </XStack>
                </YStack>
                <YStack alignItems={'center'}>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                        textAlign="center"
                    >
                        {fetched_user.about.replace('  ', '\n')}
                    </Text>
                </YStack>
                {/* @todo belongs to aw card  */}
                {/* {!isOwn && (
                    <YStack
                        alignItems={'center'}
                        gap={'$1'}
                        py={'$2'}
                        px={'$4'}
                        bg={'$grayscale50'}
                        borderRadius={'$2'}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldM}
                            color={'$grayscale800'}
                        >
                            Etiket Notu
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularM}
                            color={'$grayscale800'}
                        >
                            Birazdan geliyorum!
                        </Text>
                    </YStack>
                ) } */}
                {!isOwn && (
                    <XStack
                        gap={'$4'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Button
                            variant="primary"
                            icon="SendIcon"
                            borderRadius={'$4'}
                            paddingHorizontal={'$8'}
                            paddingVertical={'$2'}
                            onPress={() =>
                                router.push(
                                    APP_CONFIG.APP_PATHS.TABS.CHAT,
                                )
                            }
                        >
                            Mesaj Gönder
                        </Button>
                        {isFollowing ? (
                            <LinearGradient
                                colors={['$whiteButton', '$bgSocial']}
                                borderRadius={'$4'}
                            >
                                <IconButton
                                    onPress={handleFollow}
                                    icon={'RemoveUser'}
                                    backgroundColor={'$transparent'}
                                    borderRadius={'$4'}
                                    p={'$3'}
                                    borderColor={'$primary'}
                                    borderWidth={'$px'}
                                    height={'$10.5'}
                                    color="$grayscale800"
                                />
                            </LinearGradient>
                        ) : (
                            <IconButton
                                onPress={handleFollow}
                                icon={'AddUser'}
                                backgroundColor={'$transparent'}
                                borderRadius={'$4'}
                                p={'$3'}
                                borderColor={'$primary'}
                                borderWidth={'$px'}
                                height={'$10.5'}
                                color="$grayscale800"
                            />
                        )}
                    </XStack>
                )}
            </YStack>
            {isModalVisible && (
                <YStack>
                    <UnFollow />
                </YStack>
            )}
        </YStack>
    );
};

export default ProfileCard;
