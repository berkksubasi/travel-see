// React
import React, {useMemo, useState} from 'react';
// Common Lib.
import {CircleIconButton, ScreenContainer} from '@components';
// Constants
import {TEXT_OPTIONS} from '@constants';
import {IResetPassword} from '@interfaces';
// UI Lib.
import {
    Button,
    Form,
    IKeyOfIcons,
    Input,
    Text,
    useForm,
    YStack,
} from '@ui';

function ChangePassword() {
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
        const actions: Array<{
            iconName?: IKeyOfIcons;
            onPress?: () => void;
        }> = [];
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
            verticalPadding
            horizontalPadding
            showGoBackButton
        >
            <YStack
                width="100%"
                alignItems="center"
                gap="$4"
            >
                <YStack
                    gap="$2"
                    marginBottom="$8"
                >
                    <CircleIconButton
                        variant="primary"
                        icon="SettingsCustomIcon"
                        color="$white"
                    />
                    <YStack
                        gap="$3"
                        alignItems="center"
                    >
                        <Text {...TEXT_OPTIONS.H4}>
                            Change Password
                        </Text>
                        <Text
                            {...TEXT_OPTIONS.BodyRegularM}
                            color="$grayscale600"
                        >
                            Change password Please enter your old
                            password and continue.
                        </Text>
                    </YStack>
                </YStack>
                <YStack width="100%">
                    <Form form={form}>
                        <Form.Field
                            name="oldPassword"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Please Enter Your Old Password',
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
                                placeholder="Old Password"
                            />
                        </Form.Field>
                        <Form.Field
                            name="password"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Please Enter Your New Password',
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
                                placeholder="New Password"
                            />
                        </Form.Field>
                        <Form.Field
                            name="passwordConfirm"
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Please Re-Enter Your New Password',
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
                                placeholder="Please Re-enter your password"
                            />
                        </Form.Field>
                    </Form>
                </YStack>

                <Button
                    variant="primary"
                    size="large"
                    marginTop="$23"
                    width="100%"
                    onPress={() => {
                        console.log(form.getValues());
                    }}
                >
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldL}
                        color="$white"
                    >
                        Save
                    </Text>
                </Button>
            </YStack>
        </ScreenContainer>
    );
}

export default ChangePassword;
