import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

interface DetailedInfoProps {
    detailedInfo: string[];
}

const DetailedInfo: React.FC<DetailedInfoProps> = ({ detailedInfo }) => {
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
            {visible &&
                detailedInfo.map((section, index) => (
                    <Text $index={index} key={index}>
                        {section}
                    </Text>
                ))}
        </Container>
    );
};

export default DetailedInfo;

const Container = styled.div`
    ${tw` flex flex-col mt-8 gap-4`}
    border: none;
    width: 100%;
`;

const slideUp = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Text = styled.h3<{ $index: number }>`
    ${tw`text-white tracking-wide relative`}
    display: flex;
    align-items: start;
    opacity: 0;
    line-height: 1.6rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
    animation: ${slideUp} 0.6s ease-out forwards;
    animation-delay: ${({ $index }) => `${$index * 0.2}s`};
    z-index: ${({ $index }) => $index};
    width: 100%;

    &::before {
        content: "•";
        font-size: 1.7rem;
        margin-right: 0.5rem;
        line-height: 1.2; /* tweak to vertically center */
        color: #00ffff; /* neon-cyan bullet */
        transform: translateY(0.1rem);
        margin-top: -3px;
    }

    @media (max-width: 767px) {
        width: 95%;
    }
`;
