import toast from 'react-native-toast-message';
import {getTokens} from 'tamagui';
import {Icon} from '../../primitives';

interface IToastProps {
    title: string;
    message?: string;
    /**
     * Duration in seconds.
     */
    duration?: number;
}

export interface IToastBaseProps extends IToastProps {
    title: string;
    message?: string;
    /**
     * Duration in seconds.
     */
    duration?: number;
    haptic?: 'success' | 'warning' | 'error' | 'none';
    type?: 'error' | 'success' | 'info';
}

const iconMap = {
    success: {
        ios: {
            name: 'checkmark.circle.fill',
            color: getTokens().color.iconSuccessLight.val,
        },
        web: (
            <Icon
                name="CheckRadioSolid"
                color="$iconSuccess"
            />
        ),
    },
    error: {
        ios: {
            name: 'x.circle.fill',
            color: getTokens().color.iconCriticalLight.val,
        },
        web: (
            <Icon
                name="XCircleSolid"
                color="$iconCritical"
            />
        ),
    },
};

function burntToast({
    title,
    message,
    type,
    duration,
    haptic,
}: IToastBaseProps) {
    toast.show({
        type,
        text1: title,
        text2: message,
        // duration,
        // haptic,
        // preset,
        // icon: iconMap[haptic as keyof typeof iconMap],
    });
}

export const Toast = {
    success: (props: IToastProps) => {
        burntToast({type: 'success', ...props});
    },
    error: (props: IToastProps) => {
        burntToast({type: 'error', ...props});
    },
    message: (props: IToastProps) => {
        burntToast({type: 'info', ...props});
    },
};
