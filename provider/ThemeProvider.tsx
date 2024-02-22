import type {PropsWithChildren} from 'react';
import {memo} from 'react';
import {ConfigProvider} from '@ui';
import {useThemeSession} from './ThemeSessionProvider';

function BasicThemeProvider({children}: PropsWithChildren<unknown>) {
    const {theme} = useThemeSession();
    return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export const ThemeProvider = memo(BasicThemeProvider);
