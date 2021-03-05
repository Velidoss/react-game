import React, {useState} from 'react';
import MainContext from './MainContext';

const MainState = ({children}) => {

  const [globalRegime, setGlobalRegime] = useState('menu');
  const [gameRegime, setGameRegime] = useState('');

  

  return <MainContext.Provider
    value={{
      globalRegime, 
      setGlobalRegime, 
      gameRegime, 
      setGameRegime,
    }}
  >
    {children}
  </MainContext.Provider>
};

export default MainState;