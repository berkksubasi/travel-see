import React from 'react';
import {Icon, Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface IProfileCard {
    bg: string;
    borderWidth: string;
    borderColor: string;
    superLikes: number;
    description: string;
}

const ProfileCard1: React.FC<IProfileCard> = ({
    bg,
    borderWidth,
    borderColor,
    superLikes,
    description,
}) => {
    return (
        <YStack
            w={'100%'}
            ai={'center'}
            jc={'center'}
            bg={bg}
            p={'$2'}
            borderRadius={'$4'}
            borderWidth={borderWidth}
            borderColor={borderColor}
        >
            <Icon
                color={'$white'}
                name={'KeyIcon'}
            />
            <Text
                color={'$white'}
                {...TEXT_OPTIONS.BodyMediumM}
            >
                {superLikes} Super Like
            </Text>
            <Text
                color={'$white'}
                {...TEXT_OPTIONS.BodyMediumXs}
            >
                {description}
            </Text>
        </YStack>
    );
};

export default ProfileCard1;
