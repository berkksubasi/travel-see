import React from 'react';
import {Image} from 'react-native';
import {CardBackground, CardFrame} from 'tamagui';
import {Stack, Text, YStack} from '@ui/primitives';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';

type ICountryCardProps = {
    countryName: string;
    bg: any;
};

const CountryCard: React.FC<ICountryCardProps> = ({
    countryName,
    bg,
}) => (
    <CardFrame
        w="$21"
        h="$24"
        borderRadius="$4"
        ai="center"
        jc="center"
    >
        <YStack
            p="$2"
            jc="flex-end"
            borderRadius="$4"
            w="$19"
            h="$20"
        >
            <CardBackground borderRadius="$3">
                <Image
                    source={bg}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardBackground>
            <Stack
                ai="center"
                jc="center"
                w="$full"
                h="$full"
                borderRadius="$1.5"
                px="$0.5"
            >
                <Text
                    color="$white"
                    shadowColor="black"
                    shadowOffset={{width: 0, height: 2}}
                    shadowOpacity={1}
                    shadowRadius={2}
                    {...TEXT_OPTIONS.BodySemiBoldS}
                >
                    {countryName}
                </Text>
            </Stack>
        </YStack>
    </CardFrame>
);

export default CountryCard;
