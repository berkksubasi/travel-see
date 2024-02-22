import {
    Defs,
    LinearGradient,
    Path,
    Stop,
    Svg,
    SvgProps,
} from 'react-native-svg';

const Instagram = (props: SvgProps) => (
    <Svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        {...props}
    >
        <Path
            d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
            fill="url(#paint0_linear_435_8508)"
        />
        <Path
            d="M13.3372 4.89062H8.66827C6.5856 4.89062 4.89404 6.58218 4.89404 8.66485V13.3337C4.89404 15.4164 6.5856 17.108 8.66827 17.108H13.3372C15.4198 17.108 17.1114 15.4164 17.1114 13.3337V8.66485C17.1114 6.58218 15.4198 4.89062 13.3372 4.89062ZM15.7474 13.3386C15.7474 14.6684 14.6669 15.7537 13.3323 15.7537H8.66338C7.3336 15.7537 6.24827 14.6733 6.24827 13.3386V8.66974C6.24827 7.33996 7.32871 6.25462 8.66338 6.25462H13.3323C14.662 6.25462 15.7474 7.33507 15.7474 8.66974V13.3386Z"
            fill="white"
        />
        <Path
            d="M11.0002 7.87891C9.27933 7.87891 7.87622 9.28202 7.87622 11.0029C7.87622 12.7238 9.27933 14.1269 11.0002 14.1269C12.7211 14.1269 14.1242 12.7238 14.1242 11.0029C14.1242 9.28202 12.7211 7.87891 11.0002 7.87891ZM11.0002 12.8998C9.954 12.8998 9.10333 12.0491 9.10333 11.0029C9.10333 9.95668 9.954 9.10602 11.0002 9.10602C12.0464 9.10602 12.8971 9.95668 12.8971 11.0029C12.8971 12.0491 12.0464 12.8998 11.0002 12.8998Z"
            fill="white"
        />
        <Path
            d="M14.3622 8.21951C14.65 8.17285 14.8455 7.90171 14.7989 7.61389C14.7522 7.32608 14.4811 7.13058 14.1933 7.17724C13.9054 7.2239 13.7099 7.49504 13.7566 7.78285C13.8033 8.07067 14.0744 8.26617 14.3622 8.21951Z"
            fill="white"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_435_8508"
                x1="2.62431"
                y1="19.3757"
                x2="18.2565"
                y2="3.74347"
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor={'#FEE411'} />
                <Stop
                    offset="0.0518459"
                    stopColor={'#FEDB16'}
                />
                <Stop
                    offset="0.1381"
                    stopColor={'#FEC125'}
                />
                <Stop
                    offset="0.2481"
                    stopColor={'#FE983D'}
                />
                <Stop
                    offset="0.3762"
                    stopColor={'#FE5F5E'}
                />
                <Stop
                    offset="0.5"
                    stopColor={'#FE2181'}
                />
                <Stop
                    offset="1"
                    stopColor={'#9000DC'}
                />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default Instagram;
