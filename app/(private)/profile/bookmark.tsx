import {map} from 'lodash';
import {XStack} from 'tamagui';
import {ButtonGoBack} from '@components/buttons';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {BookmarkCard} from '@components/viewProfile';
import {Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface BookmarkProps {
    username: string | undefined;
    timestamp: string | undefined;
    label: string | undefined;
    content: string | undefined;
    type: string | undefined;
    image?: string;
}

const bookmarks: BookmarkProps[] = [
    {
        username: 'Berk Subaşı',
        timestamp: '11.11.2023',
        label: 'Ev Arabam',
        content: 'Elektrik ve temiz bir araba çok yaklaşmayın.',
        type: 'Araç',
    },
    {
        username: 'Oğuz Sancaktar',
        timestamp: '11.11.2023',
        label: 'Ev Arabam',
        content: 'Elektrik ve temiz bir araba çok yaklaşmayın.',
        type: 'Araç',
        image: 'https://static8.depositphotos.com/1062035/960/i/450/depositphotos_9603761-stock-photo-luxury-suv.jpg',
    },
    {
        username: 'Yağız Avşar',
        timestamp: '11.11.2023',
        label: 'Ev Arabam',
        content: 'Elektrik ve temiz bir araba çok yaklaşmayın.',
        type: 'Araç',
    },
    {
        username: 'Gökhan Doğulu',
        timestamp: '11.11.2023',
        label: 'Ev Arabam',
        content: 'Elektrik ve temiz bir araba çok yaklaşmayın.',
        type: 'Araç',
        image: 'https://static8.depositphotos.com/1062035/960/i/450/depositphotos_9603761-stock-photo-luxury-suv.jpg',
    },
];

const BookmarksScreen = () => {
    return (
        <ScreenContainer
            horizontalPadding={false}
            verticalPadding={0}
        >
            <HeaderShown
                paddingHorizontal={false}
                variant="lined"
            >
                <XStack gap={'$4'}>
                    <ButtonGoBack />
                    <Text {...TEXT_OPTIONS.BodySemiBold2XL}>
                        Kaydettiklerim
                    </Text>
                </XStack>
                <Text
                    {...TEXT_OPTIONS.BodyMediumL}
                    alignSelf="center"
                >
                    {bookmarks.length}
                </Text>
            </HeaderShown>
            <YStack gap={'$3'}>
                {map(bookmarks, (bookmark, index) => (
                    <BookmarkCard
                        key={index}
                        {...bookmark}
                    />
                ))}
            </YStack>
        </ScreenContainer>
    );
};

export default BookmarksScreen;
