import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { RecordsContext } from "./RecordsProvider.jsx";
function RecordForm() {
  const {
    addRecord,
    editRecord,
    updateFormState,
    currentRecord,
    updateCurrentRecord,
    formState,
  } = React.useContext(RecordsContext);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: currentRecord });

  const onSubmit = (data) => {
    if (formState === "open") {
      addRecord(data);
    }
    if (formState === "edit") {
      editRecord(data);
    }
    reset();
  };
  console.log(errors);

  return (
    <FormWrapper key={currentRecord?.id} onSubmit={handleSubmit(onSubmit)}>
      <header>
        <h1>
          {formState === "open"
            ? "Adding a New Record"
            : "Editing an Exisiting Record"}
        </h1>
        <p> Enter Record details below</p>
      </header>
      <main>
        <InputWrapper>
          <input
            {...register("amount", {
              required: "This field is required",
              validate: (value) => {
                if (getValues("category") === "incomes")
                  return +value >= 0 || "Amount must be greater than 0";

                if (getValues("category") !== "incomes")
                  return +value <= 0 || "Amount must be less than 0";
              },
            })}
            type="number"
            placeholder="Amount"
          />
          {errors.amount && <span>{errors.amount.message}</span>}
        </InputWrapper>
        <InputWrapper>
          <input
            {...register("date", {
              required: "This field is required",
              validate: (value) => {
                const today = new Date();
                const date = new Date(value);
                return date <= today || "Date cannot be in the future";
              },
            })}
            type="date"
            placeholder="Date"
          />
          {errors.date && <span>{errors.date.message}</span>}
        </InputWrapper>
        <InputWrapper>
          <select
            {...register("category", {
              required: "This field is required",
            })}
            placeholder="Confirm New Password"
          >
            <option value="debts">Debts</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="rent">Rent</option>
            <option value="incomes">incomes</option>
            <option value="subscription">Subscription</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </InputWrapper>
        <InputWrapper>
          <textarea
            {...register("description", {
              required: "This field is required",
            })}
            placeholder="Enter a Description"
          />
          {errors.description && <span>{errors.description.message}</span>}
        </InputWrapper>
        <ActionsWrapper>
          <button
            onClick={() => {
              updateFormState("close");
              updateCurrentRecord(null);
            }}
          >
            cancel
          </button>
          <button type="submit">
            {formState === "open" ? "Add" : "Edit"} Record
          </button>
        </ActionsWrapper>
      </main>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  width: clamp(15rem, 65%, 35rem);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--spacing-80);
  margin-block: var(--spacing-80);

  h1 {
    font-weight: 600;
    font-size: 1.5625rem;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--grey-400);
  }
  main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-60);
    width: 100%;

    input,
    textarea,
    select {
      padding-inline: var(--spacing-40);
      padding-block: var(--spacing-30);
      background: var(--green-100);
      border: none;
      border-radius: 0.5rem;
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  input,
  textarea,
  select {
    width: 100%;
    &:focus {
      outline: 2px solid var(--green-500);
    }
  }
  textarea {
    height: 8rem;
  }
  span {
    position: absolute;
    right: 3rem;
    color: #ef4444;
    font-size: 0.75rem;
    font-weight: 500;
    transform: translateY(50%);
    bottom: 50%;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    padding-block: var(--spacing-20);
    background-color: var(--green-500);
    color: var(--grey-100);
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background-color: var(--green-600);
      cursor: pointer;
    }

    transition: background-color 0.2s ease-in-out;
  }
`;
export default RecordForm;
