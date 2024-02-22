import {IconButton} from '@ui/actions';
import {IButtonProps} from '@ui/primitives';

const NotificationButton = ({
    counterValue = 0,
    notificationButtonEvent = () => {},
}: {
    counterValue?: any;
    notificationButtonEvent?: any;
}) => {
    const getNotificationButtonStyles: () => IButtonProps = () => {
        if (counterValue > 0) {
            return {
                color: '$grayscale900',
                label: counterValue.toString(),
                height: 38.5,
                paddingHorizontal: '$2',
                backgroundColor: '$primary05',
                borderColor: '$black05',
                borderRadius: '$full',
                borderWidth: '$px',
                marginHorizontal: '$0',
                variant: 'tertiary',
            };
        } else {
            return {
                color: '$grayscale900',
                height: 38.5,
                width: 38.5,
                borderRadius: '$full',
                borderWidth: '$px',
                marginHorizontal: '$0',
                variant: 'tertiary',
            };
        }
    };
    return (
        <IconButton
            icon="NotifyIcon"
            onPress={notificationButtonEvent}
            {...getNotificationButtonStyles()}
        />
    );
};
export default NotificationButton;
