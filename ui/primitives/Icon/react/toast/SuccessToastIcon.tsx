import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SuccessToastIcon(props: SvgProps) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                fill="#00C247"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.878 14.877L3.22 10.963a1.337 1.337 0 01.064-1.885 1.337 1.337 0 011.885.064l2.82 3.02 4.466-4.173c.04-.037.082-.072.126-.103l2.1-1.962a1.337 1.337 0 011.884.064c.5.536.472 1.383-.064 1.884l-6.413 5.993-.007-.008-2.219 2.073-.984-1.053z"
                fill="#fff"
            />
        </Svg>
    );
}

export default SuccessToastIcon;
