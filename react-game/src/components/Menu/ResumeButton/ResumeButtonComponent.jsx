import React, { useContext, useState, useEffect } from 'react';
import {Button} from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound } from './../../../sounds/sounds';
import GameContext from './../../../Context/GameContext/GameContext';

const ResumeButtonComponent = ({soundState}) => {
  const {state: {gameActive}} = useContext(GameContext);
  
  const [show, toggleShow] = useState(false);

  useEffect(() => {
    toggleShow(gameActive)
  }, [gameActive]);

  return show ? (
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