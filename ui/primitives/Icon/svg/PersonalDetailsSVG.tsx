import Svg, {
    Circle,
    Defs,
    Ellipse,
    G,
    LinearGradient,
    Path,
    Rect,
    Stop,
    SvgProps,
} from 'react-native-svg';

function PersonalDetailsSVG(props: SvgProps) {
    return (
        <Svg
            width={160}
            height={80}
            viewBox="0 0 160 80"
            fill="none"
            {...props}
        >
            <Ellipse
                cx={81.1503}
                cy={40}
                rx={39.8756}
                ry={40}
                fill="url(#paint0_linear_1108_18085)"
            />
            <G filter="url(#filter0_dd_1108_18085)">
                <Rect
                    x={31.3057}
                    y={40}
                    width={97.3886}
                    height={29.2308}
                    rx={14.6154}
                    fill="#F5F5F5"
                />
                <Rect
                    x={31.8057}
                    y={40.5}
                    width={96.3886}
                    height={28.2308}
                    rx={14.1154}
                    stroke="#fff"
                    strokeOpacity={0.35}
                />
            </G>
            <G filter="url(#filter1_dd_1108_18085)">
                <Rect
                    x={6}
                    y={13.0762}
                    width={148}
                    height={49.2308}
                    rx={16}
                    fill="#ffffff"
                />
                <Rect
                    x={6.5}
                    y={13.5762}
                    width={147}
                    height={48.2308}
                    rx={15.5}
                    stroke="#000"
                    strokeOpacity={0.03}
                />
                <Rect
                    x={55.0778}
                    y={29.2305}
                    width={61.3471}
                    height={6.15385}
                    rx={3.07692}
                    fill="#FF665E"
                />
                <Rect
                    x={55.0778}
                    y={40}
                    width={85.1192}
                    height={6.15385}
                    rx={3.07692}
                    fill="#FF665E50"
                />
                <Circle
                    cx={32}
                    cy={38}
                    r={14}
                    fill="#FAFAFA"
                />
                <G
                    filter="url(#filter2_dd_1108_18085)"
                    fill="#FF665E"
                >
                    <Path d="M32.001 30a4.165 4.165 0 00-4.154 4.154A4.165 4.165 0 0032 38.308a4.165 4.165 0 004.154-4.154A4.165 4.165 0 0032.001 30zM39.13 41.628a3.868 3.868 0 00-.417-.762c-.834-1.233-2.122-2.05-3.574-2.25a.764.764 0 00-.526.128 4.37 4.37 0 01-2.612.852 4.37 4.37 0 01-2.612-.852.68.68 0 00-.526-.127 5.126 5.126 0 00-3.574 2.25 4.462 4.462 0 00-.417.761.386.386 0 00.018.345c.145.254.327.508.49.725.254.345.526.653.834.944.254.254.545.49.835.725A8.219 8.219 0 0031.983 46a8.22 8.22 0 004.934-1.633c.29-.217.58-.471.835-.725.29-.29.58-.599.834-.944.182-.236.345-.471.49-.725.09-.11.109-.236.054-.345z" />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1108_18085"
                    x1={81.1503}
                    y1={0}
                    x2={81.1503}
                    y2={80}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FF665E" />
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

export default PersonalDetailsSVG;
