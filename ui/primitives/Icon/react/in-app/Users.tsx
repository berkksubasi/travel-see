import {Path, Svg, SvgProps} from 'react-native-svg';

const Users = (props: SvgProps) => (
    <Svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        {...props}
    >
        <Path
            d="M10.0001 12.752C10.5687 12.9171 11.1579 13.0006 11.7501 13C12.7023 13.0014 13.6422 12.7843 14.4974 12.3653C14.5227 11.7678 14.3525 11.1783 14.0126 10.6862C13.6727 10.1941 13.1816 9.82624 12.6139 9.63834C12.0461 9.45043 11.4325 9.45275 10.8662 9.64493C10.2998 9.83711 9.81156 10.2087 9.47539 10.7033M10.0001 12.752V12.75C10.0001 12.008 9.80939 11.31 9.47539 10.7033M10.0001 12.752V12.8227C8.71704 13.5954 7.24713 14.0025 5.74939 14C4.19539 14 2.74139 13.57 1.50006 12.8227L1.49939 12.75C1.49888 11.8063 1.81247 10.8893 2.39071 10.1435C2.96896 9.39773 3.77897 8.86562 4.69305 8.63107C5.60713 8.39651 6.57327 8.47285 7.43917 8.84806C8.30506 9.22327 9.02145 9.87599 9.47539 10.7033M8.00006 4.25C8.00006 4.84674 7.763 5.41903 7.34105 5.84099C6.91909 6.26295 6.34679 6.5 5.75006 6.5C5.15332 6.5 4.58102 6.26295 4.15907 5.84099C3.73711 5.41903 3.50006 4.84674 3.50006 4.25C3.50006 3.65326 3.73711 3.08097 4.15907 2.65901C4.58102 2.23705 5.15332 2 5.75006 2C6.34679 2 6.91909 2.23705 7.34105 2.65901C7.763 3.08097 8.00006 3.65326 8.00006 4.25ZM13.5001 5.75C13.5001 6.21413 13.3157 6.65925 12.9875 6.98744C12.6593 7.31563 12.2142 7.5 11.7501 7.5C11.2859 7.5 10.8408 7.31563 10.5126 6.98744C10.1844 6.65925 10.0001 6.21413 10.0001 5.75C10.0001 5.28587 10.1844 4.84075 10.5126 4.51256C10.8408 4.18437 11.2859 4 11.7501 4C12.2142 4 12.6593 4.18437 12.9875 4.51256C13.3157 4.84075 13.5001 5.28587 13.5001 5.75Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </Svg>
);

export default Users;
