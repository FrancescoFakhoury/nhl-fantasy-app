import React, {useContext} from "react";
import styled from "styled-components";
import { Context } from "./Context";

const SignIn = () => {
  const { setCurrentUser } = useContext(Context);

  const handleLogIn = () => {
    setCurrentUser(!null);
  };
  return (
    <Wrapper>
      <Title>BenchMates</Title>
      <SubText>Become ONE with the fantasy Gods.</SubText>
      <StyledForm>
        <SubText>Get Started</SubText>
        <StyledInput type="text" placeholder="Username"></StyledInput>
        <StyledInput type="password" placeholder="Password"></StyledInput>
        <StyledButton onClick={handleLogIn}> Log In</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};

// const BigWrapper = styled.div`
//   display: flex;
//   height: 100%;
//   width: 100%;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 21rem;
  color: #fff;
  font-size: 9rem;
  font-family: var(--font-family);
`;

const SubText = styled.h1`
  margin-top: 70rem;
  font-size: 5rem;
  color: #fff;
  font-family: var(--font-family);
`;

const StyledInput = styled.input`
  font-size: 25px;
  border-radius: 8px;
  border-style: solid;
  border-color: #fff;
  margin: 5px;
  text-align: center;
  outline: transparent;
`;
const StyledButton = styled.button`
  margin: 40px;
  padding: 0px 20px;
  /* background: linear-gradient(to right, gold, darkorange); */
  /* background: linear-gradient(to right, black, white); */
  background-color: white;
  color: black;
  text-align: center;
  line-height: 50px;
  font-size: 35px;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  border: 1px solid darkgoldenrod;
  border-radius: 2em;
  transform: perspective(500px) rotateY(-15deg);
  text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: perspective(500px) rotateY(15deg);
    text-shadow: -6px 3px 2px rgba(0, 0, 0, 0.2);
    box-shadow: -2px 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const StyledForm = styled.form`
  margin-bottom: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SignIn;
