import type {ForwardedRef} from 'react';
import {forwardRef, useState} from 'react';
import {Animated, ScrollView as ScrollViewNative} from 'react-native';
import type {
    ScrollViewProps as ScrollViewNativeProps,
    StyleProp,
    ViewStyle,
} from 'react-native';
import APP_COLORS from '@constants/APP_COLORS';
import {usePropsAndStyle, useStyle} from '@tamagui/core';
import type {StackProps} from '@tamagui/web/types';
import {Stack} from '@ui';

export type IScrollViewProps = Omit<
    ScrollViewNativeProps,
    'contentContainerStyle'
> &
    StackProps & {
        contentContainerStyle?: StackProps;
        showCustomScrollBar?: boolean; // Add this line
    };

export type IScrollViewRef = ScrollViewNative;

function BaseScrollView(
    {
        children,
        contentContainerStyle = {},
        showCustomScrollBar = true,
        ...props
    }: IScrollViewProps,
    ref: ForwardedRef<IScrollViewRef>,
) {
    const [restProps, style] = usePropsAndStyle(props, {
        resolveValues: 'auto',
    });
    const [indicatorState, setIndicatorState] = useState({
        indicator: new Animated.Value(0),
        wholeHeight: 1,
        visibleHeight: 0,
    });

    const indicatorSize =
        indicatorState.wholeHeight > indicatorState.visibleHeight
            ? (indicatorState.visibleHeight *
                  indicatorState.visibleHeight) /
              indicatorState.wholeHeight
            : indicatorState.visibleHeight;

    const difference =
        indicatorState.visibleHeight > indicatorSize
            ? indicatorState.visibleHeight - indicatorSize
            : 1;

    const contentStyle = useStyle(
        contentContainerStyle as Record<string, unknown>,
        {
            resolveValues: 'auto',
        },
    );

    // const styles = StyleSheet.create({
    //     scrollContainer: {
    //         flexDirection: 'row',
    //         width: '100%',
    //     },
    //     scrollViewContainer: {
    //         width: '100%',
    //     },
    //     customScrollBar: {
    //         backgroundColor: '#ccc',
    //         borderRadius: 3,
    //         width: 6,
    //     },
    // });
    return (
        <Stack>
            <ScrollViewNative
                ref={ref}
                style={style as StyleProp<ViewStyle>}
                contentContainerStyle={contentStyle}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={(width, height) => {
                    setIndicatorState((prev) => {
                        return {...prev, wholeHeight: height};
                    });
                }}
                onLayout={({
                    nativeEvent: {
                        layout: {x, y, width, height},
                    },
                }) =>
                    setIndicatorState((prev) => {
                        return {...prev, visibleHeight: height};
                    })
                }
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: indicatorState.indicator,
                                },
                            },
                        },
                    ],
                    {useNativeDriver: false},
                )}
                {...restProps}
            >
                {children}
            </ScrollViewNative>
            {showCustomScrollBar && (
                <Stack
                    style={{
                        position: 'absolute',
                        right: -15,
                        backgroundColor: APP_COLORS.gray,
                        borderRadius: 3,
                        height: '100%',
                        width: 3,
                    }}
                />
            )}
            {showCustomScrollBar && (
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            right: -15,
                            top: 0,
                            bottom: 0,
                            width: 3,
                            backgroundColor: APP_COLORS.primary,
                            borderRadius: 2.5,
                        },
                        {
                            height: indicatorSize,
                            transform: [
                                {
                                    translateY: Animated.multiply(
                                        indicatorState.indicator,
                                        indicatorState.visibleHeight /
                                            indicatorState.wholeHeight,
                                    ).interpolate({
                                        inputRange: [0, difference],
                                        outputRange: [0, difference],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            )}
        </Stack>
    );
}

export const ScrollView = forwardRef(BaseScrollView);
