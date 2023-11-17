import React from "react";
import { Cart } from "../../assets";
import styled from "styled-components";

function NoRecords() {
  return (
    <Wrapper>
      <h2>
        Looks like you haven't added any <span>Records yet.</span>
      </h2>

      <p>
        No worries, just hit the <span>'Add a New Record' </span> button to get
        started
      </p>
      <ImageWrapper>
        <img src={Cart} alt="cart" />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: clamp(15rem, 65%, 35rem);
  max-width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-block: var(--spacing-50);

  h2 {
    color: var(--extras-box-color-light, #fffde7);
    font-size: 2.65044rem;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.2;

    span {
      color: var(--green-500);
    }
  }

  p {
    width: clamp(18rem, 65%, 25rem);
    max-width: 100%;
    color: var(--extras-box-color-light, #fffde7);
    text-align: center;

    /* Desktop font-sizes/heading-h4 */
    font-family: Open Sans;
    font-size: 1.325em;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;

    span {
      color: var(--green-500);
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default NoRecords;
