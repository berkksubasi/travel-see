import React, {useState} from 'react';
import Objection from '@components/modal/Objection';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {useAppImages} from '@hooks';
import {
    Button,
    Image,
    Stack,
    Switch,
    Text,
    XStack,
    YStack,
} from '@ui';

function trimContent(content: string, maxLength = 25): string {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

interface QrCardProps {
    title: string;
    qrType: string;
    qrStatus: string;
    qrDescription: string;
    deleteTitle?: string;
    deleteDate?: string;
    objectionButton?: boolean;
}

function trimTitle(content: string, maxLength = 24): string {
    if (content.length > maxLength) {
        return content.substring(0, maxLength) + '...';
    }
    return content;
}

const QrCard: React.FC<QrCardProps> = ({
    title,
    qrType,
    qrStatus,
    qrDescription,
    deleteTitle,
    deleteDate,
    objectionButton,
}) => {
    const {bigCar} = useAppImages();

    const [isSwitchOn, setSwitchOn] = useState(false);
    const [showObjectionModal, setShowObjectionModal] =
        useState(false);

    const handleSwitchChange = () => {
        setSwitchOn(!isSwitchOn);
    };

    const handleObjectionButtonClick = () => {
        setShowObjectionModal(true);
    };

    const handleCloseModal = () => {
        setShowObjectionModal(true);
    };

    const renderSwitch =
        !objectionButton && !deleteDate && !deleteTitle;

    return (
        <YStack
            p={'$3'}
            my={'$2'}
            borderWidth={'$px'}
            width={'100%'}
            borderColor={'$grayscale200'}
            borderRadius={'$4'}
        >
            {showObjectionModal && (
                <Objection onClose={handleCloseModal} />
            )}

            <XStack justifyContent={'space-between'}>
                <XStack gap={'$4'}>
                    <Image
                        source={bigCar}
                        width={'$13'}
                        height={'$13'}
                        borderRadius={'$2.5'}
                        objectFit={'cover'}
                    />
                    <YStack gap={'$1'}>
                        <XStack>
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
                            <YStack ml={'$3'}>
                                <Text
                                    {...TEXT_OPTIONS.BodyRegularS}
                                    color={'$error'}
                                    textAlign="right"
                                >
                                    {deleteTitle
                                        ? trimContent(deleteTitle)
                                        : String}
                                </Text>
                                <Text
                                    {...TEXT_OPTIONS.BodyMediumS}
                                    color={'$grayscale900'}
                                    textAlign="right"
                                >
                                    {deleteDate
                                        ? trimContent(deleteDate)
                                        : ''}
                                </Text>
                            </YStack>
                        </XStack>
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
                {renderSwitch && (
                    <YStack
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Switch
                            value={isSwitchOn}
                            onChange={handleSwitchChange}
                        />
                    </YStack>
                )}
                {objectionButton && (
                    <Button
                        alignSelf="center"
                        variant="primary"
                        borderRadius={'$4'}
                        h={'$10'}
                        w={'$23'}
                        onPress={handleObjectionButtonClick}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldM}
                            color={'$white'}
                        >
                            İtiraz Et
                        </Text>
                    </Button>
                )}
            </XStack>
        </YStack>
    );
};

export default QrCard;
