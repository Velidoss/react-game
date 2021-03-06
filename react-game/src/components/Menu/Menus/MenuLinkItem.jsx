import React, {useContext} from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { clickSound } from './../../../sounds/sounds';
import ResumeButtonComponent from '../ResumeButton/ResumeButtonComponent';
import GameContext from './../../../Context/GameContext/GameContext';

const MenuLinkItem = ({item, soundState, setGameRegime}) => {

  const {toggleGameActiveAC} = useContext(GameContext);
  const {title, path} = item;              
  return title === 'Resume game'
  ? <ResumeButtonComponent soundState={soundState} />
  :  (
    <Button block>
      <NavLink 
        to={path}
        onClick={()=> {
        soundState && clickSound.play();
        setGameRegime &&  setGameRegime(title);
        title !== 'back' && toggleGameActiveAC(true);
        }}
      >
        {title}
      </NavLink>
    </Button>
  )
};

export default MenuLinkItem