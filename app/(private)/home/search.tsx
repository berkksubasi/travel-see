//Lodash
import {router} from 'expo-router';
import React from 'react';
import useAppImages from '@hooks/useAppImages';
import '@components';
//Common Lib.
import {HeaderShown, ScreenContainer} from '@components';
//Constants
import {APP_CONFIG, TEXT_OPTIONS} from '@constants';
//UI Lib.
import {Image, Input, ScrollView, Stack, Text, YStack} from '@ui';

const search = () => {
    const {filterFrame} = useAppImages();

    return (
        <YStack
            backgroundColor={'$background'}
            h={'100%'}
        >
            <YStack
                alignItems={'center'}
                backgroundColor={'$primary'}
                width={'100%'}
                height={'$32'}
                borderBottomLeftRadius={'$6'}
                borderBottomRightRadius={'$6'}
                top={0}
                pos={'relative'}
            >
                <HeaderShown
                    showGoBackButton
                    title="Arama Yap"
                    variant="dynamic"
                />
                <YStack
                    position="absolute"
                    bottom={'$-6.5'}
                    left={'11%'}
                    right={'11%'}
                    zIndex={1}
                >
                    <Input
                        backgroundColor={'$white'}
                        leftIconName="SearchIcon"
                        addOns={[
                            {
                                iconName: 'Filter',
                                iconColor: '$grayscale800',
                                onPress: () => {
                                    router.push(
                                        APP_CONFIG.APP_PATHS
                                            .SEARCH_FILTER,
                                    );
                                },
                            },
                        ]}
                        placeholder="Araç ara..."
                        width={'100%'}
                        size="large"
                    ></Input>
                </YStack>
            </YStack>

            <YStack
                paddingHorizontal={'$space.10'}
                backgroundColor={'$white'}
            ></YStack>
            <ScrollView>
                <YStack
                    h={'100%'}
                    alignItems="center"
                    justifyContent="unset"
                    marginTop={'50%'}
                >
                    <Image
                        source={filterFrame}
                        mb={'$4'}
                    />
                    <Text
                        textAlign={'center'}
                        marginHorizontal={'$25'}
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale600'}
                    >
                        Keşfet’te bakıp bulamadıklarınızı burdan
                        arayabilirisiniz
                    </Text>
                </YStack>
            </ScrollView>
        </YStack>
    );
};

export default search;
