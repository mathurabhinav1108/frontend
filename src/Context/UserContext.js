import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState({}); 

  return (
    <UserContext.Provider value={{ info, setInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easier access
export const useRole = () => useContext(UserContext);
