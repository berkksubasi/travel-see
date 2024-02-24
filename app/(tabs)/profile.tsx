import _ from 'lodash';
import React from 'react';
import {CircleIconButton} from '@components/buttons';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {
    ProfileAvatar,
    ProfileCard1,
    ProfileUpgradeNotice,
} from '@components/viewProfile';
import useAppImages from '@hooks/useAppImages';
import {Icon, Image, Stack, XStack, YStack} from '@ui/primitives';

const Profile = () => {
    const profileCards = [
        {
            bg: '$primary',
            borderWidth: '$0.5',
            borderColor: '$primaryLight',
            superLikes: 0,
            description: 'DAHA FAZLA AL',
        },
        {
            bg: '$primaryLight',
            borderWidth: '$px',
            borderColor: '$primaryLight',
            description: 'DAHA FAZLA AL',
        },
        {
            bg: '$primaryLight',
            borderWidth: '$px',
            borderColor: '$primaryLight',
            description: "TS PLATINUM™'um",
        },
    ];

    return (
        <ScreenContainer
            horizontalPadding={0}
            verticalPadding={false}
        >
            <YStack
                w={'100%'}
                h={'100%'}
                ai={'center'}
            >
                <HeaderShown
                    variant="circular"
                    paddingHorizontal={false}
                >
                    <XStack
                        w={'100%'}
                        h={'100%'}
                        ai={'flex-start'}
                        jc={'space-between'}
                        gap={'$6'}
                        r
                    >
                        <XStack
                            mr={'$15'}
                            h={'100%'}
                        >
                            <Icon
                                height={20}
                                name="LogoTextSVG"
                            />
                        </XStack>
                        <XStack>
                            <Stack>
                                <CircleIconButton
                                    icon="Secure"
                                    variant="tertiary"
                                />
                            </Stack>
                            <Stack ml={'$6'}>
                                <CircleIconButton
                                    icon="SettingsIcon"
                                    variant="tertiary"
                                />
                            </Stack>
                        </XStack>
                    </XStack>
                </HeaderShown>

                <YStack
                    w={'100%'}
                    ai={'center'}
                >
                    <YStack
                        ai={'center'}
                        w={'100%'}
                        h={'20%'}
                        borderRadius={'$6'}
                    >
                        <ProfileAvatar
                            age={29}
                            name="Limea"
                        />
                    </YStack>
                    <XStack
                        w={'100%'}
                        style={{justifyContent: 'center'}}
                        gap={'$4'}
                        mt={'$12'}
                    >
                        {_.map(profileCards, (card, index) => (
                            <Stack
                                key={index}
                                mt={'$6'}
                            >
                                <ProfileCard1
                                    bg={card.bg}
                                    borderWidth={card.borderWidth}
                                    borderColor={card.borderColor}
                                    superLikes={card.superLikes}
                                    description={card.description}
                                />
                            </Stack>
                        ))}
                    </XStack>
                    <Stack mt={'$32'}>
                        <ProfileUpgradeNotice onPress={() => {}} />
                    </Stack>
                </YStack>
            </YStack>
        </ScreenContainer>
    );
};

export default Profile;
