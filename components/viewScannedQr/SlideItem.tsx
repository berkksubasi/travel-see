import React from 'react';
import {Animated, Dimensions} from 'react-native';
import {Image, Stack} from '@ui/primitives';

const {width} = Dimensions.get('screen');

const SlideItem = ({item}: {item: any}) => {
    return (
        <Stack
            w={width}
            ai={'center'}
            jc={'center'}
        >
            <Image
                source={item.img}
                resizeMode="contain"
                borderRadius={24}
                overflow="hidden"
                jc={'center'}
                bg={'red'}
            />
        </Stack>
    );
};

export default SlideItem;
