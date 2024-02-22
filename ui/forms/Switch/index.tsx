import {Switch as TMSwitch, useTheme} from 'tamagui';
import type {GetProps} from 'tamagui';

export type ISwitchProps = Omit<
    GetProps<typeof TMSwitch>,
    'checked' | 'onCheckedChange' | 'value'
> & {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'small' | 'large';
};

export function Switch({
    value,
    onChange,
    size = 'large',
    disabled,
    ...restProps
}: ISwitchProps) {
    const theme = useTheme();

    return (
        <TMSwitch
            unstyled
            checked={value}
            onCheckedChange={onChange}
            native
            width={size === 'small' ? '$9.5' : 54}
            height={size === 'small' ? '$6' : '$8'}
            minHeight={size === 'small' ? '$6' : '$8'}
            bg={value ? '$primary' : '$neutral5'}
            p="$0"
            borderRadius="$full"
            borderWidth="$0.5"
            borderColor="$transparent"
            opacity={disabled ? 0.5 : 1}
            disabled={disabled}
            nativeProps={{
                disabled,
                ios_backgroundColor: theme.neutral5.val,
                trackColor: {
                    false: theme.neutral5.val,
                    true: theme.primary.val,
                },
                thumbColor: theme.bg.val,
            }}
            {...restProps}
        >
            <TMSwitch.Thumb
                unstyled
                width={size === 'small' ? '$5' : '$7'}
                height={size === 'small' ? '$5' : '$7'}
                bg="$bg"
                animation="quick"
            />
        </TMSwitch>
    );
}
