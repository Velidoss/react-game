import React, { useContext } from 'react';
import GameContext from './../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import ChooseWeaponComponent from './../ChooseWeapon/ChooseWeaponComponent';
import FightComponent from './../FightComponent/FightComponent';
import ResultComponent from '../ResultComponent/ResultComponent';
import { Spin } from 'antd';
import MainContext from './../../../Context/MainContext/MainContext';

const GameStagesComponent = () => {
  const {state} = useContext(GameContext);
  const {gameRegime} = useContext(MainContext);
  
  const { gameStages:{choose, fight, result} } = gameConstants;

  const {gameStage} = state;

  if(gameStage === choose) {
    return <ChooseWeaponComponent />
  }
  if(gameStage === fight) {
    return <FightComponent />
  }
  if(gameStage === result) {
    return <ResultComponent gameRegime={gameRegime} />
  }
  return <Spin/>
};

export default GameStagesComponent