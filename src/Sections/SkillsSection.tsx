import { DesignPatterns } from "@/Components/shared/DesignPatterns";
import { ListOfSkills } from "@/data";
import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SkillsSection: React.FC = () => {
    const [headerAnimation, setHeaderAnimation] = useState(false);

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 1700 && !headerAnimation) {
                setHeaderAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, [headerAnimation]);

    return (
        <Container>
            <div className="absolute top-20 left-1/2 inset-0 w-full h-full pointer-events-none z-0">
                <div className="absolute w-[100%] h-12 bg-section-skills-secondary rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-col-2 w-[100%] relative h-48 ">
                <div className="flex flex-1 flex-row items-end justify-center w-[90%]">
                    <HeaderContainer>
                        {headerAnimation === true ? (
                            <Header>
                                <Title headerAnimation={headerAnimation}>
                                    SKILL SET
                                </Title>

                                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                    <div className="absolute top-8 left-1/2 w-64 h-16 bg-section-skills-secondary rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                                </div>
                            </Header>
                        ) : (
                            <Header>
                                <Title headerAnimation={headerAnimation}>
                                    SKILL SET
                                </Title>
                            </Header>
                        )}
                        <ParalelLine />
                        <Context>
                            Skills used for less than one year are marked with
                            an asterisk (*) / the recent ones are marked with
                            double asterisk (**)
                        </Context>
                    </HeaderContainer>
                </div>
            </div>

            <SkillsWrapper>
                {ListOfSkills.map((set, i) => (
                    <SkillSection key={i}>
                        <SetName>{set.section}</SetName>
                        <SkillList>
                            {set.skillSet.map((skill) => (
                                <Skill key={skill}>{skill}</Skill>
                            ))}
                        </SkillList>
                    </SkillSection>
                ))}
            </SkillsWrapper>
        </Container>
    );
};

export default SkillsSection;

const Container = styled.div`
    ${tw`relative flex flex-col self-center pt-8  mb-10 z-[10] gap-16 w-[90%] h-[100%] backdrop-hue-rotate-90 hue-rotate-15 pointer-events-none
    [box-shadow: inset -100px 100px 5px black, -100px 100px 50px black, 100px 100px 50px black]`}
    background-repeat: no-repeat;
    opacity: 0.8;
    background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.8) 0%,
                transparent 100px
            )
            no-repeat left center,
        linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, transparent 100px)
            no-repeat right center,
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, transparent 50px)
            no-repeat top center,
        linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 140px)
            no-repeat bottom left,
        url(${DesignPatterns.skillsDesign1}) no-repeat -28rem 5rem / contain;

    /* top-to-transparent overlay */
    &::before {
        content: "";
        ${tw`absolute inset-x-0 top-12 h-[60%] pointer-events-none`}
        background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      transparent
    );
    }
    @media (max-width: 1472px) {
        background: none;
        box-shadow: none;
        linear-grandient: none;
        opacity: 100;
    }
`;

const HeaderContainer = styled.div`
    ${tw`flex flex-row flex-1 gap-12 pr-7 items-center justify-between`}

    @media (max-width: 1055px) {
        align-items: end;
    }
`;
export const ParalelLine = styled.hr`
    ${tw` border-t border-[rgba(10, 90, 150, 1)] z-10 w-[3%] self-center border-[0.08rem]`};

    @media (max-width: 1055px) {
        margin-top: 3%;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;
const Header = styled.span`
    ${tw`
    flex flex-1 relative justify-center items-start
    text-sm font-bold z-10 tracking-[8px] text-center
    py-6 mt-6

    border-r border-r-[rgba(100,150,255,1)]
    rounded-tr-[10px] rounded-br-[10px]
    overflow-hidden
  `}

    &::before {
        content: "";
        ${tw`absolute left-0 top-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      transparent 0%,
      transparent 15%,
      rgba(0,255,255,0.6) 40%,
      rgba(0,255,255,0.6) 45%,
      rgba(0,255,255,0.6) 55%,
      rgba(0,255,255,0.6) 60%,
      rgba(100,150,255,1) 100%
    );
    }

    &::after {
        content: "";
        ${tw`absolute left-0 bottom-0 w-full h-px pointer-events-none`}
        background: linear-gradient(
      to right,
      transparent 0%,
      transparent 15%,
      rgba(0,255,255,0.6) 40%,
      rgba(0,255,255,0.6) 45%,
      rgba(0,255,255,0.6) 70%,
      rgba(100,150,255,1) 100%
    );
    }
`;

const Title = styled.span<{ headerAnimation: boolean }>`
    ${tw`font-bold tracking-[8px]`}
    opacity: ${({ headerAnimation }) => (headerAnimation ? 1 : 0)};
    transition: opacity 0.8s ease-in-out, color 0.8s ease-in-out,
        text-shadow 0.8s ease-in-out;

    /* off‐state: nice muted teal */
    color: ${({ headerAnimation }) =>
        headerAnimation ? "rgba(0,255,255,1)" : "rgba(16, 125, 152, 0.8)"};
`;

const Context = styled.span`
    ${tw`flex flex-1 text-white text-sm w-[5%] tracking-[2px]`};

    @media (max-width: 1195px) {
        font-size: 0.7rem;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;

const SkillsWrapper = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 self-center gap-6 ml-14 w-[60%] z-10 pointer-events-auto`}

    @media (max-width: 1420px) {
        width: 70%;
    }
    @media (max-width: 800px) {
        width: 70%;
        margin-left: 0;
    }
`;

const SkillSection = styled.div`
    ${tw`flex flex-col gap-4 p-4 rounded-lg overflow-hidden  backdrop-blur-3xl transition-transform shadow-md self-start z-20`}

    border: 1px solid rgba(0, 255, 255, 0.2);
    &:hover {
        transform: translateY(-4px) scale(1.02);
        border-color: rgba(0, 255, 255, 0.6);
        box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2);
    }
`;

const SetName = tw.h3`
  text-xl font-bold text-white
`;

const SkillList = tw.div`
  flex flex-wrap gap-3
`;

const Skill = tw.span`
  px-2 py-1 rounded-sm text-sm text-white
  transition-shadow duration-200
  hover:shadow-[0_0_6px_rgba(0,255,255,0.7)] hover:cursor-pointer pointer-events-auto
`;
