import React from "react";
import Logo from "../assets/Logo.svg";
// import Avatar from "../assets/avatar.jpg";
import { User } from "../assets";
import styled from "styled-components";
function Header() {
  return (
    <StyledHeader>
      <LogoWrapper>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <h1>
          <span>Budget</span> <span>Tracker</span>
        </h1>
      </LogoWrapper>
      <PersonalDetails>
        <h3>Welcome Ahmed</h3>
        <ImageWrapper>
          <img src={User} alt="user" />
        </ImageWrapper>
      </PersonalDetails>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid var(--grey-300);
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  span:last-child {
    /* color: var(--green-400); */
    color: #fde047;
    font-size: 3rem;
  }
`;

const PersonalDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  p {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #fde047;
  }
`;
export default Header;
