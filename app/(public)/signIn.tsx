import {router} from 'expo-router';
import React, {useMemo, useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';
//React
//Common Lib.
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
    SocialSign,
} from '@components';
import axiosInstance from '@configuration/axios.instance';
//Common Lib.
//Constants
import {APP_CONFIG, MESSAGES, TEXT_OPTIONS} from '@constants';
// @todo fix import
//Hooks
import {setStorageItemAsync} from '@hooks';
//Solito
//Interfaces
import {ILoginCredentials} from '@interfaces';
import {useAuthSession} from '@provider/AuthSessionProvider';
//Services
import authServices from '@services/auth.services';
//UI Lib.
import {
    Button,
    Form,
    IKeyOfIcons,
    Input,
    Text,
    Toast,
    useForm,
    XStack,
    YStack,
} from '@ui';

export default function SignInScreen() {
    const {signIn} = useAuthSession();
    const form = useForm<ILoginCredentials>({
        defaultValues: {identifier: 'oguz', password: 'Os1998ss.'},
    });

    const canSubmit = useMemo(() => {
        return form.formState.isValid;
    }, [form.formState.isValid]);

    const [isLoading, setIsLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);

    const rightActions = useMemo(() => {
        const actions: {
            iconName?: IKeyOfIcons;
            onPress?: () => void;
            loading?: boolean;
        }[] = [];
        actions.push({
            iconName: secureEntry ? 'HideIcon' : 'ShowIcon',
            onPress: () => {
                setSecureEntry(!secureEntry);
            },
        });
        return actions;
    }, [secureEntry]);

    const onSubmitLogin = async (data: ILoginCredentials) => {
        setIsLoading(true);

        const response = await authServices
            .login(data)
            .then(async (res) => {
                Toast.success({
                    title: MESSAGES.SUCCESS_MESSAGES.loginSuccess,
                });
                await setStorageItemAsync('token', res);
                signIn(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log('eeeee', err);
                Toast.error({
                    title: MESSAGES.ERROR_MESSAGES.loginError,
                });
                setIsLoading(false);
            });
    };

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown variant="backgroundless">
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                style={{height: '100%'}}
                justifyContent={'space-between'}
            >
                <YStack gap={'$6'}>
                    <CircleIconButton
                        variant="primary"
                        icon="AccountCustomIcon"
                    />
                    {/* HEADER */}
                    <Text
                        textAlign={'center'}
                        marginBottom={'$space.10'}
                        color={'$black'}
                        {...TEXT_OPTIONS.H4}
                    >
                        Giriş Yap
                    </Text>
                </YStack>
                <YStack gap={'$16'}>
                    <YStack>
                        <Form form={form}>
                            <Form.Field
                                name="identifier"
                                rules={{
                                    required: {
                                        value: true,
                                        message:
                                            'Bu alan zorunludur*',
                                    },
                                    onChange: () => {
                                        form.clearErrors(
                                            'identifier',
                                        );
                                    },
                                }}
                            >
                                <Input
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    size="large"
                                    leftIconName="UserIcon"
                                    error={false}
                                    placeholder="E-posta, kullanıcı adı veya telefon numarası"
                                />
                            </Form.Field>

                            <Form.Field
                                name="password"
                                rules={{
                                    required: {
                                        value: true,
                                        message:
                                            'Lütfen Şifrenizi Giriniz*',
                                    },
                                    onChange: () => {
                                        form.clearErrors('password');
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
                                    placeholder="Şifre"
                                />
                            </Form.Field>
                        </Form>
                        <XStack alignSelf="flex-end">
                            {/* <TouchableOpacity
                                onPress={() => {
                                    router.push();
                                @todo oğuz !!!BURAYA WIZARD GELECEK!!!
                                }}
                            > */}

                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldM}
                                marginTop={'$space.4'}
                                color={'$primary'}
                            >
                                Şifreni mi unuttun?
                            </Text>
                            {/* </TouchableOpacity> */}
                        </XStack>
                    </YStack>
                    <Button
                        loading={isLoading}
                        disabled={!canSubmit}
                        // onPress={form.handleSubmit(onSubmitLogin)}
                        onPress={() =>
                            router.push(
                                APP_CONFIG.APP_PATHS.TABS.PROFILE,
                            )
                        }
                        variant="primary"
                        size="large"
                        marginBottom={'$space.9'}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={'$white'}
                        >
                            Giriş yap
                        </Text>
                    </Button>
                </YStack>

                <SocialSign type="login" />
            </YStack>
        </ScreenContainer>
    );
}
