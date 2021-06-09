import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import Player from "./Player";
import { getPointValueFromAugmentedPlayer } from "../helpers";

const Team = () => {
  const { myTeam, setMyTeam, isButtonPressed, setIsButtonPressed } =
    useContext(Context);

  

  const handlePost = () => {
    const data = myTeam;
    setIsButtonPressed(false);
    fetch("/api/create-team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  const handlePoints = () => {
    setIsButtonPressed(true);
  };

  let total = 0;

  console.log(isButtonPressed)

  return (
    <>
      {myTeam.length > 0 ? (
        <Big3>
          <BigBigWrapper>
            <PlayerListText>Your Team </PlayerListText>
            <NumberOfPlayers>
              number of players: <Numbers>{myTeam.length} / 8</Numbers>
            </NumberOfPlayers>
            <BigWrapper>
              {myTeam.map((player) => {
                const points = getPointValueFromAugmentedPlayer(player);
                total += points;
                return (
                  <Wrapper>
                    <Player player={player} mode="team-view" />
                    
                  </Wrapper>
                );
              })}
            </BigWrapper>
            <ButtonWrapper>
              <ConfirmButton onClick={handlePost}>
                Confirm your team
              </ConfirmButton>
              <UpdateButton onClick={handlePoints}>
                Update your total points
              </UpdateButton>
              {isButtonPressed === true ? (
                <TotalPoints> Total : {total.toFixed(2)} </TotalPoints>
              ) : (
                <TotalPoints> Total : 0 </TotalPoints>
              )}
            </ButtonWrapper>
          </BigBigWrapper>
        </Big3>
      ) : (
        <EmptyWrapper>
          <Message>
            Your team is empty, please select some players to begin your fantasy
            journey
          </Message>
        </EmptyWrapper>
      )}
    </>
  );
};

const NumberOfPlayers = styled.p`
  font-family: var(--font-family-graduate);
  font-size: 30px;
`;

const ConfirmButton = styled.button`
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

const Numbers = styled.span`
color: red;
`

const UpdateButton = styled.button`
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

const BigBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1368px;
  margin-top: 7rem;
`;

const Big3 = styled.div`
  display: flex;
  justify-content: center;
`;

const TotalPoints = styled.p`
  margin: 0;
  font-family: var(--font-family-graduate);
  font-size: 30px;
`;

const BigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PlayerListText = styled.p`
  font-family: var(--font-family-graduate);
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;



const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fill-available;
  height: 100vh;
`;

const Message = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-left: 2rem;
  color: black;
  width: 600px;
`;

export default Team;
