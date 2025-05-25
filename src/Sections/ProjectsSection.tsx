// src/Sections/ProjectsSection.tsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { projectsData } from "@/data";
import DeliveryApp from "@/Components/Projects/DeliveryApp/DeliveryApp";
import { Logos } from "@/Components/shared/Logos";
import { DesignPatterns } from "@/Components/shared/DesignPatterns";

const projectNames = projectsData.map((project) => project.projectName);

const ProjectsSection: React.FC = () => {
    const [headerAnimation, setHeaderAnimation] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 3020 && !headerAnimation) {
                setHeaderAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => window.removeEventListener("scroll", handleAnimation);
    }, [headerAnimation]);

    return (
        <Container>
            <SideSecDesign />
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-3 left-2/2 w-[100px] h-24 bg-section-projects-primary rounded-full blur-3xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <HeaderContainer>
                {headerAnimation ? (
                    <Header>
                        <SectionHeader headerAnimation={headerAnimation}>
                            PROJECTS
                        </SectionHeader>
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            <div className="absolute top-8 left-1/2 w-48 h-16 bg-section-projects-primary rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </Header>
                ) : (
                    <Header>
                        <SectionHeader headerAnimation={headerAnimation}>
                            PROJECTS
                        </SectionHeader>
                    </Header>
                )}
                <ParalelLine />
                <Context>
                    Projects that I authored but which are either owned by
                    another entity or are currently in active development for a
                    firm will have their source-code blocked. Thank you for your
                    understanding.
                </Context>
                <ContextMobile>
                    Due to ownership reasons, some projects will have their
                    source-code navigation disabled. Thank you for your
                    understanding.
                </ContextMobile>
            </HeaderContainer>
            <NavigationContainer>
                <NavigationMenu>
                    {projectNames.map((project, index) => (
                        <ProjectNames key={index}>{project}</ProjectNames>
                    ))}
                </NavigationMenu>
            </NavigationContainer>
            <DeliveryAppWrapper>
                <div className="absolute flex flex-row w-20 h-20 flex-1 z-10">
                    <SideDesign />
                </div>
                <MainSecDesign />
                <div className="absolute flex flex-col gap-6 w-[100%] h-[350vh] self-center top-[1%] opacity-100">
                    <DeliveryApp />
                </div>
                <FloatingTrigger onClick={handleClick} title="Github Repo">
                    <Logos.github />
                    {clicked === true && (
                        <FloatingMessage visible={visible}>
                            This repo is private
                        </FloatingMessage>
                    )}
                </FloatingTrigger>
            </DeliveryAppWrapper>
        </Container>
    );
};

export default ProjectsSection;

const Container = styled.div`
    ${tw`relative flex flex-col w-[93%] mt-14 h-[400vh] self-center backdrop-hue-rotate-90 hue-rotate-0  items-center`}
    z-index: 20;

    @media (max-width: 1472px) {
        gap: 100px;
    }
    @media (max-width: 760px) {
        gap: 150px;
    }
`;

const SideSecDesign = styled.div`
    filter: hue-rotate(20deg);
    width: 100%;
    height: 10%;
    overflow: hidden;
    z-index: 30;
    background: url(${DesignPatterns.skillsDesign2}) -12.5rem 0rem / contain no-repeat;
    background-size: auto 67vh;
    opacity: 0.8;

    @media (max-width: 1472px) {
        box-shadow: none;
        background: none;
    }
`;

const DeliveryAppWrapper = styled.div`
    ${tw`relative w-full h-[60vh] flex flex-col backdrop-opacity-100`}
    backdrop-filter: blur(100px);
    position: relative;
    z-index: 10;

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 60px;
        z-index: 10;
        pointer-events: none;
    }

    &::before {
        top: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    }

    &::after {
        bottom: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }

    @media (max-width: 1472px) {
        height: 65vh;
    }
    @media (max-width: 1200px) {
        height: 70vh;
    }
    @media (max-width: 1118px) {
        height: 75vh;
    }
    @media (max-width: 990px) {
        height: 80vh;
    }
    @media (max-width: 940px) {
        height: 85vh;
    }
    @media (max-width: 905px) {
        height: 90vh;
    }
    @media (max-width: 890px) {
        height: 96vh;
    }
    @media (max-width: 888px) {
        height: 105vh;
    }
    @media (max-width: 885px) {
        height: 105vh;
    }
    @media (max-width: 860px) {
        height: 105vh;
    }
    @media (max-width: 805px) {
        height: 118vh;
    }
    @media (max-width: 767px) {
        height: 230vh;
    }
    @media (max-width: 644px) {
        height: 235vh;
    }
    @media (max-width: 596px) {
        height: 245vh;
    }
    @media (max-width: 489px) {
        height: 250vh;
    }
    @media (max-width: 476px) {
        height: 250vh;
    }
    @media (max-width: 440px) {
        height: 280vh;
    }
    @media (max-width: 436px) {
        height: 285vh;
    }
    @media (max-width: 421px) {
        height: 245vh;
    }
    @media (max-width: 385px) {
        height: 320vh;
    }
`;

