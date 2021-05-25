import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaHockeyPuck } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Wrapper>
      <NavDiv>
        <BsPersonFill size="3rem" />
        <StyledNavLink to="/" exact>
          Profile
        </StyledNavLink>
      </NavDiv>
      <NavDiv>
        <RiTeamFill size="3rem" />
        <StyledNavLink to="/team">Your Team</StyledNavLink>
      </NavDiv>
      <NavDiv>
        <FaHockeyPuck size="3rem" />
        <StyledNavLink to="/nhl-teams">NHL Teams</StyledNavLink>
      </NavDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20vw;
  align-items: baseline;
  padding-left: 2rem;
  border: solid black 2px;
`;

const NavDiv = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px;
  align-items: center;

  &:hover {
    transform: scale(1.3);
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: var(--font-family);
  padding: 10px;

  &:hover {
    color: black;
  }

  &.active {
    color: black;
  }
`;

export default Sidebar;
