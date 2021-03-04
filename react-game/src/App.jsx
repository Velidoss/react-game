import React from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/ContentComponent';
import gameBackground from './assets/images/gameBackground.jpg';
import SoundState from './Context/SoundContext/SoundState';
import MainState from './Context/MainContext/MainState';

function App() {

  const { Content } = Layout;

  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          height: '100vh',
          background: `url(${gameBackground})`
        }}
      >
        <SoundState>
          <MainState>
            <ContentComponent />
          </MainState>
        </SoundState>
      </Content>
    </Layout>
  );
}

export default App;
