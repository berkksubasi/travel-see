//Lodash
import {map} from 'lodash';
import React, {useState} from 'react';
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native';
import {Form} from 'tamagui';
//SVG
import {HeaderShown, ScreenContainer} from '@components';
//Common Lib.
import {DEFAULTS, TEXT_OPTIONS} from '@constants';
//UI Lib.
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

//Content

interface IProps {
    title: string;
    description: string;
    onConfirm?: () => void;
}

//Input
interface IInputMockType {
    placeholder: string;
    icon: IKeyOfIcons;
}

interface IInputMock {
    [key: string]: IInputMockType & {icon: IKeyOfIcons};
}

//Button
interface IButton {
    label: string;
    variant: 'primary' | 'secondary';
    height: number;
    mb?: string;
    icon?: IKeyOfIcons;
    iconAfter?: IKeyOfIcons;
    borderColor?: string;
    backgroundColor?: string;
    onConfirm?: () => void;
}

//INTERFACES - End

// CONSTANTS

// InputConstants
const inputMock: IInputMock = {
    name: {
        placeholder: 'GSM',
        icon: 'SmartphoneIcon',
    },
    birthday: {
        placeholder: 'Ev Telefonu',
        icon: 'PhoneIcon',
    },
};
// ButtonConstants
// @todo for OGUZ: Icon' type should be adjusted
const buttons: IButton[] = [
    {
        label: 'Facebook ile Bağlan',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'FacebookIcon',
        onConfirm() {},
    },
    {
        label: 'Instagram ile Bağlan',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'InstagramIcon',
        onConfirm() {},
    },
    {
        label: 'X ile Bağlan',
        variant: 'secondary',
        height: 56,
        mb: '$4',
        borderColor: '$grayscale200',
        backgroundColor: '$transparent',
        icon: 'XIcon',
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
            <HeaderShown showGoBackButton />
            {/* TOP PART */}
            <YStack
                alignItems={'center'}
                gap={'$3'}
                marginBottom={'$9'}
            >
                {/* INDICATOR */}

                <Icon name="ContactDetailsSvg" />

                {/* TITLE */}
                <Text
                    color={'$grayscale900'}
                    {...TEXT_OPTIONS.H4}
                    marginTop={'$px'}
                >
                    {title ? title : 'İletişim Bilgileri'}
                </Text>

                {/* DESCRIPTION */}
                <Text
                    textAlign={'center'}
                    color={'$grayscale600'}
                    {...TEXT_OPTIONS.BodyRegularM}
                >
                    {description
                        ? description
                        : "TARAT'ınızla size ulaşılmasını istediğin iletişim bilgilerini paylaş."}
                </Text>
            </YStack>
            <YStack
                w={'100%'}
                h={'53%'}
            >
                <ScrollView width={'100%'} showOverlay  >
                    <YStack width={'100%'}>
                        {/* CONTENT PART */}
                        {/* todo for OGUZ: ScrollView scroll bar should be customized as in the design */}
                        <YStack gap={'$3'}>
                            {/* INPUTS */}
                            <YStack
                                alignItems={'center'}
                                justifyContent={'center'}
                                position={'relative'}
                                width="100%"
                            >
                                <Stack
                                    backgroundColor="$grayscale100"
                                    width={'100%'}
                                    height={'$px'}
                                    position={'absolute'}
                                />

                                <Text
                                    {...TEXT_OPTIONS.BodyRegularM}
                                    color={'$grayscale400'}
                                    backgroundColor="$background"
                                    paddingHorizontal={'$2'}
                                    paddingVertical="$3"
                                >
                                    İletişim Bilgileri
                                </Text>
                            </YStack>
                            <Form form={contactDetailsForm}>
                                <YStack gap={'$3'}>
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
                                            borderColor={
                                                '$grayscale200'
                                            }
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
                                    width={'100%'}
                                    maxHeight={'$size.14'}
                                    paddingHorizontal={'$space.3'}
                                    paddingVertical={'$4'}
                                    alignItems={'center'}
                                    mt={'$3'}
                                    justifyContent={'space-between'}
                                    borderColor={'$grayscale100'}
                                    borderWidth={'$size.0.5'}
                                    borderRadius={'$4'}
                                >
                                    <XStack
                                        alignItems={'center'}
                                        gap={'$2'}
                                    >
                                        <Icon
                                            name="WhatsappIcon"
                                            color={'$primary'}
                                        />
                                        <YStack
                                            alignItems={'flex-start'}
                                        >
                                            <Text
                                                {...TEXT_OPTIONS.BodyRegularS}
                                                color={
                                                    '$grayscale600'
                                                }
                                            >
                                                Girilen Telefon
                                                Bilgisi Kullanılsın
                                            </Text>
                                            <Text
                                                {...TEXT_OPTIONS.BodyMediumM}
                                                color={
                                                    '$grayscale900'
                                                }
                                            >
                                                {phoneNo && isSwitchOn
                                                    ? phoneNo
                                                    : '-'}
                                            </Text>
                                        </YStack>
                                        <Switch
                                            size="large"
                                            bg={'$primary'}
                                            value={isSwitchOn}
                                            onChange={() =>
                                                setIsSwitchOn(
                                                    !isSwitchOn,
                                                )
                                            }
                                        />
                                    </XStack>

                                    {/* @todo fix  */}
                                </XStack>
                                {/* SEPARATOR */}

                                <YStack
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    position={'relative'}
                                    width="100%"
                                >
                                    <Stack
                                        backgroundColor="$grayscale100"
                                        width={'100%'}
                                        height={'$px'}
                                        position={'absolute'}
                                    />

                                    <Text
                                        {...TEXT_OPTIONS.BodyRegularM}
                                        color={'$grayscale400'}
                                        backgroundColor="$background"
                                        paddingHorizontal={'$2'}
                                        paddingVertical="$3"
                                    >
                                        Sosyal Medya
                                    </Text>
                                </YStack>

                                {/* BUTTONS */}

                                <YStack
                                    width={'100%'}
                                    justifyContent={'space-between'}
                                    gap={'$3'}
                                >
                                    {map(buttons, (button, index) => (
                                        <ListItem
                                            justifyContent={
                                                'flex-start'
                                            }
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
                                            borderRadius={'$4'}
                                            onPress={button.onConfirm}
                                        >
                                            <Text
                                                alignItems={
                                                    'flex-start'
                                                }
                                            >
                                                {button.label}
                                            </Text>
                                        </ListItem>
                                    ))}
                                </YStack>
                                <Input
                                    size="large"
                                    key="weburl"
                                    placeholder="Web Sitenizi Giriniz"
                                    leftIconName="WebIcon"
                                    borderColor={'$grayscale200'}
                                />
                            </Form>
                        </YStack>
                    </YStack>
                </ScrollView>
            </YStack>

            {/* BOTTOM PART */}
            <YStack
                gap={24}
                width={'100%'}
                mt={'$11.5'}
            >
                <Button
                    alignItems={'flex-end'}
                    onPress={onConfirm}
                    iconAfter={'ChevronRightIcon'}
                    variant="primary"
                    size="large"
                >
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldL}
                        color={'$white'}
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
