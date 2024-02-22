import React from 'react';
//UI Lib.
import {Stack, Text, XStack, YStack} from '@ui';
//Constants
import {APP_SHADOWS, TEXT_OPTIONS} from '../../constants';

interface IProps {
    fill: any;
    title: string;
    count: number;
    onPress?: () => void;
}

const Card: React.FC<IProps> = ({fill, title, count, onPress}) => {
    return (
        <YStack
            {...APP_SHADOWS.small}
            paddingVertical="$2"
            paddingHorizontal="$3"
            borderRadius="$4"
            backgroundColor={'$white'}
            flex={1}
            onPress={onPress}
        >
            <XStack alignItems={'center'}>
                <Stack
                    width={'$1'}
                    height={'$5'}
                    backgroundColor={fill}
                    borderRadius={'$1'}
                    marginRight={'$2'}
                />

                <YStack alignItems={'center'}>
                    <Text
                        color={'$grayscale700'}
                        {...TEXT_OPTIONS.BodyMediumS}
                    >
                        {title}
                    </Text>
                    <Text
                        width={'100%'}
                        color={'$black'}
                        {...TEXT_OPTIONS.BodyMediumL}
                    >
                        {count}
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    );
};

export default Card;
