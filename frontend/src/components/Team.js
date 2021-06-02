import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./Context";
import Player from "./Player";

const Team = () => {
  const { myTeam, setMyTeam } = useContext(Context);

  const handleClick = (player) => {
    const newTeam = [...myTeam];
    const index = newTeam.indexOf(player);
    newTeam.splice(index, 1);
    setMyTeam(newTeam);
  };
  return (
    <>
      {myTeam.length > 0 ? (
        <BigWrapper>
          {myTeam.map((player) => {
            return (
              <Wrapper>
                <Player player={player} />
                <button
                  onClick={() => {
                    handleClick(player);
                  }}
                >
                  remove
                </button>
              </Wrapper>
            );
          })}
        </BigWrapper>
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
const BigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--first-card);
  width: 100vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--second-card);
`;

const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--first-card);
  width: 60vw;
`;

const Message = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export default Team;
