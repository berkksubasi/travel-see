import React from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import { useAppImages } from '@hooks';
import { Divider, Image, Text, XStack, YStack } from '@ui';

interface StatisticCardProps {
    title: string;
    qrType: string;
    qrStatus: boolean;
    qrDescription: string;
    impressions: string;
    connections: string;
    creationDate: string;
}

function trimContent(content:string, maxLength = 25) {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

function trimTitle(content:string, maxLength = 24) {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
    title,
    qrType,
    qrStatus,
    qrDescription,
    impressions,
    connections,
    creationDate,
}) => {
    const { bigCar } = useAppImages();

    return (
        <YStack
            padding={'$3'}
            marginVertical={'$2'}
            borderWidth={'$px'}
            width={'100%'}
            borderColor={'$grayscale200'}
            borderRadius={'$4'}
        >
            <XStack justifyContent={'space-between'}>
                <XStack gap={'$4'}>
                    <Image
                        source={bigCar}
                        width={'$13'}
                        height={'$13'}
                        borderRadius={10}
                    />
                    <YStack gap={'$1'}>
                        <YStack>
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale900'}
                            >
                                {trimTitle(title)}
                            </Text>
                            <Text
                                {...TEXT_OPTIONS.BodyRegularS}
                                color={'$grayscale400'}
                            >
                                {trimContent(qrDescription)}
                            </Text>
                        </YStack>
                        <XStack
                            alignSelf="flex-start"
                            borderWidth={'$px'}
                            borderColor={'$primary'}
                            borderRadius={'$11'}
                            paddingHorizontal={'$2'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodyRegularXs}
                                color={'$grayscale800'}
                            >
                                {qrType}
                            </Text>
                        </XStack>
                    </YStack>
                </XStack>
                <YStack
                    alignItems={'flex-start'}
                    alignSelf="flex-start"
                    backgroundColor={qrStatus ? '$primary' : '$disabled'}
                    borderRadius={'$11'}
                    paddingHorizontal={'$3'}
                    paddingVertical={'$1'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyMediumXs}
                        color={qrStatus ? '$white' : '$grayscale500'}
                    >
                        {qrStatus ? 'Aktif' : 'Pasif'}
                    </Text>
                </YStack>
            </XStack>
            <Divider marginVertical={'$3'} />
            <XStack justifyContent={'space-between'}>
                <YStack>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularS}
                        color={'$grayscale600'}
                    >
                        Görüntülenme
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={'$grayscale800'}
                    >
                        {impressions}
                    </Text>
                </YStack>
                <YStack>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularS}
                        color={'$grayscale600'}
                    >
                        Bağlantılar
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={'$grayscale800'}
                    >
                        {connections}
                    </Text>
                </YStack>
                <YStack>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularS}
                        color={'$grayscale600'}
                    >
                        Oluşturulma Tarihi
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={'$grayscale800'}
                    >
                        {creationDate}
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    );
};

export default StatisticCard;
