import HeaderAnimatLinks from "./HeaderAnimatLinks";
import styled, { keyframes } from "styled-components";
import { FC, useEffect, useState } from "react";
import { Icons } from "@/Components/shared/Icons";
import { Logos } from "@/Components/shared/Logos";
import BurgerDialog from "@/Components/ui/BurgerSheet";

export const Header: FC = () => {
    const [openBurgerSheet, setOpenBurgerSheet] = useState(false);
    const [sections, setSections] = useState<{
        works: HTMLElement | null;
        skills: HTMLElement | null;
        projects: HTMLElement | null;
        aboutMe: HTMLElement | null;
        contact: HTMLElement | null;
    }>({
        works: null,
        skills: null,
        projects: null,
        aboutMe: null,
        contact: null,
    });

    useEffect(() => {
        setSections({
            works: document.getElementById("works-section"),
            skills: document.getElementById("skills-section"),
            projects: document.getElementById("projects-section"),
            aboutMe: document.getElementById("about-me-section"),
            contact: document.getElementById("contact-section"),
        });
    }, []);

    return (
        <HeaderContainer>
            <BurgerMenu>
                {openBurgerSheet ? (
                    <BurgerDialog
                        sections={sections}
                        openBurgerSheet={openBurgerSheet}
                        setOpenBurgerSheet={setOpenBurgerSheet}
                    />
                ) : (
                    <Icons.burger onClick={() => setOpenBurgerSheet(true)} />
                )}
            </BurgerMenu>
            <LeftSection />
            <MiddleSection>
                <HeaderAnimatLinks
                    openBurgerSheet={openBurgerSheet}
                    delay="20ms"
                    text="WORKS"
                    onClick={() =>
                        sections.works?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    openBurgerSheet={openBurgerSheet}
                    delay="40ms"
                    text="SKILLS"
                    onClick={() =>
                        sections.skills?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    openBurgerSheet={openBurgerSheet}
                    delay="60ms"
                    text="PROJECTS"
                    onClick={() =>
                        sections.projects?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                />
                <HeaderAnimatLinks
                    openBurgerSheet={openBurgerSheet}
                    delay="80ms"
                    text="ABOUT ME"
                    onClick={() =>
                        sections.aboutMe?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    openBurgerSheet={openBurgerSheet}
                    delay="100ms"
                    text="CONTACT"
                    onClick={() =>
                        sections.contact?.scrollIntoView({ behavior: "smooth" })
                    }
                />
            </MiddleSection>

            <IconsSection>
                <a
                    className="w-8 h-auto"
                    href="https://www.linkedin.com/in/matej-ruzicka-ruzicka/"
                >
                    <Logos.linkedin />
                </a>
                <a
                    className="w-[25.7px] h-auto"
                    href="https://github.com/matejrr"
                >
                    <Logos.github />
                </a>
            </IconsSection>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 52px;
    padding: 19px 20px;
    gap: 40px;
    margin-top: 18px;
    background-color: transparent;
    color: white;
    z-index: 50;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease,
        color 0.3s ease;
`;

const borderAnimation = keyframes`

  0% {
    border-color: #011511;
  }
  50% {
    border-color: #0e6251;
  }
  100% {
    border-color: #011511;
  }
`;

const MiddleSection = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    gap: 32px;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: ${borderAnimation} 3s ease-in-out infinite;
    border: 2px solid;
    padding: 14px 35px;

    @media (max-width: 980px) {
        display: none;
    }
`;

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const IconsSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 22px;
    max-width: 41%;

    @media (max-width: 980px) {
        display: none;
    }
`;

const BurgerMenu = styled.div`
    position: absolute;
    margin: 0px 45px 0px 0px;
    display: none;
    cursor: pointer;
    right: 0;

    @media (max-width: 980px) {
        display: block;
    }
`;
