import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {TamaguiProviderProps} from 'tamagui';
import {AuthSessionProvider} from './AuthSessionProvider';
import {Container} from './Container';
import {SplashProvider} from './SplashProvider';
import {ThemeProvider} from './ThemeProvider';
import {ThemeSessionProvider} from './ThemeSessionProvider';

const flexStyle = {flex: 1};

function CombineProvider({
    children,
    ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
    return (
        <ThemeSessionProvider>
            <ThemeProvider>
                <AuthSessionProvider>
                    <SplashProvider>
                        <GestureHandlerRootView style={flexStyle}>
                            <Container />
                            {children}
                        </GestureHandlerRootView>
                    </SplashProvider>
                    {/* <PasswordVerifyPromptMount /> */}
                    {/* <LastActivityTracker /> */}
                </AuthSessionProvider>
            </ThemeProvider>
        </ThemeSessionProvider>
    );
}

export default CombineProvider;
