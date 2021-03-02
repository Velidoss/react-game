import React, { useContext } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Spin, Button } from 'antd';

const ResultComponent = (props) => {

  const {
    state, switchStageAC
  } = useContext(GameContext);
  console.log(state);
  const {fightResult} = state;
  const {gameResults:{tie, win, loss}, gameStages:{choose}} = gameConstants;

  if(fightResult === tie) {
    return (
      <div>
        You have tied!
        <Button onClick={() => switchStageAC(choose)}>Start new game</Button>
      </div>
    )
  }
  if(fightResult === loss) {
    return (
      <div>
        You have lossed!
        <Button onClick={() => switchStageAC(choose)}>Start new game</Button>
      </div>
    )
  }
  if(fightResult === win) {
    return (
      <div>
        You won!
        <Button onClick={() => switchStageAC(choose)}>Start new game</Button>
      </div>
    )
  }
  return (
    <Spin/>
  )
};

export default ResultComponent  