const NavigationContainer = styled.div`
    ${tw`absolute flex flex-row w-full flex-1 top-60`}
`;

const SideDesign = styled.div`
    width: 80px;
    min-width: 50px;
    border: 0.2px solid transparent;
    border-image-source: linear-gradient(
        to bottom,
        rgba(0, 102, 255, 0.6) 0%,
        rgba(100, 59, 206, 1) 100%
    );
    border-image-slice: 1;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const NavigationMenu = styled.div`
    ${tw`flex flex-1 flex-row gap-8 justify-center items-center`}

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 760px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-content: center;
        row-gap: 1rem;
    }

    @media (max-width: 375px) {
        padding: 14px;
        gap: 15px;
    }
    @media (max-width: 480px) {
        margin-bottom: 50px;
    }

    @media (max-width: 320px) {
        padding: 12px;
    }
`;

const ProjectNames = styled.div`
    ${tw`font-semibold tracking-[3px] text-gray-100 text-center w-fit`}
    font-size: 0.9rem;

    @media (max-width: 1024px) {
        font-size: 0.85rem;
    }

    @media (max-width: 760px) {
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }

    @media (max-width: 375px) {
        font-size: 0.65rem;
    }

    @media (max-width: 320px) {
        font-size: 0.6rem;
    }
`;

const MainSecDesign = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    filter: hue-rotate(20deg);
    transform-origin: top;
    border: 0.1px solid transparent;

    box-shadow: -500px 1px 50px rgba(0, 0, 0, 1),
        500px 1px 50px rgba(0, 0, 0, 1);

    border-image-source: linear-gradient(
        to bottom,
        rgba(125, 135, 255, 1) 0%,
        rgba(133, 59, 206, 1) 100%
    );
    border-image-slice: 1;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url(${DesignPatterns.skillsDesign2}) -12.5rem 0 / auto 67vh no-repeat;
        transform-origin: top;
        transform: scaleY(6.2);
        opacity: 0.8;
        z-index: -2;
    }

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: -1;
    }

    @media (max-width: 1472px) {
        box-shadow: none;

        &::before {
            background: none;
        }
    }
`;

const HeaderContainer = styled.div`
    ${tw`absolute w-full flex flex-row flex-1 gap-12 pr-7 items-center justify-between top-[5rem]`}

    @media (max-width: 1055px) {
        align-items: center;
    }
`;

const ParalelLine = styled.hr`
    ${tw` border-t border-[rgba(80, 69, 181, 0.6)] z-10 w-[3%] self-center border-[0.08rem]`};

    @media (max-width: 760px) {
        display: none;
    }
`;

