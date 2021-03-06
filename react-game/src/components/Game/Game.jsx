import React, { useContext } from 'react';
import GameContext from '../../Context/GameContext/GameContext';
import gameConstants from '../../constants/gameConstants';

import { Spin } from 'antd';
import MainContext from '../../Context/MainContext/MainContext';
import ChooseWeaponComponent from './ChooseWeapon/ChooseWeaponComponent';
import FightComponent from './FightComponent/FightComponent';
import ResultComponent from './ResultComponent/ResultComponent';
import ContainerHOC from './ContainerHOC/ContainerHOC';

const Game = () => {
  const {state} = useContext(GameContext);
  const {gameRegime} = useContext(MainContext);
  
  const { gameStages:{choose, fight, result} } = gameConstants;

  const {gameStage} = state;

  if(gameStage === choose) {
    return <ContainerHOC>
            <ChooseWeaponComponent />
          </ContainerHOC>
  }
  if(gameStage === fight) {
    return <ContainerHOC>
            <FightComponent />
          </ContainerHOC>
  }
  if(gameStage === result) {
    return <ContainerHOC>
            <ResultComponent gameRegime={gameRegime} />
          </ContainerHOC>
  }
  return <Spin/>
};

export default Game;