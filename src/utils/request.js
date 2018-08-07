// import fetch from 'dva/fetch';
import { message } from 'antd';
import { routerRedux } from 'dva/router';
import store from '../index';
import { isLogin, getToken, getExpires } from '../utils/helper';
import axios from 'axios';

const codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

function checkStatus(response) {

  // debugger
  // 小于10分钟或者
  if (response.status === 401) {
    // const { dispatch } = store;
    // if (isLogin() && getExpires() < 1800 && getExpires() > 0) {
    //   dispatch({ type: 'login/refresh' });
    // }
    // localStorage.clear();
    // sessionStorage.clear();
    // dispatch({ type: 'login/changeLogin' });
    // dispatch(routerRedux.push('/login'));
    // response.json().then(() => {
    //   message.warning('登陆已失效，请重新登陆');
    // });
    return;
  }
  if (response.status >= 200 && response.status <= 300) {
    return response;
  }

  if (response.status == 302) {
    console.log('跳转其他页面');
  }
  const error = new Error(codeMessage[response.status] || response.statusText);
  error.name = response.status;
  error.response = response;
  throw error;
}

async function fetch(url, opts) {
  const { method, body = {}, data = {}, ...restOpts } = opts;
  const requestData = { ...body, ...data };
  switch (method.toLocaleLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: requestData,
        ...restOpts,
      });
    case 'post':
      return axios.post(url, requestData, restOpts);
    case 'put':
      return axios.put(url, requestData, restOpts);
    case 'patch':
      return axios.patch(url, requestData, restOpts);
    case 'delete':
      return axios.delete(url, {
        data: requestData,      
        ...restOpts,    
      });
    default:
      return axios({
        opts,
        url,
      });
  }
}

export default function request(url, options) {
  const newOptions = { ...options };
  if (isLogin() && url.indexOf('http') !== 0) {
    newOptions.headers = { Authorization: `bearer ${getToken()}` };
  }
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .catch(err => {
      console.log(err);
      const { response = {} } = err;

      let { status } = response;
      status = Number(status);
      if (status === 401) {
        window.alert('');
      }
      if (status === 403) {
        window.alert('403');
        // return;

      }

      if (status <= 504 && status >= 500) {
        window.alert('504');
      }

      if (status >= 404 && status < 422) {
        window.alert('404')
      }

      return Promise.resolve(response);
    })
  // debugger
  // const ip = (url.indexOf('http') === 0) ? '' : window.g.url;
  //   console.log(url);
  
  // return fetch(`${ip}${url}`, newOptions)
  //   .then(checkStatus)
  //   .then((response) => {
  //     if (response.status !== 300) {
  //       if (newOptions.method === 'DELETE') {
  //         message.success('删除成功');
  //       }
  //     }
  //     const json = response.json();
  //     if (response.status === 300) {
  //       json.then((warningResponse) => {
  //         message.warning(warningResponse.message);
  //       });
  //     }
  //     return json;
  //   });
    // if(newOptions.method === 'POST'){
    //     return axios.post(url,newOptions)
    //         .then(checkStatus).catch((err)=>{
    //            debugger
    //             console.error(err);
    //         });

    // }

}
