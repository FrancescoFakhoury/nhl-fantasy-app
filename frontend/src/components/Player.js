import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "./Context";

const Player = ({ player, key }) => {
  const { myTeam, setMyTeam, singlePlayer, setSinglePlayer } =
    useContext(Context);

  useEffect(() => {
    fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20202021`
    )
      .then((res) => res.json())
      .then((json) => {
        setSinglePlayer(json.stats[0].splits[0]);
      });
  }, []);

  console.log(singlePlayer)

  const handleClick = (player) => {
    const newList = myTeam.slice();
    newList.push(player);
    setMyTeam(newList);
  };

  return (
    <Wrapper>
      <PlayerName>{player.person.fullName}</PlayerName>
      <PlayerButton
        onClick={() => {
          handleClick(player);
        }}
      >
        Add to Team
      </PlayerButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid grey 1px;
  margin: 10px;
  padding: 10px;
  background-color: var(--second-card);
  box-shadow: 20px 20px 15px -20px;
`;

const PlayerName = styled.p`
  font-size: 20px;
  width: 100px;
  text-align: center;
`;

const PlayerButton = styled.button`
  font-size: 15px;
  font-family: var(--font-family);
  color: black;
  padding: 3px 10px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;

  &:hover {
    color: var(--orange);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
    position: relative;
    z-index: 10;
  }
`;

export default Player;
