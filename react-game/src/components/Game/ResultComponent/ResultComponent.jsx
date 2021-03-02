import React, { useContext } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';

const ResultComponent = (props) => {

  const {
    state,
    setWeaponAC,
    setEnemyWeaponAC,
    switchStageAC
  } = useContext(GameContext);
  console.log(state);

  return (
    <div>
      Winner is: {}
    </div>
  )
};

export default ResultComponent  