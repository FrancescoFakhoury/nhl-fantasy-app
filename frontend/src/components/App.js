import React, {useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";
import {Context} from "./Context"
import Homepage from "./Homepage"


function App() {
  document.body.style = "background: RGB(255, 138, 0)";
  const {currentUser} = useContext(Context)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header  />
      <Switch>
        {currentUser === null ? (
          <SignIn  />
        ) : (
          <Homepage />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
