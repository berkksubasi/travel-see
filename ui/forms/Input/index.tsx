import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';
import type {ForwardedRef, RefObject} from 'react';
import type {TextInput} from 'react-native';
import {
    getFontSize,
    Group,
    Input as TMInput,
    useMedia,
    useThemeName,
} from 'tamagui';
import type {ColorTokens, GetProps} from 'tamagui';
import platformEnv from '../../../configuration/platformEnv';
import {useThemeValue} from '../../hooks';
import {
    Icon,
    Spinner,
    Stack,
    Text,
    XStack,
    YStack,
} from '../../primitives';
import type {IKeyOfIcons} from '../../primitives';
import {getSharedInputStyles} from './sharedStyles';

type ITMInputProps = GetProps<typeof TMInput>;

export type IInputProps = {
    readonly?: boolean;
    size?: 'small' | 'medium' | 'large';
    leftIconName?: IKeyOfIcons;
    error?: boolean;
    addOns?: {
        iconName?: IKeyOfIcons;
        iconColor?: ColorTokens;
        label?: string;
        testID?: string;
        onPress?: () => void;
        loading?: boolean;
    }[];
    containerProps?: GetProps<typeof Group>;
    onChangeText?: ((text: string) => string | void) | undefined;
} & Omit<ITMInputProps, 'size' | 'onChangeText'>;

const SIZE_MAPPINGS = {
    large: {
        verticalPadding: '$4',
        horizontalPadding: '$4',
        paddingLeftWithIcon: '$10.5',
        height: '$14',
        iconLeftPosition: 13,
    },
    medium: {
        verticalPadding: '$1.5',
        horizontalPadding: '$3',
        paddingLeftWithIcon: '$9',
        height: 38,
        iconLeftPosition: 9,
    },
    small: {
        verticalPadding: '$1',
        horizontalPadding: '$2',
        paddingLeftWithIcon: '$8',
        height: 30,
        iconLeftPosition: 5,
    },
};

const useAutoFocus = (
    inputRef: RefObject<TextInput>,
    autoFocus?: boolean,
) => {
    const {md} = useMedia();
    const isWebMd = useMemo(
        () => autoFocus && platformEnv.isRuntimeBrowser && md,
        [autoFocus, md],
    );
    useEffect(() => {
        // focus after the animation of Dialog and other containers is finished,
        //  to avoid the misalignment caused by the container recalculating its height
        if (isWebMd) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 150);
        }
    }, [inputRef, isWebMd]);
    return isWebMd ? undefined : autoFocus;
};

