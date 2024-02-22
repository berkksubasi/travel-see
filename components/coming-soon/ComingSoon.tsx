import React from 'react';
import useAppImages from '@hooks/useAppImages';
import {Icon, Image, Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {ScreenContainer} from '..';

const {comingSoon} = useAppImages();

const ComingSoon = () => {
    return (
        <YStack
            w={'100%'}
            ai={'center'}
        >
            <Image source={comingSoon} />
            <Text
                mt="$10"
                mb="$4"
                textAlign="center"
                {...TEXT_OPTIONS.H4}
            >
                Bu Özellik Yapım {'\n'}Aşamasında!
            </Text>
            <Text
                {...TEXT_OPTIONS.BodyRegularM}
                color={'$grayscale600'}
            >
                Yeni güncellemede sizlerle olacak!
            </Text>
        </YStack>
    );
};

export default ComingSoon;
