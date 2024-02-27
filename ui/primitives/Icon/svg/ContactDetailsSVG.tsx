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

function ContactDetailsSVG(props: SvgProps) {
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
                fill="url(#paint0_linear_1111_18102)"
            />
            <G filter="url(#filter0_dd_1111_18102)">
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
            <G filter="url(#filter1_dd_1111_18102)">
                <Rect
                    x={6}
                    y={13.0762}
                    width={148}
                    height={49.2308}
                    rx={16}
                    fill="#fff"
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
                    x={55}
                    y={34}
                    width={49}
                    height={6}
                    rx={3}
                    fill="#FF665E50"
                />
                <Rect
                    x={55}
                    y={45}
                    width={56}
                    height={6}
                    rx={3}
                    fill="#FF665E25"
                />
                <Rect
                    x={55}
                    y={24}
                    width={55}
                    height={6}
                    rx={3}
                    fill="#FF665E"
                />
                <Rect
                    x={55.5}
                    y={24.5}
                    width={54}
                    height={5}
                    rx={2.5}
                    stroke="#fff"
                    strokeOpacity={0.31}
                />
                <Circle
                    cx={32}
                    cy={38}
                    r={14}
                    fill="#FAFAFA"
                />
                <G filter="url(#filter2_dd_1111_18102)">
                    <Path
                        d="M39.674 36.9a7.752 7.752 0 10-15.36 2.107 7.807 7.807 0 006.654 6.676c.345.045.693.068 1.04.068a7.676 7.676 0 003.986-1.109.75.75 0 00-.774-1.285 6.249 6.249 0 112.687-3.31 1.083 1.083 0 01-1.04.703 1.119 1.119 0 01-1.117-1.118V35a.75.75 0 10-1.5 0v.007a3.749 3.749 0 00-5.326 5.15 3.75 3.75 0 005.596.611 2.612 2.612 0 002.347 1.482 2.584 2.584 0 002.457-1.712 7.768 7.768 0 00.35-3.638zM32 40.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                        fill="#FF665E50"
                    />
                </G>
                <G filter="url(#filter3_dd_1111_18102)">
                    <Path
                        d="M138.49 28.44l-15.195 6.257a1.58 1.58 0 00-.978 1.309 1.582 1.582 0 00.699 1.477l4.945 3.297a.9.9 0 01.259.26l3.297 4.944a1.59 1.59 0 001.477.7 1.58 1.58 0 001.309-.978l6.258-15.196a1.594 1.594 0 00-2.071-2.07z"
                        fill="#FF665E50"
                    />
                    <Path
                        d="M123.484 35.16h.001l15.192-6.257h.002a1.091 1.091 0 011.418 1.418v.002l-6.256 15.192-.001.002a1.08 1.08 0 01-.896.669 1.082 1.082 0 01-1.01-.478l-.001-.001-3.294-4.94-.002-.003a1.39 1.39 0 00-.401-.401l-4.943-3.296h0a1.084 1.084 0 01-.268-1.552l-.401-.3.401.3c.117-.158.276-.28.459-.355z"
                        stroke="#fff"
                        strokeOpacity={0.46}
                    />
                </G>
                <Path
                    d="M128.454 43.642l-2.374 2.374a.337.337 0 00-.071.358.334.334 0 00.303.203.327.327 0 00.232-.097l2.374-2.374a.326.326 0 00-.004-.46.33.33 0 00-.46-.004zM124.894 40.082l-2.374 2.374a.326.326 0 000 .464.327.327 0 00.464 0l2.374-2.374a.33.33 0 00-.234-.556.324.324 0 00-.23.092zM127.138 42.327a.33.33 0 00-.234-.555.328.328 0 00-.23.091l-3.561 3.56a.338.338 0 00-.071.358.334.334 0 00.303.203.331.331 0 00.232-.096l3.561-3.561z"
                    fill="#FF665E"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_1111_18102"
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

export default ContactDetailsSVG;
