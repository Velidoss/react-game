import React from 'react';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom';

const MenuLinkItems = ({menuItems}) => {
  console.log(menuItems)
  return (
    <Row>
      <Col>
        {
          menuItems.map((item) => (        
            <Row>
              <Col>
                {item.path ? 
                  <NavLink to={item.path}>
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