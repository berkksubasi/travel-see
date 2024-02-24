import React from 'react';
import {Avatar} from 'tamagui';
import useAppImages from '@hooks/useAppImages';
import {Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface IProfileAvatarProps {
    name: string;
    age: number;
    avatarSrc?: string;
}

const ProfileAvatar: React.FC<IProfileAvatarProps> = ({
    name,
    age,
    avatarSrc,
}) => {
    const {user1} = useAppImages();
    return (
        <YStack
            ai={'center'}
            jc={'center'}
            w={'100%'}
        >
            <Avatar
                size={'$40'}
                borderRadius={'$24'}
                borderColor={'$primary'}
                borderWidth={'$0.5'}
            >
                <Avatar.Image src={avatarSrc || user1} />
            </Avatar>
            <Text
                {...TEXT_OPTIONS.H5}
                color={'white'}
                shadowColor={'black'}
                shadowOffset={{width: 0, height: 2}}
                shadowOpacity={0.7}
                shadowRadius={2}
                mt={'$2'}
            >
                {name}, {age}
            </Text>
        </YStack>
    );
};

export default ProfileAvatar;
