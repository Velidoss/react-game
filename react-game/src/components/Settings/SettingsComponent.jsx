import React from 'react';
import { Row, Col, Descriptions, Switch } from 'antd';

const SettingsComponent = ({menuItems}) => {


  return (
    <Row justify="center" style={{height: '90%'}}>
      <Col span={12} style={{height: '100%'}}>
        <Descriptions title="Settings">
          <Descriptions.Item label="Audio">
            <Switch 
              defaultChecked 
              onChange={()=> {}} 
            />
          </Descriptions.Item>
        </Descriptions>

      </Col>
    </Row>
  )
};

export default SettingsComponent