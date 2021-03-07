import React from 'react';
import { Card ,Tooltip, Typography} from 'antd';
import gameConstants from './../../constants/gameConstants';

const ScoreComponent = ({score, gameRegime}) => {

  const {player, enemy} = score;
  const {gameRegimesDescriptions} = gameConstants;
  const {Text, Link } = Typography;

  const style = { 
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    fontSize: '20px',
    textAlign: 'center',
    border: 'none',
  };
  
  return (
    <Card style={style} >
      <Text>{player} : {enemy}</Text><br/>
        <Tooltip 
          placement="bottomRight" 
          title={gameRegime && gameRegimesDescriptions[gameRegime].description}
          className={style.hoverText}
        >
        <Link style={{color: 'black'}}  underline>{`regime: ${gameRegime}`}</Link >
      </Tooltip>
    </Card>
  )
};

export default ScoreComponent