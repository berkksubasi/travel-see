import React, {useState} from 'react';
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
} from '@components';
import {APP_SHADOWS, TEXT_OPTIONS} from '@constants';
import {Icon, Text, XStack, YStack} from '@ui';

const faqData = [
    {
        title: 'Neden Tarat Kullanmalıyım?',
        content:
            'Tarat, aracınızla etkileşim kurmanın kolay ve güvenli bir yolunu sağlar. Yenilikçi QR kod tarama teknolojisiyle anında araç bilgilerinize erişebilir, acil durum iletişim bilgilerinizi yönetebilirsiniz. Kullanımı basit olan Tarat, gelecekteki güncellemelerle daha fazla avantaj sunmayı amaçlayarak kullanıcı deneyimini sürekli iyileştiriyor.',
    },
    {
        title: "Tarat'ı kullanmaya nasıl başlayabilirim?",
        content:
            "Tarat'ı kullanmaya başlamak kolaydır. Uygulamayı App Store veya Google Play'den indirmeniz ve hesabınızı oluşturmak için ekrandaki talimatları izlemeniz yeterlidir. Kayıt olduktan sonra araba camlarında QR kodlarını taramaya hemen başlayabilirsiniz.",
    },
    {
        title: 'Tarat sadece araç sahipleri için mi?',
        content:
            'Hayır, Tarat şu an için araç sahipleri odaklı bir başlangıç yapmış olsa da, ilerleyen zamanlarda uygulama çeşitli genişlemelerle daha fazla kullanıcı kitlesine hitap edecek. Gelecekte, farklı araç türleri, mekanlar, tasmalar ve ilanlar gibi yeni özelliklerin eklenmesi planlanmaktadır. Bu sayede Tarat, daha geniş bir kullanıcı kitlesine ve farklı ihtiyaçlara uygun hale gelecektir.',
    },
];

const AccordionItem = ({
    item,
    isOpen,
    onClick,
}: {
    item: any;
    isOpen: boolean;
    onClick: () => void;
}) => (
    <>
        <XStack
            jc="space-between"
            ai={'center'}
            w="100%"
            p="$4"
            borderBottomWidth="$px"
            borderBottomColor="$grayscale200"
            borderRadius="$4"
            onPress={onClick}
            bg={'$background'}
            {...APP_SHADOWS.small}
            shadowColor={isOpen ? '$primary05' : '$grayscale200'}
            zIndex={'$1'}
        >
            <Text {...TEXT_OPTIONS.BodyMediumM}>{item.title}</Text>
            <Icon
                name="ChevronDownIcon"
                color="$grayscale400"
                style={{
                    transform: [{rotate: isOpen ? '180deg' : '0deg'}],
                }}
            />
        </XStack>
        {isOpen && (
            <XStack
                p="$3"
                pt="$7"
                ai={'center'}
                backgroundColor="$primary02"
                borderBottomEndRadius="$4"
                borderBottomStartRadius="$4"
                borderColor="$primary05"
                borderWidth="$px"
                mt="$-8"
            >
                <Text
                    {...TEXT_OPTIONS.BodyRegularM}
                    color="$grayscale900"
                >
                    {item.content}
                </Text>
            </XStack>
        )}
    </>
);

const About = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index: any) => {
        setOpenIndex((prevIndex) =>
            prevIndex === index ? null : index,
        );
    };
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                w={'100%'}
                h={'100%'}
                ai={'center'}
            >
                <YStack
                    w={'100%'}
                    ai={'center'}
                >
                    <YStack mb={'$6'}>
                        <Icon name="SelfLogo" />
                    </YStack>
                    <Text
                        {...TEXT_OPTIONS.H4}
                        color={'$grayscale900'}
                        mb={'$3'}
                    >
                        Hakkında
                    </Text>
                    <Text
                        ta={'center'}
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale600'}
                    >
                        Tarat, aracınızla etkileşim kurmanın ve
                        aracınızı korumanın kusursuz bir yolunu sunan
                        güvenilir arkadaşınızdır. Yenilikçi QR kod
                        tarama teknolojimiz, aracınızla ilgili
                        kapsamlı ayrıntılara anında erişmenizi sağlar.
                        Tarat, temel bilgilerden acil durum iletişim
                        bilgilerine kadar kontrolü size verir.
                    </Text>
                    <Text
                        mt="$10"
                        mb={'$4'}
                        {...TEXT_OPTIONS.BodySemiBoldXL}
                        color={'$grayscale700'}
                    >
                        Sık Sorulan Sorular
                    </Text>
                </YStack>
                <YStack
                    w={'100%'}
                    gap={'$4'}
                >
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() =>
                                handleAccordionClick(index)
                            }
                        />
                    ))}
                </YStack>

                <YStack
                    w={'100%'}
                    ai={'center'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale700'}
                        mt={'$6'}
                    >
                        Version 1.0.0
                    </Text>
                </YStack>
            </YStack>
        </ScreenContainer>
    );
};

export default About;
