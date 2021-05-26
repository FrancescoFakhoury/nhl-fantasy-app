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
        <BsPersonFill size="2rem" color="white" />
        <StyledNavLink to="/" exact>
          Profile
        </StyledNavLink>
      </NavDiv>
      <NavDiv>
        <BsPersonFill size="2rem" color="white" />
        <StyledNavLink to="/players">Players</StyledNavLink>
      </NavDiv>
      <NavDiv>
        <RiTeamFill size="2rem" color="white" />
        <StyledNavLink to="/team">Your Team</StyledNavLink>
      </NavDiv>
      <NavDiv>
        <FaHockeyPuck size="2rem" color="white" />
        <StyledNavLink to="/nhl-teams">NHL Teams</StyledNavLink>
      </NavDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15vw;
  align-items: baseline;
  padding-left: 2rem;
  background-color: var(--second-grey);
  border-radius: 10px;
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
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-family: var(--font-family);
  padding: 10px;

  &:hover {
    color: var(--orange)
  }

  &.active {
    color: var(--orange)
  }
`;

export default Sidebar;
