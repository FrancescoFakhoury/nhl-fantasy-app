import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import Player from "./Player";

const Team = () => {
  const { myTeam, setMyTeam, singlePlayer } = useContext(Context);

  const handleClick = (player) => {
    const newTeam = [...myTeam];
    const index = newTeam.indexOf(player);
    newTeam.splice(index, 1);
    setMyTeam(newTeam);
  };

  return (
    <>
      {myTeam.length > 0 ? (
        <Big3>
        <BigBigWrapper>
          <PlayerListText>Your Team :</PlayerListText>
          <NumberOfPlayers>
            number of players: {myTeam.length} / 8
          </NumberOfPlayers>
          <BigWrapper>
            {myTeam.map((player) => {
              console.log("soup", player);
              return (
                <Wrapper>
                  <Player player={player} mode="team-view" />
                  <RemoveButton
                    onClick={() => {
                      handleClick(player);
                    }}
                  >
                    remove
                  </RemoveButton>
                </Wrapper>
              );
            })}
          </BigWrapper>
          <ButtonWrapper>
          <ConfirmButton>Confirm your team</ConfirmButton>
          <UpdateButton>Update your total points</UpdateButton>
          <TotalPoints> Total : </TotalPoints>
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
  font-family: var(--font-family);
  font-size: 20px;
`;

const ConfirmButton = styled.button`
font-size: 20px;
  font-family: var(--font-family);
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
`

const UpdateButton = styled.button`
font-size: 20px;
  font-family: var(--font-family);
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
`

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
margin-top: 5rem;
text-align:center;
`

const BigBigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 968px;
  margin-top: 7rem;
`;

const Big3 = styled.div`
  display: flex;
  justify-content: center;
`;

const TotalPoints = styled.p`
  margin: 0;
  font-family: var(--font-family);
  font-size: 30px;
`;

const BigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Wrapper1 = styled.div`
  width: 400px;
`;

const PlayerListText = styled.p`
  font-family: var(--font-family);
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RemoveButton = styled.button`
  font-size: 20px;
  font-family: var(--font-family);
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
