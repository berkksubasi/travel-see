import {router} from 'expo-router';
import {map} from 'lodash';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ColorTokens, Header} from 'tamagui';
import AddCover from '@components/modal/AddCover';
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

interface IInputMockType {
    placeholder: string;
    icon: IKeyOfIcons;
}

interface IInputMock {
    [key: string]: IInputMockType & {icon: IKeyOfIcons};
}

interface IButton {
    label: string;
    variant: 'primary' | 'secondary';
    size: 'small' | 'medium' | 'large';
    mb?: string;
    borderColor?: string;
    backgroundColor?: string;
    iconAfter?: IKeyOfIcons;
    color?: ColorTokens;
}

interface IProps {
    title: string;
    description: string;
    onConfirm: () => void;
}

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
        if (form.getFieldState('biography')?.error) {
            return Toast.error({
                title: 'Lütfen Açıklama Giriniz*',
            });
        }

        if (form.getFieldState('birthDate')?.error) {
            return Toast.error({
                title: 'Lütfen birthDate Giriniz*',
            });
        }

        if (form.getFieldState('fullName')?.error) {
            return Toast.error({
                title: 'Lütfen fullName Giriniz*',
            });
        }
        const response = userServices
            .updateContactInformations(form.getValues())
            .then((res) => {
                Toast.success({title: 'Bilgineriniz Güncellendi'});
                if (onConfirm) {
                    onConfirm();
                } else {
                    router.back();
                }
                return res;
            })
            .catch((err) => {
                Toast.error({title: err.message});
                return err;
            });
    };

    useEffect(() => {
        const fetchUserDetails = async () => {
            const response =
                await userServices.getUserDetailsWithToken();
            if (response?.personalInformations) {
                form.setValue(
                    'fullName',
                    response.personalInformations.fullName,
                );
                form.setValue(
                    'birthDate',
                    response.personalInformations.birthDate,
                );
                form.setValue(
                    'biography',
                    response.personalInformations.biography,
                );
            }

            // @todo check form state when created

            console.log('form.control', form.setFocus('fullName'));
        };

        try {
            fetchUserDetails();
        } catch (error: any) {
            Toast.error({title: error?.message});
            console.log('Error', error);
        }
    }, [token]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <ScreenContainer
            verticalPadding={0}
            horizontalPadding={true}
        >
            <HeaderShown variant="dynamic">
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                height={'100%'}
                alignItems={'center'}
                backgroundColor={'$background'}
                gap={'3'}
            >
                <Icon name="PersonalDetailsSVG" />
                <Text
                    marginTop={'px'}
                    color={'grayscale900'}
                    {...TEXT_OPTIONS.H4}
                >
                    {title}
                </Text>
                <Text
                    textAlign={'center'}
                    {...TEXT_OPTIONS.BodyRegularM}
                    color={'grayscale600'}
                >
                    {description}
                </Text>
                <Stack marginTop={'7'}>
                    <TouchableOpacity onPress={toggleModal}>
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
                    width={'100%'}
                    marginTop={'7.5'}
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
                            <Input
                                size="large"
                                placeholder="05.11.1992"
                                leftIconName={'CalendarIcon'}
                            />
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
                                width={'100%'}
                                height={'28'}
                                marginTop={'3'}
                                placeholder="Kendinden Bahset"
                                borderRadius={'$4'}
                                p={'$4'}
                            />
                        </Form.Field>

                        {map(buttons, (button, index) => (
                            <Button
                                width={'100%'}
                                key={index}
                                variant={button.variant}
                                size={button.size}
                                marginBottom={'$2'}
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
