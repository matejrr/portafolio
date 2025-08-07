import React from "react";

type IconProps = {
    onClick?: React.MouseEventHandler<SVGSVGElement>;
};

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
    goBack: ({ onClick }: IconProps) => {
        return (
            <svg
                onClick={onClick}
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
    burger: ({ onClick }: IconProps) => {
        return (
            <svg
                onClick={onClick}
                style={{
                    width: "25px",
                    height: "auto",
                    color: "white",
                    stroke: "white",
                    cursor: "pointer",
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
    zoomIn: () => {
        return (
            <svg
                style={{
                    color: "rgb(34, 211, 238)",
                    fill: "rgb(34, 211, 238)",
                    stroke: "rgb(34, 211, 238)",
                }}
                height="17px"
                width="17px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
            >
                <polygon
                    points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5
	                        455,242.5 "
                />
            </svg>
        );
    },
    zoomOut: (zoomLevel: number) => {
        return (
            <svg
                style={{
                    color:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                    fill:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                    stroke:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                }}
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.00001 11.25L18 11.25L18 12.75L6.00001 12.75L6.00001 11.25Z"
                />
            </svg>
        );
    },
    reSet: (zoomLevel: number) => {
        return (
            <svg
                style={{
                    color:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                    fill:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                    stroke:
                        zoomLevel <= 1
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgb(34, 211, 238)",
                }}
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                cursor="pointer"
            >
                <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
            </svg>
        );
    },
};
