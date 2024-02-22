import React from 'react';
import {Avatar, CardFrame} from 'tamagui';
import useAppImages from '@hooks/useAppImages';
import {Image, Stack, Text, XStack, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import Card from './Card';

interface ICard {
    userPhoto: string;
    name: string;
    userName: string;
    age: number;
    description: string;
    backgroundImage: string;
}

const MainCard: React.FC<ICard> = ({
    backgroundImage,
    name,
    userName,
    age,
    description,
}) => {
    const {userAvatar} = useAppImages();

    return (
        <YStack
            ai={'flex-start'}
            jc={'flex-end'}
            p={'$6'}
            width={'$82'}
            height={'$98'}
            borderRadius={'$6'}
            bg={'$primaryLight'}
            backgroundImage={`url(${backgroundImage})`}
            style={{objectFit: 'cover'}}
        >
            <YStack>
                <XStack>
                    <Text {...TEXT_OPTIONS.H4}>{name}</Text>
                    <Text {...TEXT_OPTIONS.BodyMediumXl}>
                        , {age}
                    </Text>
                </XStack>
                <Text
                    mt={'$0.5'}
                    pr={'$6'}
                    {...TEXT_OPTIONS.BodyRegularM}
                >
                    {description}
                </Text>
                <XStack
                    mt={'$2'}
                    ai={'center'}
                >
                    <Avatar size={'$6'}>
                        <Avatar.Image source={userAvatar} />
                    </Avatar>
                    <Text
                        ml={'$2'}
                        {...TEXT_OPTIONS.BodyRegularM}
                    >
                        {userName}
                    </Text>
                </XStack>
            </YStack>
        </YStack>
    );
};

export default MainCard;
