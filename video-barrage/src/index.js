import  "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './pages/App';
import Navi from './pages/Navi';
import registerServiceWorker from './registerServiceWorker';

//挂载页面
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navi />, document.getElementById('root'));
registerServiceWorker();
