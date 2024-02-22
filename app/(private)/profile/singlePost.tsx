import {map} from 'lodash';
import {useState} from 'react';
import {ButtonGoBack} from '@components/buttons';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {QrPost} from '@components/viewHome';
import {Button, YStack} from '@ui/primitives';

// dummy data
const qr_posts = [
    {
        name: 'John Doe',
        userName: 'bobikshuman',
        timestamp: 'Dün, 12:00',
        feed: {
            plateNumber: '34 TSR 121',
            brand: 'Tesla',
            model: 'Model S',
            viewCount: 131,
            likeCount: 13,
            qrType: 'Araç',
            qrStatus: 'Sedan',
            qrDescription:
                'Elektrik ve temiz bir araba çok yaklaşmayın',
        },
    },
];

const BookmarksScreen = () => {
    const [visibleModals, setVisibleModals] = useState<boolean[]>(
        qr_posts.map(() => false),
    );
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems={'center'}
                marginTop={'$6'}
                backgroundColor={'$background'}
            >
                {map(qr_posts, (item, index) => {
                    const toggleModalVisible = () => {
                        setVisibleModals((prev) =>
                            prev.map(
                                (bool, i) => i === index && !bool,
                            ),
                        );
                    };
                    return (
                        <QrPost
                            key={index}
                            isModalVisible={visibleModals[index]}
                            toggleModalVisible={toggleModalVisible}
                            {...item}
                        />
                    );
                })}
            </YStack>
            <YStack
                gap={'$4'}
                mt={'$50'}
            >
                <Button
                    variant="primary"
                    icon="SendIcon"
                    h={'$14'}
                    py={'$2'}
                    px={'$8'}
                    borderRadius={'$4'}
                >
                    Mesaj Gönder
                </Button>
                <Button
                    variant="secondary"
                    bg={'$transparent'}
                    borderColor={'$primary'}
                    icon="UserIcon"
                    h={'$14'}
                    py={'$2'}
                    px={'$8'}
                    borderRadius={'$4'}
                >
                    Profile Git
                </Button>
            </YStack>
        </ScreenContainer>
    );
};

export default BookmarksScreen;
