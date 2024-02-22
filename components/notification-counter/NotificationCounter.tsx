import React from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
// UI Lib.
import {ColorTokens, Icon, Text, XStack} from '@ui';

interface INotificationCounterProps {
    count: number;
    variant?: 'backgroundless';
    iconColor?: ColorTokens;
}

const NotificationCounter: React.FC<INotificationCounterProps> = ({
    count,
    variant,
    iconColor,
}) => {
    const backgroundColor =
        variant === 'backgroundless' ? 'transparent' : '$primaryAlpha50';

    return (
        <XStack
            backgroundColor={backgroundColor}
            paddingHorizontal={'$2'}
            borderRadius={variant === 'backgroundless' ? '$0' : '$8'}
            borderWidth={'$px'}
            borderColor={
                variant === 'backgroundless'
                    ? 'transparent'
                    : '$black12'
            }
            alignItems={'center'}
            gap={'$2'}
        >
            {variant !== 'backgroundless' && (
                <>
                    {/* Ikonu sadece background olmayan durumda render et */}
                    <Icon
                        name="NotifyIcon"
                        color={iconColor || '$black'}
                        size={'$6'}
                    />
                </>
            )}
            <Text
                {...TEXT_OPTIONS.BodyRegularL}
                color={'$grayscale700'}
            >
                {count}
            </Text>
        </XStack>
    );
};

export default NotificationCounter;
