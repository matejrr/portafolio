import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import LogosCarousel from "../Components/specific/WelcomeSection/LogosCarousel";

export const WelcomeSection: React.FC = () => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <SectionContainer id="welcome-section">
            <TopSection>
                <Welcome>
                    <Greetings>HI THERE</Greetings>
                    <SubHeader $animate={animate}>My name's Matej</SubHeader>
                    <WelcomeText $animate={animate}>
                        I'm a FullStack Developer
                    </WelcomeText>
                </Welcome>
            </TopSection>

            <BottomSection>
                <LogosCarousel />
            </BottomSection>
        </SectionContainer>
    );
};

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: visible;
    overflow-x: visible;
    gap: 15rem;

    @media (max-width: 1472px) {
        gap: 4.5rem;
    }
    @media (max-width: 483px) {
        min-height: 42dvh;
        gap: 4.5rem;
    }
`;

const TopSection = styled.div`
    ${tw`h-7/12 w-full flex pt-[12rem] relative`}

    @media (max-width: 1385px) {
        padding-top: 8rem;
    }
    @media (max-width: 670px) {
        padding-top: 6rem;
    }
    @media (max-width: 565px) {
        padding-top: 8rem;
    }
`;

const Welcome = styled.span`
    ${tw`flex flex-col flex-[1] gap-5 h-24 z-20 absolute bg-transparent text-white ml-[3rem] w-[35%]`}

    @media (max-width: 1385px) {
        width: 45%;
    }
    @media (max-width: 565px) {
        width: 80%;
    }
    @media (max-width: 470px) {
        width: 65%;
    }
`;

const Greetings = styled.span`
    ${tw`text-5xl w-[80%] [letter-spacing: 0.8rem] `}

    @media (max-width: 1300px) {
        width: 100%;
    }
    @media (max-width: 470px) {
        font-size: 2rem;
    }
`;
const SubHeader = styled.span<{ $animate: boolean }>`
    font-size: 1.2rem;
    letter-spacing: 4px;
    width: 100%;
    cursor: default;
    z-index: 20;
    height: auto;
    will-change: transform, opacity;
    opacity: ${({ $animate }) => ($animate ? 1 : 0)};
    transform: ${({ $animate }) =>
        $animate ? "translateX(0)" : "translateX(4rem)"};
    transition: opacity 1.3s ease-in-out, transform 1s ease-in-out;

    @media (max-width: 758px) {
        transform: ${({ $animate }) =>
            $animate ? "translateX(0)" : "translateX(3rem)"};
        transition: opacity 1.3s ease-in-out, transform 1.3s ease-in-out;
    }

    @media (max-width: 470px) {
        font-size: 1rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;
    }
`;
export const WelcomeText = styled.span<{ $animate: boolean }>`
    ${tw`hover:cursor-none`}
    font-size: 1rem;
    letter-spacing: 4px;
    height: auto;
    width: 80%;
    flex: 1;
    opacity: ${({ $animate }) => ($animate ? 1 : 0)};
    transform: ${({ $animate }) =>
        $animate ? "translateX(3rem)" : "translateX(-1rem)"};
    transition: opacity 1.6s ease-in-out, transform 1.5s ease-in-out;

    @media (max-width: 758px) {
        transform: ${({ $animate }) =>
            $animate ? "translateX(1rem)" : "translateX(-1rem)"};
        transition: opacity 1.3s ease-in-out, transform 1.8s ease-in-out;
    }

    @media (max-width: 470px) {
        font-size: 1.2rem;
        gap: 1rem;
        padding-top: 0rem;
        margin-top: 0rem;
        left: 0;
    }
`;

const BottomSection = styled.div`
    ${tw`min-h-max w-full mt-3.5 mb-[14rem]`}

    @media (max-width: 1472px) {
        margin-top: 8rem;
    }
    @media (max-width: 858px) {
        margin-top: 11rem;
    }
    @media (max-width: 786px) {
        margin-top: 14rem;
    }
    @media (max-width: 650px) {
        margin-top: 16rem;
    }
    @media (max-width: 565px) {
        margin-top: 10rem;
    }
    @media (max-width: 352px) {
        margin-top: 15rem;
    }
`;