const Header = styled.span`
    ${tw`
    flex flex-1 relative justify-center items-start
    text-sm font-bold z-0 tracking-[8px] text-center
    py-6 pl-4

    border-r border-r-[rgba(133, 59, 206, 1)]
    rounded-tr-[10px] rounded-br-[10px]
    overflow-hidden
  `}

    &::before {
        content: "";
        ${tw`absolute left-0 top-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      transparent 0%,
      transparent 25%,
      rgba(0, 102, 255, 0.6) 40%,
      rgba(0, 102, 255, 0.6) 45%,
      rgba(100, 69, 181, 0.5) 55%,
      rgba(110, 69, 181, 0.6) 60%,
      rgba(129, 69, 181, 0.8) 80%,
      rgba(136, 59, 206, 1) 100%
    );
    }

    &::after {
        content: "";
        ${tw`absolute left-0 bottom-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      transparent 17%,
      transparent 17%,
      rgba(0, 102, 255, 0.6) 40%,
      rgba(0, 102, 255, 0.6) 45%,
       rgba(100, 69, 181, 0.5) 55%,
      rgba(100, 69, 181, 0.6) 60%,
      rgba(129, 69, 181, 0.8) 80%,
      rgba(136, 59, 206, 1) 100%
    );
    }

    @media (max-width: 760px) {
        flex: 1 !important;
    }
`;

const Context = styled.span`
    ${tw`flex flex-1 text-gray-300 text-sm w-[5%] tracking-[2px]`};

    @media (max-width: 1430px) {
        font-size: 12px;
    }
    @media (max-width: 1320px) {
        font-size: 10px;
    }
    @media (max-width: 1200px) {
        display: none;
    }
`;
const ContextMobile = styled.span`
    ${tw`flex flex-1 text-gray-300  w-[5%] tracking-[2px]`};
    display: none;
    font-size: 12px;

    @media (max-width: 1200px) {
        display: flex;
        flex: 1;
        color: rgb(209 213 219);
        width: 5%;
        letter-spacing: 2px;
        font-size: 12px;
    }
    @media (max-width: 910px) {
        font-size: 10px;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;

const SectionHeader = styled.span<{ headerAnimation: boolean }>`
    ${tw`font-bold tracking-[8px] pl-8`}
    opacity: ${({ headerAnimation }) => (headerAnimation ? 1 : 0)};
    transition: opacity 0.8s ease-in-out, color 0.8s ease-in-out,
        text-shadow 0.8s ease-in-out;
    color: ${({ headerAnimation }) =>
        headerAnimation ? "rgb(15, 130, 255)" : "rgba(16, 125, 152, 1)"};
`;

const FloatingTrigger = styled.div`
    ${tw`w-12 h-12 cursor-not-allowed`}
    position: absolute;
    right: 7rem;
    bottom: -27rem;
    background: conic-gradient(
        from 180deg at 50% 50%,
        #00ffff 0%,
        #8a2be2 100%
    );
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    animation: float 3s ease-in-out infinite;
    will-change: transform;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-8px);
        }
    }

    @media (max-width: 1472px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1472px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1345px) {
        bottom: -33rem;
        right: 5rem;
    }
    @media (max-width: 1255px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 1218px) {
        bottom: -36rem;
        right: 5rem;
    }
    @media (max-width: 1200px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 1164px) {
        bottom: -35rem;
        right: 5rem;
    }
    @media (max-width: 1125px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 1118px) {
        bottom: -30rem;
        right: 5rem;
    }
    @media (max-width: 1099px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 1043px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 1035px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 947px) {
        bottom: -32rem;
        right: 5rem;
    }
    @media (max-width: 945px) {
        bottom: -33rem;
        right: 5rem;
    }
    @media (max-width: 940px) {
        bottom: -34rem;
        right: 5rem;
    }
    @media (max-width: 908px) {
        bottom: -31rem;
        right: 5rem;
    }
    @media (max-width: 905px) {
        bottom: -29rem;
        right: 5rem;
    }
    @media (max-width: 902px) {
        bottom: -30rem;
        right: 5rem;
    }
    @media (max-width: 890px) {
        bottom: -28rem;
        right: 5rem;
    }
    @media (max-width: 888px) {
        bottom: -18rem;
        right: 5rem;
    }
    @media (max-width: 860px) {
        bottom: -16rem;
        right: 5rem;
    }
    @media (max-width: 805px) {
        top: 56rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 689px) {
        top: 54.5rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 664px) {
        top: 55rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }
    @media (max-width: 652px) {
        top: 54.5rem;
        right: 2rem;
    }
    @media (max-width: 596px) {
        top: 56.5rem;
        right: 2rem;
    }
    @media (max-width: 586px) {
        top: 54.5rem;
        right: 2rem;
    }
    @media (max-width: 585px) {
        top: 51.5rem;
        right: 2rem;
    }
    @media (max-width: 550px) {
        top: 51rem;
        right: 2rem;
    }
    @media (max-width: 440px) {
        top: 63rem;
        right: 2rem;
    }
    @media (max-width: 436px) {
        top: 63.5rem;
        right: 2rem;
    }
    @media (max-width: 421px) {
        top: 63rem;
        right: 2rem;
    }
    @media (max-width: 411px) {
        top: 62rem;
        right: 2rem;
    }
    @media (max-width: 377px) {
        top: 62rem;
        right: 2rem;
    }
    @media (max-width: 356px) {
        top: 62.5rem;
        right: 2rem;
    }
    @media (max-width: 332px) {
        top: 59.5rem;
        right: 2rem;
    }
`;
const FloatingMessage = styled.div<{ visible: boolean }>`
    ${tw`mt-2 text-sm text-white bg-transparent border-2 border-purple-900 px-4 py-2 w-40 rounded-md shadow-lg`}
    position: absolute;
    right: -3rem;
    bottom: -4.3rem;
    z-index: 10;

    opacity: ${({ visible }) => (visible ? 0.9 : 0)};
    transition: opacity 1.5s ease-in-out;

    @media (max-width: 805px) {
        right: 0;
        bottom: -3rem;
    }
    @media (max-width: 643px) {
        right: 0;
        bottom: -4.3rem;
    }
    @media (max-width: 596px) {
        right: 0;
        bottom: -3rem;
    }
    @media (max-width: 583px) {
        right: 0;
        bottom: -4.3rem;
    }
    @media (max-width: 550px) {
        display: none;
    }
`;
