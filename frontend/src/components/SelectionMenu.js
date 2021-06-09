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
        setSpecificTeam({ roster: json.roster, teamId: team.id });
        setIsTeamClicked(true);
      });
  };

  if (isTeamClicked === false) {
    return (
      <Wrapper>
        <PlayerSelectText>
          Please select your players from the desired team bellow:
        </PlayerSelectText>
        <TeamsWrapper>
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
        </TeamsWrapper>
      </Wrapper>
    );
  } else {
    return (
      <PlayerWrapper>
        <PlayerSelectText>
          Please select your players from the chosen team:
        </PlayerSelectText>
        <TeamWrapper>
          {specificTeam.roster.map((player, index) => {
            const isAdded = myTeam.find((e) => e.playerId === player.person.id);
            return (
              <Player
                teamId={specificTeam.teamId}
                player={player}
                key={index}
                mode="player-selection"
                isAdded={isAdded}
              />
            );
          })}
        </TeamWrapper>
        <TeamSelectButton onClick={() => setIsTeamClicked(false)}>
          Return to Team Select
        </TeamSelectButton>
      </PlayerWrapper>
    );
  }
};

const PlayerSelectText = styled.div`
  font-size: 1.6rem;
  color: black;
  font-family: var(--font-family-graduate);
  text-align: center;
  padding-top: 20px;
`;

const TeamSelectButton = styled.button`
  font-size: 40px;
  font-family: var(--font-family-graduate);
  color: white;
  padding: 3px 10px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;
  width: fit-content;
  background-color: var(--darkblue);

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--first-card);
  padding: 20px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--first-card);
  padding: 20px;
  border-radius: 14px;
  margin-top: 7rem;
  align-items: center;
`;
const TeamsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: minmax(150px, auto) repeat(7, 150px);
`;

const TeamWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: minmax(200px, auto) repeat(6, 200px);
`;

const TeamNames = styled.button`
  font-size: 20px;
  font-family: var(--font-family-graduate);
  color: black;
  padding: 10px 30px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;
  background-color: var(--second-card);
  max-width: 250px;

  &:hover {
    color: var(--red);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.3);
    position: relative;
    z-index: 10;
  }
`;

export default SelectionMenu;
