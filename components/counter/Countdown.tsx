import moment from 'moment';
import React, {useEffect, useState} from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {Text} from '@ui';

interface IProps {
    count: number;
    endTrigger?: () => void;
}
const Countdown: React.FC<IProps> = ({count, endTrigger}) => {
    const [counter, setCounter] = useState(count);

    useEffect(() => {
        counter > 0
            ? setTimeout(() => setCounter(counter - 1), 1000)
            : endTrigger && endTrigger();
    }, [counter]);

    return (
        <Text
            {...TEXT_OPTIONS.BodySemiBoldM}
            alignSelf="flex-end"
            color={'$text'}
        >
            ({moment.utc(counter * 1000).format('mm:ss')})
        </Text>
    );
};

export default Countdown;
