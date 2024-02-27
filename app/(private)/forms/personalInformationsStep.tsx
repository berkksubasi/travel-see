import {map} from 'lodash';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ColorTokens, View} from 'tamagui';
import AddPhoto from '@components/modal/AddPhoto';
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
import {TEXT_OPTIONS} from '@constants';
import {IPersonalInformations} from '@interfaces';
import {useAuthSession} from '@provider/AuthSessionProvider';
import DateTimePicker from '@react-native-community/datetimepicker';
import userServices from '@services/user.services';
import {
    Button,
    Form,
    Icon,
    IKeyOfIcons,
    Input,
    Stack,
    Text,
    TextArea,
    Toast,
    useForm,
    YStack,
} from '@ui';

type IInputMockType = {
    placeholder: string;
    icon: IKeyOfIcons;
};

type IInputMock = Record<
    string,
    IInputMockType & {icon: IKeyOfIcons}
>;

type IButton = {
    label: string;
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    mb?: string;
    borderColor?: string;
    backgroundColor?: string;
    iconAfter?: IKeyOfIcons;
    color?: ColorTokens;
};

type IProps = {
    title: string;
    description: string;
    onConfirm: () => void;
};

const inputMock: IInputMock = {
    fullName: {
        placeholder: 'Ad-Soyad',
        icon: 'UserIcon',
    },
};

const buttons: IButton[] = [
    {
        label: 'Sonraki',
        variant: 'primary',
        size: 'large',
        iconAfter: 'ChevronRightIcon',
        color: '$white',
    },
    {
        label: 'Atla',
        borderColor: '$transparent',
        backgroundColor: '$transparent',
        variant: 'secondary',
        size: 'large',
        color: '$black',
    },
];

const PersonelInformationStep: React.FC<IProps> = ({
    title,
    description,
    onConfirm,
}: IProps) => {
    const {token} = useAuthSession();

    const form = useForm<IPersonalInformations>({
        defaultValues: {
            fullName: '',
            birthDate: '',
            biography: '',
        },
    });

    const handleNextButtonClick = () => {
        // Validation code...

        userServices
            .updateContactInformations(form.getValues())
            .then((response) => {
                Toast.success({title: 'Bilgineriniz Güncellendi'});
                if (onConfirm) {
                    onConfirm();
                } else {
                    router.back();
                }
                return response;
            })
            .catch((err) => {
                Toast.error({title: err.message});
                return err;
            });
    };

    useEffect(() => {
        // Fetch user details...
    }, [token]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [birthDate, setBirthDate] = useState<Date | undefined>(
        undefined,
    );
    const [showDatePicker, setShowDatePicker] = useState(true);

    const onChange = (event: any, selectedDate: Date | undefined) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthDate(selectedDate);
        }
    };

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding
        >
            <HeaderShown variant="dynamic">
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                height="100%"
                alignItems="center"
                backgroundColor="$background"
                gap="3"
            >
                <Icon name="PersonalDetailsSVG" />
                <Text
                    marginTop="px"
                    color="grayscale900"
                    {...TEXT_OPTIONS.H4}
                >
                    {title}
                </Text>
                <Text
                    textAlign="center"
                    {...TEXT_OPTIONS.BodyRegularM}
                    color="grayscale600"
                >
                    {description}
                </Text>
                <Stack marginTop="7">
                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={toggleModal}
                    >
                        <CircleIconButton
                            variant="secondary"
                            icon="AccountCustomIcon"
                        />
                    </TouchableOpacity>
                </Stack>

                {isModalVisible && (
                    <YStack>
                        <AddPhoto />
                    </YStack>
                )}
                <Stack
                    width="100%"
                    marginTop="7.5"
                >
                    <Form form={form}>
                        {map(inputMock, (item, key) => (
                            <Form.Field
                                key={key}
                                name={key}
                                rules={{
                                    required: {
                                        value: true,
                                        message:
                                            'Lütfen Tam Ad - Soyadınızı Giriniz.',
                                    },
                                }}
                            >
                                <Input
                                    size="large"
                                    placeholder={
                                        inputMock[key].placeholder
                                    }
                                    leftIconName={inputMock[key].icon}
                                />
                            </Form.Field>
                        ))}

                        <Form.Field
                            key="birthDate"
                            name="birthDate"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen Doğum Tarihinizi Giriniz.',
                                },
                            }}
                        >
                            <View
                                px="$4"
                                py="$2"
                                h="$14"
                                borderRadius="$3"
                                borderColor="$grayscale200"
                                borderWidth={1}
                                justifyContent="center"
                                alignItems="center"
                                backgroundColor="transparent"
                            >
                                <TouchableOpacity
                                    accessibilityRole="input"
                                    onPress={() =>
                                        setShowDatePicker(true)
                                    }
                                >
                                    {showDatePicker && (
                                        <DateTimePicker
                                            aria-modal
                                            testID="dateTimePicker"
                                            value={
                                                birthDate ||
                                                new Date()
                                            }
                                            mode="date"
                                            is24Hour
                                            display="default"
                                            onChange={onChange}
                                        />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </Form.Field>

                        <Form.Field
                            key="biography"
                            name="biography"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen Açıklama Giriniz*',
                                },
                                onChange(event) {
                                    form.clearErrors('biography');
                                },
                            }}
                        >
                            <TextArea
                                width="100%"
                                height="28"
                                marginTop="3"
                                placeholder="Kendinden Bahset"
                                borderRadius="$4"
                                p="$4"
                            />
                        </Form.Field>

                        {map(buttons, (button, index) => (
                            <Button
                                width="100%"
                                key={index}
                                variant={button.variant}
                                size={button.size}
                                marginBottom="$2"
                                iconAfter={button.iconAfter}
                                borderColor={button.borderColor}
                                backgroundColor={
                                    button.backgroundColor
                                }
                                onPress={handleNextButtonClick}
                            >
                                <Text
                                    {...TEXT_OPTIONS.BodySemiBoldL}
                                    color={button.color}
                                >
                                    {button.label}
                                </Text>
                            </Button>
                        ))}
                    </Form>
                </Stack>
            </YStack>
        </ScreenContainer>
    );
};

export default PersonelInformationStep;
