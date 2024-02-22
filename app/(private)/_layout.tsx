import {router, Stack} from 'expo-router';
import {useEffect} from 'react';
import {APP_CONFIG} from '@constants';
import {useAuthSession} from '@provider/AuthSessionProvider';

export default function AppLayout() {
    const {token} = useAuthSession();

    useEffect(() => {
        // if (!token) {
        //     router.replace(APP_CONFIG.APP_PATHS.WELCOME);
        // }
    }, [token]);
    // This layout can be deferred because it's not the root layout.
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.TABS.SCAN}
                options={{headerShown: false}}
            />

            {/* FORMS */}
            <Stack.Screen
                name={
                    APP_CONFIG.APP_ROUTES.FORMS
                        .ADDRESS_INFORMATIONS_STEP
                }
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={
                    APP_CONFIG.APP_ROUTES.FORMS
                        .CONTACT_INFORMATIONS_STEP
                }
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={
                    APP_CONFIG.APP_ROUTES.FORMS
                        .PROFILE_INFORMATIONS_STEP
                }
                options={{headerShown: false}}
            />

            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.SEARCH}
                options={{headerShown: false}}
            />

            {/* Settings */}
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.SETTINGS_ACCOUNT}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.CHANGE_PASSWORD}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.SETTINGS}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.CONTACT_US}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.PRIVACY_POLICY}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.UPDATE_INFO}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.CONNECTIONS_SOURCE}
                options={{headerShown: false}}
            />
        </Stack>
    );
}
