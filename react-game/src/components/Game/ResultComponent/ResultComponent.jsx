import React, { useContext } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Spin, Button } from 'antd';
import checkIsGameFinished from './../../../utils/checkIsGameFinished';
import { NavLink } from 'react-router-dom';

const ResultComponent = ({gameRegime}) => {

  console.log(gameRegime)
  const {
    state, switchStageAC
  } = useContext(GameContext);

  const {fightResult, score} = state;
  const {gameResults:{tie, win, loss}, gameStages:{choose}} = gameConstants;

  const finished = checkIsGameFinished(score, gameRegime);

  if(fightResult === tie) {
    return (
      <div>
        You have tied!
        <Button onClick={() => {
          switchStageAC(choose);
          }}>Next round</Button>
      </div>
    )
  }
  if(fightResult === loss) {
    return finished ? (
      <div>
        You have lost a battle! Wanna play another one?
        <NavLink to="/regimes" >Start new game</NavLink>
      </div>
    )
    : (
      <div>
        You have lost a round! 
        <Button onClick={() => {
          switchStageAC(choose);
          }}>Next round</Button>
      </div>
    )
  }
  if(fightResult === win) {
    return finished ? (
      <div>
        You have won a battle! Wanna play another one?
        <NavLink to="/regimes" >Start new game</NavLink>
      </div>
    )
    : (
      <div>
        You have won a round!
        <Button onClick={() => {
          switchStageAC(choose);
          }}>Next round</Button>
      </div>
    )
  }
  return (
    <Spin/>
  )
};

export default ResultComponent  