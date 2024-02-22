// ChatRoom.tsx
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ChatBubble} from '@components/chat-bubble';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {QrIndicator} from '@components/qr-indicator';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {
    Button,
    Icon,
    IKeyOfIcons,
    Input,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';

interface ChatMessage {
    id: string;
    text: string;
    time: string;
    icon?: IKeyOfIcons;
}

const chatMockData: ChatMessage[] = [
    {
        id: 'sender',
        text: 'Merhabalar, burada mısınız?',
        time: '02:11pm',
    },
    {
        id: 'sender',
        text: 'Aracınızın kaputunda kedi var! Lütfen aracı çalıştırmadan önce dikkat edin.',
        time: '02:11pm',
    },
    {
        id: 'receiver',
        text: 'Bilgi verdiğiniz için çok teşekkür ederim...',
        time: '02:11pm',
        icon: 'DeliveredIcon',
    },
    {
        id: 'receiver',
        text: 'Hemen müdehale ediyorum',
        time: '02:11pm',
        icon: 'SentIcon',
    },
];

const ChatRoom: React.FC = () => (
    <ScreenContainer
        horizontalPadding={false}
        headerPadding
    >
        <HeaderShown
            showGoBackButton={true}
            title="Eyüp Ahmet"
            extraButtonOne="OptionIcon"
            variant="lined"
        />
        <YStack
            jc={'space-between'}
            h={'100%'}
        >
            <YStack
                gap={'$4'}
                mt={'$3'}
            >
                <Stack alignSelf="center">
                    <QrIndicator />
                </Stack>
                <YStack
                    alignSelf="center"
                    backgroundColor={'$grayscale100'}
                    mt={'$4'}
                    borderRadius={'$7.5'}
                    paddingHorizontal={'$2'}
                    paddingVertical={'$1'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyRegularXs}
                        color={'$black'}
                    >
                        Bugün
                    </Text>
                </YStack>
                <FlatList
                    contentContainerStyle={{gap: 16}}
                    data={chatMockData}
                    keyExtractor={(item) => item.id + Math.random()}
                    renderItem={({item}) => (
                        <ChatBubble chat={item} />
                    )}
                />
            </YStack>
            <XStack
                width={'100%'}
                ai={'center'}
            >
                <Stack w={'85%'}>
                    <Input
                        placeholder="Mesaj yazınız"
                        size="large"
                    />
                </Stack>
                <Button
                    variant="primary"
                    size="large"
                    ml={'$2'}
                    w={'15%'}
                    onPress={() => console.log('Pressed')}
                >
                    <Icon
                        name="SendIcon"
                        color={'$grayscale50'}
                    />
                </Button>
            </XStack>
        </YStack>
    </ScreenContainer>
);

export default ChatRoom;
