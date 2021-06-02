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
    <BigWrapper>
      {myTeam.length > 0 ? (
        <>
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
        </>
      ) : (
        <div>
          <p>EMPTY</p>
        </div>
      )}
    </BigWrapper>
  );
};
const BigWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: var(--first-card);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--second-card);
`;

export default Team;
