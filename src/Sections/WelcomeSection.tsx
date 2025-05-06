import { useEffect, useState } from "react";
import tw from "twin.macro";
import Carousel from "../Components/ui/Carousel";
import styled from "styled-components";
import { Button } from "../Components/ui/Button";

const WelcomeSection: React.FC = () => {
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <SectionContainer>
            <TopSection>
                <Welcome>
                    <Greetings>HI THERE 👋🏼</Greetings>
                    <SubHeader animate={animate}>My name's Matej</SubHeader>
                    <WelcomeText animate={animate}>
                        I'm a passionate Frontend, FullStack & Design Developer
                    </WelcomeText>
                    <EmailSection>
                        <InTouch>Let's Get in Touch!</InTouch>
                        <Line />
                        <InTouchButton variant={"welcome"} onClick={() => {}}>
                            EMAIL
                        </InTouchButton>
                    </EmailSection>
                </Welcome>
            </TopSection>
            <WelcomeText2 animate={animate}>WELCOME</WelcomeText2>
            <BottomSection>
                <Carousel />
            </BottomSection>
        </SectionContainer>
    );
};

export default WelcomeSection;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 70vh;
    overflow-y: visible;
    overflow-x: visible;
    gap: 3.5rem;

    @media (max-width: 865px) {
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
    ${tw`flex flex-col flex-[1] gap-7 h-24 z-20 absolute bg-transparent text-white ml-[3rem] w-[35%]`}

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
const SubHeader = styled.span<{ animate: boolean }>`
    font-size: 1.2rem;
    letter-spacing: 4px;
    width: 100%;
    cursor: default;
    z-index: 20;
    height: auto;
    will-change: transform, opacity;
    opacity: ${({ animate }) => (animate ? 1 : 0)};
    transform: ${({ animate }) =>
        animate ? "translateX(0)" : "translateX(4rem)"};
    transition: opacity 1.3s ease-in-out, transform 1s ease-in-out;

    @media (max-width: 758px) {
        transform: ${({ animate }) =>
            animate ? "translateX(0)" : "translateX(3rem)"};
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
export const WelcomeText = styled.span<{ animate: boolean }>`
    ${tw`hover:cursor-none`}
    font-size: 1rem;
    letter-spacing: 4px;
    height: auto;
    width: 80%;
    flex: 1;
    opacity: ${({ animate }) => (animate ? 1 : 0)};
    transform: ${({ animate }) =>
        animate ? "translateX(3rem)" : "translateX(-1rem)"};
    transition: opacity 1.6s ease-in-out, transform 1.5s ease-in-out;

    @media (max-width: 758px) {
        transform: ${({ animate }) =>
            animate ? "translateX(1rem)" : "translateX(-1rem)"};
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

const EmailSection = styled.div`
    ${tw` w-full flex justify-start items-center gap-4 ml-[0.7] `}

    @media (max-width: 470px) {
        font-size: 1rem;
    }
`;

const InTouch = styled.span`
    ${tw`text-sm [letter-spacing: 2px] hover:cursor-none [font-weight: 500]`}

    @media (max-width: 470px) {
        font-size: 0.8rem;
    }
`;
const InTouchButton = tw(Button)`
  w-[clamp(7rem,10vw,8rem)]
  h-[clamp(2rem,2.5vw,2.3rem)]
  tracking-widest
  transform            /* enable transforms */
  transition-transform /* animate only transform changes */
  duration-200         /* 200ms timing, tweak as you like */
  ease-in-out
  hover:scale-105      /* scale up on hover */
  hover:cursor-pointer
  ml-2
`;

const Line = tw.hr`
 border-t border-white w-full max-w-[40px] self-center
`;

const BottomSection = styled.div`
    ${tw`min-h-max w-full mt-3.5 mb-[14rem]`}

    @media (max-width: 900px) {
        margin-top: 4rem;
    }
    @media (max-width: 652px) {
        margin-top: 7rem;
    }
    @media (max-width: 565px) {
        margin-top: 15rem;
    }
    @media (max-width: 483px) {
        margin-top: 18rem;
    }
    @media (max-width: 415px) {
        margin-top: 20rem;
    }
    @media (max-width: 390px) {
        margin-top: 22rem;
    }
    @media (max-width: 349px) {
        margin-top: 25rem;
    }
`;

const WelcomeText2 = styled.span<{ animate: boolean }>`
    will-change: transform, opacity;
    display: flex;
    padding-top: 135px;
    margin-right: 35px;
    justify-content: end;
    letter-spacing: 8px;
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-5rem);
    transition: opacity 1.6s ease-in-out, transform 1.2s ease-in-out;
    transition-delay: 0.5s; /* Delay animation by 1 second */

    @media (max-width: 565px) {
        display: none;
    }

    ${({ animate }) =>
        animate &&
        `
        opacity: 1;
        transform: translateX(-0.5rem);
    `}
`;
