import React, { useContext } from 'react';
import GameContext from '../../../Context/GameContext/GameContext';
import gameConstants from './../../../constants/gameConstants';
import { Spin, Button, Row, Col } from 'antd';
import checkIsGameFinished from './../../../utils/checkIsGameFinished';
import { NavLink } from 'react-router-dom';

const ResultComponent = ({gameRegime}) => {

  const {
    state, switchStageAC
  } = useContext(GameContext);

  const {fightResult, score} = state;
  const {gameResults:{tie, win, loss}, gameStages:{choose}} = gameConstants;

  const finished = checkIsGameFinished(score, gameRegime);

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
          <NavLink to="/regimes" >Start new game</NavLink>
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
          <NavLink to="/regimes" >Start new game</NavLink>
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