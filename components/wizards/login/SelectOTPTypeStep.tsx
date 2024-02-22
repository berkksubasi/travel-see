import {map} from 'lodash';
import React from 'react';
import {ColorTokens} from 'tamagui';
import {YStack} from '@ui';
import type {IKeyOfIcons} from '@ui';
import {RatioButton} from '../../buttons';

interface IOption {
    name: 'email' | 'phone';
    icon: IKeyOfIcons;
    iconColor: ColorTokens;
    title: string;
    description: string;
}

const optionsMock: IOption[] = [
    {
        name: 'email',
        icon: 'MailIcon',
        iconColor: '$primary',
        title: 'E-posta',
        description: 'E-postanız üzerinde kod gönderilecek.',
    },
    {
        name: 'phone',
        icon: 'PhoneIcon',
        iconColor: '$primary',
        title: 'Telefon',
        description: 'Telefonunuz üzerinde kod gönderilecek.',
    },
];

interface IProps {
    type: 'email' | 'phone' | null;
    setType: (type: 'email' | 'phone' | null) => void;
}

const SelectOTPTypeStep: React.FC<IProps> = ({type, setType}) => {
    return (
        <YStack gap={'$4'}>
            {map(optionsMock, (option, index) => (
                <RatioButton
                    icon={option.icon}
                    iconColor={option.iconColor}
                    isSelected={type === option.name}
                    handleClick={() => setType(option.name)}
                    key={index}
                    value={option.name}
                    title={option.title}
                    description={option.description}
                />
            ))}
        </YStack>
    );
};

export default SelectOTPTypeStep;
