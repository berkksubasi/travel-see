import {router} from 'expo-router';
import React from 'react';
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

interface BookmarkProps {
    username: string | undefined;
    timestamp: string | undefined;
    label: string | undefined;
    content: string | undefined;
    type: string | undefined;
    image?: string | undefined;
}
function trimContent(content: string, maxLength = 27) {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

const BookmarkCard: React.FC<BookmarkProps> = ({
    username,
    timestamp,
    content,
    label,
    type,
    image
}) => {
    const {smallLogo} = useAppImages();
    return (
        <XStack
            p={'$3'}
            justifyContent={'space-between'}
            borderWidth={'$px'}
            borderRadius={'$4'}
            borderColor={'$grayscale200'}
            backgroundColor={'$white'}
            onPress={() =>
                router.push(APP_CONFIG.APP_PATHS.SINGLE_POST)
            }
        >
            <XStack
                gap={'$4'}
                alignItems={'center'}
                jc={'center'}
            >
                <Avatar
                    size={'$13'}
                    borderRadius={'$2.5'}
                    borderWidth={'$px'}
                    borderColor={'$grayscale50'}
                >
                  <Avatar.Image source={{ uri: image || smallLogo }} />
                </Avatar>
                <YStack
                    gap={'$2'}
                    ai={'flex-start'}
                >
                    <XStack
                        p={'$1'}
                        ai={'flex-start'}
                        bg={'$grayscale50'}
                        borderRadius={'$1'}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodyMediumM}
                            // backgroundColor={'$grayscale200'}
                            color={'$grayscale900'}
                        >
                            {username}
                        </Text>
                    </XStack>
                    <YStack ai={'flex-start'}>
                        <Text
                            {...TEXT_OPTIONS.BodyMediumM}
                            color={'$grayscale900'}
                        >
                            {label}
                        </Text>
                        <Text
                            textOverflow="ellipsis"
                            {...TEXT_OPTIONS.BodyRegularS}
                            color={'$grayscale400'}
                        >
                            {trimContent(content ?? '')}
                        </Text>
                    </YStack>
                </YStack>
            </XStack>
            <YStack
                justifyContent={'space-between'}
                ai={'flex-end'}
                alignSelf="stretch"
            >
                <XStack
                    ai="flex-start"
                    px={'$2'}
                    borderColor={'$primary'}
                    borderWidth={'$px'}
                    borderRadius={'$11'}
                >
                    <Text
                        textAlign={'center'}
                        color={'$grayscale800'}
                        {...TEXT_OPTIONS.BodyRegularXs}
                    >
                        {type}
                    </Text>
                </XStack>
                <YStack
                    ai={'flex-end'}
                    jc={'center'}
                >
                    <Text
                        color={'$grayscale400'}
                        {...TEXT_OPTIONS.BodyRegularS}
                    >
                        Kayıt Tarihi
                    </Text>
                    <Text
                        color={'$grayscale900'}
                        {...TEXT_OPTIONS.BodyMediumS}
                    >
                        {timestamp}
                    </Text>
                </YStack>
            </YStack>
        </XStack>
    );
};

export default BookmarkCard;
