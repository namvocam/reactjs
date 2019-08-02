import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Footer from './components/footer/footer';


const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>

                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="home" />
                                <span>Home</span>
                                <Link to="/" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="login" />
                                <span>Login</span>
                                <Link to="/login" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="desktop" />
                                <span>Register</span>
                                <Link to="/register" />
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                style={{ cursor: 'pointer' }}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                        </Content>
                        <Footer />
                    </Layout>

                </Layout>
            </Router>
        );
    }
}


export default App;