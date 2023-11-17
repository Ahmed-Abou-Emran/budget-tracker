import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {/* <Outlet /> */}
      {children}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-inline: 10rem;
  padding-block: 2rem;
`;
export default AppLayout;
