import { message } from 'antd';
import { routerRedux } from 'dva/router';
import store from '../index';
import {AppLogin} from '../services/login';



export default {

    namespace: 'login',

    state: {
        name:'这是Login的model',
        status: false,
    },

    subscriptions: {

    },

    effects: {
       *AppLogin({ payload, callback }, { call, put }){
           // return yield call(AppLogin, payload);
           const response =yield call(AppLogin, payload);
           if (callback) callback(response);
       },
    },

    reducers: {
        // changeLoginStatus(state, { payload }) {
        //     // const { token, msg } = payload;
        //     // const msgArr = {
        //     //     UsernameNotFoundException: '账户不存在',
        //     //     CredentialsExpiredException: '账户已过期，请重新找回密码',
        //     //     AccountExpiredException: '账户未激活,请先激活',
        //     //     LockedException: '账户已锁定,请联系管理员',
        //     // };
        //     // if (token) {
        //     //     // putToken(token);
        //     // }
        //     // if (msg) {
        //     //     message.warning(msgArr[msg] || msg);
        //     // }
        //     // return {
        //     //     ...state,
        //     //     status: payload.status,
        //     //     type: payload.type,
        //     // };
        // },
        // changeSubmitting(state, { payload }) {
        //     return {
        //         ...state,
        //         submitting: payload,
        //     };
        // },
    },

};
