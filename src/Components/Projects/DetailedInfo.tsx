import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const DetailedInfo: React.FC<{ detailedInfo: string[] }> = ({
    detailedInfo,
}) => {
    const [textAnimation, setTextAnimation] = useState(false);

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 4250 && !textAnimation) {
                setTextAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, [textAnimation]);

    return (
        <Container>
            {textAnimation && (
                <>
                    {detailedInfo.map((section, index) => (
                        <Text $index={index} key={index}>
                            {section}
                        </Text>
                    ))}
                </>
            )}
        </Container>
    );
};

export default DetailedInfo;

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const Container = styled.div`
    ${tw` flex flex-col mt-8 gap-4`}
    border: none;
    width: full;
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
    ${tw`flex text-white tracking-wide relative`}
    opacity: 0;
    width: ${({ $index }) => ($index > 2 ? "200%" : "102%")};
    line-height: 1.6rem;
    font-size: 0.95rem;
    letter-spacing: 1px;
    animation: ${slideUp} 0.6s ease-out forwards;
    animation-delay: ${({ $index }) => `${$index * 0.2}s`};

    /* Stack them so each “underneath” slides up below the previous */
    z-index: ${({ $index }) => $index};

    &::before {
        content: "•";
        font-size: 1.7rem;
        margin-right: 0.5rem;
        line-height: 1.2; /* tweak to vertically center */
        color: #00ffff; /* neon-cyan bullet */
        transform: translateY(0.1rem);
        margin-top: -3px;
    }

    @media (max-width: 1472px) {
        width: 100%;
    }
    @media (max-width: 1345px) {
        width: ${({ $index }) => ($index > 2 ? "160%" : "100%")};
    }
    @media (max-width: 888px) {
        width: ${({ $index }) => ($index > 0 ? "280%" : "200%")};
    }
    @media (max-width: 860px) {
        width: ${({ $index }) => ($index > 0 ? "260%" : "100%")};
    }
    @media (max-width: 805px) {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 95%;
    }
`;
