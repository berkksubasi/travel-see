import React from 'react';
import {XStack} from 'tamagui';
import {Button, Icon, Stack, Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface IProfileUpgradeNotice {
    onPress: () => void;
}

const ProfileUpgradeNotice: React.FC<IProfileUpgradeNotice> = ({
    onPress,
}) => {
    return (
        <YStack
            ai={'center'}
            w={'100%'}
        >
            <YStack
                p="$5"
                w={'$90'}
                borderRadius={'$4'}
                borderWidth={'$px'}
                borderColor={'$gray9'}
                bg={'$gray7'}
            >
                <YStack
                    w={'100%'}
                    ai={'center'}
                >
                    <Icon
                        name={'LogoTextSVG'}
                        height={18}
                        color={'$primary'}
                    />
                </YStack>

                <Text
                    mt="$2"
                    {...TEXT_OPTIONS.BodyRegularS}
                >
                    Seviye atladın! Artık tüm Beğenilerin öncelikli.
                    Ayrıca, eşleşmeden önce her Super Like'ına mesaj
                    ekleyebilirsin.
                </Text>
                <Stack mt="$4">
                    <Button
                        w={'58%'}
                        mt="$8"
                        size="large"
                        bg={'$primary'}
                        onPress={onPress}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldS}
                            color={'$white'}
                        >
                            Premium Ayarlarına Git
                        </Text>
                    </Button>
                </Stack>
            </YStack>
        </YStack>
    );
};

export default ProfileUpgradeNotice;
