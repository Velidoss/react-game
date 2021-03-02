import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import ContentComponent from './components/Content/ContentComponent';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

function App() {

  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              nav 1
            </Menu.Item>
            <Menu.Item key="2">
              nav 2
            </Menu.Item>
            <Menu.Item key="3">
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <ContentComponent />
          </Content>
        </Layout>
         
    </Layout>

  );
}

export default App;
