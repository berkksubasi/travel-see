import React from 'react';
import {IconButton, IKeyOfIcons, Stack} from '@ui';

interface IProps {
    icon: IKeyOfIcons;
    variant: 'primary' | 'secondary' | 'tertiary';
    color?: string;
    onPress?: () => void;
    // iconColor?: ColorTokens
}

const CircleIconButton: React.FC<IProps> = ({icon, variant}) => {
    const getBackgroundColor = () => {
        return variant === 'primary'
            ? '$primary'
            : variant === 'tertiary'
            ? '$white'
            : '$grayscale400';
    };

    const getBorderColor = () => {
        return variant === 'primary'
            ? '$white'
            : variant === 'tertiary'
            ? '$white'
            : '$grayscale300';
    };

    const getWidth = () => {
        return variant === 'primary'
            ? '$size.16'
            : variant === 'tertiary'
            ? '$6'
            : '$size.31';
    };

    const getHeight = () => {
        return variant === 'primary'
            ? '$size.16'
            : variant === 'tertiary'
            ? '$6'
            : '$size.31';
    };

    const getIconSize = () => {
        return variant === 'primary'
            ? '$8'
            : variant === 'tertiary'
            ? '$5'
            : '$14';
    };
    // @todo oğuz

    // const getIconSize = () => {
    //   return variant === 'primary' ? '$size.8' : '$size.14'
    // }

    return (
        <Stack
            justifyContent="center"
            alignItems={'center'}
        >
            <Stack
                backgroundColor={getBackgroundColor()}
                marginBottom={'$space.4'}
                padding="$space.0.5"
                borderRadius={'$full'}
            >
                <IconButton
                    width={getWidth()}
                    height={getHeight()}
                    variant={variant}
                    borderRadius={'$full'}
                    backgroundColor={
                        variant === 'tertiary' ? '$white' : variant
                    }
                    icon={icon}
                    //iconColor={iconColor}
                    iconProps={{
                        size: getIconSize(),
                        color:
                            variant === 'tertiary'
                                ? '$primary'
                                : '$black',
                    }}
                    borderWidth={'$size.0.5'}
                    borderColor={getBorderColor()}
                    pressStyle={{
                        backgroundColor:
                            variant === 'tertiary'
                                ? '$grayscale100'
                                : '$grayscale500',
                    }}
                />
            </Stack>
        </Stack>
    );
};

export default CircleIconButton;
