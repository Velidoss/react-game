import React, { useContext } from 'react';
import GameContext from './../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import ChooseWeaponComponent from './../ChooseWeapon/ChooseWeaponComponent';
import FightComponent from './../FightComponent/FightComponent';
import ResultComponent from '../ResultComponent/ResultComponent';
import { Spin } from 'antd';

const GameStagesComponent = () => {
  const {
    state,
  } = useContext(GameContext);
  
  const { gameStages:{choose, fight, result} } = gameConstants;

  const {gameStage} = state;
  console.log(`render with ${state.gameStage}`);
  if(gameStage === choose) {
    return <ChooseWeaponComponent />
  }
  if(gameStage === fight) {
    return <FightComponent />
  }
  if(gameStage === result) {
    return <ResultComponent />
  }
  return <Spin/>
};

export default GameStagesComponent