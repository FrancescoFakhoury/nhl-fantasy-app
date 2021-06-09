import React from "react";
import styled from "styled-components";
import LogoutButton from "./LogIn/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiHockey } from "react-icons/gi";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();

  // const handleScrollDown = () => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // };

  if (!isAuthenticated) {
    return (
      <Wrapper>
        {/* <MyStyleButton onClick={handleScrollDown}>Log In</MyStyleButton> */}
      </Wrapper>
    );
  } else {
    return (
      <WholeWrapper>
        <MainPageWrapper>
          <Title>BenchMates</Title>
          <NavDiv>
            <FaHome size="2rem" color="white" opacity="0.87" />
            <StyledNavLink to="/" exact>
              Profile
            </StyledNavLink>
          </NavDiv>
          <NavDiv>
            <BsPersonFill size="2rem" color="white" opacity="0.87" />
            <StyledNavLink to="/players">Players</StyledNavLink>
          </NavDiv>
          <NavDiv>
            <RiTeamFill size="2rem" color="white" opacity="0.87" />
            <StyledNavLink to="/team">Your Team</StyledNavLink>
          </NavDiv>
          <NavDiv>
            <GiHockey size="2rem" color="white" opacity="0.87" />
            <StyledNavLink to="/how-to-play">How to Play</StyledNavLink>
          </NavDiv>
          <SmallWrapper>
            <Text>Welcome, {user.nickname} </Text>
            <LogoutButton />
          </SmallWrapper>
        </MainPageWrapper>
      </WholeWrapper>
    );
  }
};

const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  z-index: 20;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  right: 0;
`;

const SmallWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: var(--font-family);
  color: #fff;
`;

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background: linear-gradient(90deg, #0b223e 0%, #00436e 100%) 0% 0% no-repeat
    padding-box;
`;

const Text = styled.p`
  font-size: 25px;
  font-family: var(--font-family);
  color: #fff;
  width: 130px;
`;

const MyStyleButton = styled.button`
  margin-right: 1.2rem;
  margin-top: 1.2rem;
  padding: 5px 20px;
  text-align: center;
  font-size: 25px;
  font-family: sans-serif;
  border: 1px solid purple;
  border-radius: 2em;
  text-shadow: 6px 3px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0 0 3px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const NavDiv = styled.div`
  display: flex;
  gap: 5px;
  margin: 27px 0px;
  align-items: center;

  &:hover {
    transform: scale(1.4);
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: var(--font-family);
  padding: 10px;
  opacity: 1;

  &.active {
    color: var(--red);
  }
`;

export default Header;
