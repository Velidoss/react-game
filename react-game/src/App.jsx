import React, { useContext } from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/ContentComponent';
import GameState from './Context/GameContext/GameState';
import GlobalContext from './Context/GlobalContext/GlobalContext';


function App() {

  const { Content } = Layout;

  const {backgroundState} = useContext(GlobalContext);

  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          height: '100vh',
          background: `url(${backgroundState}) center/cover no-repeat`,
        }}
      >
        <GameState>
          <ContentComponent />
        </GameState>
      </Content>
    </Layout>
  );
}

export default App;
