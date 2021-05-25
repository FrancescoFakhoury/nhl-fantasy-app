import React from "react";
import styled from "styled-components";
import LoginButton from "./LogIn/LoginButton"

const SignIn = () => {

  return (
    <Wrapper>
      <Title>BenchMates</Title>
      <SubText>Become ONE with the fantasy Gods.</SubText>
      <LoginButton />
    </Wrapper>
  );
};

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

export default SignIn;
