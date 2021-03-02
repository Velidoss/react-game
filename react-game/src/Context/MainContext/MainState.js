import React, {useState} from 'react';
import MainContext from './MainContext';

const MainState = ({children}) => {

  const [globalRegime, setGlobalRegime] = useState('menu');
  const [gameRegime, setGameregime] = useState('');

  

  return <MainContext.Provider
    value={{
      globalRegime, 
      setGlobalRegime, 
      gameRegime, 
      setGameregime,
    }}
  >
    {children}
  </MainContext.Provider>
};

export default MainState;