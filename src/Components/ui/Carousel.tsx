import React from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import { Logos } from "./Logos";

const {
    bootstrap,
    figma,
    firebase,
    graphql,
    html,
    materialui,
    mongodb,
    nodejs,
    python,
    react,
    sqlserver,
    typescript,
    vite,
    vscode,
    androidStudio,
    axios,
    blender,
    css,
    github,
    tailwind,
} = Logos;

const cards = [
    vscode,
    nodejs,
    react,
    firebase,
    axios,
    tailwind,
    graphql,
    androidStudio,
    github,
    python,
    html,
    typescript,
    mongodb,
    sqlserver,
    figma,
    css,
    blender,
    materialui,
    bootstrap,
    vite,
];

const infiniteCards = [...cards, ...cards];

const Carousel: React.FC = () => {
    return (
        <CarouselWrapper>
            <CarouselTrack>
                {infiniteCards.map((logo, index) => (
                    <CardWrapper key={index}>
                        <LeftLine />
                        <Card>{logo()}</Card>
                        <RightLine />
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1]">
                            <div className="absolute top-1/2 right-0 w-40 h-16 bg-[#0e6251] rounded-full blur-2xl opacity-40 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </CardWrapper>
                ))}
            </CarouselTrack>
        </CarouselWrapper>
    );
};

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const CarouselTrack = styled.div`
    display: flex;
    width: max-content;
    animation: ${scroll} 40s linear infinite;
    will-change: transform;
    position: relative;
`;

const CarouselWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    padding: 15px 0;
    position: absolute;
`;

const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const Card = styled.div`
    width: 80px;
    height: 100px;
    margin: 0 10px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border: 0.2px solid #0e6251;
    padding: 15px;
    z-index: 10; /* Ensure the card appears on top */
`;

const LeftLine = tw.hr`
    border-t border-[#0e6251] w-[80px] self-center z-0

`;

const RightLine = tw.hr`
    border-t border-[#0e6251] w-[80px] self-center z-0

`;

export default Carousel;
