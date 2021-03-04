import React, { useContext } from 'react';
import { Card } from 'antd';
import GameContext from '../../Context/GameContext/GameContext';

const ScoreComponent = () => {

  const {
    state,
  } = useContext(GameContext);

  const {score:{player, enemy}} = state;

  const style = {
    width: '300px', 
    height: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontSize: '22px',
    textAlign: 'center'
  };
  
  return (
    <Card style={style}>
      <p>{player} : {enemy}</p>
    </Card>
  )
};

export default ScoreComponent