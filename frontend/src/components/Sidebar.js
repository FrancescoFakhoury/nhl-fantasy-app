import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaHockeyPuck, FaHome } from "react-icons/fa";
import {GiHockey} from "react-icons/gi"

const Sidebar = () => {
  return (
    <Wrapper>
      <NavDiv>
        <FaHome size="2rem" color="black" opacity="0.87" />
        <StyledNavLink to="/" exact>
          Profile
        </StyledNavLink>
      </NavDiv>
      <NavDiv>
        <BsPersonFill size="2rem" color="black" opacity="0.87" />
        <StyledNavLink to="/players">Players</StyledNavLink>
      </NavDiv>
      <NavDiv>
        <RiTeamFill size="2rem" color="black" opacity="0.87" />
        <StyledNavLink to="/team">Your Team</StyledNavLink>
      </NavDiv>
      <NavDiv>
        <GiHockey size="2rem" color="black" opacity="0.87" />
        <StyledNavLink to="/how-to-play">How to Play</StyledNavLink>
      </NavDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  width: 15vw;
  align-items: baseline;
  padding-left: 1rem;
  background-color: var(--first-card);
  border-radius: 14px;
`;

const NavDiv = styled.div`
  display: flex;
  gap: 5px;
  margin: 27px 0px;
  align-items: center;
  background: var(--second-card);
  border: solid grey 1px;
  box-shadow: 10px 10px 10px -10px;
  padding: 0 10px;
  border-radius: 4px;
  width: 180px;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: var(--font-family);
  padding: 10px;
  opacity: 1;

  &:hover {
    color: var(--turquoise);
  }

  &.active {
    color: var(--turquoise);
  }
`;

export default Sidebar;
