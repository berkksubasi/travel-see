import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function ErrorToastIcon(props: SvgProps) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 0c5.522 0 10 4.478 10 10s-4.478 10-10 10S0 15.522 0 10 4.478 0 10 0zM4.946 13.62L8.566 10l-3.62-3.62a.534.534 0 010-.754l.68-.68a.534.534 0 01.754 0L10 8.566l3.62-3.62a.534.534 0 01.754 0l.68.68a.534.534 0 010 .754L11.434 10l3.62 3.62a.534.534 0 010 .754l-.68.68a.534.534 0 01-.754 0L10 11.434l-3.62 3.62a.534.534 0 01-.754 0l-.68-.68a.534.534 0 010-.754z"
                fill="#FF4141"
            />
        </Svg>
    );
}

export default ErrorToastIcon;
