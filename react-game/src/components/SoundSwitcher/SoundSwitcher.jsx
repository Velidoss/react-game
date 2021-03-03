import React, { useContext } from 'react';
import SoundContext from '../../Context/SoundContext/SoundContext';
import {SoundOutlined, SoundFilled} from '@ant-design/icons';

const SoundSwitcher = () => {

  const { soundState, toggleSoundState} = useContext(SoundContext);

  return (
    <div
      onClick={() => toggleSoundState(!soundState)}
    >
      {
        soundState 
        ? <SoundFilled />
        : <SoundOutlined />
      }
    </div>
  )
};

export default SoundSwitcher