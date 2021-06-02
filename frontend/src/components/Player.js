import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";

const Player = ({ player, key }) => {
  console.log(player);
  const { myTeam, setMyTeam } = useContext(Context);


  const handleClick = (player) => {
    const newList = myTeam.slice();
    newList.push(player);
    setMyTeam(newList);
  }

  return (
    <Wrapper>
      <PlayerName
        onClick={() => {
          handleClick(player);
        }}
      >
        {player.person.fullName}
      </PlayerName>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const PlayerName = styled.button`
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

export default Player;
