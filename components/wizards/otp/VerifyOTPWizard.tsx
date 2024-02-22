//React
import React, {useEffect, useMemo, useState} from 'react';
//Common
import {OTPVerifyStep, WizardFormLayout} from '@components';
//Constants
import {DEFAULTS} from '@constants';
//Interfaces
import {IResetPassword} from '@interfaces';
//Services
import authServices from '@services/auth.services';
//UI Lib.
import {Form, Stack, Toast, useForm} from '@ui';
import {IWizzardHeaderProps} from '../shared/WizardHeader';
import EnterIdentifierStep from './EnterIdentifierStep';

interface IProps {
    verifyType?: 'email' | 'phone' | 'username';
    parentSetter?: React.Dispatch<React.SetStateAction<number>>;
}

interface IVerifyType {
    username: IWizzardHeaderProps;
    email: IWizzardHeaderProps;
    phone: IWizzardHeaderProps;
}

const verifyTypeMock: any[] = [
    {
        username: {
            icon: 'PhoneCustomIcon',
            description:
                'Şifrenizi bcnvbncvbcbnvanmamız gerektiğini seçin.',
            title: 'Şifremi Unuttum',
        },
        email: {
            icon: 'MailCustomIcon',
            description:
                'Kodunuzu göndermek için e-posta adresinize girin.',
            title: 'Şifremi Unuttum',
        },
        phone: {
            icon: 'PhoneCustomIcon',
            description: 'Numaranızı güvenlik açısından doğrulanmalı',
            title: 'Şifremi Unuttum',
        },
    },

    {
        icon: 'PhoneCustomIcon',
        description:
            'Şifrenizi bcnvbncvbcbnvanmamız gerektiğini seçin.',
        title: 'Şifremi Unuttum',
    },
];

const VerifyOTPWizard: React.FC<IProps> = ({
    verifyType = 'email',
    parentSetter,
}) => {
    const [stepIndex, setStepIndex] = useState(0);

    const resetPasswordForm = useForm<IResetPassword>({
        defaultValues: DEFAULTS.initialResetPassword,
    });

    const {register} = resetPasswordForm;

    const canNextClick = useMemo(() => {
        switch (stepIndex) {
            case 0:
                return !resetPasswordForm.getValues('email').length;
            default:
                return false;
        }
    }, [register('email'), resetPasswordForm, stepIndex]);

    useEffect(() => {
        const sendOTP = async () => {
            const response = await authServices
                .sendResetPasswordOTP(
                    resetPasswordForm.getValues('email'),
                )
                .then((res) => {
                    Toast.success({title: res.message});
                    return res.data;
                })
                .catch((err) => {
                    Toast.error({title: err.message});
                    setStepIndex(0);
                    return err.response.data;
                });
        };
        if (stepIndex === 1) {
            try {
                sendOTP();
            } catch (error) {
                console.log('yyyy', error);
            }
        }
    }, [stepIndex]);

    return (
        <WizardFormLayout
            setParentStepIndex={parentSetter}
            setStepIndex={setStepIndex}
            headerProps={
                verifyTypeMock[stepIndex][verifyType]
                    ? verifyTypeMock[stepIndex][verifyType]
                    : verifyTypeMock[stepIndex]
            }
            stepIndex={stepIndex}
            isNextDisabled={canNextClick}
        >
            <Stack
                width={'100%'}
                height={'100%'}
            >
                <Form form={resetPasswordForm}>
                    {stepIndex === 0 && (
                        <EnterIdentifierStep
                            form={resetPasswordForm}
                            verifyType={verifyType}
                        />
                    )}

                    {stepIndex === 1 && (
                        <OTPVerifyStep
                            mail={resetPasswordForm.getValues(
                                'email',
                            )}
                            // @todo
                            otpCode="123456"
                            setOTPCode={() => {}}
                            // onConfirm={(otpCode) => {
                            //     console.log('otpCode', otpCode);
                            // }}
                        />
                    )}
                </Form>
            </Stack>
        </WizardFormLayout>
    );
};

export default VerifyOTPWizard;
