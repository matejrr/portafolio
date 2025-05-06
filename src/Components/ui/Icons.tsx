export const Icons = {
    magnifierGlass: () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        );
    },
    goBack: () => {
        return (
            <svg
                style={{
                    color: "white",
                    fill: "white",
                    stroke: "white",
                }}
                height="17px"
                width="17px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.112 31.112"
            >
                <polygon
                    points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97
	29.698,31.112 31.112,29.698 16.97,15.556 "
                />
            </svg>
        );
    },
    navigateBack: (isDarkMode: boolean) => {
        return (
            <svg
                style={{
                    color: isDarkMode ? "white" : "gray",
                    fill: isDarkMode ? "white" : "gray",
                    stroke: isDarkMode ? "white" : "gray",
                }}
                height="17px"
                width="17px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.112 31.112"
            >
                <polygon
                    points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97
	29.698,31.112 31.112,29.698 16.97,15.556 "
                />
            </svg>
        );
    },
    burger: () => {
        return (
            <svg
                style={{
                    width: "25px",
                    height: "auto",
                    color: "white",
                    stroke: "white",
                }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M4 18L20 18"
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></path>{" "}
                    <path
                        d="M4 12L20 12"
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></path>{" "}
                    <path
                        d="M4 6L20 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></path>{" "}
                </g>
            </svg>
        );
    },
};
