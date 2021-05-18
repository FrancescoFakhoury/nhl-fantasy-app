import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";

function App() {
  document.body.style = "background: RGB(255, 138, 0)";
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        {currentUser === null ? (
          <SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
        ) : (
          <Text> hi </Text>
        )}
      </Switch>
    </BrowserRouter>
  );
}

const Text = styled.p`
  font-size: 40px;
  font-family: var(--font-family);
`;

export default App;
