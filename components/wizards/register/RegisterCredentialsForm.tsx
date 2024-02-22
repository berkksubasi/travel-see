//React
import {map} from 'lodash';
import React, {useMemo, useState} from 'react';
//React-HOOK-FORM
import type {UseFormReturn} from 'react-hook-form';
//React-Native
import {
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from 'react-native/types';
//Constants
import {MESSAGES} from '@constants';
//Context
import {
    useRegisterApiContext,
    useRegisterStateContext,
} from '@context/registerContext';
//Interfaces
import {IRegisterCredentials} from '@interfaces/auth';
//UI Lib.
import {Form, IKeyOfIcons, Input, Stack} from '@ui';

interface IInputMockType {
    placeholder: string;
    icon: IKeyOfIcons;
    canSecure?: boolean;
}

interface IInputMock {
    username: IInputMockType;
    email: IInputMockType;
    password: IInputMockType;
    passwordConfirm: IInputMockType;
}

const inputMock: IInputMock = {
    username: {
        placeholder: 'Kullanıcı adı',
        icon: 'UserIcon',
    },
    email: {
        placeholder: 'E-posta adresi',
        icon: 'MailIcon',
    },
    password: {
        placeholder: 'Şifre',
        icon: 'LockIcon',
        canSecure: true,
    },
    passwordConfirm: {
        placeholder: 'Şifre tekrar',
        icon: 'LockIcon',
        canSecure: true,
    },
};

interface IProps {
    form: UseFormReturn<IRegisterCredentials, any, undefined>;
}
const RegisterCredentialsForm: React.FC<IProps> = ({form}) => {
    const {data: registerState} = useRegisterStateContext();
    const {setData} = useRegisterApiContext();

    const [secureEntry, setSecureEntry] = useState(true);

    const handleInputChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
    ) => {
        const tempState = {...registerState};
        // tempState[key] = val
        setData(tempState);
    };

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

    return (
        <Stack marginTop={'$5'}>
            {map(registerState, (item, key) => {
                if (key === 'phone') {
                    return null;
                }
                if (key === 'otp') {
                    return null;
                }

                const mockItem =
                    inputMock[key as keyof typeof inputMock];
                return (
                    <Stack
                        key={item + key}
                        marginBottom={'$space.6'}
                    >
                        <Form.Field
                            rules={{
                                // @todo-REPLACEMENT replace hardcoded string with MESSAGES
                                required: {
                                    value: true,
                                    message:
                                        MESSAGES.KEY_MESSAGES[
                                            key as keyof typeof MESSAGES.KEY_MESSAGES
                                        ] + ' gereklidir.',
                                },
                                onChange: () => {
                                    form.clearErrors(
                                        key as keyof IRegisterCredentials,
                                    );
                                },
                            }}
                            name={key}
                        >
                            <Input
                                size="large"
                                key={key + item}
                                leftIconName={mockItem?.icon}
                                onChange={handleInputChange}
                                // error={validation[key]}
                                placeholder={mockItem?.placeholder}
                                secureTextEntry={
                                    mockItem?.canSecure && secureEntry
                                }
                                addOns={
                                    mockItem?.canSecure
                                        ? rightActions
                                        : undefined
                                }
                            />
                        </Form.Field>
                    </Stack>
                );
            })}
        </Stack>
    );
};

export default RegisterCredentialsForm;
