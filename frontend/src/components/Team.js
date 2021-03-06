import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import Player from "./Player";
import { getPointValueFromAugmentedPlayer } from "../helpers";
import image from "../assets/ice.jpg";

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

  const handleDelete = () => {
    setMyTeam([]);
    const data = myTeam;
    fetch("/api/delete-team", {
      method: "DELETE",
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

  let total = 0;

  console.log(isButtonPressed);

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
              <ActionButtons onClick={handleDelete}>
                Remove All Players
              </ActionButtons>
              <ActionButtons onClick={handlePost}>
                Confirm your team
              </ActionButtons>
              <ActionButtons onClick={handlePoints}>
                Update your points
              </ActionButtons>
            </ButtonWrapper>
            {isButtonPressed === true ? (
              <TotalPoints>
                {" "}
                Total Points : <NumberColor>
                  {total.toFixed(2)}
                </NumberColor>{" "}
              </TotalPoints>
            ) : (
              <TotalPoints> Total Points : 0 </TotalPoints>
            )}
          </BigBigWrapper>
        </Big3>
      ) : (
        <EvenBiggerWrapper>
          <MessageWrapper>
            <Message>
              Your team is <ColorSpan>empty</ColorSpan>, please select some
              players to begin your fantasy journey
            </Message>
          </MessageWrapper>
        </EvenBiggerWrapper>
      )}
    </>
  );
};

const ColorSpan = styled.span`
  color: red;
`;

const EvenBiggerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  height: 100vh;
  background: url(${image});
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: fit-content;
  border: solid 1px grey;
  height: fit-content;
  box-shadow: 20px 20px 20px -20px;
  padding: 0px 30px;
`;

const NumberOfPlayers = styled.p`
  font-family: var(--font-family-graduate);
  font-size: 30px;
`;

const NumberColor = styled.span`
  color: red;
`;

const ActionButtons = styled.button`
  font-size: 30px;
  font-family: var(--font-family-graduate);
  color: white;
  padding: 5px 20px;
  margin: 20px;
  opacity: 0.87;
  border-radius: 8px;
  border: solid grey 1px;
  width: fit-content;
  background: var(--darkblue);
  transition: transform 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Numbers = styled.span`
  color: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  font-size: 50px;
`;

const BigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PlayerListText = styled.p`
  font-family: var(--font-family-graduate);
  font-size: 50px;
  margin: 30px 0 0 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: 40px;
  text-align: center;
  color: black;
  width: 800px;
  margin: 0;
  padding: 80px;
  font-family: var(--font-family-graduate);
`;

export default Team;
