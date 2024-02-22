import {router} from 'expo-router';
import {ChatRoom} from '@ui/layouts';
import APP_CONFIG from '@constants/APP_CONFIG';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Icon, Text, XStack, YStack} from '@ui';
import {formatTimestamp} from '@utils/timestampUtils';
import { trimText } from '@utils/trimUtils';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
    // onClick: (id: string) => void;
};

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    const user = chatRoom.users[1];

    const onPressChatItem = () => {
        router.push(APP_CONFIG.APP_PATHS.CHAT_BOARD);
    };

    return (
        <XStack
            p="$4"
            jc={'space-between'}
            onPress={onPressChatItem}
        >
            <XStack
                ai={'center'}
                gap={'$3'}
            >
                <Avatar
                    size={52}
                    borderRadius={52}
                >
                    <Avatar.Image
                        source={{uri: user.imageUri}}
                        bg={'lightgray'}
                        w={52}
                        h={52}
                    />
                </Avatar>
                <YStack w={'81%'}>
                    <XStack
                        alignItems={'flex-start'}
                        justifyContent={'space-between'}
                    >
                        <Text {...TEXT_OPTIONS.BodyMediumM}>
                            {user.name}
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularXs}
                            color={'$grayscale500'}
                        >
                            {formatTimestamp(
                                chatRoom.lastMessage.createdAt,
                            )}
                        </Text>
                    </XStack>
                    <XStack
                        alignItems={'flex-end'}
                        justifyContent={'space-between'}
                    >
                        {/* {icon && (
                        <Icon
                            name={icon}
                            color="$black"
                        />
                    )} */}
                        <Text
                            {...TEXT_OPTIONS.BodyRegularM}
                            color={'$grayscale500'}
                        >
                            {trimText(chatRoom.lastMessage.content, 'content')}
                        </Text>
                        {/* {!icon && <Stack width={'$4'}></Stack>} */}

                        {/* {counterContent ? (
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
                    )} */}
                    </XStack>
                </YStack>
            </XStack>
        </XStack>
    );
};

export default ChatListItem;
