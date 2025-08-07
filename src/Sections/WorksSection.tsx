import tw from "twin.macro";
import Card from "../Components/specific/WorksSection/Card";
import { WorksInfo } from "@/data";
import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

export const WorkSection: React.FC = () => {
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
        <Container id="works-section">
            <TopTextContainer>
                <WorkType>
                    Frontend-focused developer with solid fullstack
                    capabilities.
                </WorkType>
                <Header $headerAnimation={headerAnimation}>
                    From my first lines of code to professional experience —
                    this is the journey so far
                    <SubHeader>
                        Each role has helped sharpen both my frontend focus and
                        backend understanding.
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
                    <CardsContainer
                        ref={(el: HTMLDivElement | null) =>
                            (cardRef.current[index] = el)
                        }
                        data-index={index}
                        key={index}
                    >
                        <BulletPoint $index={index} $onView={onView[index]} />
                        <Card
                            index={index}
                            firmName={work.firmName}
                            position={work.position}
                            timeSpan={work.timeSpan}
                            responsabilities={work.responsabilities}
                            explanation={work.explanation}
                            technologies={Array(work.technologies.join(", "))}
                        />
                    </CardsContainer>
                ))}
            </Works>
        </Container>
    );
};

const Container = styled.div`
    ${tw`flex flex-col items-center self-center justify-end w-[93%] h-full rounded-[10px] z-10`}
    padding: clamp(1rem, 4vw, 6rem) 0 clamp(3rem, 6vw, 9rem);
    gap: clamp(1.5rem, 4vw, 3.5rem);
    background-color: var(--color-section-works-tericary);
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

const TopTextContainer = styled.div`
    ${tw`w-full flex flex-col`}
    padding: clamp(1.5rem, 4vw, 4.2rem);
    gap: clamp(1.5rem, 3vw, 2.5rem);
`;

const WorkType = styled.span`
    ${tw`text-section-works-highlight`}
    font-size: clamp(0.75rem, 1.5vw, 0.95rem);
    line-height: 1.6rem;
    letter-spacing: 2px;
    width: 90%;
`;

const Header = styled.div<{ $headerAnimation: boolean }>`
    ${tw`flex flex-col text-white text-start z-10`}
    font-size: clamp(1.2rem, 2.5vw + 0.5rem, 2.5rem);
    line-height: clamp(1.8rem, 3vw + 1rem, 3.5rem);
    width: 100%;
    max-width: 900px;
    gap: clamp(1rem, 2vw, 2rem);

    opacity: ${({ $headerAnimation }) => ($headerAnimation ? 1 : 0)};
    transform: ${({ $headerAnimation }) =>
        $headerAnimation ? "translateX(0.2rem)" : "translateX(-1rem)"};
    transition: opacity 1.2s ease-in-out, transform 1.2s ease-in-out;

    @media (max-width: 600px) {
        transform: none;
        transition: opacity 1s ease-in-out;
    }
`;

const SubHeader = styled.span`
    ${tw`text-gray-200`}
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    line-height: clamp(1.4rem, 2vw + 0.5rem, 1.8rem);
    max-width: 90%;
`;

const Label = tw.div`
    flex justify-end relative items-center w-full h-12 py-3 pr-4 text-sm text-section-works-highlight font-bold tracking-[8px]
    border-b-[0.2px] border-section-works-primary z-10
`;

const CardsContainer = tw.div`
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
const BulletPoint = styled.div<{ $onView: boolean; $index: number }>`
    position: relative;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: ${({ $index }) => bulletGradients[$index].base};
    transition: background 0.3s ease, box-shadow 0.25s ease;

    ${({ $onView, $index }) =>
        $onView &&
        css`
            background: ${bulletGradients[$index].highlight};
            box-shadow: 0 0 10px ${bulletGradients[$index].highlight},
                0 0 20px ${bulletGradients[$index].highlight};
        `}

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        pointer-events: none;
        background: ${({ $index }) => bulletGradients[$index].highlight};
        transform: scale(1);
        transform-origin: center center;
        opacity: 0;
        ${({ $onView }) =>
            $onView &&
            css`
                animation: ${pulse} 1.4s ease-out forwards;
            `}
    }
`;
