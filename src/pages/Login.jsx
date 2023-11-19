import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoginBackground } from "../assets";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userInfo, setUserInfo] = React.useState(() =>
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: userInfo });
  // } = useForm({ defaultValues: userInfo });

  const onSubmit = (data) => {
    // saveData to user Storage
    // move to home page
    const userData = data;
    localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/app/home");
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <Wrapper>
      <LeftSection>
        <img src={LoginBackground} />
      </LeftSection>
      <RightSection>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h1>
              Budget Tracker
              <span>Manage Your Budget !</span>
            </h1>
          </header>
          <main>
            <InputWrapper>
              <input
                {...register("initialBalance", {
                  required: "This field is required",
                  min: { value: 0, message: "Balance cannot be negative" },
                })}
                type="number"
                placeholder="Enter Initial Balance"
              />
              {errors.initialBalance && (
                <span>{errors.initialBalance.message}</span>
              )}
            </InputWrapper>
            <InputWrapper>
              <input
                {...register("name", {
                  required: "This field is required",
                })}
                type="name"
                placeholder="Enter Your Name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </InputWrapper>

            <ActionsWrapper>
              <button type="submit">Start Managing Your Budget !</button>
            </ActionsWrapper>
          </main>
        </FormWrapper>
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
`;
const LeftSection = styled.div`
  display: flex;
  flex: 1;
  img {
    object-fit: cover;
    object-position: center bottom;
    height: 100%;
  }

  @media (max-width: 62.5rem) {
    display: none;
  }
`;
const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.form`
  width: clamp(30rem, 80%, 50rem);
  max-width: 100%;
  padding: var(--spacing-80);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-120);
  margin-block: var(--spacing-80);

  h1 {
    text-align: center;
    line-height: 1.1;
    font-weight: 600;
    font-size: 3rem;
    span {
      display: block;
      color: var(--green-400);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-100);
    width: 100%;

    input {
      padding-inline: var(--spacing-40);
      padding-block: var(--spacing-30);
      background: transparent;
      border: none;
      border-bottom: 2px solid var(--green-100);
      color: var(--grey-100);
      font-size: 2rem;

      &:focus {
        outline: 2px solid var(--green-100);
      }
      &::placeholder {
        color: var(--grey-500);
        font-weight: 500;
      }
    }
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  input,
  textarea {
    width: 100%;
    &:focus {
      outline: 2px solid var(--green-500);
    }
  }

  span {
    position: absolute;
    right: 3rem;
    color: var(--red-400);
    font-size: 1rem;
    font-weight: 500;
    transform: translateY(50%);
    bottom: 50%;
  }
`;

const ActionsWrapper = styled.div`
  button {
    width: 100%;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    padding-block: var(--spacing-40);
    padding-inline: var(--spacing-40);
    background-color: var(--yellow-500);
    color: var(--grey-100);
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background-color: var(--yellow-600);
      cursor: pointer;
    }

    transition: background-color 0.2s ease-in-out;
  }
`;

export default Login;
