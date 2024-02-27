// Lodash
import {map} from 'lodash';
import React, {useState} from 'react';
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';
import {Form} from 'tamagui';
// SVG
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
} from '@components';
// Common Lib.
import {DEFAULTS, TEXT_OPTIONS} from '@constants';
// UI Lib.
import {
    Button,
    Icon,
    IKeyOfIcons,
    Image,
    Input,
    ListItem,
    ScrollView,
    Stack,
    Switch,
    Text,
    useForm,
    XStack,
    YStack,
} from '@ui';

// INTERFACES - Start

// Content

type IProps = {
    title: string;
    description: string;
    onConfirm?: () => void;
};

// Input
type IInputMockType = {
    placeholder: string;
    icon: IKeyOfIcons;
};

type IInputMock = Record<
    string,
    IInputMockType & {icon: IKeyOfIcons}
>;

// Button
type IButton = {
    label: string;
    variant: 'primary' | 'secondary';
    height: number;
    mb?: string;
    icon?: IKeyOfIcons;
    iconAfter?: IKeyOfIcons;
    borderColor?: string;
    backgroundColor?: string;
    onConfirm?: () => void;
};

// INTERFACES - End

// CONSTANTS

// InputConstants
const inputMock: IInputMock = {
    name: {
        placeholder: 'GSM',
        icon: 'SmartphoneIcon',
    },
};
// ButtonConstants
// @todo for OGUZ: Icon' type should be adjusted
const buttons: IButton[] = [
    {
        label: 'Connect with OnlyFans',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'XIcon',
        onConfirm() {},
    },
    {
        label: 'Connect with Instagram',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'InstagramIcon',
        onConfirm() {},
    },

    {
        label: 'Connect with Facebook',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'FacebookIcon',
        onConfirm() {},
    },
];

