import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function AccountSecondaryIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            {...props}
        >
            <Path
                d="M28.004 0c-8 0-14.54 6.54-14.54 14.54 0 8 6.54 14.54 14.54 14.54 8 0 14.54-6.54 14.54-14.54 0-8-6.54-14.54-14.54-14.54z"
                fill="url(#paint0_linear_131_3921)"
            />
            <Path
                d="M52.956 40.698a13.557 13.557 0 00-1.46-2.667c-2.92-4.317-7.428-7.174-12.508-7.873-.635-.063-1.333.064-1.841.445-2.667 1.968-5.841 2.984-9.143 2.984-3.302 0-6.476-1.016-9.143-2.984-.508-.381-1.206-.572-1.841-.445a17.942 17.942 0 00-12.508 7.873 15.627 15.627 0 00-1.46 2.667c-.19.381-.127.825.063 1.206.508.89 1.143 1.778 1.714 2.54a24.127 24.127 0 002.921 3.302c.889.889 1.905 1.714 2.92 2.54C15.688 54.03 21.719 56 27.94 56c6.223 0 12.254-1.969 17.27-5.715a27.913 27.913 0 002.921-2.54c1.016-1.015 2.032-2.095 2.92-3.3a22.273 22.273 0 001.715-2.54c.317-.382.38-.826.19-1.207z"
                fill="url(#paint1_linear_131_3921)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_131_3921"
                    x1={28.0039}
                    y1={0}
                    x2={28.0039}
                    y2={29.0794}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_131_3921"
                    x1={28}
                    y1={30.1191}
                    x2={28}
                    y2={55.9996}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.8} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default AccountSecondaryIcon
