import React, { createContext, useState } from 'react';

interface NavContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const NavContext = createContext<NavContextProps>({
  isMenuOpen: false,
  toggleMenu: () => {
    /* intentionally left blank */
  },
  closeMenu: () => {
    /* intentionally left blank */
  },
});

export const NavProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <NavContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </NavContext.Provider>
  );
};
