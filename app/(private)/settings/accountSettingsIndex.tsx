// Lodash
import {router} from 'expo-router';
import {map} from 'lodash';
import React, {useState} from 'react';
import DeleteAccount from '@components/modal/DeleteAccount';
// Common Lib.
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
// Constants
import {APP_CONFIG, TEXT_OPTIONS} from '@constants';
// UI Lib.
import {Icon, IKeyOfIcons, ListItem, Text, XStack, YStack} from '@ui';

export default function AccountSettingsIndex() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    type ItemListType = {
        icon: IKeyOfIcons;
        title: string;
        onPress?: () => void;
    };

    const items: ItemListType[] = [
        {
            icon: 'KeyIcon',
            title: 'Change Password',
            onPress: () => {
                router.push(APP_CONFIG.APP_PATHS.CHANGE_PASSWORD);
            },
        },
        {
            icon: 'DeleteIcon',
            title: 'Delete Account',
            onPress: toggleModal,
        },
    ];

    return (
        <ScreenContainer
            horizontalPadding
            verticalPadding={0}
        >
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems="center"
                height="100%"
                width="100%"
            >
                <YStack
                    gap="$2"
                    marginBottom="$8"
                >
                    <CircleIconButton
                        variant="primary"
                        icon="SettingsCustomIcon"
                        color="$white"
                    />
                    <Text {...TEXT_OPTIONS.H4}>Settings</Text>
                </YStack>
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
                        onPress={item.onPress}
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
            {isModalVisible && (
                <YStack>
                    <DeleteAccount />
                </YStack>
            )}
        </ScreenContainer>
    );
}
