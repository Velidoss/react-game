import GlobalContext from './GlobalContext';
import { useState } from 'react';
import bg_pink from '../../assets/images/bg_pink.jpg';
import bg_green from '../../assets/images/bg_green.jpg';
import bg_orange from '../../assets/images/bg_orange.jpg';

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