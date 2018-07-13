import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'dva';
import 'antd/dist/antd.css';
import logo from '../assets/logo.svg';
import '../styles/Navi.css'
import {  BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import User from '../components/User.js';

/*actions*/
import * as testActions from '../action/BaceAction';

const { Header, Content, Footer, Sider } = Layout;

//让组件关联state和action
 @connect(
    state => state,
    dispatch => bindActionCreators({testActions}, dispatch)
 )
export default class Navi extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
        };
    }



    componentWillMount() {
        let params = {
            id: 23
        }
        /*debugger*/
        this.props.postTest(params) //发送post请求

        let id = 23
        this.props.getTest(id) //发送get请求
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >

                    <div className="logo" />
                    <BrowserRouter>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />

                                   <span className="nav-text"><NavLink  to="/user" >特别呜谢参与人员</NavLink ></span>
                                    <Switch>
                                        <div>
                                            <Route exact path="/user" component={User} />
                                        </div>
                                    </Switch>

                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">视频</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">上传</span>
                        </Menu.Item>
                    </Menu>
                    </BrowserRouter>

                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>视屏弹幕机</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

// export default Navi;