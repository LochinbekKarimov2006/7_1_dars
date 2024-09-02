import React, { createContext, useState } from 'react';

// 1. Contextni yaratish
export const MyContext = createContext();

export function MyProvider({ children }) {
  const [value, setValue] = useState("salom");

  return (
    // 2. Provider orqali qiymatni ulashish
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}