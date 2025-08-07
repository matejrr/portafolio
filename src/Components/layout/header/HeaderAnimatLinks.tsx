import styled from "styled-components";
import React from "react";
import tw from "twin.macro";

type AnimatedTextProps = {
    text: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
    openBurgerSheet: boolean;
    delay: string;
};

const HeaderAnimatLinks: React.FC<AnimatedTextProps> = ({
    text,
    onClick,
    openBurgerSheet,
    delay,
}) => {
    return (
        <Link
            className="text-white"
            $openBurgerSheet={openBurgerSheet}
            $delay={delay}
        >
            {text.split("").map((char, index) => (
                <span onClick={onClick} key={index}>
                    {char}
                </span>
            ))}
        </Link>
    );
};

export default HeaderAnimatLinks;

const Link = styled.a<{ $openBurgerSheet: boolean; $delay: string }>`
    ${tw`inline-block text-white font-normal [font-style: normal] cursor-pointer relative overflow-hidden tracking-[2.5px] text-[0.6rem]`};

    opacity: ${({ $openBurgerSheet }) => ($openBurgerSheet ? 0 : 1)};
    animation: ${({ $openBurgerSheet }) =>
        $openBurgerSheet ? "fadeUp 0.4s ease forwards" : "none"};
    animation-delay: ${({ $openBurgerSheet, $delay }) =>
        $openBurgerSheet ? $delay : "0s"};

    @media (min-width: 640px) {
        ${tw`tracking-[2.5px] text-[0.6rem]`};
    }
    @media (min-width: 768px) {
        ${tw`tracking-[2.5px] text-[0.6rem]`};
    }
    @media (max-width: 1353px) {
        ${tw`tracking-[2.5px] text-[0.5rem] font-normal`};
    }
`;
