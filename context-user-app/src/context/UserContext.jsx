import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Олена" },
    { id: 2, name: "Іван" },
  ]);

  const addUser = (name) => {
    setUsers([...users, { id: Date.now(), name }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
