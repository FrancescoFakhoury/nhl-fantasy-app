import React from 'react'
import styled from "styled-components"

const HowToPlay = () => {
    return (
        <Wrapper>
           <h1>How to Play</h1>
           <ul>
               <li>Step 1: Pick a total of 8 players to create your fantasy team </li>
               <li>Step 2: Click the Confirm button to confirm your team </li>
               <li>Step 3: When you are ready, press the Update total button to see how your team has performed</li>
           </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--first-card)
`

export default HowToPlay
