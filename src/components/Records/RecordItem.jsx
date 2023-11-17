import React from "react";
import styled from "styled-components";
import {
  Debts,
  Food,
  Health,
  Others,
  Rent,
  Savings,
  Subscription,
  Entertainment,
} from "../../assets";
import { formatCurrency } from "../../helpers";

const categoryIcons = {
  Debts,
  Food,
  Health,
  Others,
  Rent,
  Savings,
  Subscription,
  Entertainment,
};

function RecordItem({ record: { amount, category, date, description } }) {
  return (
    <Wrapper>
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

const Wrapper = styled.div`
  /* width: clamp(15rem, 65%, 35rem); */
  margin-inline: auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 8fr 2fr;
  grid-template-rows: 6rem;
  gap: var(--spacing-40);
  border-top: 1px dashed var(--grey-500);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Amount = styled.div`
  font-weight: 700;
  text-align: right;
  font-size: 1.5rem;
  color: ${(props) =>
    props.amount > 0 ? "var(--green-500)" : "var(--red-500)"};
`;

export default RecordItem;
