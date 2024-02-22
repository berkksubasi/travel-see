import {router} from 'expo-router';
import {ColorTokens, RadiusTokens, SizeTokens} from 'tamagui';
import {IconButton} from '@ui';

interface IProps {
    onClick?: () => void;
    color?: ColorTokens;
    backgroundColor?: ColorTokens;
    borderRadius?: RadiusTokens;
    borderColor?: ColorTokens;
    borderWidth?: SizeTokens;
    marginHorizontal?: SizeTokens;
    customGoBackEvent?: () => void;
}
const ButtonGoBack: React.FC<IProps> = ({
    onClick,
    color,
    backgroundColor,
    borderRadius,
    borderColor,
    borderWidth,
    marginHorizontal,
    customGoBackEvent,
}) => {
    const handleBackClick = () => {
        if (onClick) {
            onClick();
        } else {
            router.back();
        }
    };

    return (
        <IconButton
            icon="ChevronLeftIcon"
            color={color ? color : '$black'}
            backgroundColor={
                backgroundColor ? backgroundColor : '$transparent'
            }
            borderWidth={borderWidth ? borderWidth : '$0'}
            borderRadius={borderRadius ? borderRadius : '$full'}
            borderColor={borderColor ? borderColor : '$transparent'}
            onPress={
                customGoBackEvent
                    ? customGoBackEvent
                    : handleBackClick
            }
            marginHorizontal={marginHorizontal}
            variant="tertiary"
        />
    );
};

export default ButtonGoBack;
