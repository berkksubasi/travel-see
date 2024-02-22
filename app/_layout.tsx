import 'core-js/stable/atob';
import {useFonts} from 'expo-font';
import {router, Stack} from 'expo-router';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {APP_CONFIG} from '@constants';
import {useAuthSession} from '@provider/AuthSessionProvider';
import CombineProvider from '../provider';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(modal)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        BR_Shape_Bold: require('../assets/fonts/BR_Shape_Bold.otf'),
        BR_Shape_Regular: require('../assets/fonts/BR_Shape_Regular.otf'),
        BR_Shape_Medium: require('../assets/fonts/BR_Shape_Medium.otf'),
        BR_Shape_Light: require('../assets/fonts/BR_Shape_Semi_Bold.otf'),
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            // SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <CombineProvider>
            <RootLayoutNav />
        </CombineProvider>
    );
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const {token} = useAuthSession();

    useEffect(() => {
        if (token) {
            router.replace(APP_CONFIG.APP_PATHS.TABS.HOME);
        }
    }, [token]);

    return (
        <Stack screenOptions={{headerShown: false}}>
            {/* <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.WELCOME}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="(tabs)"
                options={{headerShown: false}}
            /> */}
            {/* <Stack.Screen
                name="(public)"
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="(private)"
                options={{headerShown: false}}
            />
          
            <Stack.Screen
                name="modal"
                options={{presentation: 'modal'}}
            /> */}
        </Stack>
    );
}
