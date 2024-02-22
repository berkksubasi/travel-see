import {router} from 'expo-router';
import React from 'react';
import axiosInstance from '@configuration/axios.instance';
import {APP_CONFIG} from '@constants';
import {useStorageState} from '@hooks';

const ThemeContext = React.createContext<{
    changeTheme: (val: 'light' | 'dark') => void;
    theme: 'light' | 'dark';
    isLoading: boolean;
}>({
    changeTheme: () => null,
    theme: 'light',
    isLoading: false,
});

// This hook can be used to access the user info.
export function useThemeSession() {
    const value = React.useContext(ThemeContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error(
                'useSession must be wrapped in a <SessionProvider />',
            );
        }
    }

    return value;
}

export function ThemeSessionProvider(props: React.PropsWithChildren) {
    const [[isLoading, theme], setSession] = useStorageState('theme');

    console.log('3131theme', theme);

    return (
        <ThemeContext.Provider
            value={{
                changeTheme: (theme: 'light' | 'dark') => {
                    setSession(theme);
                    axiosInstance.defaults.headers.common[
                        'Authorization'
                    ] = `Bearer ${theme}`;
                    router.replace(APP_CONFIG.APP_PATHS.TABS.HOME);
                },
                theme: (theme as 'light' | 'dark') || 'light',
                isLoading,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}
