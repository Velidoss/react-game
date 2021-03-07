import GlobalContext from './GlobalContext';
import { useState } from 'react';
import bg_pink from '../../assets/images/bg_pink.jpg';

const GlobalState = ({children}) => {

  const [soundState, toggleSoundState] = useState(true);
  const [languageState, toggleLanguageState] = useState('title');
  const [backgroundState, toggleBackgroundState] = useState(bg_pink);

  return <GlobalContext.Provider
    value={{
      soundState,
      toggleSoundState,
      languageState,
      toggleLanguageState,
      backgroundState,
      toggleBackgroundState
    }}
  >
    {children}
  </GlobalContext.Provider>
};

export default GlobalState;