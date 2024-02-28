import React from 'react';
import {CardBackground, CardFrame, styled} from 'tamagui';
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
        bg="$primary"
        width="$82"
        height="$98"
        borderRadius="$6"
        backgroundImage={userPhoto}
        onClick={onClick}
    >
        <CardBackground
            ai="center"
            p="$4"
            borderRadius="$6"
            shadowColor="$primaryLight"
            shadowOffset={{width: 1, height: 1}}
            shadowOpacity={0.4}
            shadowRadius={3}
        >
            <Image
                borderRadius="$6"
                source={userPhoto}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </CardBackground>

        <YStack height={37}>
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
        </YStack>
    </CardFrame>
);

export default MainCard;
