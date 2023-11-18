import React from "react";
import styled from "styled-components";
import {
  debts,
  food,
  health,
  others,
  rent,
  savings as incomes,
  subscription,
  entertainment,
} from "../../assets";
import { formatCurrency } from "../../helpers";
import { RecordsContext } from "./RecordsProvider";
const categoryIcons = {
  debts,
  food,
  health,
  others,
  rent,
  incomes,
  subscription,
  entertainment,
};

function RecordItem({ record }) {
  const { category, date, description, amount, id } = record;
  const { openEditForm, currentRecord, deleteRecord } =
    React.useContext(RecordsContext);
  return (
    <Wrapper
      isCurrentRecrod={currentRecord?.id === id}
      // onClick={() => openEditForm(record)
      // }
    >
      <Delete
        onClick={() => {
          deleteRecord(id);
        }}
      >
        X
      </Delete>
      <div>
        <img src={categoryIcons[category]} />
      </div>
      <Details>
        <span>{category}</span>
        <span> {new Date(date).toDateString()}</span>
        <span> {description}</span>
      </Details>
      <Amount amount={amount}>{formatCurrency(amount)}</Amount>
    </Wrapper>
  );
}

const Delete = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: none;
  background: var(--red-500);
  color: var(--grey-100);

  &:hover {
    cursor: pointer;
    background: var(--red-600);
  }
`;
const Wrapper = styled.div`
  /* width: clamp(15rem, 65%, 35rem); */
  margin-inline: auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 8fr 2fr;
  grid-template-rows: 6rem;
  gap: var(--spacing-40);
  border-top: 1px dashed var(--grey-500);
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.isCurrentRecrod ? "hsl(197, 79%, 35%)" : "transparent"};

  position: relative;
  &:hover {
    cursor: pointer;
    background: hsl(197, 79%, 35%);

    ${Delete} {
      /* Show delete button on hover */
      display: block;
    }
  }

  & ${Delete} {
    position: absolute;
    top: 0;
    right: 0;
    display: none; /* Initially hide the delete button */
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-transform: capitalize;
`;
const Amount = styled.div`
  font-weight: 700;
  text-align: right;
  font-size: 1.5rem;
  color: ${(props) =>
    props.amount > 0 ? "var(--green-500)" : "var(--red-500)"};
`;

export default RecordItem;
