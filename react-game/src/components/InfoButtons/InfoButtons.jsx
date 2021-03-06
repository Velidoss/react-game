import React, {useContext, useEffect, useState} from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import SoundSwitcher from './../SoundSwitcher/SoundSwitcher';
import ScoreComponent from './../Score/ScoreComponent';
import GameContext from './../../Context/GameContext/GameContext';
import MainContext from './../../Context/MainContext/MainContext';


const InfoButtons = () => {
  const location = useLocation();
  const [showScore, setShowScore] = useState(false);
  const {state} = useContext(GameContext);
  const {gameRegime} = useContext(MainContext);

  const {score} = state;

  useEffect(() => {
    location.pathname === '/game' 
    ? setShowScore(true)
    : setShowScore(false)
  }, [location.pathname])

  return (
    <Row style={{height: '100px'}}>
      <Col  
        md={{span: 2}} 
        xs={{span: 6}} 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button>
          <NavLink to="/regimes">
            Menu
          </NavLink>
        </Button>
      </Col>
      <Col 
        md={{span: 8, offset: 6}} 
        xs={{span: 12}}
      >
        {
          showScore
          && <ScoreComponent score={score} gameRegime={gameRegime} />
        }
      </Col>      
      <Col  
        md={{span: 2, offset: 4}} 
        xs={{span: 6}} 
      >
        <SoundSwitcher />
      </Col>
    </Row>
  )
};

export default InfoButtons;