import {router} from 'expo-router';
import React from 'react';
import axiosInstance from '@configuration/axios.instance';
import {APP_CONFIG} from '@constants';
import {useStorageState} from '@hooks';

const AuthContext = React.createContext<{
    signIn: (val: string) => void;
    signOut: () => void;
    token?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    token: null,
    isLoading: false,
});

// This hook can be used to access the user info.
export function useAuthSession() {
    const value = React.useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error(
                'useSession must be wrapped in a <SessionProvider />',
            );
        }
    }

    return value;
}

export function AuthSessionProvider(props: React.PropsWithChildren) {
    const [[isLoading, token], setSession] = useStorageState('token');

    return (
        <AuthContext.Provider
            value={{
                signIn: (token: string) => {
                    setSession(token);
                    axiosInstance.defaults.headers.common[
                        'Authorization'
                    ] = `Bearer ${token}`;
                    router.replace(APP_CONFIG.APP_PATHS.TABS.HOME);
                },
                signOut: () => {
                    console.log('token removed');
                    setSession(null);
                    router.replace(APP_CONFIG.APP_PATHS.WELCOME);
                },
                token,
                isLoading,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
