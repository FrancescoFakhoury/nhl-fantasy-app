import React, {useContext} from "react";
import styled from "styled-components"
import {Context} from "./Context" 
const Homepage = () => {
    const {teams} = useContext(Context)

    const teamsArr = Object.values(teams.teams);
    console.log(teamsArr)

    return (
        <Text>
        hi
        </Text>
    )
}

const Text = styled.p`
  font-size: 40px;
  font-family: var(--font-family);
`;

export default Homepage;