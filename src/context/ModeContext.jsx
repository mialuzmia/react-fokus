import { useContext, createContext, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('focus');

  const changeMode = (newMode) => {
    setMode(newMode);
  }

  return  (
    <ModeContext.Provider value={{mode, changeMode}}>
      {children}
    </ModeContext.Provider>
  );
}


const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};
export default useMode;