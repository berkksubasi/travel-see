import Svg, {Path, SvgProps} from 'react-native-svg';

function ScanRadius(props: SvgProps) {
    return (
        <Svg
            width="354"
            height="354"
            viewBox="0 0 354 354"
            fill="none"
            {...props}
        >
            <Path
                d="M2 267.154V316.003C2 335.885 18.1177 352.003 38 352.003H86.8488"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <Path
                d="M2 86.8496V38.0008C2 18.1185 18.1177 2.0008 38 2.0008H86.8488"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <Path
                d="M352 267.154V316.003C352 335.885 335.882 352.003 316 352.003H267.151"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <Path
                d="M352 86.8496V38.0008C352 18.1185 335.882 2.0008 316 2.0008H267.151"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </Svg>
    );
}

export default ScanRadius;
