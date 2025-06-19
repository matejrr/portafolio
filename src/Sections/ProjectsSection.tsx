import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { projectsData } from "@/data";
import { DesignPatterns } from "@/Components/shared/DesignPatterns";
import { ProjectWrapper } from "@/Components/Projects/ProjectWrapper";

const projectNames = projectsData.map((project) => project.projectName);

export const ProjectsSection: React.FC = () => {
    const [headerAnimation, setHeaderAnimation] = useState(false);

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
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-3 left-2/2 w-[100px] h-24 bg-section-projects-primary rounded-full blur-3xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <HeaderContainer>
                <div className="flex flex-row gap-12 mt-28">
                    {headerAnimation ? (
                        <Header>
                            <SectionHeader $headerAnimation={headerAnimation}>
                                PROJECTS
                            </SectionHeader>
                            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <div className="absolute top-8 left-1/2 w-48 h-16 bg-section-projects-primary rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </Header>
                    ) : (
                        <Header>
                            <SectionHeader $headerAnimation={headerAnimation}>
                                PROJECTS
                            </SectionHeader>
                        </Header>
                    )}
                    <ParalelLine />
                    <Context>
                        Projects that I authored but which are either owned by
                        another entity or are currently in active development
                        for a firm will have their source-code blocked. Thank
                        you for your understanding.
                    </Context>
                    <ContextMobile>
                        Due to ownership reasons, some projects will have their
                        source-code navigation disabled. Thank you for your
                        understanding.
                    </ContextMobile>
                </div>
                <NavigationContainer>
                    <NavigationMenu>
                        {projectNames.map((project, index) => (
                            <ProjectName
                                onClick={() => {
                                    if (project) {
                                        const section = document.getElementById(
                                            project
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")
                                        );
                                        if (section) {
                                            section.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }
                                }}
                                key={index}
                            >
                                {project}
                            </ProjectName>
                        ))}
                    </NavigationMenu>
                </NavigationContainer>
            </HeaderContainer>

            <Projects>
                {projectsData.map((project, index) => (
                    <div
                        className="w-full h-full"
                        id={project?.projectName
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}
                        key={index}
                    >
                        <ProjectWrapper
                            key={index}
                            projectIndex={index}
                            data={project}
                        />
                    </div>
                ))}
            </Projects>
        </Container>
    );
};

const Container = styled.div`
    ${tw`relative flex flex-col w-[93%] mt-14 h-auto self-center backdrop-hue-rotate-90 hue-rotate-0 items-center`}
    z-index: 20;

    @media (max-width: 1472px) {
        gap: 100px;
    }
    @media (max-width: 760px) {
        gap: 150px;
    }
`;

const NavigationContainer = styled.div`
    ${tw`relative flex flex-row w-full flex-1 mb-7 justify-center`}
`;

const NavigationMenu = styled.div`
    ${tw`flex flex-1 flex-row gap-8 justify-center items-center z-20`}

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 760px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-content: center;
        row-gap: 1rem;
        margin-top: 40px;
    }

    @media (max-width: 375px) {
        gap: 15px;
    }
    @media (max-width: 320px) {
        padding: 12px;
    }
`;

const ProjectName = styled.div`
    ${tw`font-semibold tracking-[3px] text-white text-center w-fit cursor-pointer `}

    font-size: 0.85rem;

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

const HeaderContainer = styled.div`
    ${tw`relative w-full flex flex-col gap-4 flex-wrap pr-7 items-center justify-between`}
    z-index: 10;
    filter: hue-rotate(20deg);
    width: 100%;
    height: 54vh;
    overflow: hidden;
    z-index: 30;
    background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0) 25%
        ),
        url(${DesignPatterns.skillsDesign2}) -12.5rem 0rem / contain no-repeat;
    background-size: auto 67vh;
    opacity: 0.8;

    @media (max-width: 1472px) {
        box-shadow: none;
        background: none;
    }

    @media (max-width: 1055px) {
        align-items: center;
    }
`;

const ParalelLine = styled.hr`
    ${tw`border-t border-[rgba(80, 69, 181, 0.6)] z-10 w-[3%] self-center border-[0.08rem]`};

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
    ${tw`flex flex-1 text-gray-100 text-sm w-[5%] tracking-[2px]`};

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

const SectionHeader = styled.span<{ $headerAnimation: boolean }>`
    ${tw`font-bold tracking-[8px] pl-8`}
    opacity: ${({ $headerAnimation }) => ($headerAnimation ? 1 : 0)};
    transition: opacity 0.8s ease-in-out, color 0.8s ease-in-out,
        text-shadow 0.8s ease-in-out;
    color: ${({ $headerAnimation }) =>
        $headerAnimation ? "rgb(15, 130, 255)" : "rgba(16, 125, 152, 1)"};
`;

const Projects = styled.div`
    ${tw`relative flex flex-col w-full gap-[42rem] items-center`}

    @media (max-width: 768px) {
        gap: 10rem;
    }

    @media (max-width: 480px) {
        gap: 6rem;
    }
`;
