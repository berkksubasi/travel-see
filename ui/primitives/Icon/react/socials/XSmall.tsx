import {
    ClipPath,
    Defs,
    G,
    Path,
    Rect,
    Svg,
    SvgProps,
} from 'react-native-svg';

const XSmallIcon = (props: SvgProps) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_937_19952)">
            <Path
                d="M9.077 7.058l5.005 7.284-4.904-7.015h0l-.62-.886h0L4.583.753 4.432.54H1.15L1.122.5h3.449l3.893 5.666.368.535h0l.245.357zm-2.38 1.554L4.49 5.402 6.57 8.375h0l.529.756v0l.09.13 4.218 6.033.144.206h-.12L7.31 9.505l-.368-.535-.423.492L1.324 15.5h-.062l5.401-6.278.252-.292-.219-.318zM14.227.5L9.26 6.275h-.062l.057-.066L14.166.5h.062z"
                fill="currentColor"
                stroke="currentColor"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_937_19952">
                <Path
                    fill="currentColor"
                    d="M0 0H16V16H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default XSmallIcon;
