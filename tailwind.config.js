/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            scale: {
                102: "1.02",
            },
            height: {
                "7/12": "58.33%",
                "5/12": "41.66%",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                "fade-in": "fadeIn 2.2s ease-in-out forwards",
            },
            gridTemplateColumns: {
                80: "repeat(80, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                50: "repeat(50, minmax(0, 1fr))",
            },
            fontSize: {
                md: "1rem",
                l: "1.5rem",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                section: {
                    home: {
                        primary: "#033228",
                        secondary: "#011511",
                        highlight: "#0e6251",
                    },
                    works: {
                        primary: "rgba(33, 135, 108, 1)",
                        secondary: "rgba(26, 109, 87, 0.9)",
                        tericary: "rgba(3, 10, 8, 0.7)",
                        highlight: "rgba(0, 193, 140, 1)",
                        highlight2: "rgba(0, 220, 160, 1)",
                        texthighlight1: "rgb(130 209 160)",
                        texthighlight2: "rgb(110, 209, 170)",
                        texthighlight3: "rgb(90, 209, 190)",
                        card1: "#011511",
                    },
                    skills: {
                        primary: "rgba(16, 125, 152, 1)",
                        secondary: "rgba(7, 75, 92, 1)",
                        highlight: "rgba(16, 125, 160, 1)",
                    },
                    projects: {
                        primary: "rgba(103, 72, 206, 1)",
                        secondary: "rgba(129, 69, 181, 0.9)",
                        highlight: "rgba(133, 59, 206, 1)",
                    },
                    contact: {
                        primary: "rgba(194, 41, 138, 1)",
                        secondary: "rgba(89, 62, 181, 0.9)",
                        highlight: "rgba(103, 72, 206)",
                    },
                },

                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
