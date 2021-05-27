import React, { useContext } from "react";
import { Context } from "./Context";
import styled from "styled-components";

const SelectionMenu = () => {
  const { teams } = useContext(Context);

  const teamsArr = Object.values(teams.teams);
  console.log(teamsArr);

  return (
    <Wrapper>
    <PlayerSelectText>Please select your players from the desired team bellow :</PlayerSelectText>
    <TeamWrapper>
      {teamsArr.map((team) => {
        return <TeamNames>{team.name}</TeamNames>;
      })}
    </TeamWrapper>
    </Wrapper>
  );
};

const PlayerSelectText =styled.div`
font-size: 1.3rem;
color: 	#FFF;
font-family: var(--font-family);
opacity: 0.87;
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
  background-color: var(--second-grey);
`;
const TeamNames = styled.p`
  font-size: 20px;
  font-family: var(--font-family);
  color: #fff;
  padding: 10px;
  background-color: var(--third-grey);
  margin: 10px;
  opacity: 0.87;
  border-radius: 4px;

  &:hover {
    color: var(--orange);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default SelectionMenu;
