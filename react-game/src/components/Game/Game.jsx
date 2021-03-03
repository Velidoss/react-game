import React, { useContext } from 'react';
import GameContext from '../../Context/GameContext/GameContext';
import ScoreComponent from './../Score/ScoreComponent';
import GameStagesComponent from './GameStages/GameStagesComponent';

const Game = () => {
  const {
    state,
  } = useContext(GameContext);

  const {score} = state;
  return (
    <div>
      <ScoreComponent score={score} />
      <GameStagesComponent />
    </div>
  )
};

export default Game;