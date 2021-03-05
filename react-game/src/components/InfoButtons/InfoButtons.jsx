import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {Row, Col} from 'antd';
import SoundSwitcher from './../SoundSwitcher/SoundSwitcher';
import ScoreComponent from './../Score/ScoreComponent';
import GameContext from './../../Context/GameContext/GameContext';


const InfoButtons = () => {
  const location = useLocation();
  const [showScore, setShowScore] = useState(false);
  const {state} = useContext(GameContext);

  const {score} = state;

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
          && <ScoreComponent score={score} />
        }

      </Col>      
      <Col span={2} >
        <SoundSwitcher />
      </Col>
    </Row>
  )
};

export default InfoButtons;