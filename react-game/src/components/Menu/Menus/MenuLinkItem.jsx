import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound, hoverSound } from './../../../sounds/sounds';

const MenuLinkItem = ({item, soundState}) => {

  return (
    <Button block>
      <NavLink 
        to={item.path}
        onClick={()=> soundState && clickSound.play()}
        onMouseOver={()=> soundState && hoverSound.play()}
      >
        {item.title}
      </NavLink>
    </Button>
  )
};

export default MenuLinkItem