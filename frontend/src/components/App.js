import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./Sidebar";
import Team from "./Team";
import NHLTeams from "./NHLTeams";
import SelectionMenu from "./SelectionMenu";
import Profile from "./Profile";
import HowToPlay from "./HowToPlay";

function App() {
  document.body.style =
    "background: linear-gradient(to right, purple, turquoise)";

  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrap>
        <Header />
        <Switch>
          {!isAuthenticated ? (
            <Route to="/signin">
              <SignIn />
            </Route>
          ) : (
            <Wrapper>
              <Sidebar />
              <Route exact path="/">
                <Profile />
              </Route>
              <Route path="/players">
                <SelectionMenu />
              </Route>
              <Route path="/team">
                <Team />
              </Route>
              <Route path="/how-to-play">
                <HowToPlay />
              </Route>
            </Wrapper>
          )}
        </Switch>
        </Wrap>
    </BrowserRouter>
  );
}

const Wrap = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  height: 100vh;
  margin: 0px 1.2rem 20px 8px;
`;

export default App;
