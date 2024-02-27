import React from 'react';
import {Avatar, CardBackground, CardFrame} from 'tamagui';
import {Image, Text, XStack, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

type ICard = {
    userPhoto: string;
    name: string;
    userName: string;
    age: number;
    description: string;
    onClick?: () => void;
};

const MainCard: React.FC<ICard> = ({
    name,
    userName,
    age,
    description,
    userPhoto,
    onClick,
}) => (
    <CardFrame
        ai="flex-start"
        jc="flex-end"
        p="$6"
        width="$82"
        height="$98"
        borderRadius="$6"
        backgroundImage={userPhoto}
        onClick={onClick}
    >
        <CardBackground>
            <Image
                borderRadius="$6"
                source={userPhoto}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </CardBackground>
        <YStack>
            <XStack>
                <Text
                    {...TEXT_OPTIONS.H4}
                    color="white"
                    shadowColor="black"
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={0.7}
                    shadowRadius={2}
                >
                    {name}
                </Text>
                <Text
                    {...TEXT_OPTIONS.BodyMediumXl}
                    color="white"
                    shadowColor="black"
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={0.7}
                    shadowRadius={2}
                >
                    , {age}
                </Text>
            </XStack>
            <Text
                mt="$0.5"
                pr="$6"
                color="white"
                shadowColor="black"
                shadowOffset={{width: 0, height: 2}}
                shadowOpacity={0.7}
                shadowRadius={2}
                {...TEXT_OPTIONS.BodyRegularM}
            >
                {description}
            </Text>

            <XStack
                mt="$2"
                ai="center"
            >
                <Avatar size="$6">
                    <Avatar.Image
                        borderRadius={100}
                        source={userPhoto}
                    />
                </Avatar>
                <Text
                    ml="$2"
                    color="white"
                    shadowColor="black"
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={0.7}
                    shadowRadius={2}
                    {...TEXT_OPTIONS.BodyRegularM}
                >
                    {userName}
                </Text>
            </XStack>
        </YStack>
    </CardFrame>
);

export default MainCard;
