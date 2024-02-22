import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function DeleteQr(props: SvgProps) {
    return (
        <Svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            {...props}
        >
            <Path
                d="M4.167 34.5C2.97 34.5 2 35.47 2 36.667v8.666A8.676 8.676 0 0010.667 54h8.666a2.167 2.167 0 100-4.333h-8.666a4.338 4.338 0 01-4.334-4.334v-8.666c0-1.197-.97-2.167-2.166-2.167z"
                fill="#FFD66C"
            />
            <Path
                d="M10.666 50.167h8.667a1.667 1.667 0 110 3.333h-8.666A8.177 8.177 0 012.5 45.333v-8.666a1.667 1.667 0 013.333 0v8.666h0a4.838 4.838 0 004.833 4.834z"
                stroke="#000"
                strokeOpacity={0.04}
            />
            <Path
                d="M45.333 54A8.676 8.676 0 0054 45.333v-8.666a2.167 2.167 0 10-4.333 0v8.666a4.338 4.338 0 01-4.334 4.334h-8.666a2.167 2.167 0 100 4.333h8.666z"
                fill="#FFD66C"
            />
            <Path
                d="M50.167 45.334v0-8.667a1.667 1.667 0 113.333 0v8.666a8.177 8.177 0 01-8.167 8.167h-8.666a1.667 1.667 0 110-3.333h8.666a4.838 4.838 0 004.834-4.833z"
                stroke="#000"
                strokeOpacity={0.04}
            />
            <Path
                d="M51.833 21.5c1.197 0 2.167-.97 2.167-2.167v-8.666A8.677 8.677 0 0045.333 2h-8.666a2.167 2.167 0 100 4.333h8.666a4.338 4.338 0 014.334 4.334v8.666c0 1.197.97 2.167 2.166 2.167z"
                fill="#FFD66C"
            />
            <Path
                d="M45.334 5.833h0-8.667a1.667 1.667 0 110-3.333h8.666a8.177 8.177 0 018.167 8.167v8.666a1.667 1.667 0 11-3.333 0v-8.666 0a4.838 4.838 0 00-4.833-4.834z"
                stroke="#000"
                strokeOpacity={0.04}
            />
            <Path
                d="M6.333 19.333v-8.666a4.338 4.338 0 014.334-4.334h8.666a2.167 2.167 0 100-4.333h-8.666A8.677 8.677 0 002 10.667v8.666a2.167 2.167 0 104.333 0z"
                fill="#FFD66C"
            />
            <Path
                d="M5.833 10.666v8.667a1.667 1.667 0 11-3.333 0v-8.666A8.177 8.177 0 0110.667 2.5h8.666a1.667 1.667 0 110 3.333h-8.666 0a4.838 4.838 0 00-4.834 4.833z"
                stroke="#000"
                strokeOpacity={0.04}
            />
            <Path
                d="M41 45.335A4.338 4.338 0 0045.333 41v-6.5A4.338 4.338 0 0041 30.168h-6.5a4.338 4.338 0 00-4.334 4.333v6.5a4.338 4.338 0 004.334 4.334H41zM34.5 34.5H41l.003 6.5H34.5v-6.5zM41 25.835a4.338 4.338 0 004.333-4.334v-6.5A4.338 4.338 0 0041 10.668h-6.5a4.338 4.338 0 00-4.334 4.333v6.5a4.338 4.338 0 004.334 4.334H41zM34.5 15H41l.003 6.5H34.5v-6.5zM21.5 45.335A4.338 4.338 0 0025.833 41v-6.5a4.338 4.338 0 00-4.333-4.333H15a4.338 4.338 0 00-4.333 4.333v6.5A4.338 4.338 0 0015 45.335h6.5zM15 34.5h6.5l.003 6.5H15v-6.5zM21.5 25.835a4.338 4.338 0 004.333-4.334v-6.5a4.338 4.338 0 00-4.333-4.333H15a4.338 4.338 0 00-4.333 4.333v6.5A4.338 4.338 0 0015 25.835h6.5zM15 15h6.5l.003 6.5H15v-6.5z"
                fill="#FFB800"
            />
        </Svg>
    );
}

export default DeleteQr;