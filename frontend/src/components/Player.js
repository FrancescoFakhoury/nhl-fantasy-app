import React, { useContext, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";
import { getPointValueFromAugmentedPlayer } from "../helpers";
import { Context } from "./Context";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Player = ({ player, teamId, mode, isAdded }) => {
  const { setMyTeam, myTeam } = useContext(Context);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  const handleClick = (player) => {
    const newTeam = [...myTeam];
    const index = newTeam.indexOf(player);
    newTeam.splice(index, 1);
    console.log("hello", newTeam);
    setMyTeam(newTeam);
  };

  const isSelectionMode = mode === "player-selection";

  const handleFetch = (player) => {
    const promise1 = fetch(
      `https://statsapi.web.nhl.com/api/v1/people/${player.person.id}/stats?stats=statsSingleSeason&season=20202021`
    ).then((res) => res.json());
    // .then((json) => {
    //   setSinglePlayer(json.stats[0].splits[0].stat);
    // });
    console.log("smokey", teamId);
    const promise2 = fetch(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamId}/roster`
    ).then((res) => res.json());

    Promise.all([promise1, promise2]).then((result) => {
      const { goals, assists, hits, shots, saves } =
        result[0].stats[0].splits[0].stat;
      let obj = {
        teamId,
        playerId: player.person.id,
        goals,
        assists,
        hits,
        shots,
        saves,
        playerName: player.person.fullName,
      };
      setMyTeam((oldValue) => {
        const newList = oldValue.slice();

        const isInTeam = newList.find(
          (person) => person.person.id === player.person.id
        );
        if (!isInTeam && newList.length < 8) {
          newList.push({ ...player, ...obj });
        }
        return newList;
      });
    });

    // const goals = singlePlayer.stat.goals;
    // console.log(goals);
    // teamArray.push(goals);
  };

  console.log(player);
  return (
    // <animated.div {...bind()} style={{ x, y }}>
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}

    >
      <Wrapper>
        {player.key}
        <PlayerName>{player.person.fullName}</PlayerName>
        {isSelectionMode && <PlayerNumber>{player.jerseyNumber}</PlayerNumber>}
        {!isSelectionMode && (
          <>
            <Stats>
              <StatType>Goals :</StatType>
              <SingleStat>{player.goals}</SingleStat>
            </Stats>
            <Stats>
              <StatType>Assists :</StatType>
              <SingleStat> {player.assists}</SingleStat>
            </Stats>
            <Stats>
              <StatType>Shots :</StatType>{" "}
              <SingleStat>{player.shots}</SingleStat>
            </Stats>
            <Stats>
              <StatType>Hits :</StatType>{" "}
              <SingleStat> {player.hits}</SingleStat>
            </Stats>
            <Stats>
              <StatType>Saves :</StatType>{" "}
              <SingleStat> {player.saves}</SingleStat>
            </Stats>
            <Stats>
              <StatType>Total:</StatType>{" "}
              <SingleStat>
                {getPointValueFromAugmentedPlayer(player).toFixed(2)}
              </SingleStat>
            </Stats>
            <RemoveButton
              onClick={() => {
                handleClick(player);
              }}
            >
              remove
            </RemoveButton>
          </>
        )}
        {isSelectionMode && !isAdded && (
          <PlayerButton
            onClick={() => {
              handleFetch(player);
            }}
          >
            Add to Team
          </PlayerButton>
        )}
      </Wrapper>
    </animated.div>
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
  box-shadow: 15px 15px 15px -15px;
  border-radius: 6px;
  width: 300px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    /* transform: scale(1.1); */
  }
`;

const RemoveButton = styled.button`
  font-size: 20px;
  font-family: var(--font-family-graduate);
  color: black;
  padding: 3px 10px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;

  &:hover {
    color: var(--red);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
    position: relative;
    z-index: 10;
  }
`;

const Stats = styled.p`
  font-family: var(--font-family);
  text-align: center;
`;

const PlayerNumber = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-family: var(--font-family-graduate);
  opacity: 0.87;
  font-weight: bold;
`;

const PlayerName = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-family: var(--font-family-graduate);
  opacity: 0.87;
  font-weight: bold;
`;
const SingleStat = styled.span`
  font-family: var(--font-family-graduate);
  font-weight: bold;
`;
const StatType = styled.span`
  font-family: var(--font-family-graduate);
`;

const PlayerButton = styled.button`
  font-size: 20px;
  font-family: var(--font-family-graduate);
  color: black;
  padding: 3px 10px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 4px;
  border: solid grey 1px;

  &:hover {
    color: var(--red);
    opacity: 1;
    cursor: pointer;
    transform: scale(1.1);
    position: relative;
    z-index: 10;
  }

  &:active {
  }
`;

export default Player;
