import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogIn/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  console.log(user)

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
      <MainPageWrapper>
        <Text>Welcome {user.nickname} </Text>
        <Title>BenchMates</Title>
        <LogoutButton />
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

const Title = styled.h1`
  font-size: 3rem;
  font-family: var(--font-family);
  color: #fff;
`;

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0px 10px;
`;

const Text = styled.p`
  font-size: 25px;
  font-family: var(--font-family);
  color: #fff;
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
