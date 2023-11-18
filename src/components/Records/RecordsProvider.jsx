import React from "react";
export const RecordsContext = React.createContext();

function RecordsProvider({ children }) {
  // get initial records from local storage
  const [records, setRecords] = React.useState(
    () => JSON.parse(localStorage.getItem("records")) || []
  );

  // formStates are: open, close, edit
  const [formState, setFormState] = React.useState("close");
  const [currentRecord, setCurrentRecord] = React.useState(null); // {record, id: record.id} || null

  //   update formState
  const updateFormState = (state) => {
    setFormState(state);
  };
  const updateCurrentRecord = (record) => {
    setCurrentRecord(record);
  };

  const openEditForm = (record) => {
    setCurrentRecord(record);
    setFormState("edit");
  };

  //   add new record to local storage
  const addRecord = (record) => {
    const newRecords = [{ ...record, id: Date.now() }, ...records];
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  //   update record in local storage
  const editRecord = (record) => {
    setCurrentRecord(record);
    const newRecords = records.map((rec) => {
      if (rec.id === record.id) {
        return record;
      }
      return rec;
    });
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  //   delete record from local storage
  const deleteRecord = (id) => {
    const newRecords = records.filter((record) => record.id !== id);
    setRecords(newRecords);
    setCurrentRecord(null);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  // delete all records from local storage
  const deleteAllRecords = () => {
    const newRecords = [];
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(newRecords));
  };

  const value = {
    formState,
    updateFormState,
    openEditForm,
    currentRecord,
    updateCurrentRecord,
    records,
    addRecord,
    editRecord,
    deleteRecord,
    deleteAllRecords,
  };

  return (
    <RecordsContext.Provider value={value}>{children}</RecordsContext.Provider>
  );
}

export default RecordsProvider;
