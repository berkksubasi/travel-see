import React, {useEffect, useRef, useState} from 'react';
import {
    Animated,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import ViewImage from '@components/modal/ViewImage';
import {Stack} from '@ui/primitives';
import Pagination from './Pagination';
import SlideItem from './SlideItem';

type Slide = {
    id: number;
    img: any;
};

type SliderProps = {
    slides: Slide[];
};

const Slider = ({slides}: SliderProps) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const flatlistRef = useRef<any>();
    const width = useWindowDimensions().width;

    const handleOnScroll = (
        event: NativeSyntheticEvent<NativeScrollEvent>,
    ) => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        },
                    },
                },
            ],
            {
                useNativeDriver: false,
            },
        )(event);
    };

    useEffect(() => {
        if (flatlistRef.current) {
            flatlistRef.current.scrollToOffset({offset: width * 0.17});
        }
    }, []);

    const handleOnViewableItemsChanged = useRef(
        ({viewableItems}: {viewableItems: any[]}) => {
            if (
                viewableItems.length > 0 &&
                viewableItems[0].isViewable
            ) {
                setIndex(viewableItems[0].index || 0);
            }
        },
    ).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;
    console.log(index);

    const handleImagePress = () => {
        setModalOpen((current) => !current);
    };

    return (
        <>
            <Stack>
                <FlatList
                    data={slides}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={handleImagePress}
                        >
                            <SlideItem item={item} />
                        </TouchableOpacity>
                    )}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    onViewableItemsChanged={
                        handleOnViewableItemsChanged
                    }
                    viewabilityConfig={viewabilityConfig}
                    getItemLayout={(_, index) => ({
                        length: 388,
                        offset: 388 * index,
                        index,
                    })}
                    ref={flatlistRef}
                />
            </Stack>
            {modalOpen && (
                <ViewImage
                    slides={slides}
                    isOpen={modalOpen}
                    setIsOpen={handleImagePress}
                    index={index}
                />
            )}
            <Pagination
                data={slides}
                scrollX={scrollX}
                index={index}
            />
        </>
    );
};

export default Slider;

const styles = StyleSheet.create({});
