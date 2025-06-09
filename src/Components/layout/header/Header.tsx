import HeaderAnimatLinks from "./HeaderAnimatLinks";
import styled, { keyframes } from "styled-components";
import { FC, useEffect, useState } from "react";
import { Icons } from "@/Components/shared/Icons";
import { RequestCallDialog } from "./RequestCallDialog";
import { Logos } from "@/Components/shared/Logos";

export const Header: FC = () => {
    const [sections, setSections] = useState<{
        welcome: HTMLElement | null;
        works: HTMLElement | null;
        skills: HTMLElement | null;
        projects: HTMLElement | null;
        aboutMe: HTMLElement | null;
        contact: HTMLElement | null;
    }>({
        welcome: null,
        works: null,
        skills: null,
        projects: null,
        aboutMe: null,
        contact: null,
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSections({
            welcome: document.getElementById("welcome-section"),
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
                <Icons.burger />
            </BurgerMenu>
            <LeftSection />
            <MiddleSection>
                <HeaderAnimatLinks
                    text="WORKS"
                    onClick={() =>
                        sections.works?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    text="SKILLS"
                    onClick={() =>
                        sections.skills?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    text="PROJECTS"
                    onClick={() =>
                        sections.projects?.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                />
                <HeaderAnimatLinks
                    text="ABOUT&nbsp;ME"
                    onClick={() =>
                        sections.aboutMe?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    text="CONTACT"
                    onClick={() =>
                        sections.contact?.scrollIntoView({ behavior: "smooth" })
                    }
                />
                <HeaderAnimatLinks
                    text="REQUEST&nbsp;CALL"
                    onClick={() => setIsOpen(true)}
                />
                {isOpen && (
                    <RequestCallDialog isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
            </MiddleSection>

            <IconsSection>
                <a
                    className="w-8 h-auto"
                    href="https://www.linkedin.com/in/matej-ruzicka-ruzicka/"
                >
                    <Logos.linkedin />
                </a>
                <a
                    className="w-[24px] h-auto"
                    href="https://www.facebook.com/MatejRR"
                >
                    <Logos.facebook />
                </a>
                <a
                    className="w-[25px] h-auto"
                    href="https://www.instagram.com/matejruzickaruzicka/"
                >
                    <Logos.instagram />
                </a>
            </IconsSection>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 52px;
    padding: 19px 20px;
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

const LeftSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const MiddleSection = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 32px;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: ${borderAnimation} 3s ease-in-out infinite;
    border: 2px solid;
    padding: 14px 35px;

    @media (max-width: 670px) {
        display: none;
    }
`;

const BurgerMenu = styled.div`
    position: absolute;
    margin: 0px 45px 0px 0px;
    display: none;
    cursor: pointer;
    right: 0;

    @media (max-width: 670px) {
        display: block;
    }
`;

const IconsSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    color: white;
    max-width: 41%;

    @media (max-width: 870px) {
        display: none;
    }
`;
