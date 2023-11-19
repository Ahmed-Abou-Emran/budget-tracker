import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  const [activePage, setActivePage] = React.useState("home");
  const onNavigateHandler = (page) => {
    setActivePage(page);
  };
  return (
    <Wrapper>
      <Header />
      <NavItems>
        <NavItmem
          activePage={activePage === "home" ? true : false}
          to="/app/home"
          onClick={() => onNavigateHandler("home")}
        >
          Home
        </NavItmem>
        <NavItmem
          activePage={activePage === "summary" ? true : false}
          onClick={() => onNavigateHandler("summary")}
          to="/app/summary"
        >
          Summary
        </NavItmem>
      </NavItems>
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-inline: 10rem;
  padding-block: 2rem;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 3rem;
  padding-inline: 2rem;
  color: var(--green-100);
`;
const NavItmem = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  background: ${({ activePage }) =>
    activePage ? "var(--green-700)" : "var(--green-500)"};
  margin-inline: 1rem;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: ${({ activePage }) => (activePage ? "underline" : "none")};
  &:hover {
    background-color: var(--green-700);
    text-decoration: underline;
  }
`;

export default AppLayout;
