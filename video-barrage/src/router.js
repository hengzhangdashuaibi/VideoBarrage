import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import Navi from './routes/Navi';

const menuGlobal=[
    {
        id:'Navi',
        pid:'0',
        name:'Navi页',
        icon:'user',
        path: '/Navi',
        models: () => [import('./models/Navi')], //models可多个
        component: () => import('./routes/Navi'),
    }
    // ,
    // {
    //     id:'bbb',
    //     pid:'0',
    //     name:'bbb页',
    //     icon:'user',
    //     path: '/aaa/bbb',
    //     models: () => [import('./models/bbb')], //models可多个
    //     component: () => import('./routes/BBB'),
    // },
    // {
    //     id:'ccc',
    //     pid:'0',
    //     name:'ccc页',
    //     icon:'user',
    //     path: '/ccc',
    //     models: () => [import('./models/ccc')], //models可多个
    //     component: () => import('./routes/CCC'),
    // },
];


function RouterConfig({ history, app }) {

    return (
        <Router history={history}>
            /*<Switch>
                {
                    menuGlobal.map(({path,...dynamics},index)=>(
                        <Route
                            key={index}
                            path={path}
                            exact
                            component={dynamic({
                                app,
                                ...dynamics
                            })}
                        />
                    ))
                }
            </Switch>*/

           {/* <div>*/}
                <Switch>
                    <Route path="/" component={Navi} />
                </Switch>
            {/*</div>*/}
        </Router>
    );
}

export default RouterConfig;
