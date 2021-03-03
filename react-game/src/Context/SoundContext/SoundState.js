
import SoundContext from './SoundContext';
import { useState } from 'react';

const SoundState = ({children}) => {

  const [soundState, toggleSoundState] = useState(true);

  return <SoundContext.Provider
    value={{
      soundState,
      toggleSoundState
    }}
  >
    {children}
  </SoundContext.Provider>
};

export default SoundState;