import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

interface DetailedInfoProps {
    detailedInfo: string[];
    projectIndex: number;
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({
    detailedInfo,
    projectIndex,
}) => {
    const [visible, setVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -100px 0px",
                threshold: 0.4,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Container ref={containerRef}>
            {/* Invisible clone for layout stability */}
            <InvisibleClone>
                {detailedInfo.map((section, index) => (
                    <TextStatic
                        key={`static-${index}`}
                        $index={index}
                        $projectIndex={projectIndex}
                    >
                        {section}
                    </TextStatic>
                ))}
            </InvisibleClone>

            {/* Animated overlay */}
            {visible && (
                <AnimatedLayer>
                    {detailedInfo.map((section, index) => (
                        <TextAnimated
                            key={`anim-${index}`}
                            $index={index}
                            $projectIndex={projectIndex}
                        >
                            {section}
                        </TextAnimated>
                    ))}
                </AnimatedLayer>
            )}
        </Container>
    );
};

export default DetailedInfo;

const Container = styled.div`
    ${tw`relative w-full mt-8`}
    min-height: 1px;
`;

const InvisibleClone = styled.div`
    ${tw`flex flex-col gap-4`}
    visibility: hidden;
`;

const AnimatedLayer = styled.div`
    ${tw`absolute top-0 left-0 w-full flex flex-col gap-4`}
    pointer-events: none;
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BaseText = styled.h3<{ $index: number; $projectIndex: number }>`
    ${tw`text-white tracking-wide relative`}
    display: flex;
    align-items: flex-start;
    line-height: 1.6rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
    width: 100%;

    &::before {
        content: "•";
        font-size: 1.7rem;
        margin-right: 0.5rem;
        line-height: 1.2;
        color: #00ffff;
        transform: translateY(0.1rem);
        margin-top: -3px;
    }

    @media (max-width: 767px) {
        width: 95%;
    }

    @media (max-width: 1412px) {
        width: ${({ $index, $projectIndex }) =>
            $index > 1 && $projectIndex === 0
                ? "240%"
                : $index > 0 && $projectIndex > 0
                ? "110%"
                : "100%"};
    }

    @media (max-width: 1270px) {
        width: ${({ $index, $projectIndex }) =>
            $index > 0 && $projectIndex === 0
                ? "240%"
                : $index > 0 && $projectIndex > 0
                ? "113%"
                : "100%"};
    }

    @media (max-width: 1200px) {
        width: ${({ $index, $projectIndex }) =>
            $index > 0 && $projectIndex === 0
                ? "240%"
                : $index > 0 && $projectIndex > 0
                ? "100%"
                : "100%"};
    }

    @media (max-width: 1000px) {
        width: ${({ $index, $projectIndex }) =>
            $index > 0 && $projectIndex === 0 ? "222%" : "100%"};
    }

    @media (max-width: 850px) {
        width: 97%;
    }
`;

const TextStatic = styled(BaseText)``;

const TextAnimated = styled(BaseText)`
    opacity: 0;
    animation: ${slideUp} 0.6s ease-out forwards;
    animation-delay: ${({ $index }) => `${$index * 0.2}s`};
    z-index: ${({ $index }) => $index};
`;
