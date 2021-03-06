import React, { useContext } from 'react';
import {Switch, Route} from 'react-router-dom';
import menuConstants from './../constants/menuConstants';
import InfoButtons from './InfoButtons/InfoButtons';
import MenuLinkItems from './Menu/Menus/MenuLinkItems';
import MainContext from './../Context/MainContext/MainContext';
import Game from './Game/Game';


const ContentComponent = () => {

  const {setGameRegime} = useContext(MainContext);

  const {mainMenu, regimes, settings, records } = menuConstants.menuLayout;

  const style = {
    height: '100%'
  };

  return (
    <div style={style}>
        <InfoButtons />
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
              () => <MenuLinkItems 
                menuItems={regimes} 
                setGameRegime={(regime) => setGameRegime(regime)
                } 
              />
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
              () => <Game />
            } 
          />
        </Switch>
    </div>
  )
};

export default ContentComponent;