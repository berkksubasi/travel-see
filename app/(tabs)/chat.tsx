import {FlatList} from 'react-native-gesture-handler';
import {YStack} from 'tamagui';
import NotificationButton from '@components/buttons/NotificationButton';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {
    ChatListItem,
    ComingSoon,
    HeaderShown,
    ScreenContainer,
} from '@components';
//Data
import {ChatRooms} from '@data';
//UI Lib.
import {
    IconButton,
    IIconButtonProps,
    IKeyOfIcons,
    Text,
    XStack,
} from '@ui';

interface MessageProps {
    userName: string | undefined;
    timestamp: string | undefined;
    content: string | undefined;
    notification?: string | undefined;
    icon?: IKeyOfIcons | undefined;
}

const messages: MessageProps[] = [
    {
        userName: 'Berk Subaşı',
        timestamp: 'Dün, 16:25',
        content: 'Aracınız yanlış park edilmiş, lütfen...',
        icon: 'SentIcon',
    },
    {
        userName: 'Oğuz Sancaktar',
        timestamp: 'Dün, 20:30',
        content: 'Aracınız yanlış park edilmiş, lütfen...',
        notification: '4',
    },
    {
        userName: 'Yağız Avşar',
        timestamp: '14:14',
        content: 'Aracınız yanlış park edilmiş, lütfen...',
        icon: 'DeliveredIcon',
    },
    {
        userName: 'Gökhan Doğulu',
        timestamp: '22.00',
        content: 'Aracınız yanlış park edilmiş, lütfen...',
        icon: 'SentIcon',
    },
];

const buttonStyles: Omit<IIconButtonProps, 'icon'> = {
    color: '$grayscale900',
    borderRadius: '$full',
    borderWidth: '$px',
    marginHorizontal: '$0',
    variant: 'tertiary',
    width: 38.5,
    height: 38.5,
};

const MessageScreen = () => {
    return (
        <ScreenContainer
            horizontalPadding={false}
            verticalPadding={0}
        >
            <YStack
                w={'100%'}
                h={'100%'}
                alignItems={'center'}
                jc={'center'}
            >
                <ComingSoon />
            </YStack>
            {/* <HeaderShown
                paddingHorizontal={false}
                variant="lined"
            >
                <Text
                    {...TEXT_OPTIONS.BodySemiBold2XL}
                    ml="$5"
                >
                    Mesajlar
                </Text>
                <XStack gap={'$3'}>
                    <NotificationButton counterValue={4} />
                    <IconButton
                        icon="DeleteIcon"
                        {...buttonStyles}
                    />
                </XStack>
            </HeaderShown> */}
            {/* <FlatList
                data={messages}
                renderItem={({item}) => <MessageCard {...item} />}
                keyExtractor={(item,index) => index.toString()}
            /> */}
            {/* <YStack h={'87%'}>
                <FlatList
                    data={ChatRooms}
                    renderItem={({item}) => (
                        <ChatListItem chatRoom={item} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </YStack> */}
        </ScreenContainer>
    );
};

export default MessageScreen;
