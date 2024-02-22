import {router} from 'expo-router';
import React from 'react';
//Constants
import {APP_CONFIG, TEXT_OPTIONS} from '@constants';
//UI Lib.
import {Button, Text} from '@ui';

const RegisterButton = () => {
    return (
        <Button
            backgroundColor={'$background'}
            variant="secondary"
            size="large"
            borderWidth={'$px'}
            borderColor={'$primary'}
            onPress={() => router.push(APP_CONFIG.APP_PATHS.SIGN_UP)}
        >
            <Text {...TEXT_OPTIONS.BodySemiBoldL}>Sign Up</Text>
        </Button>
    );
};

export default RegisterButton;
