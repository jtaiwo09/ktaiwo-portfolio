"use client";
import { ThemeProvider } from "next-themes";
import React, { createContext, use, useState } from "react";

interface IStore {
  showNav: boolean;
  toggleShowNavbar: () => void;
}
export const StoreContext = createContext<IStore>({
  showNav: false,
  toggleShowNavbar: () => {},
});

const Providers = ({ children }: IChildren) => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNavbar = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StoreContext.Provider value={{ showNav, toggleShowNavbar }}>
        {children}
      </StoreContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
