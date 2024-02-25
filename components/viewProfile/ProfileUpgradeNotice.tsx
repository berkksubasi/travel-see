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
                borderColor={'$red10'}
                bg={'$primary'}
            >
                <YStack
                    w={'100%'}
                    ai={'center'}
                >
                    <Icon
                        width={150}
                        name="LogoTextSVG"
                        color={'$white'}
                    />
                </YStack>

                <Text
                    shadowColor={'$white'}
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={0}
                    shadowRadius={2}
                    mt="$2"
                    color={'$white'}
                    ta={'center'}
                    {...TEXT_OPTIONS.BodyRegularS}
                >
                    Seviye atladın! Artık tüm Beğenilerin öncelikli.
                    Ayrıca, eşleşmeden önce her Super Like'ına mesaj
                    ekleyebilirsin.
                </Text>
                <Stack mt="$4">
                    <Button
                        w={'100%'}
                        mt="$8"
                        size="large"
                        bg={'$primaryLight'}
                        onPress={onPress}
                        borderColor={'$red9'}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldS}
                            color={'$white'}
                            shadowColor={'$white'}
                            shadowOffset={{width: 2, height: 2}}
                            shadowOpacity={0.8}
                            shadowRadius={2}
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
