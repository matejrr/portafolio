import { WorkProps } from "./Components/specific/WorksSection/Card";
import React from "react";
import { Logos } from "./Components/shared/Logos";
import { images } from "./assets";
import { Demos } from "./Components/shared/Demos";
import { hobbies } from "./Components/shared/hobbies";

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
];

// -----------------------------------------  SKILLS  -----------------------------------------

export const ListOfSkills = [
    {
        section: "Frontend",
        skillSet: [
            "React.js",
            "React Native(*)",
            "TailwindCss",
            "Styled-Comp",
            "HTML5",
            "CSS",
            "Typescript",
            "Javascript",
            "Shadcn",
            "React Paper",
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
        skillSet: ["Figma(*)", "Blender(**)"],
    },
    {
        section: "Backend",
        skillSet: ["Node.js", "Express"],
    },
    {
        section: "Databases",
        skillSet: ["MongoDB", "SQL Server", "PostgreSQL(*)", "MariaDB(*)"],
    },
    {
        section: "DevOps",
        skillSet: ["AWS"],
    },
    {
        section: "Dev Tools",
        skillSet: ["Git", "Android Studio(*)", "VS Code"],
    },
];

// -----------------------------------------  PROJECTS  -----------------------------------------

// -----------------------------------------  PROJECTS => INTERFACES, TYPES, ENUMS  -----------------------------------------

enum FieldsOfWork {
    uiDesign = "UI Design",
    uiImplementation = "UI Development",
    ux = "UX Testing",
    serverside = "Backend Development",
    dataBase = "Creation & Administration of DataBase",
}

interface ProjectImagesProps {
    techStack: React.JSX.Element[];
    image: string;
}

interface SectionNode {
    name: string;
    sections: string[] | Record<string, string[]>;
}

export interface DemoVideoProps {
    width?: string;
}

export type Heading = string[] | Record<string, SectionNode>;

export type VideoRef = React.ForwardRefExoticComponent<
    DemoVideoProps & React.RefAttributes<HTMLVideoElement>
>;

export interface Sections {
    name: string;
    sections: string[];
}

export enum LayOut {
    mobileApp = "mobileApp",
    webPage = "webPage",
}

export interface ProjectProps {
    projectName?: string;
    date?: string;
    finished?: string;
    description?: string;
    explanation?: string;
    detailedExplanation?: string[];
    roles?: string[];
    fieldsOfWork?: FieldsOfWork | FieldsOfWork[];
    GitHubSrc?: string | null;
    techStack?: string[];
    images?: ProjectImagesProps;
    cardIndex?: number;
    extraInfo?: string;
    layOut?: string;
    video?: VideoRef;
    sections?: Sections;
    animationName: string;
}

// -----------------------------------------  PROJECTS => SECTIONS  -----------------------------------------

export const projectSections: { [key: string]: Sections } = {
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
        name: "Web Page",
        sections: ["Artist Page", "Shop", "Landing", "Artist Admin", "..."],
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
        "By coordinating printing, framing, and shipping under one roof, Elite streamlines logistics and cuts lead times.",
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
};

// -----------------------------------------  PROJECTS => PROJECTS  -----------------------------------------

export const projectsData: ProjectProps[] = [
    {
        projectName: "DELIVERY APP",
        date: "Sept 2024 - March 2025",
        finished: "Finished",
        description: "Mobile application",
        explanation:
            "Creation of a mobile application for Android devices with a user-friendly interface and a modern design, used by delivery drivers to track orders from production at each restaurant to the final customer destination",
        GitHubSrc: null,
        roles: ["Frontend Developer / UI Designer"],
        images: ProjectImages.deliveryApp,
        cardIndex: 1,
        detailedExplanation: detailedExplanation.deliveryApp,
        layOut: LayOut.mobileApp,
        video: Demos.deliveryApp,
        sections: projectSections.deliveryApp,
        animationName: "android",
    },
    {
        projectName: "ART PLATFORM",
        date: "Jan 2025 - Present",
        finished: "In Progress",
        description: "Transportation and Art Selling Platform",
        explanation:
            "Development of an Online Gallery that will manage all transportation, selling, printing and framing of artworks in Slovakia",
        GitHubSrc: null,
        roles: ["Fullstack Developer / UI Designer"],
        images: ProjectImages.artPlatform,
        cardIndex: 3,
        detailedExplanation: detailedExplanation.ArtPlatform,
        layOut: LayOut.webPage,
        video: Demos.artPlatform,
        sections: projectSections.artPlatform,
        animationName: "web",
    },
    {
        projectName: "PORTFOLIO",
        date: "April 2025 - May 2025",
        finished: "In Progress",
        description: "Modern portafolio",
        explanation:
            "A single page modern portafolio with a personal design that reflects my works, achievements and goals as a programmer",
        GitHubSrc: "https://github.com/matejrr/portafolio.git",
        roles: ["Frontend Developer / UI Designer"],
        images: ProjectImages.portafolio,
        cardIndex: 2,
        detailedExplanation: detailedExplanation.portfolio,
        layOut: LayOut.webPage,
        video: Demos.portfolio,
        sections: projectSections.portafolio,
        animationName: "web",
    },
];

// -----------------------------------------  ABOUT ME => INTERFACES, ENUMS  -----------------------------------------

export interface TimeLine {
    date: string;
    institution: string;
    course: string;
}

enum LanguageLevel {
    basic = "basic",
    intermediate = "interm",
    advanced = "advanced",
    native = "native",
}
export interface Languages {
    language: string;
    level: LanguageLevel;
}

export interface HobbiesProps {
    name: string;
    image: React.JSX.Element;
}

// -----------------------------------------  ABOUT ME  -----------------------------------------

export const aboutMe = [
    {
        header: "About Me",
        content:
            "I started coding out of curiosity and quickly became obsessed with solving problems through programming. Over the years, I've worked on a wide range of projects — from small websites to a more complex backend systems — and gradually expanded into app development.",
    },
    {
        header: "What I Do",
        content:
            "I specialize in modern web and mobile development using TypeScript. I enjoy creating clean, user-focused digital experiences and love building things from the ground up — especially when it means turning ideas into functional, engaging, and impactful products.",
    },
];

export const TimeLine: TimeLine[] = [
    {
        date: "JUL 2024 - NOV 2024",
        institution: "Formación Tenerife (AFS)",
        course: "Web Development (560h)",
    },
    {
        date: "MARCH 2024 - MAY 2024",
        institution: "Servicio Público Empleo Estatal (SEPE)",
        course: "SQL Server and Relational Databases Course (250h)",
    },
    {
        date: "DEC 2024 - MARCH 2025",
        institution: "Udemy",
        course: "Advanced Course in React (250h)",
    },
    {
        date: "SEP 2018 - MAY 2022",
        institution: "Universidad de La Laguna (ULL)",
        course: "Bachelors Degree in English Philology",
    },
];

export const Languages: Languages[] = [
    {
        language: "Spanish",
        level: LanguageLevel.native,
    },
    {
        language: "English",
        level: LanguageLevel.native,
    },
    {
        language: "Slovak",
        level: LanguageLevel.native,
    },
    {
        language: "German",
        level: LanguageLevel.basic,
    },
];

export const Hobbies: HobbiesProps[] = [
    {
        name: "Programming",
        image: hobbies.programming(),
    },
    {
        name: "Music",
        image: hobbies.guitar(),
    },
    {
        name: "Training",
        image: hobbies.gym(),
    },
    {
        name: "Writing",
        image: hobbies.writing(),
    },
    {
        name: "VideoGames",
        image: hobbies.videoGames(),
    },
];
