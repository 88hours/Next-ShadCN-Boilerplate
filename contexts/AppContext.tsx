 import React, { createContext, useContext } from 'react';

interface AppContextType {
  // Add any global state properties here if needed
}

const AppContext = createContext<AppContextType>({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);