import React from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/ContentComponent';
import gameBackground from './assets/images/gameBackground.jpg';
import SoundState from './Context/SoundContext/SoundState';
import GameState from './Context/GameContext/GameState';

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
          <GameState>
            <ContentComponent />
          </GameState>
        </SoundState>
      </Content>
    </Layout>
  );
}

export default App;
