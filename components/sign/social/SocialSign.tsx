//Solito
import {router} from 'expo-router';
import {map} from 'lodash';
import React from 'react';
import APP_ROUTES from '@constants/APP_CONFIG';
import APP_CONFIG from '@constants/APP_CONFIG';
//Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
// UI Lib.
import {
    IconButton,
    IKeyOfIcons,
    LinearGradient,
    Stack,
    Text,
    XStack,
    YStack,
} from '@ui';

const texts = {
    login: {
        desc: "Don't have an account?",
        title: 'Sign Up',
    },
    register: {
        desc: 'Already have an account?',
        title: 'Sign In',
    },
};
interface IButton {
    icon: IKeyOfIcons;
}
// type AnimatableNumericValue = number | Animated.AnimatedNode
const buttons: IButton[] = [
    {
        // @todo fix-icon
        icon: 'GoogleIcon',
    },
    {
        icon: 'FacebookIcon',
    },
    {
        icon: 'AppleIcon',
    },
];

interface IProps {
    type: 'login' | 'register';
}

const SocialSign: React.FC<IProps> = ({type}) => {
    const linkType = type === 'login' ? 'register' : 'login';

    return (
        <YStack
            justifyContent="center"
            alignItems="center"
            gap={'$8'}
        >
            <YStack
                marginBottom={'$px'}
                justifyContent="center"
                alignItems={'center'}
                position="relative"
                width="100%"
            >
                <Stack
                    width={'100%'}
                    height={'$px'}
                    backgroundColor="$gray4"
                    top={'50%'}
                    position="absolute"
                />

                <Text
                    {...TEXT_OPTIONS.BodyRegularM}
                    backgroundColor={'$background'}
                    color={'$grayscale400'}
                    paddingHorizontal="$space.4"
                >
                    or
                </Text>
            </YStack>
            <XStack
                gap="$space.6"
                alignItems="center"
                justifyContent="center"
            >
                {map(buttons, (button, index) => (
                    <LinearGradient
                        key={button.icon + index}
                        colors={['$whiteButton', '$bgSocial']}
                        borderRadius={'$4'}
                    >
                        <IconButton
                            borderColor="$primary"
                            borderWidth={'$px'}
                            width={'$14'}
                            height={'$14'}
                            icon={button.icon}
                            color="$black"
                            borderRadius={'$4'}
                            bg={'$transparent'}
                        />
                    </LinearGradient>
                ))}
            </XStack>

            <XStack justifyContent="center">
                <Text
                    {...TEXT_OPTIONS.BodyRegularM}
                    color={'$grayscale400'}
                >
                    {texts[type].desc}{' '}
                </Text>
                <Text
                    {...TEXT_OPTIONS.BodySemiBoldM}
                    onPress={
                        type === 'login'
                            ? () =>
                                  router.push(
                                      APP_CONFIG.APP_PATHS.SIGN_UP,
                                  )
                            : () =>
                                  router.push(
                                      APP_CONFIG.APP_PATHS.SIGN_IN,
                                  )
                    }
                    color={'$primary'}
                    // onPress={() =>
                    //     router.replace(
                    //         type === 'login'
                    //             ? APP_ROUTES.SIGN_UP
                    //             : APP_ROUTES.SIGN_IN,
                    //     )
                    // }
                >
                    {texts[type].title}
                </Text>
            </XStack>
        </YStack>
    );
};

export default SocialSign;
