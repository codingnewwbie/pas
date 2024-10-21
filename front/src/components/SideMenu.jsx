import { TfiClose } from "react-icons/tfi";
import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1;
  padding: 20px 35px 20px 20px;
  background-color: white;
`;

const CategoryContainer = styled.div`
  margin: 10px 0px 15px 10px;
`;

const MenuIcon = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
`;

const MenuContent = styled.div`
  margin-top: 0px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const StyledParagraph = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 15px;
  user-select: none;
`;

const StyledHeading = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 18px;
  user-select: none;
`;

export default function SideMenu({ handleToggle, isMenuOpen }) {
  return (
    <MenuContainer>
      <MenuIcon>
        <TfiClose size={20} onClick={handleToggle} />
      </MenuIcon>
      <MenuContent>
        <StyledHeading>Category</StyledHeading>
        <CategoryContainer>
          <StyledLink to="/">
            <StyledParagraph>유화</StyledParagraph>
            <StyledParagraph>수채화</StyledParagraph>
            <StyledParagraph>아크릴화</StyledParagraph>
            <StyledParagraph>수묵화</StyledParagraph>
            <StyledParagraph>채색화</StyledParagraph>
            <StyledParagraph>벽화</StyledParagraph>
            <StyledParagraph>판화</StyledParagraph>
            <StyledParagraph>콜라쥬</StyledParagraph>
            <StyledParagraph>풍경화</StyledParagraph>
            <StyledParagraph>인물화</StyledParagraph>
            <StyledParagraph>정물화</StyledParagraph>
            <StyledParagraph>크로키</StyledParagraph>
            <StyledParagraph>추상화</StyledParagraph>
            <StyledParagraph>누드화</StyledParagraph>
            <StyledParagraph>초상화</StyledParagraph>
          </StyledLink>
        </CategoryContainer>
        <StyledLink to="/">
          <StyledHeading>My Page</StyledHeading>
        </StyledLink>
        <StyledLink to="/">
          <StyledHeading>Subscribe & Like</StyledHeading>
        </StyledLink>
        <StyledLink to="/">
          <StyledHeading>Login</StyledHeading>
        </StyledLink>
      </MenuContent>
    </MenuContainer>
  );
}
