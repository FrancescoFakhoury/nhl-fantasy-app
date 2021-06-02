import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton onClick={() => loginWithRedirect()}>Log In</StyledButton>
  );
};

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
    cursor: pointer;
  }
`;

export default LoginButton;
