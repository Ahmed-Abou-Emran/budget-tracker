import React from "react";
import NoRecords from "./NoRecords.jsx";
import RecordsList from "./RecordsList.jsx";
import styled from "styled-components";
import { RecordsContext } from "./RecordsProvider.jsx";
function Records() {
  const { records, formState } = React.useContext(RecordsContext);
  const isRecordsEmpty = records.length === 0;
  return (
    <Wrapper>
      {!isRecordsEmpty && <RecordsList />}
      {isRecordsEmpty && formState === "close" && <NoRecords />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: clamp(15rem, 65%, 35rem);
  max-width: 100%;
  margin-block: var(--spacing-50);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Records;
