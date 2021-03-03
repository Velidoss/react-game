import React from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/Content/ContentComponent';
import gameBackground from './assets/images/gameBackground.jpg';
import SoundState from './Context/SoundContext/SoundState';

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
          <ContentComponent />
        </SoundState>
      </Content>
    </Layout>
  );
}

export default App;
