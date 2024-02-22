import React from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import config from '@configuration/tamaguiConfig';
import {Icon, IKeyOfIcons, Stack, Text, XStack} from '@ui';

interface ITab {
    title1?: string;
    icon1: IKeyOfIcons;
    title2?: string;
    icon2: IKeyOfIcons;
    onPress?: () => void;
    backgroundColor?: string;
    color?: typeof config.themeConfig;
    activeTab?: number;
    onTabChange: (index: number) => void;
}

const TabSwitch: React.FC<ITab> = ({
    title1,
    icon1,
    title2,
    icon2,
    activeTab,
    onTabChange,
}: ITab) => {
    const handleTabClick = (tab: number) => {
        onTabChange(tab);
    };

    return (
        <XStack
            height={'$size.10'}
            backgroundColor={'$grayscale100'}
            borderRadius={'$16'}
            paddingHorizontal="$space.1"
            paddingVertical="$space.1"
            alignItems={'center'}
        >
            <Stack
                onPress={() => {
                    handleTabClick(0);
                }}
                justifyContent={'center'}
                backgroundColor={
                    activeTab === 0 ? '$white' : '$grayscale100'
                }
                width={'50%'}
                height={'100%'}
                borderRadius={'$6'}
            >
                <XStack
                    alignItems={'center'}
                    gap={'$px'}
                    justifyContent={'center'}
                >
                    <Icon
                        name={icon1}
                        color={
                            activeTab === 0
                                ? '$grayscale800'
                                : '$grayscale600'
                        }
                    />
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={
                            activeTab === 0
                                ? '$grayscale800'
                                : '$grayscale600'
                        }
                        alignSelf="center"
                    >
                        {title1}
                    </Text>
                </XStack>
            </Stack>
            <Stack
                onPress={() => {
                    handleTabClick(1);
                }}
                justifyContent={'center'}
                backgroundColor={
                    activeTab === 1 ? '$white' : '$grayscale100'
                }
                width={'50%'}
                height={'100%'}
                borderRadius={'$6'}
            >
                <XStack
                    alignItems={'center'}
                    gap={'$px'}
                    justifyContent={'center'}
                >
                    <Icon
                        name={icon2}
                        color={
                            activeTab === 1
                                ? '$grayscale800'
                                : '$grayscale600'
                        }
                    />
                    <Text
                        {...TEXT_OPTIONS.BodyMediumS}
                        color={
                            activeTab === 1
                                ? '$grayscale800'
                                : '$grayscale600'
                        }
                        alignSelf="center"
                    >
                        {title2}
                    </Text>
                </XStack>
            </Stack>
        </XStack>
    );
};

export default TabSwitch;