const ConctactDetailStep: React.FC<IProps> = ({
    title,
    description,
    onConfirm,
}: IProps) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [phoneNo, setPhoneNo] = useState('');

    const contactDetailsForm = useForm<IContactDetails>({
        defaultValues: DEFAULTS.initialContactInformations,
    });

    const onChangeHandler = (
        event: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
        const textValue = event.nativeEvent.text;
        setPhoneNo(textValue);
    };

    return (
        <ScreenContainer headerPadding>
            <HeaderShown paddingVertical={5}>
                <ButtonGoBack />
            </HeaderShown>

            {/* TOP PART */}
            <YStack
                alignItems="center"
                gap="$3"
                marginBottom="$9"
            >
                {/* INDICATOR */}

                <Icon name="ContactDetailsSvg" />

                {/* TITLE */}
                <Text
                    color="$grayscale900"
                    {...TEXT_OPTIONS.H4}
                    marginTop="$px"
                >
                    {title || 'Contact Information'}
                </Text>

                {/* DESCRIPTION */}
                <Text
                    textAlign="center"
                    color="$grayscale600"
                    {...TEXT_OPTIONS.BodyRegularM}
                >
                    {description ||
                        'Share the information you want to receive via TS App.'}
                </Text>
            </YStack>
            <YStack
                w="100%"
                h="53%"
            >
                <YStack width="100%">
                    {/* CONTENT PART */}
                    {/* todo for OGUZ: ScrollView scroll bar should be customized as in the design */}
                    <YStack gap="$3">
                        {/* INPUTS */}
                        <YStack
                            alignItems="center"
                            justifyContent="center"
                            position="relative"
                            width="100%"
                        >
                            <Stack
                                backgroundColor="$grayscale100"
                                width="100%"
                                height="$px"
                                position="absolute"
                            />

                            <Text
                                {...TEXT_OPTIONS.BodyRegularM}
                                color="$grayscale400"
                                backgroundColor="$background"
                                paddingHorizontal="$2"
                                paddingVertical="$3"
                            >
                                Contact Information
                            </Text>
                        </YStack>
                        <Form form={contactDetailsForm}>
                            <YStack gap="$3">
                                {map(inputMock, (item, key) => (
                                    <Input
                                        size="large"
                                        key={key}
                                        placeholder={
                                            inputMock[key]
                                                ?.placeholder
                                        }
                                        leftIconName={
                                            inputMock[key]?.icon
                                        }
                                        borderColor="$grayscale200"
                                        onChange={
                                            inputMock[key]
                                                ?.placeholder ===
                                            'GSM'
                                                ? onChangeHandler
                                                : undefined
                                        }
                                    />
                                ))}
                            </YStack>
                            <XStack
                                width="100%"
                                maxHeight="$size.14"
                                paddingHorizontal="$space.3"
                                paddingVertical="$4"
                                alignItems="center"
                                mt="$3"
                                justifyContent="space-between"
                                borderColor="$grayscale100"
                                borderWidth="$size.0.5"
                                borderRadius="$4"
                            >
                                <XStack
                                    alignItems="center"
                                    gap="$2"
                                >
                                    <Icon
                                        name="WhatsappIcon"
                                        color="$primary"
                                    />
                                    <YStack alignItems="flex-start">
                                        <Text
                                            {...TEXT_OPTIONS.BodyRegularS}
                                            color="$grayscale600"
                                        >
                                            Use the entered phone
                                            information.
                                        </Text>
                                        <Text
                                            {...TEXT_OPTIONS.BodyMediumM}
                                            color="$grayscale900"
                                        >
                                            {phoneNo && isSwitchOn
                                                ? phoneNo
                                                : '-'}
                                        </Text>
                                    </YStack>
                                    <Switch
                                        size="large"
                                        bg="$primary"
                                        value={isSwitchOn}
                                        onChange={() =>
                                            setIsSwitchOn(!isSwitchOn)
                                        }
                                    />
                                </XStack>

                                {/* @todo fix  */}
                            </XStack>
                            {/* SEPARATOR */}

                            <YStack
                                alignItems="center"
                                justifyContent="center"
                                position="relative"
                                width="100%"
                            >
                                <Stack
                                    backgroundColor="$grayscale100"
                                    width="100%"
                                    height="$px"
                                    position="absolute"
                                />

                                <Text
                                    {...TEXT_OPTIONS.BodyRegularM}
                                    color="$grayscale400"
                                    backgroundColor="$background"
                                    paddingHorizontal="$2"
                                    paddingVertical="$3"
                                >
                                    Social Media
                                </Text>
                            </YStack>

                            {/* BUTTONS */}

                            <YStack
                                width="100%"
                                justifyContent="space-between"
                                gap="$3"
                            >
                                {map(buttons, (button, index) => (
                                    <ListItem
                                        justifyContent="flex-start"
                                        key={index}
                                        variant={button.variant}
                                        height={button.height}
                                        icon={button.icon}
                                        borderColor={
                                            button.borderColor
                                        }
                                        backgroundColor={
                                            button.backgroundColor
                                        }
                                        borderRadius="$4"
                                        onPress={button.onConfirm}
                                    >
                                        <Text alignItems="flex-start">
                                            {button.label}
                                        </Text>
                                    </ListItem>
                                ))}
                            </YStack>
                        </Form>
                    </YStack>
                </YStack>
            </YStack>

            {/* BOTTOM PART */}
            <YStack
                gap={24}
                width="100%"
                mt="$4"
            >
                <Button
                    alignItems="flex-end"
                    onPress={onConfirm}
                    iconAfter="ChevronRightIcon"
                    variant="primary"
                    size="large"
                >
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldL}
                        color="$white"
                    >
                        Sonraki
                    </Text>
                </Button>

                <Button
                    borderWidth={0}
                    variant="tertiary"
                    size="large"
                >
                    <Text {...TEXT_OPTIONS.BodySemiBoldL}>Atla</Text>
                </Button>
            </YStack>
        </ScreenContainer>
    );
};

export default ConctactDetailStep;
