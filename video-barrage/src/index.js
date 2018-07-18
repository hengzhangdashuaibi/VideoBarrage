import  "babel-polyfill";
import dva from 'dva';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './styles/index.css';
// import App from './pages/App';
// import Navi from './routes/Navi';
import onError from './error';
import createHistory from 'history/createHashHistory';
import FastClick from 'fastclick';
import createLoading from 'dva-loading';
import models from './models';
import router from './router';
// import './g2';
// import registerServiceWorker from './registerServiceWorker';


// 1. Initialize and app error
const app = dva({
    history:createHistory(),
    onError
});

// 2. Plugins
app.use(createLoading());

// 3. Model move to router
models.forEach((m) => {
    app.model(m.default);
});

// 4. Router 如果你是使用 es6 的写法，也就是你的组件都是通过 export default 导出的，那么在 getComponent 方法里面需要加入 .default。
app.router(require('./router').default);
// app.router(router);
// 5. Start
app.start('#root');

FastClick.attach(document.body);

export default app._store;

//挂载页面
// ReactDOM.render(<Navi />,document.getElementById('root'));
// registerServiceWorker();
