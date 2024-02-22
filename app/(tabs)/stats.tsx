import {filter, map} from 'lodash';
import React from 'react';
import {ComingSoon} from '@components/coming-soon';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import {
    StatisticCard,
    StatisticInfoCard,
} from '@components/statistic';
import EmptySVG from '@ui/primitives/Icon/svg/EmptySVG';
import {APP_SHADOWS, TEXT_OPTIONS} from '@constants';
import {Icon, ScrollView, Text, XStack, YStack} from '@ui';

// interface DummyFeed {
//     title: string;
//     qrType: string;
//     qrStatus: boolean;
//     qrDescription: string;
//     impressions: string;
//     connections: string;
//     creationDate: string;
// }

// interface DummyDataInterface {
//     viewCount: string;
//     likeCount: string;
//     feeds: DummyFeed[];
// }

// const dummyData: DummyDataInterface = {
//     viewCount: '41',
//     likeCount: '4',
//     feeds: [
//         {
//             title: 'Spor Araba Keyfi',
//             qrType: 'Araç',
//             qrStatus: true,
//             qrDescription:
//                 'Güçlü bir spor aracın heyecanını yaşayın!',
//             impressions: '50',
//             connections: '8',
//             creationDate: '10.05.2018',
//         },
//         {
//             title: 'Klasik Güzellik - Antika Araç',
//             qrType: 'Araç',
//             qrStatus: true,
//             qrDescription:
//                 'İyi korunmuş bir antika aracın zarafetini keşfedin.',
//             impressions: '42',
//             connections: '6',
//             creationDate: '22.08.2019',
//         },
//         {
//             title: 'Arazi Canavarı Macera',
//             qrType: 'Araç',
//             qrStatus: true,
//             qrDescription:
//                 'Zorlu arazileri sağlam bir off-road araçla fethedin!',
//             impressions: '38',
//             connections: '5',
//             creationDate: '03.11.2020',
//         },
//         {
//             title: 'Lüks Sedan Deneyimi',
//             qrType: 'Araç',
//             qrStatus: false,
//             qrDescription:
//                 'Lüks sedanın konforunda ve ihtişamında kaybolun.',
//             impressions: '48',
//             connections: '7',
//             creationDate: '15.06.2022',
//         },
//         {
//             title: 'Yüksek Performanslı Spora Araba',
//             qrType: 'Araç',
//             qrStatus: true,
//             qrDescription:
//                 'Hız tutkunları için yüksek performanslı bir spor araç.',
//             impressions: '55',
//             connections: '10',
//             creationDate: '20.09.2023',
//         },
//         {
//             title: 'Vintage Rüzgarı',
//             qrType: 'Araç',
//             qrStatus: false,
//             qrDescription:
//                 'Retro tasarımıyla göz kamaştıran vintage bir araç.',
//             impressions: '36',
//             connections: '4',
//             creationDate: '12.04.2024',
//         },
//         {
//             title: 'Suv Macerası',
//             qrType: 'Araç',
//             qrStatus: true,
//             qrDescription:
//                 'SUV ile heyecan dolu bir maceraya atılın!',
//             impressions: '43',
//             connections: '6',
//             creationDate: '07.07.2025',
//         },
//     ],
// };

const StatisticScreen = () => {
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
            {/* <HeaderShown variant="lined">
                <Text
                    {...TEXT_OPTIONS.BodySemiBold2XL}
                    ml="$5"
                >
                    Veriler
                </Text>
            </HeaderShown>
            <XStack
                gap={'$4'}
                alignItems={'center'}
                width={'100%'}
            >
                <StatisticInfoCard
                    title={'Toplam\nGörüntülenme'}
                    value={dummyData.viewCount}
                    icon={'Capa_1'}
                />
                <StatisticInfoCard
                    title={'Toplam\nBağlantılar'}
                    value={dummyData.likeCount}
                    icon={'SendCrossIcon'}
                />
            </XStack>
            <YStack
                width={'100%'}
                gap={'$6'}
                marginTop={'$8'}
            >
                <YStack gap={'$6'}>
                    <Text
                        alignSelf="flex-start"
                        {...TEXT_OPTIONS.BodyMediumL}
                        color={'$grayscale600'}
                    >
                        Aktif QR'lar
                    </Text>
                    <ScrollView
                        width={'100%'}
                        height={
                            dummyData.feeds.length === 0 ? '' : '$75'
                        }
                    >
                        {dummyData.feeds.length === 0 ? (
                            <YStack
                                ai={'center'}
                                gap={'$3'}
                            >
                                <EmptySVG />
                                <Text
                                    alignSelf="center"
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    color={'$grayscale400'}
                                >
                                    Henüz Aktif Taratınız yok!
                                </Text>
                            </YStack>
                        ) : (
                            map(
                                filter(dummyData.feeds, {
                                    qrStatus: true,
                                }),
                                (feed, index) => (
                                    <StatisticCard
                                        key={index}
                                        {...feed}
                                    />
                                ),
                            )
                        )}
                    </ScrollView>
                </YStack>
                <YStack gap={'$6'}>
                    <Text
                        alignSelf="flex-start"
                        {...TEXT_OPTIONS.BodyMediumL}
                        color={'$grayscale600'}
                    >
                        Pasif QR'lar
                    </Text>
                    <ScrollView
                        width={'100%'}
                        height={
                            dummyData.feeds.length === 0 ? '' : '$36'
                        }
                    >
                        {dummyData.feeds.length === 0 ? (
                            <YStack
                                ai={'center'}
                                gap={'$3'}
                            >
                                <EmptySVG />
                                <Text
                                    alignSelf="center"
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    color={'$grayscale400'}
                                >
                                    Henüz Pasif Taratınız yok!
                                </Text>
                            </YStack>
                        ) : (
                            map(
                                filter(dummyData.feeds, {
                                    qrStatus: false,
                                }),
                                (feed, index) => (
                                    <StatisticCard
                                        key={index}
                                        {...feed}
                                    />
                                ),
                            )
                        )}
                    </ScrollView>
                </YStack>
            </YStack> */}
        </ScreenContainer>
    );
};

export default StatisticScreen;
