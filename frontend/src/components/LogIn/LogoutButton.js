import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <MyStyleButton onClick={() => logout()}>Log Out</MyStyleButton>;
};

const MyStyleButton = styled.button`
  margin-right: 1.2rem;
  margin-top: 1.2rem;
  padding: 5px 20px;
  text-align: center;
  font-size: 25px;
  font-family: sans-serif;
  border: 1px solid darkgoldenrod;
  border-radius: 2rem;
  box-shadow: 0px 0 0 3px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export default LogoutButton;
