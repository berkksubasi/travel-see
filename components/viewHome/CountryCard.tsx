import React from 'react';
import {Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

interface ICountryCardProps {
    countryName: string;
    bg: string;
}

const CountryCard: React.FC<ICountryCardProps> = ({countryName}) => {
    return (
        <YStack
            w={'$21'}
            h={'$24'}
            borderRadius={'$4'}
            borderWidth={'$px'}
            borderColor={'$primary'}
            ai={'center'}
            jc={'center'}
        >
            <YStack
                bg={'$primaryLight'}
                p={'$2'}
                jc={'flex-end'}
                borderRadius={'$4'}
                w={'$19'}
                h={'$20'}
            >
                <Text
                    alignSelf="flex-start"
                    color={'$white'}
                    {...TEXT_OPTIONS.BodySemiBoldS}
                >
                    {countryName}
                </Text>
            </YStack>
        </YStack>
    );
};

export default CountryCard;
