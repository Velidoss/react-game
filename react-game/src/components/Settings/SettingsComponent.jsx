import React, { useContext } from 'react';
import { Row, Col, Descriptions, Switch, Button, Card } from 'antd';
import GlobalContext from '../../Context/GlobalContext/GlobalContext';
import ContainerHOC from './../Game/ContainerHOC/ContainerHOC';
import checkLangButtonDisabled from './../../utils/checkLangButtonDisabled';
import { NavLink } from 'react-router-dom';
import bg_pink from '../../assets/images/bg_pink.jpg';
import bg_green from '../../assets/images/bg_green.jpg';
import bg_orange from '../../assets/images/bg_orange.jpg';

const SettingsComponent = () => {

  const {
    soundState, 
    toggleSoundState,
    languageState,
    toggleLanguageState,
    backgroundState,
    toggleBackgroundState
  } = useContext(GlobalContext);

  const onChangeAudio = (checked) => {
    checked ? toggleSoundState(true) : toggleSoundState(false)
  }
  const {Meta} = Card;

  return (
    <Row justify="center" style={{height: '80%'}}>
      <Col span={12} style={{height: '100%'}}>
        <ContainerHOC>
          <Descriptions 
            layout="vertical"
            title="Settings" 
            style={{
              background: 'rgba(255,255,255, 0.5)', 
              padding: '20px',
              borderRadius: '20px'
            }}
          >
            <Descriptions.Item label="Audio">
              <Switch 
                defaultChecked={soundState} 
                onChange={onChangeAudio} 
              />
            </Descriptions.Item>
            <br/>
            <Descriptions.Item label="Language">
              <Button 
                disabled={checkLangButtonDisabled(languageState, 'ruTitle')}
                onClick={() => {
                toggleLanguageState('ruTitle');
              }}>
                Russian
              </Button>
              <Button 
                disabled={checkLangButtonDisabled(languageState, 'title')}
                onClick={() => {
                toggleLanguageState('title');
              }}>
                English
              </Button>
            </Descriptions.Item>
            <Descriptions.Item label="Background">
              <Card 
                hoverable
                style={{ width: 200 }}
                cover={<img alt="pink" src={bg_pink} />}
                onClick={() => toggleBackgroundState(bg_pink)}
              >
                <Meta title="Pink"/>
              </Card>
              <Card 
                hoverable
                style={{ width: 200 }}
                cover={<img alt="green" src={bg_green} />}
                onClick={() => toggleBackgroundState(bg_green)}
              >
                <Meta title="Green"/>
              </Card>
              <Card 
                hoverable
                style={{ width: 200 }}
                cover={<img alt="orange" src={bg_orange} />}
                onClick={() => toggleBackgroundState(bg_orange)}
              >
                <Meta title="Orange"/>
              </Card>
            </Descriptions.Item>
          </Descriptions>
          <Button style={{marginTop: '10px'}}>
            <NavLink to="/">
              {languageState === 'title' ? 'Back' : 'Назад'}
            </NavLink>
          </Button>
        </ContainerHOC>
      </Col>
    </Row>
  )
};

export default SettingsComponent