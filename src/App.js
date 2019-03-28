import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';

import Home from './contaniners/Home';
import Lang from './contaniners/Lang';
import Login from './contaniners/Login';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/home">首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/lang">语言设计</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/login">登录</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Route path='/home' component={Home}/>
        <Route path='/lang' component={Lang}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/' render={()=><Redirect to='/home'/>}/>
      </Layout>
    </Layout>
    );
  }
}

export default App;
