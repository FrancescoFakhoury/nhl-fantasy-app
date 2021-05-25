import React, { useContext } from "react";
import { Context } from "./Context";
import styled from "styled-components";

const SelectionMenu = () => {
  const { teams } = useContext(Context);

  const teamsArr = Object.values(teams.teams);
  console.log(teamsArr);

  return (
    <Wrapper>
      {teamsArr.map((team) => {
        return <Text>{team.name}</Text>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid black 2px;
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
`;
const Text = styled.p`
  font-size: 20px;
  font-family: var(--font-family);
`;

export default SelectionMenu;
