import React from "react";
import Logo from "../assets/Logo.svg";
// import Avatar from "../assets/avatar.jpg";
import { User } from "../assets";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Header() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData?.name;
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <LogoWrapper>
        <LogoImageWrapper>
          <img src={Logo} alt="logo" />
        </LogoImageWrapper>
        <h1>
          <span>Budget</span> <span>Tracker</span>
        </h1>
      </LogoWrapper>
      <PersonalDetails onClick={() => navigate("/login")}>
        <h3>Welcome {userName?.split(" ")[0]}</h3>
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

  @media (max-width: 62.5rem) {
    flex-direction: column-reverse;
  }
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

  &:hover {
    cursor: pointer;
  }
`;

const LogoImageWrapper = styled.div`
  flex-shrink: 0;
`;

const PersonalDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  p {
    font-size: 1.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #fde047;
  }
`;
export default Header;
