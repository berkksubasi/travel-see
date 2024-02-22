import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BrushIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M9.53 16.12a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.994 15.994 0 003.388-1.62m-5.043-.025c.405-1.191.95-2.331 1.622-3.395m3.42 3.42a15.994 15.994 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597l-5.814 3.877a15.996 15.996 0 00-4.649 4.763 6.776 6.776 0 013.42 3.42"
                stroke="#BA00A2D9"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default BrushIcon;
