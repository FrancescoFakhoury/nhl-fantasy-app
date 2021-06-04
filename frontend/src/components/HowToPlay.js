import React from "react";
import styled from "styled-components";

const HowToPlay = () => {
  return (
    <EvenBiggerWrapper>
      <HowToWrapper>
        <Title>How to Play</Title>
        <List>
          <ListItems>
            <Steps>Step 1:</Steps> Pick a total of 8 players to create your
            fantasy team{" "}
          </ListItems>
          <ListItems>
            <Steps>Step 2:</Steps> Click the Confirm button to confirm your team{" "}
          </ListItems>
          <ListItems>
            <Steps>Step 3:</Steps> When you are ready, press the Update total
            button to see how your team has performed
          </ListItems>
        </List>
      </HowToWrapper>
    </EvenBiggerWrapper>
  );
};
const EvenBiggerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Steps = styled.span`
font-weight: bold;
`
const HowToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: fit-content;
  border: solid 1px grey;
  height: fit-content;
  box-shadow: 20px 20px 20px -20px;
  padding: 0px 30px;
`;
const List = styled.ul`
  list-style-type: none;
`;

const ListItems = styled.li`
  padding: 30px 0px;
  font-family: var(--font-family);
  font-size: 18px;
  color: purple;
  font-weight: bold;
`;

const Title = styled.h1`
  color: black;
  font-family: var(--font-family);
`;

export default HowToPlay;
