import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MenuLinkItems from '../Menu/Menus/MenuLinkItems';
import menuConstants from './../../constants/menuConstants';
import Game from './../Game/Game';
import GameState from './../../Context/GameContext/GameState';
import SoundSwitcher from './../SoundSwitcher/SoundSwitcher';

const ContentComponent = () => {

  const {mainMenu, regimes, settings, records } = menuConstants.menuLayout;

  const style = {
    height: '100%'
  };

  return (
    <div style={style}>
        <SoundSwitcher />
        <Switch>
          <Route 
            exact path="/" 
            render={
              () => <MenuLinkItems menuItems={mainMenu} />
            } 
          />
          <Route 
            path="/regimes" 
            render={
              () => <MenuLinkItems menuItems={regimes} />
            } 
          />
          <Route 
            path="/settings" 
            render={
              () => <MenuLinkItems menuItems={settings} />
            } 
          />
          <Route 
            path="/records" 
            render={
              () => <MenuLinkItems menuItems={records} />
            } 
          />
          <Route 
            path="/game" 
            render={
              () => <GameState>
                      <Game />
                    </GameState>
            } 
          />
        </Switch>
    </div>
  )
};

export default ContentComponent;