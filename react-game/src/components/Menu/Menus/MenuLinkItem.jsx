import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound } from './../../../sounds/sounds';
import ResumeButtonComponent from '../ResumeButton/ResumeButtonComponent';

const MenuLinkItem = ({item, soundState, setGameRegime}) => {

  return item.title === 'Resume game'
  ? <ResumeButtonComponent soundState={soundState} />
  :  (
    <Button block>
      <NavLink 
        to={item.path}
        onClick={()=> {
        soundState && clickSound.play();
        setGameRegime &&  setGameRegime(item.title)
        }}
      >
        {item.title}
      </NavLink>
    </Button>
  )
};

export default MenuLinkItem