import {styled, Label as TMLabel} from 'tamagui';
import type {GetProps} from 'tamagui';

export const Label = styled(TMLabel, {
    unstyled: true,
    color: '$text',
    variants: {
        variant: {
            ':string': (variant, {font}) => {
                const defaultFont = {
                    size: {},
                    lineHeight: {},
                    weight: {},
                };
                const resolvedFont = font || defaultFont;
                type ISizeType = keyof typeof resolvedFont.size;
                return {
                    fontSize:
                        resolvedFont?.size[variant as ISizeType] ||
                        '$true',
                    lineHeight: font?.lineHeight[variant],
                    fontWeight: font?.weight[variant],
                    textTransform: font?.transform[variant],
                    letterSpacing: font?.letterSpacing[variant],
                };
            },
        },
    } as const,

    defaultVariants: {
        variant: '$bodyMdMedium',
    },
});

export type ILabelProps = GetProps<typeof Label>;
