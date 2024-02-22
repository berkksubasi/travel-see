import React from 'react';
import {Dimensions} from 'react-native';
import {GetProps, Group, SizeTokens} from 'tamagui';
import {LinearGradient, XStack} from '@ui';

interface IProps {
    title?: string;
    paddingVertical?: SizeTokens | number;
    paddingHorizontal?: boolean | SizeTokens | number;
    variant?: 'backgroundless' | 'lined' | 'circular' | 'dynamic';
    children?: React.ReactNode;
    containerProps?: GetProps<typeof Group>;
}

const HeaderShown: React.FC<IProps> = ({
    variant = 'backgroundless',
    children,
    paddingVertical,
    paddingHorizontal = true,
}) => {
    const width = Dimensions.get('window').width;

    return (
        <>
            {variant == 'lined' && (
                <LinearGradient
                    colors={[
                        '$background',
                        '$grayscale700',
                        '$background',
                    ]}
                    start={[0, 1]}
                    end={[1, 0]}
                    h={'$11.5'}
                    ml={paddingHorizontal ? '$-10' : '$-5'}
                    w={width}
                    mt={'$12'}
                    zIndex={'$1'}
                />
            )}

            <XStack
                w={width}
                jc={'space-between'}
                ai={'center'}
                overflow="visible"
                paddingVertical={
                    paddingVertical ? paddingVertical : '$2.5'
                }
                paddingHorizontal={'$6'}
                ml={
                    variant !== 'lined' && variant !== 'circular'
                        ? '$-10'
                        : '$0'
                }
                mt={'$12'}
                bg={
                    variant == 'lined'
                        ? '$background'
                        : '$transparent'
                }
                zIndex={'$2'}
                pos={variant == 'lined' ? 'absolute' : 'relative'}
            >
                {children}
            </XStack>

            {variant === 'lined' && (
                <XStack
                    w={width}
                    h={'$6'}
                ></XStack>
            )}
        </>
    );
};

export default HeaderShown;
