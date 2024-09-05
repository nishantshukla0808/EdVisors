// RoleContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the role
const RoleContext = createContext();

// Custom hook to use the Role Context
export const useRole = () => useContext(RoleContext);

// Provider component
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null); // role can be 'student' or 'counsellor'

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
