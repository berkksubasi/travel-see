import {Path, Svg, SvgProps} from 'react-native-svg';

const Send = (props: SvgProps) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M6.00004 12L3.26904 3.12598C9.80185 5.02565 15.9624 8.02677 21.485 12C15.9628 15.9738 9.80262 18.9755 3.27004 20.876L6.00004 12ZM6.00004 12H13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Send;
