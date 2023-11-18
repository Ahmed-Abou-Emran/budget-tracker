import React from "react";
import NoRecords from "./NoRecords.jsx";
import RecordsList from "./RecordsList.jsx";
import styled from "styled-components";
import Loader from "../../ui/Loader.jsx";
import { RecordsContext } from "./RecordsProvider.jsx";
function Records() {
  const { records } = React.useContext(RecordsContext);
  const isRecordsEmpty = records.length === 0;
  return (
    <Wrapper>
      {/* <Header>
        <span>Description</span>
        <div>
          Filter Records |{" "}
          <select>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>
      </Header> */}
      {!isRecordsEmpty && <RecordsList />}
      {isRecordsEmpty && <NoRecords />}
      {/* <Loader /> */}
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
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: var(--spacing-80);
`;
export default Records;
