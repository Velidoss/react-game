import React, {useState} from 'react';
import MainContext from './MainContext';

const MainState = ({children}) => {

  const [globalRegime, setGlobalRegime] = useState('menu');
  const [gameRegime, setGameRegime] = useState('');

  const refreshMainState = () => {
    setGlobalRegime('menu')
    setGameRegime('bo3')
  }

  return <MainContext.Provider
    value={{
      globalRegime, 
      setGlobalRegime, 
      gameRegime, 
      setGameRegime,
      refreshMainState
    }}
  >
    {children}
  </MainContext.Provider>
};

export default MainState;