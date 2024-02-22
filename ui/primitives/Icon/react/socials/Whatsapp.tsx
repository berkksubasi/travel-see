import Svg, { Path } from "react-native-svg"

function WhatsappIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            {...props}
        >
            <Path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11z"
                fill="#29A71A"
            />
            <Path
                d="M15.85 6.15a6.821 6.821 0 00-10.928 7.892l-.724 3.514a.26.26 0 00.042.204.264.264 0 00.28.108l3.443-.816A6.82 6.82 0 0015.85 6.151zm-1.074 8.57a5.342 5.342 0 01-6.153 1l-.48-.237-2.11.5.005-.026.438-2.125-.235-.464a5.34 5.34 0 118.535 1.353z"
                fill="#fff"
            />
            <Path
                d="M14.588 13.162c-.259.407-.667.906-1.181 1.03-.9.217-2.281.008-4-1.595l-.021-.019c-1.512-1.401-1.904-2.567-1.81-3.492.053-.525.49-1 .86-1.31a.491.491 0 01.768.176l.557 1.25a.489.489 0 01-.062.5l-.28.365a.484.484 0 00-.045.54c.158.276.535.683.954 1.059.47.425.991.813 1.321.946a.478.478 0 00.524-.11l.326-.329a.5.5 0 01.488-.125l1.321.375a.5.5 0 01.28.739z"
                fill="#fff"
            />
        </Svg>
    )
}

export default WhatsappIcon
