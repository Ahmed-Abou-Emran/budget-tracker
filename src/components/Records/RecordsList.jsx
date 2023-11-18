import React from "react";
// import TRANSACTIONS from "../../data";
import { RecordsContext } from "./RecordsProvider.jsx";
import RecordItem from "./RecordItem.jsx";
function RecordsList() {
  const { records } = React.useContext(RecordsContext);
  return (
    <div>
      {records?.map((record) => (
        <RecordItem key={record.id} record={record} />
      ))}
    </div>
  );
}

export default RecordsList;
