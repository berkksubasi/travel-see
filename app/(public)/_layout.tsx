import {Stack} from 'expo-router';
import {APP_CONFIG} from '@constants';

export default function AppLayout() {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.SIGN_IN}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_CONFIG.APP_ROUTES.SIGN_UP}
                options={{headerShown: false}}
            />
        </Stack>
    );
}
