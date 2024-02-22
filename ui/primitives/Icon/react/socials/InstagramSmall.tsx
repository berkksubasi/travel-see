import * as React from 'react';
import Svg, {
    ClipPath,
    Defs,
    G,
    Path,
    SvgProps,
} from 'react-native-svg';

function InstagramSmall(props: SvgProps) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <G
                clipPath="url(#clip0_1182_19837)"
                fill="currentColor"
            >
                <Path d="M11.669 0H4.33A4.336 4.336 0 000 4.331v7.338A4.336 4.336 0 004.331 16h7.338A4.336 4.336 0 0016 11.669V4.331A4.336 4.336 0 0011.669 0zm3.393 11.669a3.397 3.397 0 01-3.393 3.393H4.33a3.397 3.397 0 01-3.393-3.393V4.331A3.397 3.397 0 014.331.938h7.338a3.397 3.397 0 013.393 3.393v7.338z" />
                <Path d="M8 3.625A4.38 4.38 0 003.625 8 4.38 4.38 0 008 12.375 4.38 4.38 0 0012.375 8 4.38 4.38 0 008 3.625zm0 7.812A3.44 3.44 0 014.563 8 3.44 3.44 0 018 4.563 3.44 3.44 0 0111.437 8 3.44 3.44 0 018 11.437zM12.48 2.07a1.294 1.294 0 000 2.586c.713 0 1.293-.58 1.293-1.293s-.58-1.293-1.293-1.293zm0 1.648a.355.355 0 11.001-.71.355.355 0 010 .71z" />
            </G>
            <Defs>
                <ClipPath id="clip0_1182_19837">
                    <Path
                        fill="#fff"
                        d="M0 0H16V16H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default InstagramSmall;
