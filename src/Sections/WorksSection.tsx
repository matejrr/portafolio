import tw from "twin.macro";
import Card from "../Components/specific/WorksSection/Card";
import { WorksInfo } from "@/data";
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const WorkSection: React.FC = () => {
    const [headerAnimation, setHeaderAnimation] = useState(false);
    const [onView, setOnView] = useState<boolean[]>([false, false, false]);
    const cardRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 22) {
                setHeaderAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(
                        entry.target.getAttribute("data-index")
                    );

                    if (entry.intersectionRatio >= 0.9) {
                        setOnView((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    } else {
                        setOnView((prev) => {
                            const updated = [...prev];
                            updated[index] = false;
                            return updated;
                        });
                    }
                });
            },
            { threshold: [0, 0.9] }
        );

        const currentCardRef = cardRef.current;

        currentCardRef.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            currentCardRef.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <Container>
            <TopTextContainer>
                <WorkType>FRONTEND - 60% / FULLSTACK - 40%</WorkType>
                <Header headerAnimation={headerAnimation}>
                    It's been a little over 2 years since I started programming
                    consistently...
                    <SubHeader>
                        Below are the internships and work experiences I've
                        gained during this time
                    </SubHeader>
                </Header>
            </TopTextContainer>

            <Works>
                <Label>
                    WORKS
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                        <div className="absolute top-8 right-[-80px] w-48 h-16 bg-[#0e6251] rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </Label>
                {WorksInfo.map((work, index) => (
                    <CardContainer
                        ref={(el: HTMLDivElement | null) =>
                            (cardRef.current[index] = el)
                        }
                        data-index={index}
                        key={index}
                    >
                        <BulletPoint index={index} onView={onView[index]} />
                        <Card
                            index={index}
                            firmName={work.firmName}
                            position={work.position}
                            timeSpan={work.timeSpan}
                            responsabilities={work.responsabilities}
                            explanation={work.explanation}
                            technologies={Array(work.technologies.join(", "))}
                        />
                    </CardContainer>
                ))}
            </Works>
        </Container>
    );
};

export default WorkSection;

const Container = styled.div`
    ${tw`flex flex-col items-center gap-14 pt-6 justify-end pb-36 self-center w-[93%] h-[100%] bg-section-works-tericary opacity-100 rounded-[10px] z-10 [box-shadow: -100px 100px 50px black, 100px 100px 50px black]`}
    border: 0.2px solid transparent;
    border-image-source: linear-gradient(
        to bottom,
        rgba(33, 135, 108, 1),
        rgba(28, 140, 113, 1),
        rgba(10, 90, 100, 1)
    );
    border-image-slice: 1;
`;
const Works = styled.div`
    ${tw`flex flex-col flex-1 w-[90%] h-auto pb-6 bg-section-works-tericary rounded-[10px] z-30 justify-start relative`}
    border: 0.2px solid transparent;

    border-image-source: linear-gradient(
        to bottom,
        rgba(33, 135, 108, 1),
        rgba(28, 100, 113, 1),
        rgba(10, 90, 100, 1)
    );
    border-image-slice: 1;
`;

const TopTextContainer = tw.div`
    w-full flex flex-col gap-10 pl-[4.2rem] py-10
`;

const WorkType = tw.span`
    text-sm text-section-works-highlight tracking-[2.3px] leading-[1.7rem] w-[80%]
`;

const Header = styled.div<{ headerAnimation: boolean }>`
    ${tw`flex flex-col gap-5 text-4xl text-white text-start w-[50%] h-[17%] tracking-[2px] leading-[3rem] z-10`}

    opacity: ${({ headerAnimation: animate }) => (animate ? 1 : 0)};
    transform: ${({ headerAnimation: animate }) =>
        animate ? "translateX(0.2rem)" : "translateX(-1rem)"};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;

    @media (max-width: 950px) {
        width: 90%;
    }
    @media (max-width: 758px) {
        transform: ${({ headerAnimation: animate }) =>
            animate ? "translateX(1rem)" : "translateX(-1rem)"};
        transition: opacity 1.3s ease-in-out, transform 1.6s ease-in-out;
    }
    @media (max-width: 600px) {
        width: 80%;
        font-size: 2rem;
    }
    @media (max-width: 465px) {
        font-size: 1.5rem;
        line-height: 2rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;

    @media (max-width: 400px) {
        font-size: 1.3rem;
        line-height: 1.6rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;
`;

const SubHeader = tw.span`
    text-md tracking-[2px] leading-[1.7rem] w-[80%] text-gray-200
`;

const Label = tw.div`
    flex justify-end relative items-center w-full h-12 py-3 pr-4 text-sm text-section-works-highlight font-bold tracking-[8px]
    border-b-[0.2px] border-section-works-primary z-10
`;

const CardContainer = tw.div`
    flex items-center relative w-full h-[100%]
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const bulletGradients = [
    {
        base: "linear-gradient(135deg, rgba(33, 135, 108, 1), rgba(33, 135, 108, 1))",
        highlight: "linear-gradient(135deg, #66ffc4, #33d9a6)",
    },
    {
        base: "linear-gradient(135deg, rgba(10, 90, 100, 1), rgba(28, 140, 113, 1))",
        highlight: "linear-gradient(135deg, #7ffcc7, #33c0ae)",
    },
    {
        base: "linear-gradient(135deg, rgba(10, 50, 100, 1), rgba(23, 145, 118, 1))",
        highlight: "linear-gradient(135deg, #9ffcd0, #33c2b7)",
    },
];
const BulletPoint = styled.div<{ onView: boolean; index: number }>`
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: ${({ index }) => bulletGradients[index].base};
    transition: background 0.3s ease, box-shadow 0.25s ease;

    ${({ onView, index }) =>
        onView &&
        css`
            background: ${bulletGradients[index].highlight};
            box-shadow: 0 0 10px ${bulletGradients[index].highlight},
                0 0 20px ${bulletGradients[index].highlight};
        `}

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        pointer-events: none;
        background: ${({ index }) => bulletGradients[index].highlight};
        transform: scale(1);
        transform-origin: center center;
        opacity: 0;
        ${({ onView }) =>
            onView &&
            css`
                animation: ${pulse} 1.4s ease-out forwards;
            `}
    }
`;
