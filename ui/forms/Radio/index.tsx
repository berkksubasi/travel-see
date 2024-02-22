import type { PropsWithChildren } from 'react';

import { RadioGroup } from 'tamagui';

import { Label, XStack } from '../../primitives';

export type IRadioProps = PropsWithChildren<{
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  options: { label: string; value: string }[];
}>;

export function Radio({ value, onChange, disabled, options }: IRadioProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange} disabled={disabled}>
      {options.map(({ label, value: v }) => (
        <XStack alignItems="center" paddingVertical="$2">
          <RadioGroup.Item
            value={v}
            id={v}
            unstyled
            alignItems="center"
            justifyContent="center"
            my="$0.5"
            width="$5"
            height="$5"
            borderWidth="$0.5"
            borderColor={value === v ? '$transparent' : '$borderStrong'}
            backgroundColor={value === v ? '$bgPrimary' : '$transparent'}
            borderRadius="$full"
            focusStyle={{
              outlineOffset: 2,
              outlineColor: '$focusRing',
            }}
            $platform-native={{
              hitSlop: { top: 8, left: 8, right: 8, bottom: 8 },
            }}
          >
            <RadioGroup.Indicator
              unstyled
              width="$2.5"
              height="$2.5"
              bg="$iconInverse"
              borderRadius="$full"
            />
          </RadioGroup.Item>
          <Label htmlFor={v} variant="$bodyLgMedium" pl="$2" paddingVertical="$2" my="$-2">
            {label}
          </Label>
        </XStack>
      ))}
    </RadioGroup>
  );
}
