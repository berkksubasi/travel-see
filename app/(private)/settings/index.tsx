//Lodash
import {router} from 'expo-router';
import {map} from 'lodash';
import React, {useEffect, useState} from 'react';
import {ListItem, ListItemFrame} from 'tamagui';
import {useStorageState} from '@hooks/useStorageState';
//Common Lib.
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
//Constants
import {APP_CONFIG, TEXT_OPTIONS} from '@constants';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {useThemeSession} from '@provider/ThemeSessionProvider';
//UI Lib.
import {
    Button,
    Icon,
    IconButton,
    IKeyOfIcons,
    ScrollView,
    Stack,
    Switch,
    Text,
    XStack,
    YStack,
} from '@ui';

export default function SettingScreen() {
    const [notificationSwitch, setNotificationSwitch] =
        useState(false);

    const {theme, changeTheme, isLoading} = useThemeSession();

    const {signOut} = useAuthSession();
    interface ItemListType {
        icon: IKeyOfIcons;
        iconAfter?: IKeyOfIcons;
        rightElement?: {
            value: boolean;
            onValueChange: () => void;
        };
        value?: boolean;
        title: string;
        onPress?: () => void;
    }

    const items: ItemListType[] = [
        {
            icon: 'UserIcon',
            title: 'Hesap Ayarları',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.SETTINGS_ACCOUNT);
            },
        },
        {
            icon: 'EditIcon',
            title: 'Bilgilerimi Güncelle',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.UPDATE_INFO);
            },
        },
        {
            icon: 'ConnectIcon',
            title: ' İletişim Bilgileri',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.CONNECTIONS_SOURCE);
            },
        },
        {
            icon: 'NotifyIcon',
            title: ' Bildirimler',
            rightElement: {
                value: notificationSwitch,
                onValueChange: () =>
                    setNotificationSwitch(!notificationSwitch),
            },
        },
        {
            icon: 'BrushIcon',
            title: ' Karanlık Mod',
            rightElement: {
                value: theme === 'dark',
                onValueChange: async () =>
                    await changeTheme(
                        theme === 'dark' ? 'light' : 'dark',
                    ),
            },
        },
        {
            icon: 'PrivacyIcon',
            title: ' Gizlilik Politikası',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.PRIVACY_POLICY);
            },
        },
        {
            icon: 'FAQIcon',
            title: ' Uygulama Hakkında',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.ABOUT);
            },
        },
        {
            icon: 'SupportIcon',
            title: ' Bize Ulaşın',
            iconAfter: 'ChevronRightSmallOutline',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.CONTACT_US);
            },
        },
    ];

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems={'center'}
                height={'100%'}
                width={'100%'}
            >
                <YStack
                    gap={'$2'}
                    marginBottom={'$8'}
                >
                    <CircleIconButton
                        variant="primary"
                        icon="SettingsCustomIcon"
                        color="$white"
                    />
                    <Text {...TEXT_OPTIONS.H4}>Ayarlar</Text>
                </YStack>
                <Stack w={'100%'}>
                    <ScrollView showCustomScrollBar={false}>
                        <YStack
                            w={'100%'}
                            gap={'$4'}
                            mb={'$2'}
                        >
                            {map(items, (item, index) => (
                                <ListItem
                                    key={index}
                                    width={'100%'}
                                    maxHeight={'$size.14'}
                                    padding={'$space.4'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    borderColor={'$grayscale100'}
                                    borderWidth={'$size.0.5'}
                                    borderRadius={'$4'}
                                    onPress={item.onPress}
                                >
                                    <XStack alignItems={'center'}>
                                        <Icon
                                            name={item.icon}
                                            color={'$primary'}
                                        />
                                        <Text
                                            height={'$4'}
                                            {...TEXT_OPTIONS.BodyMediumM}
                                        >
                                            {item.title}
                                        </Text>
                                    </XStack>

                                    {item.rightElement ? (
                                        <Switch
                                            value={
                                                item.rightElement
                                                    .value
                                            }
                                            onChange={
                                                item.rightElement
                                                    .onValueChange
                                            }
                                        />
                                    ) : (
                                        <Icon
                                            name="ChevronRightIcon"
                                            color={'$grayscale400'}
                                        />
                                    )}
                                </ListItem>
                            ))}
                        </YStack>
                        <Button
                            variant="secondary"
                            width="100%"
                            size="large"
                            icon="LogoutIcon"
                            borderColor={'$primary'}
                            borderWidth={'$px'}
                            backgroundColor="$background"
                        >
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldL}
                                ta={'center'}
                                onPress={() => {
                                    console.log('test');
                                    signOut();
                                }}
                            >
                                Çıkış Yap
                            </Text>
                        </Button>
                    </ScrollView>
                </Stack>
            </YStack>
        </ScreenContainer>
    );
}
