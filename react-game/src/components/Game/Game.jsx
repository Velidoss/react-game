import React, { useContext } from 'react';
import gameConstants from '../../constants/gameConstants';
import GameContext from '../../Context/GameContext/GameContext';
import ChooseWeaponComponent from './ChooseWeapon/ChooseWeaponComponent';
import FightComponent from './FightComponent/FightComponent';
import { Spin } from 'antd';

const Game = () => {
  const {
    state,
    setWeaponAC,
    setEnemyWeaponAC,
    setScoreAC,
    switchStageAC
  } = useContext(GameContext);
  
  const {weapons, gameStages:{choose, fight, result}} = gameConstants;

  const {gameStage} = state;
  console.log(`render with ${state.gameStage}`);
  if(gameStage === choose) {
    return <ChooseWeaponComponent />
  }
  if(gameStage === fight) {
    return <FightComponent />
  }
  if(gameStage === result) {
    return <div>result</div>
  }
  return <Spin/>
};

export default Game;