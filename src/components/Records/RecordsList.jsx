import React from "react";
import TRANSACTIONS from "../../data";
import RecordItem from "./RecordItem.jsx";
function RecordsList() {
  return (
    <div>
      {TRANSACTIONS.map((record) => (
        <RecordItem key={record.id} record={record} />
      ))}
    </div>
  );
}

export default RecordsList;
