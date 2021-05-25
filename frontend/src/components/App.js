import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";
import Homepage from "./Homepage";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./Sidebar";
import Team from "./Team";
import NHLTeams from "./NHLTeams";

function App() {
  document.body.style = "background: RGB(255, 138, 0)";
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        {!isAuthenticated ? (
          <Route to="/signin">
            <SignIn />
          </Route>
        ) : (
          <Wrapper>
            <Sidebar />
            <ContentWrapper>
              <Route to="/" exact>
                <Homepage />
              </Route>
              <Route to="/team">
                <Team />
              </Route>
              <Route to="/nhl-teams">
                <NHLTeams />
              </Route>
            </ContentWrapper>
          </Wrapper>
        )}
      </Switch>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div``;

export default App;
