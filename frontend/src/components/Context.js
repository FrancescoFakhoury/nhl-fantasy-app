import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [myTeam, setMyTeam] = useState([]);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => res.json())
      .then((json) => {
        setTeams(json);
      })
      .catch((err) => console.log("err"));
  }, []);

  useEffect(() => {
    fetch("/api/get-team")
      .then((res) => res.json())
      .then((json) => {
        setMyTeam(json.data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        teams,
        setTeams,
        myTeam,
        setMyTeam,
        isButtonPressed,
        setIsButtonPressed,
      }}
    >
      {children}
    </Context.Provider>
  );
};
