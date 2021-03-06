import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({children}) => {

  const [soundState, toggleSoundState] = useState(true);

  return <GlobalContext.Provider
    value={{
      soundState,
      toggleSoundState
    }}
  >
    {children}
  </GlobalContext.Provider>
};

export default GlobalState;