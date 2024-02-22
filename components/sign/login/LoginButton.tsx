import {router} from 'expo-router';
import React from 'react';
//Hooks
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {APP_CONFIG} from '@constants';
//UI Lib.
import {Button, IButtonProps, Text} from '@ui';

const LoginButton = () => {
    return (
        <Button
            variant="primary"
            size="large"
            onPress={() => router.push(APP_CONFIG.APP_PATHS.SIGN_IN)}
        >
            <Text
                {...TEXT_OPTIONS.BodySemiBoldL}
                color={'$white'}
            >
                Giriş Yap
            </Text>
        </Button>
    );
};

export default LoginButton;
