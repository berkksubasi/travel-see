import {Path, Svg, SvgProps} from 'react-native-svg';

const WhatsappSmallIcon = (props: SvgProps) => (
    <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        {...props}
    >
        <Path
            d="M8.002 0H7.998C3.587 0 0 3.588 0 8C0 9.75 0.564 11.372 1.523 12.689L0.526 15.661L3.601 14.678C4.866 15.516 6.375 16 8.002 16C12.413 16 16 12.411 16 8C16 3.589 12.413 0 8.002 0ZM12.657 11.297C12.464 11.842 11.698 12.294 11.087 12.426C10.669 12.515 10.123 12.586 8.285 11.824C5.934 10.85 4.42 8.461 4.302 8.306C4.189 8.151 3.352 7.041 3.352 5.893C3.352 4.745 3.935 4.186 4.17 3.946C4.363 3.749 4.682 3.659 4.988 3.659C5.087 3.659 5.176 3.664 5.256 3.668C5.491 3.678 5.609 3.692 5.764 4.063C5.957 4.528 6.427 5.676 6.483 5.794C6.54 5.912 6.597 6.072 6.517 6.227C6.442 6.387 6.376 6.458 6.258 6.594C6.14 6.73 6.028 6.834 5.91 6.98C5.802 7.107 5.68 7.243 5.816 7.478C5.952 7.708 6.422 8.475 7.114 9.091C8.007 9.886 8.731 10.14 8.99 10.248C9.183 10.328 9.413 10.309 9.554 10.159C9.733 9.966 9.954 9.646 10.179 9.331C10.339 9.105 10.541 9.077 10.753 9.157C10.969 9.232 12.112 9.797 12.347 9.914C12.582 10.032 12.737 10.088 12.794 10.187C12.85 10.286 12.85 10.751 12.657 11.297Z"
            fill="currentColor"
        />
    </Svg>
);

export default WhatsappSmallIcon;