import React, {useState} from 'react';
import UnFollow from '@components/modal/UnFollow';
import useAppImages from '@hooks/useAppImages';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
//UI Lib.
import {Avatar, Button, Text, XStack, YStack} from '@ui';

interface FollowerProps {
    username?: string;
    name?: string;
    following?: boolean;
    follower?: boolean;
    onUnfollow: () => void;
    avatar?: string;
}
function trimContent(content: string, maxLength = 27) {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

const FollowerCard: React.FC<FollowerProps> = ({
    username,
    name,
    following,
    follower,
    onUnfollow,
    avatar,
}) => {
    const {defaultUser} = useAppImages();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <>
            <XStack
                p={'$2.5'}
                justifyContent={'space-between'}
            >
                <XStack
                    gap={'$2'}
                    alignItems={'center'}
                >
                    <Avatar
                        size={'$13'}
                        borderRadius={'$full'}
                    >
                        <Avatar.Image
                            source={{uri: avatar || defaultUser}}
                        />
                    </Avatar>
                    <YStack>
                        <Text
                            {...TEXT_OPTIONS.BodyMediumM}
                            color={'$grayscale900'}
                        >
                            {name}
                        </Text>
                        <Text
                            textOverflow="ellipsis"
                            {...TEXT_OPTIONS.BodyRegularS}
                            color={'$grayscale500'}
                        >
                            {trimContent(username || '')}
                        </Text>
                    </YStack>
                </XStack>

                <XStack
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Button
                        variant={following ? 'tertiary' : 'primary'}
                        borderWidth={following ? '$px' : '$0'}
                        borderColor={'$primary'}
                        px={'$4'}
                        py={'$2'}
                        size="medium"
                        borderRadius={'$4'}
                        onPress={following ? toggleModal : () => {}}
                    >
                        <XStack
                            ai={'center'}
                            jc={'center'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale900'}
                            >
                                {following
                                    ? 'Takipten Çıkar'
                                    : 'Takip Et'}
                            </Text>
                        </XStack>
                    </Button>
                </XStack>
            </XStack>
            {isModalVisible && (
                <YStack>
                    <UnFollow />
                </YStack>
            )}
        </>
    );
};

export default FollowerCard;
