import React from "react";
import data from "./data";
import { useState } from "react";

const Profilecontext = React.createContext();

const ProfileProvider = ({ children }) => {
  const [items, setItem] = useState(data);

  return (
    <Profilecontext.Provider value={{ items }}>
      {children}
    </Profilecontext.Provider>
  );
};

export { ProfileProvider, Profilecontext };
