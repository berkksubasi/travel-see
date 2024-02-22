import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function WarningToastIcon(props: SvgProps) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M10 0A9.997 9.997 0 000 10a9.997 9.997 0 0013.827 9.24A9.997 9.997 0 0019.24 6.173 9.996 9.996 0 0010 0zm0 17.203a1.51 1.51 0 11-.007-3.021 1.51 1.51 0 01.007 3.02zm1.829-12.448l-.57 7.693a.21.21 0 01-.21.195H8.951a.21.21 0 01-.21-.195l-.57-7.693a1.832 1.832 0 113.658 0z"
                fill="#FFBE16"
            />
        </Svg>
    );
}

export default WarningToastIcon;
