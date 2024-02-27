import {router} from 'expo-router';
import _ from 'lodash';
import React from 'react';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {
    ProfileAvatar,
    ProfileCard1,
    ProfileUpgradeNotice,
} from '@components/viewProfile';
import {Icon, Stack, XStack, YStack} from '@ui/primitives';
import APP_CONFIG from '@constants/APP_CONFIG';

function Profile() {
    const profileCards = [
        {
            bg: '$primary',

            superLikes: `${5} Super Likes`,
            borderColor: '$red10',
            description: 'DAHA FAZLA AL',
            icon: 'AdIcon',
        },
        {
            bg: '$primary',
            superLikes: `${5} Boosts`,
            borderColor: '$primaryLight',
            description: 'DAHA FAZLA AL',
            icon: 'AdIcon',
        },
        {
            bg: '$primary',
            borderColor: '$primaryLight',
            description: "Travel See PLATINUM™'um",
            icon: 'AdIcon',
        },
    ];

    const settingsButton = () => {
        router.push(APP_CONFIG.APP_PATHS.SETTINGS);
    };

    return (
        <ScreenContainer
            horizontalPadding={0}
            verticalPadding={0}
        >
            <YStack
                w="100%"
                h="100%"
                ai="center"
            >
                <HeaderShown
                    variant="circular"
                    paddingHorizontal={false}
                >
                    <XStack
                        w="100%"
                        h="100%"
                        ai="flex-start"
                        jc="space-between"
                        gap="$6"
                    >
                        <XStack
                            mr="$15"
                            h="100%"
                        />
                        <XStack>
                            <Stack>
                                <Icon
                                    name="Secure"
                                    color="$primary"
                                />
                            </Stack>
                            <Stack ml="$6">
                                <Icon
                                    name="SettingsIcon"
                                    color="$primary"
                                    onPress={settingsButton}
                                />
                            </Stack>
                        </XStack>
                    </XStack>
                </HeaderShown>

                <YStack
                    w="100%"
                    ai="center"
                >
                    <YStack
                        ai="center"
                        w="100%"
                        borderRadius="$6"
                        mt="$1"
                    >
                        <ProfileAvatar
                            age={29}
                            name="Limea"
                        />
                    </YStack>
                    <XStack
                        style={{justifyContent: 'center'}}
                        gap="$4"
                        mt="$6"
                    >
                        {_.map(profileCards, (card, index) => (
                            <Stack
                                key={index}
                                mt="$2"
                            >
                                <ProfileCard1
                                    bg={card.bg}
                                    borderWidth={card.borderWidth}
                                    borderColor={card.borderColor}
                                    superLikes={card.superLikes}
                                    description={card.description}
                                    icon={card.icon}
                                />
                            </Stack>
                        ))}
                    </XStack>
                    <Stack mt="$13">
                        <ProfileUpgradeNotice onPress={() => {}} />
                    </Stack>
                </YStack>
            </YStack>
        </ScreenContainer>
    );
}

export default Profile;
