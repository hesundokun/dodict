import React, { useContext } from 'react';

interface IChildrenNode {
  children: React.ReactNode;
}

const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }: IChildrenNode) => {
  return <GlobalContext.Provider value={{ ...import.meta.env }}>{children}</GlobalContext.Provider>;
};

const useConfig = () => useContext(GlobalContext);

export { useConfig, GlobalProvider };
