import React from 'react';
import GameStagesComponent from './GameStages/GameStagesComponent';
import { Row, Col } from 'antd';

const Game = () => {

  return (
    <Row>
      <Col>
        <GameStagesComponent />
      </Col>
    </Row>
  )
};

export default Game;