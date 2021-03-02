import React, {useState, useContext} from 'react';
import menuConstants from '../../constants/menuConstants';
import MainContext from '../../Context/MainContext/MainContext';

const MenuComponent = () => {
  const {menuLayout} = menuConstants;

  const [menuItem, setMenuItem] = useState('mainMenu');

  const {
    setGlobalRegime, 
    gameRegime, 
    setGameregime,
  } = useContext(MainContext);

  return (
    <div>
      {
        menuLayout[menuItem].map((item) => <div
          onClick={() => setMenuItem(item.onClickTransition)}
        >
          {item.title}
          </div>)
      }
    </div>
  )
};

export default MenuComponent;