//React
import React, {useMemo, useState} from 'react';
//Common Lib.
import {CircleIconButton, ScreenContainer} from '@components';
//Constants
import {TEXT_OPTIONS} from '@constants';
import {IResetPassword} from '@interfaces';
//UI Lib.
import {
    Button,
    Form,
    IKeyOfIcons,
    Input,
    Text,
    useForm,
    YStack,
} from '@ui';

const ChangePassword = () => {
    const form = useForm<IResetPassword>({
        defaultValues: {
            oldPassword: '',
            password: '',
            passwordConfirm: '',
        },
    });

    const handleSubmit = () => {
        const formValues = form.getValues();
        console.log(formValues);
    };

    const [secureEntry, setSecureEntry] = useState(true);
    const rightActions = useMemo(() => {
        const actions: {
            iconName?: IKeyOfIcons;
            onPress?: () => void;
        }[] = [];
        actions.push({
            iconName: secureEntry ? 'HideIcon' : 'ShowIcon',
            onPress: () => {
                setSecureEntry(!secureEntry);
            },
        });
        return actions;
    }, [secureEntry]);

    return (
        <ScreenContainer
            verticalPadding={true}
            horizontalPadding={true}
            showGoBackButton={true}
        >
            <YStack
                width={'100%'}
                alignItems={'center'}
                gap={'$4'}
            >
                <YStack
                    gap={'$2'}
                    marginBottom={'$8'}
                >
                    <CircleIconButton
                        variant="primary"
                        icon="SettingsCustomIcon"
                        color="$white"
                    />
                    <YStack
                        gap={'$3'}
                        alignItems={'center'}
                    >
                        <Text {...TEXT_OPTIONS.H4}>
                            Şifre Değiştir
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularM}
                            color={'$grayscale600'}
                        >
                            Lütfen eski şifrenizi girip devam ediniz
                        </Text>
                    </YStack>
                </YStack>
                <YStack width={'100%'}>
                    <Form form={form}>
                        <Form.Field
                            name="oldPassword"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen Eski Şifrenizi Giriniz',
                                },
                            }}
                        >
                            <Input
                                {...TEXT_OPTIONS.BodyMediumM}
                                size="large"
                                flex={1}
                                secureTextEntry={secureEntry}
                                addOns={rightActions}
                                leftIconName="LockIcon"
                                placeholder="Eski Şifreniz"
                            />
                        </Form.Field>
                        <Form.Field
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen Yeni Şifrenizi Giriniz',
                                },
                            }}
                        >
                            <Input
                                {...TEXT_OPTIONS.BodyMediumM}
                                size="large"
                                flex={1}
                                secureTextEntry={secureEntry}
                                addOns={rightActions}
                                leftIconName="LockIcon"
                                placeholder="Yeni Şifreniz"
                            />
                        </Form.Field>
                        <Form.Field
                            name="passwordConfirm"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen Şifrenizi Tekrar Giriniz',
                                },
                            }}
                        >
                            <Input
                                {...TEXT_OPTIONS.BodyMediumM}
                                size="large"
                                flex={1}
                                secureTextEntry={secureEntry}
                                addOns={rightActions}
                                leftIconName="LockIcon"
                                placeholder="Şifrenizi Tekrar Giriniz"
                            />
                        </Form.Field>
                    </Form>
                </YStack>

                <Button
                    variant="primary"
                    size="large"
                    marginTop={'$23'}
                    width={'100%'}
                    onPress={() => {
                        console.log(form.getValues());
                    }}
                >
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldL}
                        color={'$white'}
                    >
                        Değiştir
                    </Text>
                </Button>
            </YStack>
        </ScreenContainer>
    );
};

export default ChangePassword;
