import React, { useContext, useEffect } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Spin, Button, Row, Col } from 'antd';
import checkIsGameFinished from './../../../utils/checkIsGameFinished';
import { NavLink } from 'react-router-dom';
import getWinOrLoseSound from './../../../utils/getWinOrLoseSound';
import GlobalContext from './../../../Context/GlobalContext/GlobalContext';

const ResultComponent = ({gameRegime}) => {

  const {
    state, switchStageAC, refreshStateAC, 
  } = useContext(GameContext);
  const {soundState} = useContext(GlobalContext);

  const {fightResult, score} = state;
  const {gameResults:{tie, win, loss}, gameStages:{choose}} = gameConstants;

  const finished = checkIsGameFinished(score, gameRegime);

  useEffect(() => {
    const sound = getWinOrLoseSound(fightResult);
    soundState && sound.play();
  }, [fightResult, soundState]);

  if(fightResult === tie) {
    return (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
          <h2>You have tied!</h2>
          <Button onClick={() => {
          switchStageAC(choose);
          }}>
            Next round
          </Button>
        </Col>
      </Row>
    )
  }
  if(fightResult === loss) {
    return finished ? (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
          <h2>You have lost a battle! Wanna play another one?</h2>
          <Button 
            onClick={() => {
              refreshStateAC();
            }}

            ><NavLink to="/regimes" >Start new game</NavLink></Button>
        </Col>
      </Row>
    )
    : (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
          <h2>You have lost a round! </h2>
          <Button onClick={() => {
            switchStageAC(choose);
            }}>Next round</Button>
        </Col>
      </Row>
    )
  }
  if(fightResult === win) {
    return finished ? (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
          <h2>You have won a battle! Wanna play another one?</h2>
          <Button 
            onClick={() => {
              refreshStateAC();
            }}><NavLink to="/regimes" >Start new game</NavLink></Button>
        </Col>
      </Row>
    )
    : (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column'}}>
        <h2>You have won a round!</h2>
          <Button onClick={() => {
            switchStageAC(choose);
            }}
          >
            Next round
          </Button>
        </Col>
      </Row>
    )
  }
  return (
    <Spin/>
  )
};

export default ResultComponent  