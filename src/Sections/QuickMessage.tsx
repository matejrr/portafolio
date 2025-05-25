import { InView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";
import tw from "twin.macro";
import personalPhoto from "../assets/personalPhoto.jpg";
import { Input } from "@/Components/ui/Input";
import { Button } from "@/Components/ui/Button";
import { useState } from "react";
import { Avatar } from "@/Components/shared/Avatar";

const QuickMessage: React.FC = () => {
    const [quickMessage, setQuickMessage] = useState("");

    return (
        <Container>
            <InView threshold={0.1} triggerOnce={false}>
                {({ ref, inView }) => (
                    <ResponsiveDiv>
                        <LeftSide>
                            <ObserverWrapper ref={ref}>
                                <div className="flex flex-row gap-5">
                                    <BulletPoint inView={inView} />
                                    <AvatarWrapper inView={inView}>
                                        <Avatar>
                                            <img src={personalPhoto} />
                                        </Avatar>
                                    </AvatarWrapper>
                                </div>
                                <Text inView={inView}>
                                    Want to know more about any specific
                                    section?
                                </Text>
                                <TextMobile inView={inView}>DM me</TextMobile>
                            </ObserverWrapper>
                        </LeftSide>

                        <RightSide>
                            <Input
                                inView={inView}
                                style={{
                                    fontSize: "0.9rem",
                                    letterSpacing: "0.7px",
                                    padding: "1.5rem 1rem",
                                    borderTop: quickMessage
                                        ? "2px solid rgba(30,210,255, 0.6)"
                                        : "1.5px solid rgba(30,190,255, 0.4)",
                                    borderRight: quickMessage
                                        ? "2px solid rgba(30,210,255, 0.6)"
                                        : "1.5px solid rgba(30,190,255, 0.4)",
                                    borderBottom: quickMessage
                                        ? "2px solid rgba(30,210,255, 0.6)"
                                        : "1.5px solid rgba(30,190,255, 0.4)",
                                    borderLeft: quickMessage
                                        ? "2px solid rgba(30,210,255, 0.6)"
                                        : "1.5px solid rgba(30,190,255, 0.4)",
                                    transition: "border 1s ease-in-out",
                                }}
                                name="message"
                                value={quickMessage}
                                onChange={(e) =>
                                    setQuickMessage(e.target.value)
                                }
                            />
                        </RightSide>
                    </ResponsiveDiv>
                )}
            </InView>

            <ButtonSection>
                {quickMessage && (
                    <QuickEmailButton
                        style={{ borderColor: "#00E5FF" }}
                        variant="projects"
                    >
                        Send
                    </QuickEmailButton>
                )}
            </ButtonSection>
        </Container>
    );
};

export default QuickMessage;

const Container = styled.div`
    ${tw`flex flex-col gap-3 self-center w-[100%] min-h-[14rem] pt-14 justify-center  rounded-[10px] pl-[2.4rem] pr-14 z-20
    [box-shadow: inset -800px 50px 100px black, inset 800px 50px 100px black, -50px 50px 100px black]`}

    @media (max-width: 1355px) {
        width: 95%;
    }
    @media (max-width: 1093px) {
        margin-top: 3rem;
    }
    @media (max-width: 1065px) {
        padding-right: 50px
        padding-left: 50px;
    }
`;

const LeftSide = styled.div`
    ${tw`flex flex-row justify-center items-center min-w-[44.5%] gap-2 h-full text-md tracking-wide [letter-spacing: 0.2rem]`}

    @media (max-width: 414px) {
        display: flex;
        justify-content: left;
    }
`;
const ObserverWrapper = styled.div`
    ${tw`flex items-center gap-5`}
`;

const RightSide = styled.div`
    ${tw`flex flex-row flex-1 items-center text-white w-[100%] pl-14`}

    @media (max-width: 1065px) {
        padding-left: 0;
    }
`;

const ButtonSection = styled.div`
    ${tw`relative flex self-center w-full text-white`}
`;

const QuickEmailButton = tw(Button)`
    w-[clamp(7rem, 10vw, 8rem)]
    h-[clamp(2rem, 2.5vw, 2.3rem)]
    tracking-widest
    hover:cursor-pointer
    hover:border-[0.1rem]
    animate-fade-in
    motion-reduce:opacity-100
    absolute
    right-0
    mt-3
    py-[1.2rem]

`;

const popAvatar = keyframes`
  0%   { opacity: 0; width: 0; height: 0; }
  20%  { opacity: 1; width: 6.5rem; height: 6.5rem; }
  25%  { width: 6rem; height: 6rem; }
  75%  { width: 6rem; height: 6rem; }
  80%  { opacity: 1; width: 6rem; height: 6rem; }
  90%  { opacity: 1; width: 6.5rem; height: 6.5rem; }
 100%  { opacity: 0; width: 0; height: 0; }
`;
const AvatarWrapper = styled.div<{ inView: boolean }>`
    ${tw`rounded-full z-10`}
    width: 0;
    height: 0;
    opacity: 0;

    ${({ inView }) =>
        inView &&
        css`
            animation: ${popAvatar} 4.5s ease-out forwards;
            /* you can delay the **start** of the pop if you like: */
        `}
    @media (max-width: 490px) {
        display: none;
    }
`;

/* your text slides in/out exactly as before */
const slideText = keyframes`
  0%, 25%   { opacity: 0; transform: translateX(-3rem); }
  30%, 85%  { opacity: 1; transform: translateX(1rem);  }
  90%,100%  { opacity: 0; transform: translateX(-3rem)}
`;

const Text = styled.span<{ inView: boolean }>`
    ${tw`text-[1rem] tracking-[1.5px] leading-[1rem] text-gray-200 text-right`}
    opacity: 0;
    transform: translateX(-5rem);

    ${({ inView }) =>
        inView &&
        css`
            animation: ${slideText} 4s ease-in-out forwards;
            animation-delay: 0.5s;
        `}

    @media (max-width: 1105px) {
        font-size: 0.7rem;
    }
    @media (max-width: 585px) {
        font-size: 0.6rem;
    }
    @media (max-width: 414px) {
        display: none;
    }
`;

const TextMobile = styled.span<{ inView: boolean }>`
    ${tw`text-[1rem] tracking-[1.5px] leading-[1rem] text-gray-200 text-right`}
    opacity: 0;
    display: none;
    transform: translateX(-3rem);

    ${({ inView }) =>
        inView &&
        css`
            animation: ${slideText} 4s ease-in-out forwards;
            animation-delay: 0.5s;
        `}

    @media (max-width: 414px) {
        display: inline-block;
        margin-left: 35px;
    }
`;

const pulse = keyframes`
  0%   { transform: scale(1);   opacity: 0.6 }
  100% { transform: scale(3.6); opacity: 0 }
`;

const BulletPoint = styled.div<{ inView: boolean }>`
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(
        135deg,
        rgba(30, 210, 255, 0.5),
        rgba(30, 210, 255, 0.5)
    );

    ${({ inView }) =>
        inView &&
        css`
            background: linear-gradient(135deg, #7a79ff, #5cdbff);
            box-shadow: 0 0 10px #7a79ff, 0 0 20px #7a79ff;
        `}

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #6496ff;
        opacity: 0;
        transform: scale(1);

        ${({ inView }) =>
            inView &&
            css`
                animation: ${pulse} 1.2s ease-out forwards;
            `}
    }
`;

const ResponsiveDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media (max-width: 1065px) {
        display: flex;
        align-items: start;
        flex-direction: column;
        align-self: center;
        justify-content: center;
        gap: 2rem;
        margin: 0px 100px;
    }
`;
