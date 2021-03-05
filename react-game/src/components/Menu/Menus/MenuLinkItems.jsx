import React, { useContext } from 'react';
import { Row, Col, Space } from 'antd';
import SoundContext from '../../../Context/SoundContext/SoundContext';
import MenuLinkItem from './MenuLinkItem';

const MenuLinkItems = ({menuItems, setGameRegime}) => {

  const { soundState } = useContext(SoundContext);

  const style={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  console.log(setGameRegime)

  return (
    <Row justify="center" style={{height: '90%'}}>
      <Col span={12} style={style}>
        <Space size={[32, 32]} direction="vertical" style={{width: '100%'}}>
          {
            menuItems.map((item, index) => (        
              <Row key={index} justify="center" style={{width: '100%'}}>
                <Col style={{width: '80%', borderRadius: '20px'}}>
                  {item.path ? 
                    <MenuLinkItem 
                      item={item} 
                      soundState={soundState} 
                      setGameRegime={setGameRegime}
                    />
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