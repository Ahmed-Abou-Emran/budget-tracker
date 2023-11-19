import React from "react";
import styled from "styled-components";
import { RecordsContext } from "../components/Records/RecordsProvider";
import { formatCurrency } from "../helpers";
import { Loader } from "../ui";
function Summary() {
  const { records } = React.useContext(RecordsContext);
  const [userInfo, setUserInfo] = React.useState(() =>
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null
  );
  console.log(userInfo);
  console.log(records);

  const initialBalance = userInfo ? +userInfo.initialBalance : 0;
  let totalIncomes = 0;
  let totalSpendings = 0;
  let currentBalance = initialBalance;

  // adding all records to currentBalance
  records.forEach(({ category, amount }) => {
    console.log({ category, amount });
    // form inputs are string, + is to convert to number
    if (category === "incomes") {
      currentBalance += +amount;
      totalIncomes += +amount;
    } else {
      currentBalance += +amount;
      totalSpendings += +amount;
    }
  });

  console.log({ initialBalance, currentBalance });
  return (
    <Wrapper>
      <CurrentBalance>
        Current Balance: <span>{formatCurrency(currentBalance)}</span>
      </CurrentBalance>
      <InitialBalance>
        Initial Balance: <span>{formatCurrency(initialBalance)}</span>
      </InitialBalance>
      <TotalIncomes>
        Total Incomes: <span>{formatCurrency(totalIncomes)}</span>
      </TotalIncomes>
      <TotalSpendings>
        Total Spendings: <span>{formatCurrency(totalSpendings)}</span>
      </TotalSpendings>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  div {
    display: flex;
    width: 30rem;
  }
  span {
    margin-inline-start: auto;
  }
`;
export default Summary;

const CurrentBalance = styled.div``;
const InitialBalance = styled.div``;
const TotalIncomes = styled.div``;
const TotalSpendings = styled.div``;
