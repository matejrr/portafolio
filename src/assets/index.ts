import checkAnimation from "./Animation-Check.json";
import androidAnimation from "./Animation-Android.json";
import webAnimation from "./Animation-Web.json";
import fingerPrintAnimation from "./Animation-FingerPrint.json";

export const images = {
    react: new URL("./react.svg", import.meta.url).href,
    nodejs: new URL("./nodejs.svg", import.meta.url).href,
    mongodbcon: new URL("./mongodbicon.svg", import.meta.url).href,
    graphQL: new URL("./graphqllogo.svg", import.meta.url).href,
    android: new URL("./Android.svg", import.meta.url).href,
    github: new URL("./github.svg", import.meta.url).href,
    firebase: new URL("./firebase.svg", import.meta.url).href,
    typescript: new URL("./typescript.svg", import.meta.url).href,
    python: new URL("./python.svg", import.meta.url).href,
    microsoftsqlserver: new URL("./microsoftsqlserver.svg", import.meta.url)
        .href,
    html: new URL("./html.svg", import.meta.url).href,
    css: new URL("./CSS.svg", import.meta.url).href,
    tailwind: new URL("./tailwind.svg", import.meta.url).href,
    vitejs: new URL("./vitejs.svg", import.meta.url).href,
    figma: new URL("./figma.svg", import.meta.url).href,
    materialui: new URL("./materialui.svg", import.meta.url).href,
    visualstudiocode: new URL("./visualstudiocode.svg", import.meta.url).href,
    bootstrap: new URL("./bootstrap.svg", import.meta.url).href,
    axios: new URL("./axios.svg", import.meta.url).href,
    deliveryApp: new URL("./DeliveryApp.png", import.meta.url).href,
    onlineGallery: new URL("./online-gallery.png", import.meta.url).href,
    biometricReg: new URL("./Biometric.png", import.meta.url).href,
    portfolio: new URL("./portfolio.png", import.meta.url).href,
    reactNative: new URL("./reactNative.svg", import.meta.url).href,
    php: new URL("./php.svg", import.meta.url).href,
    javascript: new URL("./javascript.svg", import.meta.url).href,
    mariadb: new URL("./mariadb.svg", import.meta.url).href,
    personalPhoto: new URL("./personalPhoto.jpg", import.meta.url).href,
    guitar: new URL("./guitar.svg", import.meta.url).href,
    gym: new URL("./gym.svg", import.meta.url).href,
    writing: new URL("./writing.svg", import.meta.url).href,
    programming: new URL("./programming.svg", import.meta.url).href,
    videoGames: new URL("./videogames.svg", import.meta.url).href,
    linkedin: new URL("./linkedin.svg", import.meta.url).href,
    facebook: new URL("./facebook.svg", import.meta.url).href,
    instagram: new URL("./instagram.svg", import.meta.url).href,
};

export const demos = {
    deliveryApp: new URL("./HOT2EAT.mp4", import.meta.url).href,
    portfolio: new URL("./HOT2EAT.mp4", import.meta.url).href,
    artPlatform: new URL("./HOT2EAT.mp4", import.meta.url).href,
    biomRegistration: new URL("./HOT2EAT.mp4", import.meta.url).href,
};

interface AnimationsProps {
    name: string;
    animation: unknown;
}

export const animations: AnimationsProps[] = [
    {
        name: "check",
        animation: checkAnimation,
    },
    {
        name: "android",
        animation: androidAnimation,
    },
    {
        name: "web",
        animation: webAnimation,
    },
    {
        name: "fingerprint",
        animation: fingerPrintAnimation,
    },
];
