import * as React from 'react';
import Svg, {
    Defs,
    LinearGradient,
    Path,
    RadialGradient,
    Stop,
    SvgProps,
} from 'react-native-svg';

function SuccessSVG(props: SvgProps) {
    return (
        <Svg
            width={136}
            height={124}
            viewBox="0 0 136 124"
            fill="none"
            {...props}
        >
            <Path
                d="M118.816 62c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56z"
                fill="url(#paint0_radial_191_11463)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M124.816 62c0 34.242-27.758 62-62 62-34.242 0-62-27.758-62-62 0-34.242 27.758-62 62-62 34.242 0 62 27.758 62 62zm-62 56c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56z"
                fill="#F8B401"
            />
            <Path
                d="M117.136 62c.928 0 1.683.753 1.655 1.68a56.007 56.007 0 01-36.08 50.667A56 56 0 1167.736 6.217c.924.081 1.582.92 1.473 1.84-.109.922-.945 1.577-1.869 1.498a52.64 52.64 0 1048.09 54.125c.03-.927.779-1.68 1.707-1.68z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M92.823 35.117a4.839 4.839 0 011.544 6.666l-32.832 45.19a2.765 2.765 0 01-4.095.423L37.47 69.278a4.838 4.838 0 116.502-7.167l11.43 10.37a2.765 2.765 0 004.066-.385l26.688-35.435a4.839 4.839 0 016.667-1.544z"
                fill="url(#paint1_linear_191_11463)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95.513 42.556l-32.86 45.23a4.147 4.147 0 01-6.142.634l-19.97-18.118a6.221 6.221 0 018.36-9.215l11.43 10.37a1.383 1.383 0 002.033-.192l26.654-35.39a6.221 6.221 0 0110.521 6.64l-.026.041zm-9.357-5.895L59.468 72.096a2.765 2.765 0 01-4.066.385l-11.43-10.37a4.839 4.839 0 00-6.502 7.167l19.97 18.118a2.765 2.765 0 004.095-.422l32.832-45.19a4.839 4.839 0 00-8.21-5.123z"
                fill="url(#paint2_linear_191_11463)"
            />
            <Defs>
                <RadialGradient
                    id="paint0_radial_191_11463"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 56 -56 0 62.816 62)"
                >
                    <Stop stopColor="#FFCB43" />
                    <Stop
                        offset={1}
                        stopColor="#FFC52C"
                    />
                </RadialGradient>
                <LinearGradient
                    id="paint1_linear_191_11463"
                    x1={65.4916}
                    y1={33}
                    x2={65.4916}
                    y2={89.4961}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop
                        offset={1}
                        stopColor="#fff"
                        stopOpacity={0.8}
                    />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_191_11463"
                    x1={65.4916}
                    y1={33}
                    x2={65.4916}
                    y2={89.4961}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop
                        offset={1}
                        stopColor="#fff"
                        stopOpacity={0.8}
                    />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

export default SuccessSVG;
