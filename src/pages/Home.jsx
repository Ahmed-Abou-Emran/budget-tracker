import React from "react";
import styled from "styled-components";
import { Records, RecordForm } from "../components/Records";
function Home() {
  return (
    <Wrapper>
      <RecordForm />
      <AddRecordWrapper>
        <AddRecord>Add a New Record</AddRecord>
      </AddRecordWrapper>
      <Records />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: var(--spacing-50);
`;

const AddRecordWrapper = styled.div``;
const AddRecord = styled.button`
  padding-inline: var(--spacing-100);
  padding-block: var(--spacing-30);
  border-radius: 0.25rem;
  background: var(--yellow-300);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background: var(--yellow-400);
  }
`;

export default Home;
