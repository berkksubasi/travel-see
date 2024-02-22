import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {Stack} from '@ui/primitives';

const {width} = Dimensions.get('screen');

const Pagination = ({
    data,
    scrollX,
    index,
}: {
    data: any[];
    scrollX: Animated.Value;
    index: number;
}) => {
    return (
        <Stack
            pos={'absolute'}
            bottom={-20}
            flexDirection={'row'}
            w={'100%'}
            ai={'center'}
            jc={'center'}
        >
            {data.map((_, idx) => {
                const inputRange = [
                    (idx - 1) * width,
                    idx * width,
                    (idx + 1) * width,
                ];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 8, 8],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.4, 1, 0.4],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#ccc', '#FFB800', '#ccc'],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        key={idx.toString()}
                        style={[
                            styles.dot,
                            {
                                width: dotWidth,
                                backgroundColor,
                                opacity: opacity,
                            },
                        ]}
                    />
                );
            })}
        </Stack>
    );
};

export default Pagination;

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: '#ccc',
    },
});
