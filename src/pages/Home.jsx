import React from "react";
import styled from "styled-components";
import { Records, RecordForm, RecordsContext } from "../components/Records";

function Home() {
  const {
    records,
    updateFormState,
    formState,
    updateCurrentRecord,
    deleteAllRecords,
  } = React.useContext(RecordsContext);
  return (
    <Wrapper>
      {formState === "close" && (
        <ActionsdWrapper>
          {records.length > 0 && (
            <DeleteAll onClick={deleteAllRecords}>Delete All Records</DeleteAll>
          )}
          <AddRecord
            onClick={() => {
              updateFormState("open");
              updateCurrentRecord(null);
            }}
          >
            Add a New Record
          </AddRecord>
        </ActionsdWrapper>
      )}
      {formState === "open" && <RecordForm />}
      {formState === "edit" && <RecordForm key={Math.random()} />}
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
  position: relative;
`;

const ActionsdWrapper = styled.div`
  display: flex;
  gap: var(--spacing-50);
  button {
    padding-inline: var(--spacing-100);
    padding-block: var(--spacing-30);
    border-radius: 0.25rem;
    border: none;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.04);
    font-weight: 700;
  }
`;
const DeleteAll = styled.button`
  background: var(--red-500);
  color: var(--grey-100);

  &:hover {
    cursor: pointer;
    background: var(--red-600);
  }
`;
const AddRecord = styled.button`
  background: var(--yellow-300);

  &:hover {
    cursor: pointer;
    background: var(--yellow-400);
  }
`;

export default Home;
