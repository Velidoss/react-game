import React from 'react';
import { Descriptions, Switch } from 'antd';

const SettingsItemComponent = ({title}) => {

  return (
    <Descriptions.Item label={title}>
      <Switch 
        defaultChecked 
        onChange={() => {}} 
      />
    </Descriptions.Item>
  )
};

export default SettingsItemComponent