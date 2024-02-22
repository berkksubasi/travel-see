import {
    getTokenValue,
    styled,
    ThemeableStack,
    useProps,
    withStaticProperties,
} from 'tamagui';
import type {
    ColorTokens,
    FontSizeTokens,
    ThemeableStackProps,
} from 'tamagui';
import {Icon} from '../Icon';
import type {IIconProps, IKeyOfIcons} from '../Icon';
import {SizableText} from '../SizeableText';
import {Spinner} from '../Spinner';

export interface IButtonProps extends ThemeableStackProps {
    size?: 'small' | 'medium' | 'large' | 'smallIcon';
    variant?:
        | 'secondary'
        | 'tertiary'
        | 'primary'
        | 'destructive'
        | 'plain';
    icon?: IKeyOfIcons;
    iconAfter?: IKeyOfIcons;
    disabled?: boolean;
    loading?: boolean;
    children?: React.ReactNode;
    color?: ColorTokens;
}

const BUTTON_VARIANTS: Record<
    Exclude<IButtonProps['variant'], undefined>,
    {
        color: ColorTokens;
        iconColor: ColorTokens;
        bg: ColorTokens;
        hoverBg: ColorTokens;
        activeBg: ColorTokens;
        focusRingColor: ColorTokens;
    }
> = {
    primary: {
        color: '$textInverse',
        iconColor: '$iconInverse',
        bg: '$primary',
        hoverBg: '$bgPrimaryHover',
        activeBg: '$bgPrimaryActive',
        focusRingColor: '$focusRing',
    },
    tertiary: {
        color: '$textSubdued',
        iconColor: '$iconSubdued',
        bg: '$transparent',
        hoverBg: '$bgHover',
        activeBg: '$bgActive',
        focusRingColor: '$focusRing',
    },
    plain: {
        color: '$textSubdued',
        iconColor: '$iconSubdued',
        bg: '$transparent',
        hoverBg: '$bgHover',
        activeBg: '$bgActive',
        focusRingColor: '$focusRing',
    },
    destructive: {
        color: '$textOnColor',
        iconColor: '$iconOnColor',
        bg: '$bgCriticalStrong',
        hoverBg: '$bgCriticalStrongHover',
        activeBg: '$bgCriticalStrongActive',
        focusRingColor: '$focusRingCritical',
    },
    secondary: {
        color: '$text',
        iconColor: '$icon',
        bg: '$white',
        hoverBg: '$backgroundHover',
        activeBg: '$transparent',
        focusRingColor: '$focusRing',
    },
};

export const getSharedButtonStyles = ({
    variant,
    disabled,
    loading,
}: Partial<IButtonProps>) => {
    const {iconColor, color, bg, hoverBg, activeBg, focusRingColor} =
        BUTTON_VARIANTS[variant || 'secondary'];

    const sharedFrameStyles = {
        bg,
        borderWidth: '$px',
        borderColor: '$transparent',
        ...(!disabled && !loading
            ? {
                  hoverStyle: {bg: hoverBg},
                  pressStyle: {bg: activeBg},
                  focusable: true,
                  focusStyle: {
                      outlineColor: focusRingColor,
                      outlineStyle: 'solid',
                      outlineWidth: 2,
                  },
              }
            : {
                  opacity: 0.5,
              }),
    };

    return {
        color,
        iconColor,
        sharedFrameStyles,
    };
};

const getSizeStyles = (size: IButtonProps['size']) => {
    const sizes = {
        small: {
            py: '$1',
            px: '$2.5',
            borderRadius: getTokenValue('$size.2'),
            textVariant: '$bodyMdMedium',
        },
        medium: {
            py: '$1.5',
            px: '$3.5',
            borderRadius: getTokenValue('$size.2'),
            textVariant: '$bodyLgMedium',
        },
        large: {
            py: '$3',
            px: '$5',
            borderRadius: getTokenValue('$size.3'),
            textVariant: '$bodyLgMedium',
        },
    };

    return sizes[(size as keyof typeof sizes) || 'medium'];
};

export const ButtonFrame = styled(ThemeableStack, {
    tag: 'button',
    role: 'button',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

function ButtonIcon({
    variant,
    size,
    ...props
}: Pick<IButtonProps, 'variant' | 'size'> &
    Omit<IIconProps, 'size'>) {
    const {iconColor} = BUTTON_VARIANTS[variant || 'secondary'];

    return (
        <Icon
            size={size === 'small' ? '$4.5' : '$5'}
            color={iconColor}
            {...props}
        />
    );
}

type ISharedFrameStylesProps = {
    hoverStyle: {
        bg: ColorTokens;
    };
    pressStyle: {
        bg: ColorTokens;
    };
    focusable: boolean;
    focusStyle: {
        outlineColor: ColorTokens;
        outlineStyle: string;
        outlineWidth: number;
    };
    bg: ColorTokens;
    borderWidth: string;
    borderColor: string;
};

const ButtonComponent = ButtonFrame.styleable<IButtonProps>(
    (props, ref) => {
        const {
            size = 'medium',
            icon,
            iconAfter,
            disabled,
            loading,
            children,
            color: textColor,
            variant = 'secondary',
            ...rest
        } = useProps(props, {});

        const {py, px, borderRadius, textVariant} =
            getSizeStyles(size);

        const {sharedFrameStyles, iconColor, color} =
            getSharedButtonStyles({
                variant,
                disabled,
                loading,
            }) as {
                sharedFrameStyles: ISharedFrameStylesProps;
                iconColor: ColorTokens;
                color: ColorTokens;
            };

        return (
            <ButtonFrame
                ref={ref}
                my={variant === 'tertiary' ? '$-1' : '$0'}
                marginHorizontal={
                    variant === 'tertiary' ? '$-2' : '$0'
                }
                paddingVertical={
                    variant === 'tertiary'
                        ? '$1'
                        : variant === 'plain'
                        ? '$1'
                        : py
                }
                paddingHorizontal={
                    variant === 'tertiary'
                        ? '$2'
                        : variant === 'plain'
                        ? '$1'
                        : px
                }
                borderRadius={borderRadius}
                style={{
                    borderCurve: 'continuous',
                }}
                disabled={disabled || loading}
                {...sharedFrameStyles}
                hoverStyle={{
                    ...sharedFrameStyles.hoverStyle,
                    ...props.hoverStyle,
                }}
                focusStyle={{
                    ...sharedFrameStyles.focusStyle,
                    ...props.focusStyle,
                }}
                pressStyle={{
                    ...sharedFrameStyles.pressStyle,
                    ...props.pressStyle,
                }}
                {...rest}
            >
                {icon && !loading && (
                    <ButtonIcon
                        name={icon}
                        variant={variant}
                        size={size}
                    />
                )}
                {loading && (
                    <Spinner
                        size="small"
                        mr="$2"
                        color={iconColor}
                    />
                )}
                <SizableText
                    size={textVariant as FontSizeTokens}
                    color={textColor || color}
                    mr={iconAfter ? '$2' : '$0'}
                    ml={icon ? '$2' : '$0'}
                >
                    {children}
                </SizableText>
                {iconAfter && (
                    <ButtonIcon
                        name={iconAfter}
                        variant={variant}
                        size={size}
                    />
                )}
            </ButtonFrame>
        );
    },
);

export const Button = withStaticProperties(ButtonComponent, {});
