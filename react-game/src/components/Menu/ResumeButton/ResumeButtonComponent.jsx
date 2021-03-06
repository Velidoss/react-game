import React, { useContext } from 'react';
import {Button} from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound } from './../../../sounds/sounds';
import GameContext from './../../../Context/GameContext/GameContext';

const ResumeButtonComponent = ({soundState}) => {

  const {state: {gameActive}} = useContext(GameContext);
  console.log(gameActive)
  return gameActive ? (
    <Button block>
      <NavLink 
        to="/game"
        onClick={()=> {
          soundState && clickSound.play();
        }}
      >
        Resume game
      </NavLink>
    </Button>
  ) : null
};

export default ResumeButtonComponent