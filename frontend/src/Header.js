import React from "react";
import styled from "styled-components";

const Header = ({ currentUser, setCurrentUser }) => {
  const handleScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleLogOut = () => {
    setCurrentUser(null);
  };

  if (currentUser === null) {
    return (
      <Wrapper>
        <MyStyleButton onClick={handleScrollDown}>Log In</MyStyleButton>
      </Wrapper>
    );
  } else {
    return (
      <MainPageWrapper>
        <MyStyleButton onClick={handleLogOut}>Log Out</MyStyleButton>
      </MainPageWrapper>
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

export default Header;