function BaseInput(
    {
        size = 'medium',
        leftIconName,
        addOns,
        disabled,
        editable,
        error,
        containerProps,
        readonly,
        autoFocus,
        ...props
    }: IInputProps,
    ref: ForwardedRef<any>,
) {
    const {
        verticalPadding,
        horizontalPadding,
        paddingLeftWithIcon,
        height,
        iconLeftPosition,
    } = SIZE_MAPPINGS[size];

    const sharedStyles = getSharedInputStyles({
        disabled,
        editable,
        error,
    });
    const themeName = useThemeName();
    const inputRef: RefObject<TextInput> | null = useRef(null);
    const _autoFocus = useAutoFocus(inputRef, autoFocus);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
    }));

    const selectionColor = useThemeValue('bgPrimary');
    return (
        <Group
            position="relative"
            orientation="horizontal"
            borderRadius={size === 'large' ? '$3' : '$2'}
            disablePassBorderRadius={!addOns?.length}
            disabled={disabled}
            {...containerProps}
        >
            {/* input */}
            <Group.Item>
                <TMInput
                    unstyled
                    ref={inputRef}
                    flex={1}
                    autoFocus={_autoFocus}
                    pointerEvents={readonly ? 'none' : undefined}
                    /* 
          use height instead of lineHeight because of a RN issue while render TextInput on iOS
          https://github.com/facebook/react-native/issues/28012
        */
                    height={height}
                    paddingVertical={verticalPadding}
                    paddingRight={horizontalPadding}
                    paddingLeft={
                        leftIconName
                            ? paddingLeftWithIcon
                            : horizontalPadding
                    }
                    fontSize={
                        size === 'small'
                            ? getFontSize('$bodyMd')
                            : getFontSize('$bodyLg')
                    }
                    color={sharedStyles.color}
                    placeholderTextColor={
                        sharedStyles.placeholderTextColor
                    }
                    borderWidth={sharedStyles.borderWidth}
                    borderColor={sharedStyles.borderColor}
                    backgroundColor={sharedStyles.backgroundColor}
                    selectionColor={selectionColor}
                    borderRadius={size === 'large' ? '$3' : '$2'}
                    borderRightWidth={addOns?.length ? '$0' : '$px'}
                    focusStyle={sharedStyles.focusStyle}
                    cursor={sharedStyles.cursor}
                    keyboardAppearance={
                        /dark/.test(themeName) ? 'dark' : 'light'
                    }
                    {...props}
                />
            </Group.Item>

            {/* left icon */}
            {leftIconName && (
                <Stack
                    top={'50%'}
                    y={'$-3'}
                    left={'$2'}
                    position="absolute"
                    width={'$6'}
                    height={'$6'}
                >
                    <Icon
                        // position="absolute"
                        name={leftIconName}
                        color={
                            disabled
                                ? '$grayscale300'
                                : '$grayscale600'
                        }
                        pointerEvents="none"
                        width={24}
                        height={24}
                    />
                </Stack>
            )}
            {/* right elements */}
            {addOns?.length && (
                <Group.Item>
                    <XStack
                        borderRadius={size === 'large' ? '$3' : '$2'}
                        borderColor={sharedStyles.borderColor}
                        borderWidth={'$px'}
                        borderLeftWidth={'$0'}
                        disabled={disabled}
                        backgroundColor={sharedStyles.backgroundColor}
                    >
                        {addOns.map(
                            ({
                                iconName,
                                iconColor,
                                testID,
                                label,
                                onPress,
                                loading,
                            }) => {
                                const getIconColor = () => {
                                    if (disabled) {
                                        return '$grayscale200';
                                    }
                                    if (iconColor) {
                                        return iconColor;
                                    }
                                    return '$grayscale400';
                                };

                                return (
                                    <Group.Item>
                                        <XStack
                                            onPress={onPress}
                                            key={`${iconName || ''}-${
                                                label || ''
                                            }`}
                                            alignItems="center"
                                            paddingHorizontal={
                                                size === 'large'
                                                    ? '$2.5'
                                                    : '$2'
                                            }
                                            {...(onPress &&
                                                !disabled && {
                                                    hoverStyle: {
                                                        bg: '$bgHover',
                                                    },
                                                    pressStyle: {
                                                        bg: '$bgActive',
                                                    },
                                                })}
                                            focusable={
                                                !(disabled || loading)
                                            }
                                            focusStyle={
                                                sharedStyles.focusStyle
                                            }
                                            testID={testID}
                                        >
                                            {loading ? (
                                                <YStack
                                                    {...(size !==
                                                        'small' && {
                                                        p: '$0.5',
                                                    })}
                                                >
                                                    <Spinner size="small" />
                                                </YStack>
                                            ) : (
                                                iconName && (
                                                    <Icon
                                                        name={
                                                            iconName
                                                        }
                                                        color={getIconColor()}
                                                        fontSize={
                                                            size ===
                                                            'small'
                                                                ? '$5'
                                                                : '$6'
                                                        }
                                                    />
                                                )
                                            )}
                                            {label && (
                                                <Text
                                                    variant={
                                                        size ===
                                                        'small'
                                                            ? '$bodyMd'
                                                            : '$bodyLg'
                                                    }
                                                    marginLeft={
                                                        iconName
                                                            ? '$2'
                                                            : '$0'
                                                    }
                                                    color={
                                                        disabled
                                                            ? '$textDisabled'
                                                            : '$textSubdued'
                                                    }
                                                >
                                                    {label}
                                                </Text>
                                            )}
                                        </XStack>
                                    </Group.Item>
                                );
                            },
                        )}
                    </XStack>
                    {/* </Group> */}
                </Group.Item>
            )}
        </Group>
    );
}

export const Input = forwardRef(BaseInput);
