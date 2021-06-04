import React, { useContext, useState } from "react";
import { Context } from "./Context";
import styled from "styled-components";
import Player from "./Player";

const SelectionMenu = () => {
  const { teams, myTeam } = useContext(Context);
  const [isTeamClicked, setIsTeamClicked] = useState(false);
  const [specificTeam, setSpecificTeam] = useState(null);

  const teamsArr = Object.values(teams.teams);

  
  const handleClick = (team) => {
    fetch(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`)
      .then((res) => res.json())
      .then((json) => {
        setSpecificTeam({roster: json.roster, teamId: team.id});
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
          {specificTeam.roster.map((player, index) => {
            const isAdded = myTeam.find((e) => e.playerId === player.person.id) 
            return <Player teamId={specificTeam.teamId} player={player} key={index} mode="player-selection" isAdded={isAdded} />; 
          })}
        </TeamWrapper>
        <button onClick={() => setIsTeamClicked(false)}>Previous Page</button>
      </PlayerWrapper>
    );
  }
};

const PlayerSelectText = styled.div`
  font-size: 1.6rem;
  color: #FFF;
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
    color: var(--turquoise);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.3);
    position: relative;
    z-index: 10;
  }
`;

export default SelectionMenu;
