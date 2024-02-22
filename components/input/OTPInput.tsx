//React
import {map} from 'lodash';
import React, {useRef, useState} from 'react';
//UI Lib.
import {Input, Stack, XStack} from '@ui';

interface IProps {
    code: string;
    maximumLength: number;
    setCode: (code: string) => void;
}

const OTPInput: React.FC<IProps> = ({
    code,
    maximumLength,
    setCode,
}) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    interface IBoxProps {
        _: any;
        index: number;
    }

    const boxDigit: React.FC<IBoxProps> = (_, index) => {
        const emptyInput = '';
        const digit = code[index] || emptyInput;

        const isCurrentValue = index === code.length;
        const isLastValue = index === maximumLength - 1;
        const isCodeComplete = code.length === maximumLength;

        const isValueFocused =
            isCurrentValue || (isLastValue && isCodeComplete);

        return (
            <Stack width={'$16'}>
                <Input
                    textAlign={'center'}
                    height={'$16'}
                    borderRadius={'$4'}
                    onPress={handleOnPress}
                    borderWidth={'$px'}
                    // @todo Girilen kod yanlışsa kırmızı olacak
                    borderColor={
                        isInputBoxFocused && isValueFocused
                            ? '$primary'
                            : '$grayscale400'
                    }
                    key={index}
                >
                    {digit}
                </Input>
            </Stack>
        );
    };

    const handleOnPress = () => {
        setIsInputBoxFocused(true);

        if (inputRef?.current) {
            (inputRef.current as any).focus();
        }
    };

    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    return (
        <Stack width={'100%'}>
            <XStack
                gap="$5"
                justifyContent="center"
            >
                {map(boxArray, boxDigit)}
            </XStack>

            <Input
                display="none"
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
            />
        </Stack>
    );
};

export default OTPInput;
