import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import dynamic from 'dva/dynamic';
import Login from './routes/Login'
import Home from './routes/Home'


function RouterConfig({ history, app }) {
    const passProps = {
        app,
        history,
    };
    return (
        <LocaleProvider locale={zhCN}>
            <Router history={history}>
               <div>
                    <Switch>
                        <Route path="/" exact render={props => <Login {...props} {...passProps} />} />
                        <Route exact key="home" path="/home" component={Home} />
                    </Switch>
                </div>
            </Router>
        </LocaleProvider>
    );
}

export default RouterConfig;
