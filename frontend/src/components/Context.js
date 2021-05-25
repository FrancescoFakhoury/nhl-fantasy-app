import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => res.json())
      .then((json) => {
        setTeams(json);
      })
      .catch((err) => console.log("err"));
  }, []);

  return (
    <Context.Provider
      value={{
        teams,
        setTeams,
      }}
    >
      {children}
    </Context.Provider>
  );
};
