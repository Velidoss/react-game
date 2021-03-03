import React, {useState} from 'react';
import menuConstants from '../../constants/menuConstants';

const MenuComponent = () => {
  const {menuLayout} = menuConstants;

  const [menuItem, setMenuItem] = useState('mainMenu');

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