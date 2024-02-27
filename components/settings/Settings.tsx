import React from 'react';
// Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
// UI Lib.
import {Icon, Switch, Text, XStack, YStack} from '@ui';

function Settings({variant}: {variant: string}) {
    const getContainerStyles = () => {
        switch (variant) {
            case 'withSwitch':
                return {
                    borderWidth: '$px',
                    borderColor: '$grayscale100',
                    borderRadius: '$radius.4' as const,
                    backgroundColor: '$white',
                    px: '$space.4' as const,
                    py: '$space.4' as const,
                    w: '100%',
                    ai: 'center' as const,
                    jc: 'space-between' as const,
                };
            case 'primary19BG':
                return {
                    borderWidth: '$px',
                    borderColor: '$grayscale100',
                    borderRadius: '$radius.4' as const,
                    backgroundColor: '$primary19',
                    px: '$space.4' as const,
                    py: '$space.4' as const,
                    w: '100%',
                    ai: 'center' as const,
                    jc: 'space-between' as const,
                };
            default:
                return {
                    borderWidth: '$px',
                    borderColor: '$grayscale100',
                    borderRadius: '$radius.4' as const,
                    backgroundColor: '$white',
                    px: '$space.4' as const,
                    py: '$space.4' as const,
                    w: '100%',
                    ai: 'center' as const,
                    jc: 'space-between' as const,
                };
        }
    };

    return (
        <YStack width="100%">
            <XStack {...getContainerStyles()}>
                <Icon
                    name="UserIcon"
                    fontSize="$size.6"
                    color="$primary"
                />
                <Text {...TEXT_OPTIONS.BodyMediumM}>
                    Personal Informations
                </Text>
                {variant !== 'withSwitch' && (
                    <Icon
                        name="ChevronRightSmallOutline"
                        color="$grayscale400"
                        fontSize="$size.6"
                    />
                )}
                {variant === 'withSwitch' && <Switch />}
            </XStack>
        </YStack>
    );
}

export default Settings;
