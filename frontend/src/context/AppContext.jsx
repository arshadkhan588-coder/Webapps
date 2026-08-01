import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen }), [isMenuOpen]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
