import React, { useContext } from 'react';
import { Row, Col, Descriptions, Switch, Button } from 'antd';
import GlobalContext from '../../Context/GlobalContext/GlobalContext';
import ContainerHOC from './../Game/ContainerHOC/ContainerHOC';

const SettingsComponent = () => {

  const {
    soundState, 
    toggleSoundState,
    languageState,
    toggleLanguageState
  } = useContext(GlobalContext);

  const onChangeAudio = (checked) => {
    checked ? toggleSoundState(true) : toggleSoundState(false)
  }

  return (
    <Row justify="center" style={{height: '80%'}}>
      <Col span={12} style={{height: '100%'}}>
        <ContainerHOC>
          <Descriptions title="Settings">
            <Descriptions.Item label="Audio">
              <Switch 
                defaultChecked={soundState} 
                onChange={onChangeAudio} 
              />
            </Descriptions.Item>
            <Descriptions.Item label="Language">
              <Button onClick={() => {

              }}>
                Russian
              </Button>
              <Button onClick={() => {

              }}>
                English
              </Button>
            </Descriptions.Item>
          </Descriptions>
        </ContainerHOC>
      </Col>
    </Row>
  )
};

export default SettingsComponent