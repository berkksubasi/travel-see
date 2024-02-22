import {hideAsync, preventAutoHideAsync} from 'expo-splash-screen';
import {useCallback} from 'react';
import {Dimensions} from 'react-native';
import type {LayoutChangeEvent} from 'react-native';
import {Image} from '../../primitives';
import type {ISplashViewProps} from './type';

void preventAutoHideAsync();

const {height: windowHeight, width: windowWidth} =
    Dimensions.get('window');

export function SplashView({onReady}: ISplashViewProps) {
    const handleLayout = useCallback(
        (e: LayoutChangeEvent) => {
            const {height, width} = e.nativeEvent.layout;
            if (height && width) {
                setTimeout(async () => {
                    await hideAsync();
                    onReady();
                }, 0);
            }
        },
        [onReady],
    );
    return (
        <Image
            flex={1}
            onLayout={handleLayout}
            aspectRatio={windowWidth / windowHeight}
            resizeMode="contain"
            source={require('@assets/images/splash.jpg')}
        />
    );
}
