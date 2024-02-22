import * as React from 'react';
import Svg, {Defs, G, Path, SvgProps} from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function EmptySVG(props:SvgProps) {
    return (
        <Svg
            width={65}
            height={64}
            viewBox="0 0 65 64"
            fill="none"
            {...props}
        >
            <G filter="url(#filter0_i_1504_2653)">
                <Path
                    d="M56.5 26a2 2 0 00-2 2v8h-8a2.001 2.001 0 00-1.664.89L41.43 42H23.57l-3.4-5.11A2 2 0 0018.5 36h-8V12a2 2 0 012-2h24a2 2 0 000-4h-24a6 6 0 00-6 6v40a6 6 0 006 6h40a6 6 0 006-6V28a2 2 0 00-2-2z"
                    fill="#EEE"
                />
            </G>
            <Path
                d="M54.7 36.2h-8.2a1.8 1.8 0 00-1.498.8v.001l-3.406 5.11-.059.089H23.463l-.06-.09-3.4-5.109L54.7 36.2zm0 0V36m0 .2V36m0 0v-8a1.8 1.8 0 113.6 0v24a5.8 5.8 0 01-5.8 5.8h-40A5.8 5.8 0 016.7 52V12a5.8 5.8 0 015.8-5.8h24a1.8 1.8 0 010 3.6h-24a2.2 2.2 0 00-2.2 2.2v24.2h8.2m36.2-.2l-36.2.2m0 0a1.8 1.8 0 011.503.8l-1.502-.8z"
                stroke="#fff"
                strokeOpacity={0.1}
                strokeWidth={0.4}
            />
            <G filter="url(#filter1_di_1504_2653)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.735 6.139a2 2 0 00-.649.448L50.5 11.173l-4.586-4.586a2 2 0 00-2.828 2.828L47.672 14l-4.586 4.586a2 2 0 002.828 2.828L50.5 16.83l4.586 4.586a2 2 0 002.828-2.828L53.328 14l4.586-4.586a2 2 0 00-2.179-3.276z"
                    fill="#BDBDBD"
                />
            </G>
            <Defs></Defs>
        </Svg>
    );
}

export default EmptySVG;
