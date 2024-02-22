import {router} from 'expo-router';
import React, {useMemo, useState} from 'react';
//Common Lib.
import validator from 'validator';
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
    SocialSign,
} from '@components';
//Constants
import {
    APP_CONFIG,
    DEFAULTS,
    MESSAGES,
    TEXT_OPTIONS,
} from '@constants';
//Context
import {
    ERegisterReducerActionKind,
    useRegisterApiContext,
    useRegisterStateContext,
} from '@context/registerContext';
//Interfaces
import {IRegisterCredentials} from '@interfaces/auth';
//Services
import authServices from '@services/auth.services';
import {Toast} from '@ui';
//UI Lib.
// import { Button, Text, ScrollView, Form, useForm, Toast, IKeyOfIcons } from '@ui'
import {
    Button,
    Form,
    IKeyOfIcons,
    ScrollView,
    Text,
    useForm,
    YStack,
} from '@ui';
import StatusResultContent from '../../status-result/StatusResultContent';
//Wizards
import {OTPVerifyStep, UserDetailWizard} from '../user';
//Solito
import RegisterCredentialsForm from './RegisterCredentialsForm';

export interface IRegisterResultButton {
    variant: 'primary' | 'secondary';
    title: string;
    onPress?: () => void;
}

const buttons: IRegisterResultButton[] = [
    {
        variant: 'primary',
        title: 'Bilgilerini Gir',
        onPress: () =>
            router.replace(
                APP_CONFIG.APP_PATHS.FORMS.ADDRESS_INFORMATIONS_STEP,
            ),
    },
    {
        variant: 'secondary',
        title: "Anasayfa'ya Geç",
        onPress: () => router.replace(APP_CONFIG.APP_PATHS.TABS.HOME),
    },
];

