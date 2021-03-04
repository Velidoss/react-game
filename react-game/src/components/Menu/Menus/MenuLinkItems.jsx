import React, { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import {NavLink} from 'react-router-dom';
import {hoverSound, clickSound} from '../../../sounds/sounds';
import SoundContext from '../../../Context/SoundContext/SoundContext';
import MenuLinkItem from './MenuLinkItem';

const MenuLinkItems = ({menuItems}) => {

  const { soundState } = useContext(SoundContext);

  const style={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Row justify="center" style={{height: '90%'}}>
      <Col span={12} style={style}>
        <Space size={[32, 32]} direction="vertical" style={{width: '100%'}}>
          {
            menuItems.map((item, index) => (        
              <Row key={index} justify="center" style={{width: '100%'}}>
                <Col style={{width: '80%', borderRadius: '20px'}}>
                  {item.path ? 
                    <MenuLinkItem item={item} soundState={soundState} />
                    : <div>{item.title}</div> 
                  }
                </Col>
              </Row>
            ))
          }
        </Space>
      </Col>
    </Row>
  )
};

export default MenuLinkItems;