import {router, Tabs} from 'expo-router';
import {useEffect} from 'react';
import {Platform, useWindowDimensions} from 'react-native';
import useAppImages from '@hooks/useAppImages';
import {APP_COLORS, APP_CONFIG} from '@constants';
import {useAuthSession} from '@provider/AuthSessionProvider';
import {useThemeSession} from '@provider/ThemeSessionProvider';
import {Icon, IconButton, Image, XStack} from '@ui';

const TabsLayout = () => {
    const {token} = useAuthSession();
    const {theme} = useThemeSession();

    console.log(4141, theme);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        // if (!token) {
        //     router.replace(APP_CONFIG.APP_PATHS.WELCOME);
        // }
    }, [token]);
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: APP_COLORS.primary,

                tabBarStyle: {
                    height: 61,
                    width: width - 30,
                    borderRadius: 32,
                    borderTopColor:
                        APP_COLORS.lightColors.transparent,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 34,
                    paddingRight: 34,
                    backgroundColor:
                        theme === 'light'
                            ? APP_COLORS.lightColors.grayscale50
                            : APP_COLORS.darkColors.grayscale50,
                    shadowColor: APP_COLORS.black,
                    shadowOpacity: 0.05,
                    shadowRadius: 10,
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    alignSelf: 'center',
                    bottom: Platform.OS === 'ios' ? 34 : 10,
                    position: 'absolute',
                    left: '50%',
                    transform: [{translateX: -(width - 30) / 2}],
                },
            }}
        >
            {/* HOME */}
            <Tabs.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.HOME}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Anasayfa',
                    tabBarIcon: ({color, size, focused}) =>
                        focused ? (
                            <Icon
                                name="HomeFillIcon"
                                color={'$primary'}
                                height={size}
                                width={size}
                            />
                        ) : (
                            <Icon
                                name="HomeIcon"
                                color={'$grayscale300'}
                                height={size}
                                width={size}
                            />
                        ),
                }}
            ></Tabs.Screen>

            <Tabs.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.STATS}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Veriler',
                    tabBarIcon: ({color, size, focused}) =>
                        focused ? (
                            <Icon
                                name="StatsFillIcon"
                                color={'$primary'}
                                height={size}
                                width={size}
                            />
                        ) : (
                            <Icon
                                name="StatsIcon"
                                color={'$grayscale300'}
                                height={size}
                                width={size}
                            />
                        ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.SCAN}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <IconButton
                            onPress={() =>
                                router.push(
                                    APP_CONFIG.APP_PATHS.TABS.SCAN,
                                )
                            }
                            marginTop="$space.-5"
                            width={'$size.14'}
                            height={'$size.14'}
                            size="large"
                            backgroundColor={'$primary'}
                            borderWidth={'$px'}
                            borderColor={'$grayscale300'}
                            outlineColor="$grayscale800"
                            color="$white"
                            icon="Scan"
                            shadowColor={'$red'}
                            shadowOffset={{
                                width: 0,
                                height: 2,
                            }}
                            shadowOpacity={0.1}
                            shadowRadius={'$3'}
                            elevation={'$1'}
                        />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.CHAT}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Mesajlar',
                    tabBarIcon: ({color, size, focused}) =>
                        focused ? (
                            <Icon
                                name="MessageFillIcon"
                                color={'$primary'}
                                height={size}
                                width={size}
                            />
                        ) : (
                            <Icon
                                name="MessageIcon"
                                color={'$grayscale300'}
                                height={size}
                                width={size}
                            />
                        ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.PROFILE}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({color, size, focused}) =>
                        focused ? (
                            <Icon
                                name="ProfileFillIcon"
                                color={'$primary'}
                                height={size}
                                width={size}
                            />
                        ) : (
                            <Icon
                                name="ProfileIcon"
                                color={'$grayscale300'}
                                height={size}
                                width={size}
                            />
                        ),
                }}
            ></Tabs.Screen>
        </Tabs>
    );
};

export default TabsLayout;
