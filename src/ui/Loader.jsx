import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <StyledLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 2rem;
`;

// source: https://cssloaders.github.io
const StyledLoader = styled.span`
  transform: translateZ(1px);

  &:after {
    content: "$";
    display: inline-block;
    margin-inline: auto;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 32px;
    font-weight: bold;
    background: #ffd700;
    color: #daa520;
    border: 4px double;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes coin-flip {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;

export default Loader;