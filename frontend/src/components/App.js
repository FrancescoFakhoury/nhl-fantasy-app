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

function App() {
  document.body.style = "background: RGB(255, 138, 0)";
  
  const { isAuthenticated } = useAuth0();

  

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Color>
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
                <Route exact path="/">
                  <Profile />
                </Route>
                <Route path="/players">
                  <SelectionMenu />
                </Route>
                <Route path="/team">
                  <Team />
                </Route>
                <Route path="/nhl-teams">
                  <NHLTeams />
                </Route>
              </ContentWrapper>
            </Wrapper>
          )}
        </Switch>
      </Color>
    </BrowserRouter>
  );
}

const Color = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
  height: 100vh;
  margin: 0px 1.2rem 20px 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: fill-available;
`;

export default App;
