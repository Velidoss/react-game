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
  const {soundState, languageState} = useContext(GlobalContext);

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
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center'}}>
          <h2>
            {languageState === 'title' 
              ? `You have tied!` 
              : `Ничья!`
            }
          </h2>
          <Button onClick={() => {
          switchStageAC(choose);
          }}>
            {languageState === 'title' ? `Next round` : `Следующий раунд`}
          </Button>
        </Col>
      </Row>
    )
  }
  if(fightResult === loss) {
    return finished ? (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center'}}>
          <h2>
            {languageState === 'title' 
              ? `You have lost a battle! Wanna play another one?` 
              : `Вы програли! Хотите сыграть еще одну?`
            }
          </h2>
          <Button 
            onClick={() => {
              refreshStateAC();
            }}
            >
            <NavLink to="/regimes" >
                {languageState === 'title' ? `Start new game` : `Начать новую игру`}
            </NavLink>
          </Button>
        </Col>
      </Row>
    )
    : (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center'}}>
          <h2>
            {languageState === 'title' 
              ? 'You have lost a round!'
              : 'Вы програли раунд!'
            }
          </h2>
          <Button onClick={() => {
            switchStageAC(choose);
            }}>
              {languageState === 'title' ? `Next round` : `Следующий раунд`}
            </Button>
        </Col>
      </Row>
    )
  }
  if(fightResult === win) {
    return finished ? (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center'}}>
          <h2>
            
            {languageState === 'title' 
              ? 'You have won a battle! Wanna play another one?'
              : 'Вы победили! Хотите сыграть еще одну?'
            }
          </h2>
          <Button 
            onClick={() => {
              refreshStateAC();
            }}>
              <NavLink to="/regimes" >
                {languageState === 'title' ? `Start new game` : `Начать новую игру`}
              </NavLink>
            </Button>
        </Col>
      </Row>
    )
    : (
      <Row justify="center">
        <Col style={{display:'flex', justifyContent: 'center', flexDirection:'column', textAlign: 'center'}}>
        <h2>
          {languageState === 'title' 
            ? 'You have won a round!'
            : 'Вы выиграли раунд!'
          }
        </h2>
          <Button onClick={() => {
            switchStageAC(choose);
            }}
          >
            {languageState === 'title' ? `Next round` : `Следующий раунд`}
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