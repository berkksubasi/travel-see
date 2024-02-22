import React from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {Icon, IKeyOfIcons, Text, XStack, YStack} from '@ui';

interface ChatMessage {
    id: string;
    text: string;
    time: string;
    icon?: IKeyOfIcons;
}

const ChatBubble: React.FC<{chat: ChatMessage}> = ({chat}) => (
    <YStack>
        <XStack
            key={chat.text}
            p={'$space.3'}
            borderRadius={'$4'}
            borderColor={'$grayscale200'}
            borderWidth={'$px'}
            backgroundColor={
                chat.id === 'sender' ? '$white' : '$primary19'
            }
            alignSelf={
                chat.id === 'sender' ? 'flex-start' : 'flex-end'
            }
        >
            <Text
                {...TEXT_OPTIONS.BodyRegularM}
                color={'$black'}
                width={'75%'}
            >
                {chat.text}
            </Text>
            <XStack
                alignItems={'flex-end'}
                gap={'$px'}
            >
                {chat.icon && (
                    <Icon
                        size={'$4'}
                        name={chat.icon}
                        color={'$black'}
                    />
                )}

                <Text
                    {...TEXT_OPTIONS.BodyRegularXs}
                    color={'$grayscale600'}
                >
                    {chat.time}
                </Text>
            </XStack>
        </XStack>
    </YStack>
);

export default ChatBubble;
