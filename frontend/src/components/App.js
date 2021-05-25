import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";
import Homepage from "./Homepage"
import {useAuth0} from "@auth0/auth0-react"


function App() {
  document.body.style = "background: RGB(255, 138, 0)";
  const {isAuthenticated} = useAuth0();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header  />
      <Switch>
        {!isAuthenticated ? (
          <SignIn  />
        ) : (
          <Homepage />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
