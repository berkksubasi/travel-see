import {router} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {ButtonGoBack} from '@components/buttons';
import {ScreenContainer} from '@components/containers';
import {HeaderShown} from '@components/header';
import AddressDetailsSVG from '@ui/primitives/Icon/svg/AddressDetailsSVG';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {IAddressInformations} from '@interfaces';
import {useAuthSession} from '@provider/AuthSessionProvider';
import userServices from '@services/user.services';
import {
    Button,
    Form,
    Select,
    Text,
    TextArea,
    Toast,
    useForm,
    YStack,
} from '@ui';

type IProps = {
    isBelongsToWizard?: boolean;
    onConfirm: () => void;
};

type IButtonPropsType = {
    title: string;
    icon?: string;
    variant: 'primary' | 'secondary';
};

const buttons: IButtonPropsType[] = [
    {
        title: 'Next',
        icon: 'ChevronRightIcon',
        variant: 'primary',
    },
    {
        title: 'Step',
        variant: 'secondary',
    },
];

const location: any[] = [
    {
        title: 'Select Country',
        name: 'country',
        icon: 'LocationIcon',
        defaultOpen: false,
        size: 'large',
        defaultValue: 'Turkey',
        items: [
            'Turkey',
            'Afghanistan',
            'Azerbaijan',
            'China',
            'France',
            'Germany',
            'Greece',
        ].map((item) => ({label: item, value: item})),
    },
    {
        title: 'Select City',
        name: 'city',
        icon: 'LocationIcon',
        defaultOpen: false,
        size: 'large',
        defaultValue: 'İstanbul',
        items: ['İstanbul', 'Ankara', 'İzmir'].map((item) => ({
            label: item,
            value: item,
        })),
    },
    {
        title: 'Select District',
        name: 'district',
        icon: 'LocationIcon',
        defaultOpen: false,
        size: 'large',
        defaultValue: 'Kadıköy',
        items: ['Kadıköy', 'Beşiktaş', 'Şişli'].map((item) => ({
            label: item,
            value: item,
        })),
    },
];

const AddressDetails: React.FC<IProps> = ({
    isBelongsToWizard = false,
    onConfirm,
}) => {
    const {token} = useAuthSession();

    const [selectedForm, setSelectedForm] =
        useState<IAddressInformations>({
            country: '',
            city: '',
            district: '',
        });

    const form = useForm<IAddressInformations>({
        defaultValues: {
            address_details: '',
        },
    });

    const handleSubmit = (p0: string, value: string) => {
        if (form.getFieldState('country')?.error) {
            return Toast.error({title: 'Please Select City!'});
        }

        if (form.getFieldState('city')?.error) {
            return Toast.error({title: 'Lütfen Şehir Seçiniz!'});
        }

        if (form.getFieldState('district')?.error) {
            return Toast.error({title: 'Please Select District!'});
        }

        if (form.getFieldState('address_details')?.error) {
            return Toast.error({
                title: 'Please Enter Address Details!',
            });
        }

        const response = userServices
            .updateAddressInformations(form.getValues())
            .then((res) => {
                Toast.success({
                    title: 'Your Information Has Been Updated',
                });
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
            try {
                const response =
                    await userServices.getUserDetailsWithToken();
                if (response?.addressInformations) {
                    form.setValue(
                        'country',
                        response.addressInformations.country,
                    );
                    form.setValue(
                        'city',
                        response.addressInformations.city,
                    );
                    form.setValue(
                        'district',
                        response.addressInformations.district,
                    );
                    form.setValue(
                        'address_details',
                        response.addressInformations.address_details,
                    );
                }
                console.log(
                    'form.control',
                    form.setFocus('address_details'),
                );
            } catch (error: any) {
                Toast.error({title: error?.message});
                console.log('Error', error);
            }
        };
        fetchUserDetails();
    }, [token]);

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems="center"
                justifyContent="center"
                gap="$3"
            >
                <AddressDetailsSVG />
                <Text
                    textAlign="center"
                    marginTop="$0.5"
                    color="$grayscale900"
                    {...TEXT_OPTIONS.H4}
                >
                    Address Informations
                </Text>
                <Text
                    textAlign="center"
                    marginTop="$px"
                    color="$grayscale600"
                    {...TEXT_OPTIONS.BodyRegularM}
                >
                    Your address information will be stored for
                    possible future billing!
                </Text>
            </YStack>
            <YStack
                marginTop="$9"
                alignItems="center"
                gap="$3"
                w="100%"
            >
                {location.map((item, index) => (
                    <Select
                        key={index}
                        title={item.title}
                        size={10}
                        icon={item.icon}
                        defaultOpen={false}
                        placeholder={item.title}
                        items={item.items}
                        defaultValue={item.defaultValue}
                        value={item.name}
                        onValueChange={(value) => {
                            console.log(value);
                            setSelectedForm((prevForm) => ({
                                ...prevForm,
                                [item.name]: value,
                            }));
                        }}
                    />
                ))}
                <YStack w="100%">
                    <Form form={form}>
                        <Form.Field
                            key="addresssssss"
                            name="address_details"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Address description cannot be left blank',
                                },
                            }}
                        >
                            <TextArea
                                width="100%"
                                textAlignVertical="top"
                                textAlign="left"
                                placeholder="Address description"
                                minHeight="$size.25"
                            />
                        </Form.Field>
                    </Form>
                </YStack>
            </YStack>
            {/* BUTTONS */}
            {isBelongsToWizard ? (
                <YStack
                    width="100%"
                    marginTop="$30"
                    mb="$2"
                >
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant={button.variant}
                            size="large"
                            borderColor="$transparent"
                            iconAfter={button.icon}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldL}
                                color={
                                    button.variant === 'primary'
                                        ? '$white'
                                        : '$grayscale900'
                                }
                            >
                                {button.title}
                            </Text>
                        </Button>
                    ))}
                </YStack>
            ) : (
                <YStack
                    width="100%"
                    marginTop="$30"
                >
                    <Button
                        variant="primary"
                        size="large"
                        marginTop="$4"
                        mb="$9"
                        iconAfter="ChevronRightIcon"
                        onPress={handleSubmit}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color="$white"
                        >
                            Save
                        </Text>
                    </Button>
                </YStack>
            )}
        </ScreenContainer>
    );
};

export default AddressDetails;
