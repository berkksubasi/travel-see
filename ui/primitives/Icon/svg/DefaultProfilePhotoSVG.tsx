import * as React from 'react';
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Path,
    Stop,
    SvgProps,
} from 'react-native-svg';

function DefaultProfilePhotoSVG(props: SvgProps) {
    return (
        <Svg
            width={124}
            height={124}
            viewBox="0 0 124 124"
            fill="none"
            {...props}
        >
            <Circle
                cx={62}
                cy={62}
                r={62}
                fill="url(#paint0_linear_1411_19293)"
            />
            <Path
                d="M62.004 38c-8 0-14.54 6.54-14.54 14.54 0 8 6.54 14.54 14.54 14.54 8 0 14.54-6.54 14.54-14.54 0-8-6.54-14.54-14.54-14.54z"
                fill="url(#paint1_linear_1411_19293)"
            />
            <Path
                d="M86.956 78.7a13.56 13.56 0 00-1.46-2.667c-2.92-4.317-7.428-7.174-12.508-7.873-.635-.063-1.333.064-1.841.445-2.667 1.968-5.841 2.984-9.143 2.984-3.302 0-6.476-1.016-9.143-2.984-.508-.381-1.206-.572-1.841-.445a17.941 17.941 0 00-12.508 7.873 15.638 15.638 0 00-1.46 2.667c-.19.381-.127.825.063 1.206.508.89 1.143 1.778 1.714 2.54a24.137 24.137 0 002.921 3.302c.889.888 1.905 1.714 2.92 2.54 5.017 3.745 11.048 5.714 17.27 5.714 6.223 0 12.255-1.969 17.27-5.715a27.913 27.913 0 002.921-2.54c1.016-1.015 2.032-2.095 2.92-3.3a22.254 22.254 0 001.715-2.54c.317-.382.38-.826.19-1.207z"
                fill="url(#paint2_linear_1411_19293)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1411_19293"
                    x1={62}
                    y1={0}
                    x2={62}
                    y2={124}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFC735" />
                    <Stop
                        offset={1}
                        stopColor="#FFB800"
                    />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_1411_19293"
                    x1={62.0039}
                    y1={38}
                    x2={62.0039}
                    y2={67.0794}
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
                    id="paint2_linear_1411_19293"
                    x1={62.0001}
                    y1={68.1211}
                    x2={62.0001}
                    y2={94.0016}
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

export default DefaultProfilePhotoSVG;
