import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ProjectProps, projectsData, projectSections } from "@/data";
import BiometricRegHeader from "./ProgressHeader";

interface ProjectSectionProps extends ProjectProps {
    children: React.ReactNode;
    reverse?: boolean;
}

const BiometricReg: React.FC<ProjectSectionProps> = ({
    reverse = false,
    cardIndex,
}) => {
    const biometricRegData = projectsData.find(
        (project) => project.projectName === "Biometric Registration"
    );

    return (
        <Card key={cardIndex}>
            <BiometricRegHeader heading={projectSections.biometricReg} />
            <SectionContainer className="bg-[#1F2A34]" reverse={reverse}>
                <HeaderContainer>
                    <div className="flex flex-1 max-w-[40%]">
                        <SubHeader>{biometricRegData?.projectName}</SubHeader>
                    </div>
                    <span className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white border-b-2 border-cyan-400 pb-2 mb-6">
                        {biometricRegData?.finished}
                    </span>
                </HeaderContainer>
                <ContentWrapper>
                    <TextWrapper>{biometricRegData?.description}</TextWrapper>
                    <TextWrapper>{biometricRegData?.explanation}</TextWrapper>

                    <ImageWrapper></ImageWrapper>
                </ContentWrapper>
            </SectionContainer>
            <div className="flex flex-row gap-4">
                {biometricRegData?.images?.techStack.map((image, index) => (
                    <ImageCard key={index}>{image}</ImageCard>
                ))}
            </div>
        </Card>
    );
};

export default BiometricReg;

const Card = tw.div` flex flex-col gap-5 w-fit z-50`;
const SectionContainer = styled.section<{ reverse: boolean }>`
    ${tw`md:w-[35%] my-16 p-8 rounded-xl shadow-lg border-[0.2px]`}
    ${(props) => props.reverse && tw`md:flex-row-reverse `}
`;
// bg-[#07272a] #2C3440 #5A7793 #171f24 #4C5E70 #1F2A34

// Slate Gray
// #4C5E70 — a little lighter than #5A7793, good for mid-tone panels.

// Charcoal Blue
// #3B4A5A — sits between your two examples, nice for backgrounds.

// Midnight Navy
// #2C3440 — richer and deeper than #171F24, great for footers or headers.

// Deep Prussian
// #24303A — cooler, with a slight greenish hint.

// Desaturated Steel
// #6A8BA4 — a softer complement to #5A7793 if you need contrast.

// Rich Charcoal
// #162126 — almost-black, but with a hint of blue.

// Onyx Blue
// #1F2A34 — a true dark anchor for text or cards.

const HeaderContainer = tw.div`flex flex-col gap-4 `;

const SubHeader = tw.h3`text-2xl md:text-3xl font-bold uppercase tracking-wider text-white   pb-2 mb-6`;

const ContentWrapper = styled.div`
    ${tw`flex flex-col md:flex-row items-start md:items-center gap-8`}
`;

const TextWrapper = tw.div`flex-1 text-gray-300 leading-relaxed text-base`;

const ImageWrapper = styled.div`
    ${tw`flex-1 rounded-lg overflow-hidden shadow-xl bg-black`}
    /* enforce 16:9 aspect ratio */
  position: relative;
    &::before {
        content: "";
        display: block;
        padding-top: 56.25%;
    }
    > * {
        ${tw`absolute inset-0`}
    }
`;

const ImageCard = styled.div`
    width: 80px;
    height: 80px;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    padding: 15px;
    z-index: 10; /* Ensure the card appears on top */
`;
