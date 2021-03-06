import React, { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext/GlobalContext';
import {SoundOutlined, SoundFilled} from '@ant-design/icons';
import { Row, Col } from 'antd';

const SoundSwitcher = () => {

  const { soundState, toggleSoundState} = useContext(GlobalContext);

  const style = {
    height: '80px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <Row style={style} justify="end">
      <Col
        onClick={() => toggleSoundState(!soundState)}
        span={20}
      >
        {
          soundState 
          ? <SoundFilled style={{fontSize:'28px'}} />
          : <SoundOutlined style={{fontSize:'28px'}} />
        }
      </Col>
    </Row>
  )
};

export default SoundSwitcher