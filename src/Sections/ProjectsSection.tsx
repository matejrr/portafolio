import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ProjectsSection: React.FC = () => {
    const [headerAnimation, setHeaderAnimation] = useState(false);

    useEffect(() => {
        function handleAnimation() {
            if (window.scrollY > 2650 && !headerAnimation) {
                setHeaderAnimation(true);
            }
        }
        window.addEventListener("scroll", handleAnimation);
        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, [headerAnimation]);

    return (
        <div>
            <Title headerAnimation={headerAnimation}></Title>
        </div>
    );
};

export default ProjectsSection;

const Title = styled.div<{ headerAnimation: boolean }>`
   ${tw`font-bold tracking-[8px]`}

    opacity: ${({ headerAnimation }) => (headerAnimation ? 1 : 0)};
    transition: opacity 0.8s ease-in-out, color 0.8s ease-in-out,
        text-shadow 0.8s ease-in-out;

     color: ${({ headerAnimation }) =>
         headerAnimation ? "rgba(13,116,206,1)" : "rgba(18, 25, 41, 0.9)"};

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
