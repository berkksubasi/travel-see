import React, {useEffect, useMemo, useState} from 'react';
import {Toast} from '@ui/actions/Toast';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {Countdown} from '@components';
//Services
import authServices from '@services/auth.services';
//UI Lib.
import {
    Button,
    Form,
    Input,
    Text, //  Toast,
    XStack,
    YStack,
} from '@ui';
//Commom Lib.
import {OTPInput} from '../../input';

interface IProps {
    mail?: string;
    phone?: string;
    otpCode: string;
    setOTPCode: (code: string) => void;
}

const OTPVerifyStep: React.FC<IProps> = ({
    mail,
    phone,
    otpCode,
    setOTPCode,
}) => {
    const [canResend, setCanResend] = useState(false);
    const [isReqPending, setIsReqPending] = useState(false);
    const maximumCodeLength = 4;

    const isPinReady = useMemo(() => {
        return otpCode.length === maximumCodeLength;
    }, [otpCode, maximumCodeLength]);

    const handleTimeout = () => {
        setCanResend(() => true);
    };

    const handleResendOTP = async () => {
        if (phone || mail) {
            setIsReqPending(() => true);
            const response = await authServices
                .sendVerifyEmailOTP(mail || phone || '')
                .then((res) => {
                    Toast.success({title: 'Kodunuz gönderildi.'});
                    setIsReqPending(() => false);
                    setCanResend(() => true);
                })
                .catch((err) => {
                    Toast.error({title: 'Kod gönderilemedi.'});
                    setCanResend(() => false);
                    setIsReqPending(() => false);
                });
        }
    };

    return (
        <YStack
            width={'100%'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <YStack
                width={'100%'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Button
                    variant="primary"
                    backgroundColor={'$primary008'}
                    disabled={false}
                    color={'$grayscale600'}
                    borderColor={'$primary'}
                    borderWidth={'$px'}
                    borderRadius={'$4'}
                    height={'$size.10'}
                    marginTop={'$space.4'}
                    marginBottom={'$space.16'}
                >
                    {mail || phone}
                </Button>

                {/* SQUARE INPUT */}
                <XStack
                    width="100%"
                    justifyContent={'center'}
                    marginBottom={10}
                    gap={'$space.4'}
                >
                    <OTPInput
                        code={otpCode}
                        setCode={setOTPCode}
                        maximumLength={maximumCodeLength}
                    />
                </XStack>
                <Countdown
                    endTrigger={handleTimeout}
                    count={120}
                />

                <YStack width={'100%'}>
                    <Button
                        disabled={!canResend}
                        loading={isReqPending}
                        variant="primary"
                        size="large"
                        onPress={handleResendOTP}
                        
                        marginTop={'$21'}
                        iconAfter="ChevronRightIcon"
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={'$white'}
                        >
                            Tekrar Gönder
                        </Text>
                    </Button>
                </YStack>
            </YStack>
        </YStack>
    );
};

export default OTPVerifyStep;
