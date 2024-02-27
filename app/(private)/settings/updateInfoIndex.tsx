import {router} from 'expo-router';
import {map} from 'lodash';
import React from 'react';
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
import {APP_CONFIG, TEXT_OPTIONS} from '@constants';
import {
    Icon,
    IKeyOfIcons,
    ListItem,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';

type ItemListType = {
    icon: IKeyOfIcons;
    iconAfter: IKeyOfIcons;
    title: string;
    path:
        | typeof APP_CONFIG.APP_PATHS.FORMS.ADDRESS_INFORMATIONS_STEP
        | typeof APP_CONFIG.APP_PATHS.FORMS.CONTACT_INFORMATIONS_STEP
        | typeof APP_CONFIG.APP_PATHS.FORMS.PROFILE_INFORMATIONS_STEP;
};

const items: ItemListType[] = [
    {
        icon: 'UserIcon',
        title: ' Personal Information',
        iconAfter: 'ChevronRightSmallOutline',
        path: APP_CONFIG.APP_PATHS.FORMS.PROFILE_INFORMATIONS_STEP,
    },
    {
        icon: 'PhoneIcon',
        title: ' Contact Information',
        iconAfter: 'ChevronRightSmallOutline',
        path: APP_CONFIG.APP_PATHS.FORMS.CONTACT_INFORMATIONS_STEP,
    },
    {
        icon: 'LocationIcon',
        title: ' Address Informations',
        iconAfter: 'ChevronRightSmallOutline',
        path: APP_CONFIG.APP_PATHS.FORMS.ADDRESS_INFORMATIONS_STEP,
    },
];
function UpdateInfo() {
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems="center"
                height="100%"
                width="100%"
            >
                <CircleIconButton
                    variant="primary"
                    icon="SettingsCustomIcon"
                    color="$white"
                />

                <Stack>
                    <Text
                        marginTop="$space.4"
                        marginBottom="$space.8"
                        {...TEXT_OPTIONS.H4}
                    >
                        Update Information
                    </Text>
                </Stack>

                {/* @todo make it with list item */}
                {map(items, (item, index) => (
                    <ListItem
                        key={index}
                        width="100%"
                        maxHeight="$size.14"
                        marginBottom="$4"
                        padding="$space.4"
                        alignItems="center"
                        justifyContent="space-between"
                        borderColor="$grayscale100"
                        borderWidth="$size.0.5"
                        borderRadius="$4"
                        onPress={() => router.push(item.path)}
                    >
                        <XStack
                            alignItems="center"
                            gap="$3"
                        >
                            <Icon
                                name={item.icon}
                                color="$primary"
                            />
                            <Text {...TEXT_OPTIONS.BodyMediumM}>
                                {item.title}
                            </Text>
                        </XStack>

                        <Icon
                            name="ChevronRightIcon"
                            color="$grayscale400"
                        />
                    </ListItem>
                ))}
            </YStack>
        </ScreenContainer>
    );
}

export default UpdateInfo;
