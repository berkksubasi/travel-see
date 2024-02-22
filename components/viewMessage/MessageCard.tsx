import {router} from 'expo-router';
import React from 'react';
import {AvatarFrame} from 'tamagui';
import useAppImages from '@hooks/useAppImages';
import APP_CONFIG from '@constants/APP_CONFIG';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
//UI Lib.
import {
    Avatar,
    Icon,
    IKeyOfIcons,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';

interface MessageProps {
    userName: string | undefined;
    timestamp: string | undefined;
    content: string | undefined;
    counterContent?: string | undefined;
    icon?: IKeyOfIcons | undefined;
}

const MessageCard: React.FC<MessageProps>  = ({
    userName,
    timestamp,
    icon,
    content,
    counterContent,
}) => {
    const {userAvatar} = useAppImages();
    return (
        <XStack
            gap={'$3'}
            paddingVertical="$4"
            onPress={() =>
                router.push(APP_CONFIG.APP_PATHS.CHAT_BOARD)
            }
        >
            <Avatar
                size={52}
                borderRadius={52}
            >
                <Avatar.Image
                    source={userAvatar}
                    w={52}
                    h={52}
                />
            </Avatar>
            <YStack justifyContent={'center'}>
                <XStack
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Text {...TEXT_OPTIONS.BodyMediumM}>
                        {userName}
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularXs}
                        color={'$grayscale500'}
                    >
                        {timestamp}
                    </Text>
                </XStack>
                <XStack alignItems={'center'}>
                    {icon && (
                        <Icon
                            name={icon}
                            color="$black"
                        />
                    )}
                    <Text
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale500'}
                    >
                        {content}
                    </Text>
                    {!icon && <Stack width={'$4'}></Stack>}

                    {counterContent ? (
                        <XStack
                            backgroundColor={'$primary'}
                            borderRadius={65}
                            width={'$6'}
                            height={'$4'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodyMediumS}
                                lineHeight={'$bodySm'}
                                color={'$white'}
                            >
                                {counterContent}
                            </Text>
                        </XStack>
                    ) : (
                        <Stack width={'$6'}></Stack>
                    )}
                </XStack>
            </YStack>
        </XStack>
    );
};

export default MessageCard;
