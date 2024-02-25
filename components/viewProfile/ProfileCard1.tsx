import React from 'react';
import {Icon, IKeyOfIcons, Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface IProfileCard {
    bg: string;
    borderWidth: string;
    borderColor: string;
    superLikes?: number;
    description: string;
    icon: IKeyOfIcons;
}

const ProfileCard1: React.FC<IProfileCard> = ({
    bg,
    borderWidth,
    borderColor,
    superLikes,
    description,
    icon,
}) => {
    return (
        <YStack
            w={'$28'}
            h={'$22'}
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
                name={icon}
            />
            {superLikes !== undefined && (
                <Text
                    color={'$white'}
                    {...TEXT_OPTIONS.BodyMediumM}
                    shadowColor={'black'}
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={0.7}
                    shadowRadius={2}
                    mt={'$1'}
                >
                    {superLikes}
                </Text>
            )}
            <Text
                color={'$white'}
                {...TEXT_OPTIONS.BodyMediumXs}
                shadowColor={'white'}
                shadowOffset={{width: 0, height: 2}}
                shadowOpacity={0.4}
                shadowRadius={2}
                ta={'center'}
                mt={superLikes !== 0 ? '$3' : 0} // superLikes varsa mt, yoksa undefined
            >
                {description}
            </Text>
        </YStack>
    );
};

export default ProfileCard1;
