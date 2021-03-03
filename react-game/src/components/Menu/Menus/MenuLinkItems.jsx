import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom';
import {hoverSound, clickSound} from '../../../sounds/sounds';
import SoundContext from '../../../Context/SoundContext/SoundContext';

const MenuLinkItems = ({menuItems}) => {

  const { soundState } = useContext(SoundContext);

  return (
    <Row>
      <Col>
        {
          menuItems.map((item) => (        
            <Row>
              <Col>
                {item.path ? 
                  <NavLink 
                    to={item.path}
                    onClick={()=> soundState && clickSound.play()}
                    onMouseOver={()=> soundState && hoverSound.play()}
                  >
                    {item.title}
                  </NavLink>
                  : <div>{item.title}</div> 
                }
              </Col>
            </Row>
          ))
        }
      </Col>
    </Row>
  )
};

export default MenuLinkItems;