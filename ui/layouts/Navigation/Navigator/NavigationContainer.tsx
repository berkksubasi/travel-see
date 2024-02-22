import {createRef} from 'react';
import type {GetProps} from 'tamagui';
import {
    DefaultTheme,
    NavigationContainer as RNNavigationContainer,
} from '@react-navigation/native';
import type {NavigationContainerRef} from '@react-navigation/native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255, 45, 85)',
    },
};

type IBasicNavigationContainerProps = GetProps<
    typeof RNNavigationContainer
>;
export type INavigationContainerProps =
    Partial<IBasicNavigationContainerProps>;
export const rootNavigationRef =
    createRef<NavigationContainerRef<any>>();

export function NavigationContainer(
    props: IBasicNavigationContainerProps,
) {
    return (
        <RNNavigationContainer
            theme={MyTheme}
            {...props}
            ref={rootNavigationRef}
        />
    );
}
