import {isBoolean} from 'lodash';
import React from 'react';
import {Platform, useWindowDimensions} from 'react-native';
import {Path, Stop, Svg} from 'react-native-svg';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {
    IconButton,
    IKeyOfIcons,
    LinearGradient,
    Stack,
    Text,
    XStack,
} from '@ui';
import {ButtonGoBack} from '../';
import {NotificationCounter} from '../notification-counter';

interface IProps {
    children: React.ReactNode;
    title?: string;
    customGoBackEvent?: () => void;
    showGoBackButton?: boolean;
    verticalPadding?: boolean | number;
    headerPadding?: boolean;
    horizontalPadding?: boolean | number;
    isRelative?: boolean;
    showOverlay?: boolean;
    showCounter?: boolean;
    showExtraButtons?: boolean;
    extraButtonOne?: IKeyOfIcons;
    extraButtonTwo?: IKeyOfIcons;
    counterValue?: number;
}

const ScreenContainer: React.FC<IProps> = ({
    children,
    title,
    customGoBackEvent,
    showOverlay = false,
    showGoBackButton = false,
    showCounter = false,
    extraButtonOne,
    extraButtonTwo,
    showExtraButtons = false,
    verticalPadding = true,
    headerPadding,
    horizontalPadding = true,
    counterValue = 0,
}) => {
    const {height} = useWindowDimensions();

    return (
        <Stack
            backgroundColor={'$background'}
            flex={1}
            height={height}
            width={'100%'}
            position="relative"
            paddingBottom={headerPadding ? '$30' : '$38'}
            paddingTop={headerPadding ? '$12' : 0}
            paddingVertical={
                !headerPadding && isBoolean(verticalPadding)
                    ? verticalPadding
                        ? '$22'
                        : '$12'
                    : 0
            }
        >
            {showOverlay && (
                <>
                    <LinearGradient
                        position="absolute"
                        bottom="$0"
                        width={'100%'}
                        height={Platform.OS === 'ios' ? 140 : 71}
                        zIndex={-100}
                        borderRadius={'$6'}
                        colors={[
                            '#BA00A205',
                            '#BA00A205',
                            '#BA00A205',
                        ]}
                        opacity={1}
                    />
                </>
            )}

            <XStack
                borderBottomColor={'$grayscale300'}
                borderBottomWidth={title ? '$px' : '$0'}
                paddingVertical={'$2.5'}
                paddingHorizontal={horizontalPadding ? '$true' : '$0'}
                position={'absolute'}
                zIndex={'$5'}
                top="$10"
                width={'100%'}
            >
                <XStack
                    paddingHorizontal={
                        horizontalPadding ? '$0' : '$true'
                    }
                    justifyContent={'space-between'}
                    width={'100%'}
                >
                    <XStack alignItems={'center'}>
                        {showGoBackButton && (
                            <Stack>
                                <ButtonGoBack
                                    onClick={customGoBackEvent}
                                />
                            </Stack>
                        )}

                        {title && (
                            <XStack>
                                <Text
                                    {...TEXT_OPTIONS.BodySemiBold2XL}
                                    color={'$grayscale900'}
                                >
                                    {title}
                                </Text>
                            </XStack>
                        )}
                    </XStack>
                    {showCounter && (
                        <XStack>
                            <NotificationCounter
                                variant={'backgroundless'}
                                count={counterValue}
                            />
                        </XStack>
                    )}
                    {showExtraButtons && (
                        <XStack
                            alignItems={'center'}
                            gap={'$8'}
                        >
                            {extraButtonOne && (
                                <Stack>
                                    <IconButton
                                        icon={extraButtonOne}
                                        variant="tertiary"
                                        color="$grayscale900"
                                    />
                                </Stack>
                            )}
                            {extraButtonTwo && (
                                <Stack>
                                    <IconButton
                                        icon={extraButtonTwo}
                                        variant="tertiary"
                                        color="$grayscale900"
                                    />
                                </Stack>
                            )}
                        </XStack>
                    )}
                </XStack>
            </XStack>

            <Stack
                paddingHorizontal={
                    isBoolean(horizontalPadding)
                        ? horizontalPadding
                            ? '$10'
                            : '$5'
                        : horizontalPadding
                }
            >
                {children}
            </Stack>
        </Stack>
    );
};

export default ScreenContainer;
