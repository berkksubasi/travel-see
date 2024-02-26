import {G, Path, Svg, SvgProps} from 'react-native-svg';

function Secure(props: SvgProps) {
    return (
        <Svg
            fill="currentColor"
            height="21px"
            width="21px"
            viewBox="0 0 352.644 352.644"
            {...props}
        >
            <G
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
            />
            <G
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <G id="SVGRepo_iconCarrier">
                <Path d="M324.478,51.943L177.986,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715 c0,52.278,13.834,112.711,37.956,165.805c19.566,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555 s1.571-0.185,2.29-0.555c56.496-29.106,91.68-86.556,111.247-129.625c24.121-53.094,37.955-113.527,37.955-165.805 C327.815,54.538,326.477,52.648,324.478,51.943z" />
            </G>
        </Svg>
    );
}

export default Secure;
