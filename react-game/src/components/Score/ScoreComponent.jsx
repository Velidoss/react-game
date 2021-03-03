import React, { useContext } from 'react';
import { Card } from 'antd';
import GameContext from './../../Context/GameContext/GameContext';

const ScoreComponent = (score) => {

  const {
    state,
  } = useContext(GameContext);

  const {score:{player, enemy}} = state;
  
  return (
    <Card style={{ width: 300 }}>
      <p>{player} : {enemy}</p>
    </Card>
  )
};

export default ScoreComponent