import { WorkProps } from "./Components/specific/WorksSection/Card";
import React from "react";
import { Logos } from "./Components/shared/Logos";
import { images } from "./assets";

// -----------------------------------------  WORKS  -----------------------------------------

export const WorksInfo: WorkProps[] = [
    {
        firmName: "HOT2EAT",
        position: "FullStack Developer",
        timeSpan: "Sept 2024 - Present",
        responsabilities: "Development of a mobile application",
        explanation:
            "Creation of a mobile application for Android devices with a user-friendly interface and a modern design, used by delivery drivers to track orders from production at each restaurant to the final customer destination",
        technologies: [
            "React Native",
            "NodeJs",
            "Express",
            "Typescript",
            "React Router",
            "GraphQl",
            "Apollo",
            "MongoDB",
            "Mongoose",
            "MapBox",
            "AndroidStudio",
            "GorhomDev",
            "Tailwind",
            "Styled-Components",
        ],
        index: 0,
    },
    {
        firmName: "Hgm Networks Conexión Informatica y Telecomunicaciones",
        position: "FullStack Developer",
        timeSpan: "Oct 2024 - Nov 2024 (Intern)",
        responsabilities: "Development of user authentication systems",
        explanation:
            "Internship contract during which I developed a biometric user registration system, a push notification automation, and an admin application to manage and visualise data stored in a database.",
        technologies: [
            "PHP",
            "Fetch API",
            "Javascript",
            "WebAuthn",
            "MARIADB",
            "HTML5",
            "CSS",
            "BOOTSTRAP",
        ],
        index: 1,
    },
    {
        firmName: "Touch4IT",
        position: "FullStack Developer",
        timeSpan: "Feb 2022 - Sep 2022 (NDA)",
        responsabilities: "Development of web Applications",
        explanation:
            "Creation of reusable components, development of responsive designs, building dynamic UIs & optimisation",
        technologies: [
            "React.js",
            "Typescript",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Tailwind",
            "Styled-Components",
        ],
        index: 2,
    },
];

// -----------------------------------------  SKILLS  -----------------------------------------

export const ListOfSkills = [
    {
        section: "Frontend",
        skillSet: [
            "React.js",
            "React Native(*)",
            "Vue.js(**)",
            "Axios",
            "Fetch API",
            "TailwindCss",
            "Styled-Comp",
            "HTML5",
            "CSS",
            "Typescript",
            "Javascript",
            "Apollo Client(*)",
            "Shadcn",
            "Bootstrap",
            "Material UI",
            "Radix UI",
        ],
    },
    {
        section: "API / Data-layer",
        skillSet: [
            "REST (Axios / Fetch API)",
            "Mongoose",
            "GraphQL(*)",
            "Apollo Studio(*)",
            "Apollo Client(*)",
        ],
    },
    {
        section: "Design && Visualization Tools",
        skillSet: ["Figma(*)", "Blender(**)", "Three.js(**)"],
    },
    {
        section: "Backend",
        skillSet: ["Node.js", "Express", "Python(*)"],
    },
    {
        section: "Databases",
        skillSet: ["SQL Server", "PostgreSQL(*)", "MariaDB(*)", "MongoDB"],
    },
    {
        section: "DevOps",
        skillSet: ["AWS", "Docker(**)", "Kubernetes(**)"],
    },
    {
        section: "Dev Tools",
        skillSet: ["Git", "Android Studio(*)", "VS Code"],
    },
];

// -----------------------------------------  PROJECTS  -----------------------------------------

// -----------------------------------------  PROJECTS => INTERFACES ENUMS SCHEMAS  -----------------------------------------

enum FieldsOfWork {
    uiDesign = "UI Design",
    uiImplementation = "UI Development",
    ux = "UX Testing",
    serverside = "Backend Development",
    dataBase = "Creation & Administration of DataBase",
}

export interface Achievements {
    heading: string;
    content: string;
}

interface ProjectImagesProps {
    techStack: React.JSX.Element[];
    image: string;
}

interface SectionNode {
    name: string;
    sections: string[] | Record<string, string[]>;
}

export type Heading = string[] | Record<string, SectionNode>;

export interface BaseProps {
    projectName?: string;
    date?: string;
    finished?: boolean;
    description?: string;
    explanation?: string;
    detailExplanation?: Achievements[];
    roles?: string[];
    fieldsOfWork?: FieldsOfWork | FieldsOfWork[];
    GitHubSrc?: string | null;
    techStack?: string[];
    images?: ProjectImagesProps;
    cardIndex?: number;
    extraInfo?: string;
}

export type ProjectProps = BaseProps;

// -----------------------------------------  PROJECTS => SECTIONS  -----------------------------------------

