import React from "react";
import styled from "styled-components";
import Team from "./Team"

const Homepage = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

const Wrapper= styled.div`
display: flex;
gap: 2rem;
`

export default Homepage;
