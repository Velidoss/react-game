import React from 'react';
import { Card } from 'antd';

const ScoreComponent = ({score, gameRegime}) => {

  const {player, enemy} = score;

  const style = { 
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontSize: '20px',
    textAlign: 'center',
    border: 'none',
  };
  
  return (
    <Card style={style} >
      <span>{player} : {enemy}</span><br/>
      <span>{`regime: ${gameRegime}`}</span>
    </Card>
  )
};

export default ScoreComponent