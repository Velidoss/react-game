import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound } from './../../../sounds/sounds';

const MenuLinkItem = ({item, soundState, setGameRegime}) => {

  return (
    <Button block>
      <NavLink 
        to={item.path}
        onClick={()=> {
          soundState && clickSound.play();
          setGameRegime(item.title)
        }}
      >
        {item.title}
      </NavLink>
    </Button>
  )
};

export default MenuLinkItem