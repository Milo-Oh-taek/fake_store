import { Layout, Menu, Breadcrumb } from 'antd';
import MainPart from '../components/MainPart';

export default function Home() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>products</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <MainPart />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}
