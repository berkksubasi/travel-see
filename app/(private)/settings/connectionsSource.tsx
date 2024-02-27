// Lodash
import {map} from 'lodash';
import React, {useState} from 'react';
import {ColorTokens} from 'tamagui';
// Common
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
// Constants
import {TEXT_OPTIONS} from '@constants';
// Lib.
import {
    Icon,
    IKeyOfIcons,
    Stack,
    Switch,
    Text,
    XStack,
    YStack,
} from '@ui';

type ConnectionSourceProps = {
    icon: IKeyOfIcons;
    color?: ColorTokens;
    text: string;
    phoneNumber: string;
};

const ConnectionSource: React.FC = () => {
    const [switchValues, setSwitchValues] = useState<boolean[]>([
        false,
        false,
        false,
        false,
        false,
    ]);

    const connectionSources: ConnectionSourceProps[] = [
        {
            icon: 'PhoneFillIcon',
            color: '$primary',
            text: 'People can connect',
            phoneNumber: '+905553453354',
        },
        {
            icon: 'MailFillIcon',
            color: '$primary',
            text: 'People can connect',
            phoneNumber: 'johndoe12@gmail.com',
        },
        {
            icon: 'FacebookIcon',
            text: 'People can connect',
            phoneNumber: 'JohnDoe2',
        },
        {
            icon: 'InstagramIcon',
            text: 'People can connect',
            phoneNumber: 'John_doe32',
        },
        {
            icon: 'XIcon',
            text: 'People can connect',
            phoneNumber: 'The_Johndoe',
        },
    ];

    const handleSwitchChange = (index: number) => {
        const newSwitchValues = [...switchValues];
        newSwitchValues[index] = !newSwitchValues[index];
        setSwitchValues(newSwitchValues);
    };

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                width="100%"
                alignItems="center"
                justifyContent="space-between"
            >
                <CircleIconButton
                    variant="primary"
                    icon="SettingsCustomIcon"
                    color="$white"
                />

                <Stack alignItems="center">
                    <Text
                        marginTop="$space.4"
                        marginBottom="$3"
                        {...TEXT_OPTIONS.H4}
                    >
                        Contact Informations
                    </Text>
                    <Text
                        {...TEXT_OPTIONS.BodyRegularM}
                        marginBottom="$space.10"
                        color="$grayscale600"
                    >
                        You can keep any information you want for
                        privacy.
                    </Text>
                </Stack>

                {map(connectionSources, (source, index) => (
                    <Stack
                        key={index}
                        width="100%"
                        padding="$4"
                        borderWidth="$px"
                        borderColor="$primary"
                        borderRadius="$4"
                        marginBottom="$3"
                    >
                        <XStack
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Icon
                                name={source.icon}
                                color={source.color}
                                height={24}
                                width={24}
                            />
                            <YStack>
                                <Text
                                    {...TEXT_OPTIONS.BodyRegularS}
                                    color="$grayscale600"
                                >
                                    {source.text}
                                </Text>
                                <Text {...TEXT_OPTIONS.BodyMediumM}>
                                    {source.phoneNumber}
                                </Text>
                            </YStack>
                            <Switch
                                size="small"
                                backgroundColor="$primary"
                                value={switchValues[index]}
                                onChange={() =>
                                    handleSwitchChange(index)
                                }
                            />
                        </XStack>
                    </Stack>
                ))}
            </YStack>
        </ScreenContainer>
    );
};

export default ConnectionSource;
