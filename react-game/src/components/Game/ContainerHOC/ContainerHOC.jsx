import React from 'react';
import { Row, Col } from 'antd';
import style from '../ChooseWeapon/ChooseWeapon.module.scss';

const ContainerHOC = ({children}) => {

  return (
    <Row 
      className={style.container}
    >
      <Col span={24} className={style.container_items}>
        {children}
      </Col>
    </Row>
  )
};

export default ContainerHOC;