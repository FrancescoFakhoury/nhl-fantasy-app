import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogIn/LogoutButton"
import {useAuth0} from "@auth0/auth0-react"

const Header = () => {

  const {isAuthenticated} = useAuth0();

  const handleScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  if (!isAuthenticated) {
    return (
      <Wrapper>
        <MyStyleButton onClick={handleScrollDown}>Log In</MyStyleButton>
      </Wrapper>
    );
  } else {
    return (
      <>
      <MainPageWrapper>
        <LogoutButton />
      </MainPageWrapper>
        <Divider />
        </>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
`;

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MyStyleButton = styled.button`
  margin-right: 1.2rem;
  margin-top: 1.2rem;
  padding: 5px 20px;
  text-align: center;
  font-size: 25px;
  font-family: sans-serif;
  border: 1px solid darkgoldenrod;
  border-radius: 2em;
  text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0 0 3px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: 1px solid black;
`;

export default Header;
