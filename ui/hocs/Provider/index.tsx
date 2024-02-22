import type {PropsWithChildren, ReactNode} from 'react';
import {memo, useMemo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast, {
    BaseToast,
    ErrorToast,
} from 'react-native-toast-message';
import {TamaguiProvider} from 'tamagui';
import ErrorToastIcon from '@ui/primitives/Icon/react/toast/ErrorToastIcon';
import SuccessToastIcon from '@ui/primitives/Icon/react/toast/SuccessToastIcon';
import WarningToastIcon from '@ui/primitives/Icon/react/toast/WarningToastIcon';
import APP_SHADOWS from '@constants/APP_SHADOWS';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import config from '../../../configuration/tamaguiConfig';
import {useAppearanceTheme} from './hooks/useAppearanceTheme';
import useLoadCustomFonts from './hooks/useLoadCustomFonts';
import {Context} from './hooks/useProviderValue';
import ScreenSizeProvider from './ScreenSizeProvider';
import SidebarStateProvider from './SidebarStateProvider';

export type IUIProviderProps = PropsWithChildren<{
    /**
     * default theme variant
     */
    theme: 'light' | 'dark';
    /**
     * default locale symbol
     */
    // locale: ILocaleSymbol

    waitFontLoaded?: boolean;
}>;
export type IFontProviderProps = {
    children?: ReactNode;
    waitFontLoaded?: boolean;
};

const MemoizedTamaguiProvider = memo(TamaguiProvider);

function FontProvider({
    children,
    waitFontLoaded = true,
}: IFontProviderProps) {
    const [loaded] = useLoadCustomFonts();
    if (loaded) return <>{children}</>;
    if (waitFontLoaded) {
        return null;
    }
    // Web can render if font not loaded
    // but Native will throw error: Unrecognized font family "PlusJakartaSans-Bold"
    return <>{children}</>;
}

// @todo OGUZ: Add theme adaptive colors to the toast messages

export function ConfigProvider({
    children,
    theme,
    waitFontLoaded,
}: IUIProviderProps) {
    const toastConfig = {
        /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
        success: (props: any) => (
            <BaseToast
                {...props}
                style={[
                    APP_SHADOWS.xsmall,
                    {
                        padding: 8,
                        height: 'auto',
                        gap: -17,
                        borderRadius: 16,
                        borderLeftWidth: 0,
                        backgroundColor: '$white',
                    },
                ]}
                text1Style={[
                    TEXT_OPTIONS.BodyRegularM,
                    {color: '$grayscale800'},
                ]}
                renderLeadingIcon={SuccessToastIcon}
            />
        ),
        /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
        error: (props: any) => (
            <ErrorToast
                {...props}
                style={[
                    APP_SHADOWS.xsmall,
                    {
                        padding: 8,
                        height: 'auto',
                        gap: -17,
                        borderRadius: 16,
                        borderLeftWidth: 0,
                        backgroundColor: '$white',
                    },
                ]}
                text1Style={[
                    TEXT_OPTIONS.BodyRegularM,
                    {color: '$grayscale800'},
                ]}
                renderLeadingIcon={ErrorToastIcon}
            />
        ),

        warning: (props: any) => (
            <BaseToast
                {...props}
                style={[
                    APP_SHADOWS.xsmall,
                    {
                        padding: 8,
                        height: 'auto',
                        gap: -17,
                        borderRadius: 16,
                        borderLeftWidth: 0,
                        backgroundColor: '$white',
                    },
                ]}
                text1Style={[
                    TEXT_OPTIONS.BodyRegularM,
                    {color: '$grayscale800'},
                ]}
                renderLeadingIcon={WarningToastIcon}
            />
        ),

        /*
          Or create a completely new type - `tomatoToast`,
          building the layout from scratch.
      
          I can consume any custom `props` I want.
          They will be passed when calling the `show` method (see below)
        */
        // tomatoToast: ({ text1, props }) => (
        //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        //     <Text>{text1}</Text>
        //     <Text>{props.uuid}</Text>
        //   </View>
        // )
    };

    const providerValue = useMemo(
        () => ({
            theme,
        }),
        [theme],
    );

    console.log('theme,theme,theme', providerValue, theme);

    useAppearanceTheme(theme);
    return (
        <FontProvider waitFontLoaded={waitFontLoaded}>
            <Context.Provider value={providerValue}>
                <ScreenSizeProvider>
                    <SidebarStateProvider>
                        <SafeAreaProvider>
                            <MemoizedTamaguiProvider
                                config={config}
                                //renk dark light buradan değişiyor YAGİZ

                                defaultTheme={theme}
                            >
                                {children}
                                <Toast config={toastConfig} />
                            </MemoizedTamaguiProvider>
                        </SafeAreaProvider>
                    </SidebarStateProvider>
                </ScreenSizeProvider>
            </Context.Provider>
        </FontProvider>
    );
}
