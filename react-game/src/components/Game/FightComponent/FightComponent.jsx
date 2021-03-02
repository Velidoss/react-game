import React, { useContext, useEffect } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';

const FightComponent = () => {

  const {
    state,
    state:{
      weapon, enemyWeapon
    },
    setScoreAC
  } = useContext(GameContext);
  console.log(state);

  const {weapons, gameStages:{results}} = gameConstants;

  useEffect(() => {
    setTimeout(() => {
      setScoreAC(weapon, enemyWeapon);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Your weapon</h2>
        {weapon}
      <h2>Enemy weapon</h2>
        {enemyWeapon}
    </div>
  )
};

export default FightComponent