export const projectSections = {
    deliveryApp: {
        name: "Delivery App",
        sections: [
            "P. Info.",
            "History",
            "Orders",
            "Details",
            "Product",
            "Pick up",
        ],
    },
    portafolio: {
        name: "Portafolio",
        sections: [
            "Welcome",
            "Works",
            "Skills",
            "Projects",
            "About Me",
            "Contact",
        ],
    },
    artPlatform: {
        webPage: {
            name: "Web Page",
            sections: [
                "Landing Page",
                "Why Elite?",
                "First Artist Contact",
                "...",
            ],
        },
        adminPage: {
            name: "Artist Admin Page",
            sections: {
                myContent: [
                    "Paintings",
                    "Uploading",
                    "Editing",
                    "Deleting",
                    "...",
                ],
            },
        },
        designPage: {
            name: "Design Page 1",
            sections: [
                "HomePage",
                "Exhibitions",
                "Shop",
                "Paintings",
                "Prints",
                "Artwork Details",
                "Dark Mode",
                "...",
            ],
        },
    },
    biometricReg: {
        biometricReg: {
            name: "Biometric Registration",
            sections: ["Fingerprint Registration", "Saving Data", "..."],
        },
        PushNotifications: {
            name: "Push Notification",
            sections: [
                "Pop Up Notification",
                "Creating User's Info..",
                "Saving Data",
                "...",
            ],
        },
        AdminPage: {
            name: "Admin Page",
            sections: ["filter", "update", "delete", "..."],
        },
    },
};
const detailedExplanation = {
    deliveryApp: [
        "This delivery app gives drivers a single, intuitive dashboard for profiles, order history, and live assignments complete with maps and notes.",
        "The UI enforces a clear design, where next-step buttons remain locked until the current task is complete, and confirmation prompts ensure no step can be accidentally skipped.",
        "Every step, from pickup to code-verified delivery, updates merchant and admin dashboards and triggers customer notifications in real time.",
        "Customers enjoy stress-free tracking, on-time alerts, and even outfit preferences, all through an end-to-end integration.",
    ],
    ArtPlatform: [
        "Elite is being built as an all-in-one art fulfillment platform that handles outreach, sales, printing, framing, and delivery, so artists can focus solely on creating.",
        "Visitors browse or search artists, preview artworks in simulated rooms, tweak framing and lighting, and order prints or commissions seamlessly on web (with mobile apps coming soon).",
        "A tiered subscription unlocks everything from basic listings to advanced gallery customization and promotion, while each artist's dashboard centralizes uploads, layouts, sales tracking, and commission management.",
        "By coordinating printing, framing, and shipping under one roof, Elite streamlines logistics, cuts lead times, and scales with creators—eliminating operational headaches.",
    ],

    biometricReg: [
        "Employees enroll via secure fingerprint or facial scans that are encrypted and stored immediately.",
        "Attendance is updated in real time with every biometric clock-in/out, eliminating buddy-punching and ensuring accuracy.",
        "A unified admin dashboard lets HR browse, filter, edit employee details, reset templates, assign roles, and export reports with ease.",
    ],

    portfolio: [
        "A single-page portfolio introduces me, my journey, and what fuels my passion for crafting web and mobile experiences.",
        "A consistent, minimalist design with thoughtful micro-interactions highlights my attention to detail and creative flair.",
        "Key projects are showcased with live demos, repo links, and concise case studies that outline my role, tech stack, and impact in the last two years.",
    ],
};
// -----------------------------------------  PROJECTS => TECHSTACK LOGOS & IMAGE  -----------------------------------------

type ProjectImages = Record<string, ProjectImagesProps>;

const ProjectImages: ProjectImages = {
    deliveryApp: {
        techStack: [
            Logos.reactNative(),
            Logos.nodejs(),
            Logos.graphql(),
            Logos.mongodb(),
            Logos.androidStudio(),
            Logos.typescript(),
            Logos.tailwind(),
        ],
        image: images.deliveryApp,
    },
    portafolio: {
        techStack: [
            Logos.react(),
            Logos.typescript(),
            Logos.tailwind(),
            Logos.html(),
            Logos.css(),
        ],
        image: images.portfolio,
    },
    artPlatform: {
        techStack: [
            Logos.react(),
            Logos.nodejs(),
            Logos.mongodb(),
            Logos.typescript(),
            Logos.tailwind(),
            Logos.html(),
            Logos.css(),
        ],
        image: images.onlineGallery,
    },
    biometricReg: {
        techStack: [
            Logos.php(),
            Logos.javascript(),
            Logos.mariadb(),
            Logos.html(),
            Logos.css(),
            Logos.bootstrap(),
        ],
        image: images.biometricReg,
    },
};

// -----------------------------------------  PROJECTS => PROJECTS  -----------------------------------------

export const projectsData = [
    {
        projectName: "Delivery App",
        date: "Sept 2024 - March 2025",
        finished: "Finished",
        description: "Development of a mobile application",
        explanation:
            "Creation of a mobile application for Android devices with a user-friendly interface and a modern design, used by delivery drivers to track orders from production at each restaurant to the final customer destination",
        GitHubSrc: null,
        roles: ["Frontend Developer / UI Designer"],
        images: ProjectImages.deliveryApp,
        cardIndex: 1,
        detailedExplanation: detailedExplanation.deliveryApp,
    },
    {
        projectName: "Portfolio",
        date: "April 2025 - May 2025",
        finished: "Finished",
        description: "Development of a modern portafolio",
        explanation:
            "A single page modern portafolio with a personal design that reflects my works, achievements and goals as a programmer",
        GitHubSrc: "https://github.com/matejrr/portafolio.git",
        roles: ["Frontend Developer / UI Designer"],
        images: ProjectImages.portafolio,
        cardIndex: 2,
        detailedExplanation: detailedExplanation.portfolio,
    },
    {
        projectName: "Art Platform",
        date: "Jan 2025 - Present",
        finished: "In Progress",
        description: "Online Gallery to sell Artworks",
        explanation:
            "Development of an Online Gallery that will manage all transportation, selling, printing and framing of artworks in the Canary Islands",
        GitHubSrc: null,
        roles: ["Fullstack Developer / UI Designer"],
        images: ProjectImages.artPlatform,
        cardIndex: 3,
        detailedExplanation: detailedExplanation.ArtPlatform,
    },
    {
        projectName: "Biometric Registration",
        date: "Oct 2024 - Nov 2024",
        finished: "Finished",
        description: "Development of user authentication systems",
        explanation:
            "Development of a biometric user registration system, a push notification automation, and an admin application to manage and visualise data stored in a database",
        GitHubSrc: null,
        roles: ["Fullstack Developer"],
        images: ProjectImages.biometricReg,
        cardIndex: 4,
        detailedExplanation: detailedExplanation.biometricReg,
    },
];
