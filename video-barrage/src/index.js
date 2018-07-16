import  "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
// import App from './pages/App';
import Navi from './routes/Navi';
import registerServiceWorker from './registerServiceWorker';

//挂载页面
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
        <Navi />
    ,
    document.getElementById('root'));
registerServiceWorker();
