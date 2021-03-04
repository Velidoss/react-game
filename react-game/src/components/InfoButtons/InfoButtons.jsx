import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Row, Col} from 'antd';
import SoundSwitcher from './../SoundSwitcher/SoundSwitcher';
import GameState from './../../Context/GameContext/GameState';
import ScoreComponent from './../Score/ScoreComponent';


const InfoButtons = () => {
  const location = useLocation();

  console.log(location )
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    location.pathname === '/game' 
    ? setShowScore(true)
    : setShowScore(false)
  }, [location.pathname])

  return (
    <Row >
      <Col span={6} offset={10}>
        {
          showScore
          && <GameState>
               <ScoreComponent />
             </GameState>
        }

      </Col>      
      <Col span={2} >
        <SoundSwitcher />
      </Col>
    </Row>
  )
};

export default InfoButtons;