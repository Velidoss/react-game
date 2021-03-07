import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({children}) => {

  const [soundState, toggleSoundState] = useState(true);
  const [languageState, toggleLanguageState] = useState('title');

  return <GlobalContext.Provider
    value={{
      soundState,
      toggleSoundState,
      languageState,
      toggleLanguageState,
    }}
  >
    {children}
  </GlobalContext.Provider>
};

export default GlobalState;