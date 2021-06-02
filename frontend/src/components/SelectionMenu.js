import React, { useContext, useState } from "react";
import { Context } from "./Context";
import styled from "styled-components";
import Player from "./Player";

const SelectionMenu = () => {
  const { teams } = useContext(Context);
  const [isTeamClicked, setIsTeamClicked] = useState(false);
  const [specificTeam, setSpecificTeam] = useState(null);

  const teamsArr = Object.values(teams.teams);

  
  const handleClick = (team) => {
    console.log("ginger", isTeamClicked);
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`)
      .then((res) => res.json())
      .then((json) => {
        setSpecificTeam(json.roster);
        setIsTeamClicked(true);
      });
  };

  // const previousPage = () => {
  //   setIsTeamClicked(false);
  // }

  if (isTeamClicked === false) {
    return (
      <Wrapper>
        <PlayerSelectText>
          Please select your players from the desired team bellow :
        </PlayerSelectText>
        <TeamWrapper>
          {teamsArr.map((team, index) => {
            return (
              <TeamNames
                key={index}
                onClick={() => {
                  handleClick(team);
                }}
              >
                {team.name}
              </TeamNames>
            );
          })}
        </TeamWrapper>
      </Wrapper>
    );
  } else {
    return (
      <PlayerWrapper>
        <PlayerSelectText>
          Please select your players from the desired team bellow :
        </PlayerSelectText>
        <TeamWrapper>
          {specificTeam.map((player, index) => {
            return <Player player={player} key={index} />;
          })}
        </TeamWrapper>
        <button onClick={() => setIsTeamClicked(false)}>Previous Page</button>
      </PlayerWrapper>
    );
  }
};

const PlayerSelectText = styled.div`
  font-size: 1.6rem;
  color: black;
  font-family: var(--font-family);
  opacity: 0.87;
  text-align: center;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--first-card);
  padding: 20px;
  border-radius: 14px;
  height: fit-content;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--first-card);
  padding: 20px;
  border-radius: 14px;
  height: fit-content;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fill-available;
  border-radius: 10px;
`;
const TeamNames = styled.button`
  font-size: 20px;
  font-family: var(--font-family);
  color: black;
  padding: 10px 30px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;
  background-color: var(--second-card);

  &:hover {
    color: var(--orange);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.3);
    position: relative;
    z-index: 10;
  }
`;

export default SelectionMenu;
