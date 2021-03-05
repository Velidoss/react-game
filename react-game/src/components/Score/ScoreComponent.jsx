import React from 'react';
import { Card } from 'antd';

const ScoreComponent = ({score}) => {

  const {player, enemy} = score;
  console.log(score);

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