interface IProps {}
const RegisterWizard: React.FC<IProps> = () => {
    // const stepIndex = 2;
    // const {step: stepIndexx, data: registerState} =
    //     useRegisterStateContext();
    // wizzard editlerken alttakini kapat üsttekini aç
    const {step: stepIndex, data: registerState} =
        useRegisterStateContext();

    const {changeStep} = useRegisterApiContext();

    const registerForm = useForm<IRegisterCredentials>({
        defaultValues: DEFAULTS.initialRegisterUser,
    });

    const [isReqPending, setIsReqPending] = useState(false);
    const [otpCode, setOTPCode] = useState('');

    const isPinReady = useMemo(() => {
        return otpCode.length === 4;
    }, [otpCode]);

    const submitAllowence = useMemo(() => {
        let canNext = true;
        const errors = registerForm.formState.errors;
        canNext = Object.keys(errors).length === 0;

        const {
            email,
            otp,
            password,
            passwordConfirm,
            username,
            phone,
        } = registerForm.getValues();

        // @todo get messages from constants and improve validations with right numbers ex. (password must be longerthan 8 char etc. - check from backend)
        if (stepIndex === 0) {
            if (
                !validator.isEmail(email) ||
                validator.isEmpty(username) ||
                validator.isEmpty(password) ||
                validator.isEmpty(passwordConfirm)
            ) {
                canNext = false;
            }
        }

        if (stepIndex === 1) {
            canNext = isPinReady;
        }

        return canNext;
    }, [stepIndex, registerForm.getValues(), isPinReady]);

    console.log('stepIndex', stepIndex);

    const step = useMemo<{
        title?: string;
        icon?: IKeyOfIcons;
    }>(() => {
        switch (stepIndex) {
            case 0:
                return {
                    // @todo-REPLACEMENT GET hardcoded string from messages
                    title: 'Hesap Oluştur',
                    icon: 'AccountCustomIcon',
                };
            case 1:
                return {
                    // @todo-REPLACEMENT GET hardcoded string from messages
                    icon: 'MailCustomIcon',
                    title: 'E-Postanı Doğrula',
                };
            // case 2:
            //   return {
            //     component: (
            //       <UserDetailWizard
            //       // @todo-REPLACEMENT GET hardcoded string from messages
            //       // onConfirm={handleOTPVerify}
            //       />
            //     ),
            //   }
            default:
                return {
                    component: null,
                    title: 'Hesap Oluştur',
                    icon: 'ChevronLeftIcon',
                };
        }
    }, [stepIndex]);

    const handleOTPVerify = async (otpCode: string) => {
        const tempUser: IRegisterCredentials =
            registerForm.getValues();
        tempUser.otp = otpCode;
        delete tempUser.phone;
        const response = await authServices.register(tempUser);
        if (response) {
            // @todo-REPLACEMENT GET hardcoded string from messages
            Toast.success({title: 'Kodunuz doğrulandı.'});
        }

        return response;
    };

    /// Handler ////
    const handleStepClick = async (
        type:
            | ERegisterReducerActionKind.NEXT
            | ERegisterReducerActionKind.PREV,
    ) => {
        if (type === ERegisterReducerActionKind.PREV) {
            if (stepIndex === 0) {
                return router.push(APP_CONFIG.APP_PATHS.WELCOME);
            } else {
                return changeStep(type);
            }
        }

        if (type === ERegisterReducerActionKind.NEXT) {
            registerForm.handleSubmit(async (data) => {
                if (submitAllowence) {
                    if (stepIndex === 0) {
                        if (data.password !== data.passwordConfirm) {
                            // @todo-REPLACEMENT GET hardcoded string from messages
                            return Toast.error({
                                title: 'Şifreler eşleşmiyor!',
                            });
                        }

                        if (data.password.length < 8) {
                            // @todo-REPLACEMENT GET hardcoded string from messages
                            return Toast.error({
                                title: 'Şifre en az 8 karakter olmalıdır!',
                            });
                        }

                        setIsReqPending(() => true);
                        const response = await authServices
                            .sendVerifyEmailOTP(data.email)
                            .then(() => {
                                Toast.success({
                                    title: 'Kodunuz gönderildi.',
                                });
                                changeStep(type);
                                return setIsReqPending(() => false);
                            })
                            .catch((error) => {
                                Toast.error({
                                    title:
                                        error?.message ||
                                        'başarısız.',
                                });
                                return setIsReqPending(() => false);
                            });
                    }

                    if (stepIndex === 1) {
                        setIsReqPending(() => true);
                        const response = await handleOTPVerify(
                            otpCode,
                        )
                            .then(() => {
                                Toast.success({
                                    title: 'Hesabınız doğrulandı.',
                                });
                                changeStep(type);
                                setIsReqPending(() => false);
                            })
                            .catch((error) => {
                                Toast.error({
                                    title:
                                        error?.message ||
                                        'başarısız.',
                                });
                                return setIsReqPending(() => false);
                            });
                    }

                    if (stepIndex === 2) {
                        return router.push(
                            APP_CONFIG.APP_PATHS.WELCOME,
                        );
                    }
                } else {
                    // @todo-REPLACEMENT GET hardcoded string from messages
                    Toast.error({
                        title: 'Lütfen formu eksiksiz doldurunuz!',
                    });
                }
            })();
        }
    };

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack
                    customGoBackEvent={() =>
                        handleStepClick(
                            ERegisterReducerActionKind.PREV,
                        )
                    }
                />
            </HeaderShown>
            <ScrollView
                overflow="visible"
                showsVerticalScrollIndicator={false}
                width={'100%'}
                height={'100%'}
                showCustomScrollBar={false}
            >
                {stepIndex !== 2 && (
                    <YStack justifyContent="center">
                        {step?.icon && (
                            <CircleIconButton
                                variant="primary"
                                icon={step.icon}
                            />
                        )}
                        <Text
                            {...TEXT_OPTIONS.H4}
                            textAlign={'center'}
                            color={'$grayscale900'}
                            marginBottom={'$space.12'}
                        >
                            {step?.title}
                        </Text>
                    </YStack>
                )}

                <Form form={registerForm}>
                    {/* Wizard Content */}
                    {stepIndex === 0 && (
                        <RegisterCredentialsForm
                            form={registerForm}
                        />
                    )}
                    {stepIndex === 1 && (
                        <OTPVerifyStep
                            otpCode={otpCode}
                            setOTPCode={setOTPCode}
                            mail={registerForm.getValues('email')}
                        />
                    )}
                    {stepIndex === 2 && (
                        <StatusResultContent
                            // @todo-REPLACEMENT GET hardcoded string from messages
                            buttons={buttons}
                            title="Tebrikler!"
                            status="success"
                            message={
                                MESSAGES.SUCCESS_MESSAGES
                                    .registerSuccess
                            }
                        />
                    )}
                    {/* Wizard Content */}
                </Form>
                {/* Wizard Bottom */}
                {stepIndex !== 2 && (
                    <YStack>
                        <Button
                            disabled={!submitAllowence}
                            loading={isReqPending}
                            variant="primary"
                            size="large"
                            onPress={() =>
                                handleStepClick(
                                    ERegisterReducerActionKind.NEXT,
                                )
                            }
                            marginTop={'$4'}
                            mb={'$9'}
                            iconAfter="ChevronRightIcon"
                        >
                            <Text
                                {...TEXT_OPTIONS.BodySemiBoldL}
                                color={'$white'}
                            >
                                {stepIndex === 7
                                    ? 'GİRİŞ YAP'
                                    : 'Sonraki'}
                            </Text>
                        </Button>
                        {stepIndex === 0 && (
                            <SocialSign type="register" />
                        )}
                    </YStack>
                )}
            </ScrollView>
        </ScreenContainer>
    );
};

export default RegisterWizard;
