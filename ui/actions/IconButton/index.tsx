import {ColorTokens} from 'tamagui';
import {
    ButtonFrame,
    getSharedButtonStyles,
    Icon,
    Spinner,
    Stack,
    Text,
} from '../../primitives';
import type {
    IButtonProps,
    IIconProps,
    IKeyOfIcons,
} from '../../primitives';
import {Tooltip} from '../Tooltip';
import type {ITooltipProps} from '../Tooltip';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

export interface IIconButtonProps
    extends Omit<IButtonProps, 'iconAfter' | 'children' | 'icon'> {
    icon: IKeyOfIcons;
    iconProps?: IIconProps;
    title?: ITooltipProps['renderContent'];
    color?: ColorTokens;
    label?: string;
}

const getSizeStyles = (size: IButtonProps['size']) => {
    const sizes = {
        small: {
            p: '$1',
            negativeMargin: -5,
        },
        medium: {
            p: '$1.5',
            negativeMargin: -7,
        },
        large: {
            p: '$3',
            negativeMargin: -13,
        },
        smallIcon: {
            p: '$1',
            negativeMargin: -5,
        },
    };

    return sizes[size || 'medium'];
};

export const IconButton = (props: IIconButtonProps) => {
    const {
        disabled,
        loading,
        title,
        label,
        icon,
        iconProps,
        color,
        size,
        variant = 'secondary',
        ...rest
    } = props;

    const {p, negativeMargin} = getSizeStyles(size);

    const {sharedFrameStyles, iconColor} = getSharedButtonStyles({
        disabled,
        loading,
        variant,
    });

    const renderIconButton = () => (
        <ButtonFrame
            padding={p}
            borderRadius="$full"
            disabled={disabled || loading}
            $platform-native={{
                hitSlop:
                    size === 'small'
                        ? {top: 8, left: 8, right: 8, bottom: 8}
                        : undefined,
            }}
            {...(variant === 'tertiary' && {
                m: negativeMargin,
            })}
            {...sharedFrameStyles}
            {...rest}
        >
            {loading ? (
                <Stack
                    {...(fontSize !== 'small' && {
                        m: '$0.5',
                    })}
                >
                    <Spinner
                        color={iconColor}
                        size="small"
                    />
                </Stack>
            ) : (
                <Icon
                    color={color}
                    name={icon}
                    fontSize={
                        size === 'small'
                            ? '$5'
                            : size === 'smallIcon'
                            ? '$4'
                            : '$6'
                    }
                    {...iconProps}
                />
            )}
            {label && (
                <Text
                    {...TEXT_OPTIONS.BodyMediumM} color={'$grayscale900'}
                    ml={'$2'}
                >
                    {label}
                </Text>
            )}
        </ButtonFrame>
    );

    if (title) {
        return (
            <Tooltip
                renderTrigger={renderIconButton()}
                renderContent={title}
                placement="top"
                {...(variant === 'tertiary' && {offset: 12})}
            />
        );
    }

    return renderIconButton();
};
