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

  console.log("ahahahahha", myTeam);

  return (
    <>
      {myTeam.length > 0 ? (
        <Big3>
        <BigBigWrapper>
          <PlayerListText>Your Team :</PlayerListText>
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
          <TotalPoints> Total : </TotalPoints>
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

const BigBigWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 968px;
margin-bottom: 5rem;
`;

const Big3 = styled.div`
display: flex;
justify-content: center;
width: fill-available;
height: fill-available;
/* padding-right: 13rem; */
`;

const TotalPoints = styled.p`
margin: 0;
font-family: var(--font-family);
font-size: 30px;
`

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
    color: var(--turquoise);
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
`;

const Message = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-left: 2rem;
  color: #fff;
  width: 600px;
`;

export default Team;
