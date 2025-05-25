import HeaderAnimatLinks from "./HeaderAnimatLinks";
import { useNavigate } from "react-router";
import styled, { keyframes } from "styled-components";
import { FC } from "react";
import { Icons } from "@/Components/shared/Icons";

export const Header: FC = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <LeftSection onClick={() => navigate("/")}>MATEJ</LeftSection>
            <BurgerMenu>
                <Icons.burger />
            </BurgerMenu>
            <MiddleSection>
                <HeaderAnimatLinks
                    text="WORKS"
                    onClick={() => navigate("/portafolio")}
                />
                <HeaderAnimatLinks
                    text="SKILLS"
                    onClick={() => navigate("/shop")}
                />
                <HeaderAnimatLinks
                    text="PROJECTS"
                    onClick={() => navigate("/exhibitions")}
                />
                <HeaderAnimatLinks
                    text="ABOUT&nbsp;ME"
                    onClick={() => navigate("/shop")}
                />
                <HeaderAnimatLinks
                    text="CONTACT"
                    onClick={() => navigate("/contact")}
                />
                <HeaderAnimatLinks
                    text="REQUEST&nbsp;CALL"
                    onClick={() => navigate("/portafolio")}
                />
            </MiddleSection>

            <IconsSection>MEDIA ICONS</IconsSection>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div({
    backgroundColor: "transparent",
    textColor: "white",
    transform: "translateY(0%)",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    zIndex: 50,
    opacity: 1,
    alignItems: "center",
    width: "100%",
    height: "52px",
    padding: "19px 20px",
    transition: `transform 0.3s ease-in-out, background-color 0.3s ease, color 0.3s ease`,
    marginTop: 18,
});

const LeftSection = styled.h2`
    font-weight: 400;
    font-size: 22px;
    letter-spacing: 5.8px;
    cursor: pointer;
    display: flex;
    position: sticky;
    flex: 1;
    justify-content: right;
    color: white;
    margin-right: 60px;

    @media (max-width: 870px) {
        display: none;
    }
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
    display: flex;
    flex: 2.3;
    justify-content: center;
    gap: 32px;
    border-radius: 25px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: ${borderAnimation} 3s ease-in-out infinite;
    border: 2px solid;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-right: 10px;
    padding-left: 10px;

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
display: flex;
flex: 1;
justify-content: start;
font-size: 15px;
column-gap: 12px;
color: white;
margin-left: 60px;

@media (max-width: 870px) {
    display: none;


`;
