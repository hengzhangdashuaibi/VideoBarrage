import { Layout, Menu, Breadcrumb,Form, Icon, Input, Button, Checkbox, Avatar } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import 'antd/dist/antd.css';
import logo from '../assets/logo.svg';
import '../styles/Login.css';
// import { Player } from 'video-react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
const FormItem = Form.Item;

const { Header, Content, Footer, Sider } = Layout;
//头像图标设计
const UserList = ['I', '♡', 'U', '银' , '魂'];

const colorList = ['#f5392f', '#7265e6', '#ffbf00', '#00a2ae', '#00a2ae'];

@connect(
    state => state,
//     // dispatch => bindActionCreators({testActions}, dispatch)
)
@Form.create()
class Login extends React.PureComponent{
    //登录页面

    constructor(props) {
        super(props);
        this.state = {
            user: UserList[0],
            color: colorList[0],
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    //切换图标
    changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
            user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
            color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Layout>
            <Header>
                <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}} onClick={this.changeUser}>
                            {/*<Icon*/}
                                {/*className="trigger"*/}
                                {/*style={{cursor: 'pointer'}}*/}
                            {/*/>*/}

                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
                        <span style={{ fontFamily:'华文楷体', fontWeight:'bold' }}>
                          {this.state.user}
                        </span>

                    </Avatar>
                </span>
                <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>视屏弹幕机</span>
                <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                </span>
            </Header>

            <Content>
                    <div className="login">
                        <video id="v1"
                               autoPlay
                               muted="muted"
                               // controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                               loop
                               style={{width: '100%'}}
                        >
                            <source  src="http://videovideo.18shi.net/47167.mp4" type="video/mp4"/>
                            {/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
                        </video>

                        {/*<Player>*/}
                            {/*<source  src="../assets/47167.mp4" type="video/mp4"/>*/}
                        {/*</Player>*/}
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </FormItem>
                        </Form>
                    </div>
            </Content>
            {/*<Footer style={{ textAlign: 'center'  }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>*/}
        </Layout>
        );
    }

}

export default Login;