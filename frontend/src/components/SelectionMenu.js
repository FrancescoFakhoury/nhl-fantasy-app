import React, { useContext } from "react";
import { Context } from "./Context";
import styled from "styled-components";

const SelectionMenu = () => {
  const { teams } = useContext(Context);

  const teamsArr = Object.values(teams.teams);
  console.log(teamsArr);

  return (
    <Wrapper>
    <PlayerSelectText>Please select your players bellow:</PlayerSelectText>
    <TeamWrapper>
      {teamsArr.map((team) => {
        return <TeamNames>{team.name}</TeamNames>;
      })}
    </TeamWrapper>
    </Wrapper>
  );
};

const PlayerSelectText =styled.div`
font-size: 2rem;
color: 	#FFF;
font-family: var(--font-family);
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: var(--grey);
gap: 50px;
`

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fill-available;
  border-radius: 10px;
  padding: 10px;
`;
const TeamNames = styled.p`
  font-size: 20px;
  font-family: var(--font-family);
  color: #fff;
  padding: 10px;

  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;

export default SelectionMenu;
