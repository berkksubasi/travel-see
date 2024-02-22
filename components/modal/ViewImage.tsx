import React, {useEffect, useRef} from 'react';
import {
    Animated,
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import {Dialog} from 'tamagui';
import {Image, Stack} from '@ui';

type Slide = {
    id: number;
    img: any;
};
const {width} = Dimensions.get('screen');
const ViewImage = ({
    isOpen,
    setIsOpen,
    slides,
    index,
}: {
    isOpen: boolean;
    setIsOpen: () => void;
    slides: Slide[];
    index: number;
}) => {
    const handleCloseModal = () => {
        setIsOpen();
    };
    const scrollX = useRef(new Animated.Value(0)).current;
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
    const flatlistRef = useRef<any>();
    useEffect(() => {
        if (flatlistRef.current) {
            flatlistRef.current.scrollToOffset({
                offset: width * 0.001,
            });
        }
    }, []);

    return (
        <Dialog
            open={isOpen}
            modal
        >
            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    onPress={handleCloseModal}
                    opacity={0.9}
                    bg={'#000000'}
                    style={{backdropFilter: 'blur(10px)'}}
                />
                <Dialog.Content
                    height={'30%'}
                    paddingHorizontal={'$0'}
                    paddingVertical={'$0'}
                    bg={'$transparent'}
                    key="content"
                    animateOnly={['transform', 'opacity']}
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{
                        x: 0,
                        y: -20,
                        opacity: 0,
                        scale: 0.9,
                    }}
                    exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
                >
                    <Stack>
                        <FlatList
                            data={slides}
                            renderItem={({item}) => (
                                <Stack w={width}>
                                    <Image
                                        key={item.id}
                                        source={item.img}
                                        w={388}
                                        h={216}
                                        resizeMode="cover"
                                        overflow="hidden"
                                    />
                                </Stack>
                            )}
                            horizontal
                            pagingEnabled
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleOnScroll}
                            initialScrollIndex={index}
                            getItemLayout={(_, index) => ({
                                length: 400,
                                offset: 388 * index,
                                index,
                            })}
                            ref={flatlistRef}
                        />
                    </Stack>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    );
};

export default ViewImage;
