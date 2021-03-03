import React from 'react';
import {Layout} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/Content/ContentComponent';
import gameBackground from './assets/images/gameBackground.jpg';

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
        <ContentComponent />
      </Content>
    </Layout>
  );
}

export default App;
