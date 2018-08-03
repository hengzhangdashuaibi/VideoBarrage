import fetch from 'dva/fetch';
import request from '../utils/request';
import { isRemember } from '../utils/helper';


//用户登录
export async function AppLogin(params) {
    const { url, ...paramsOpt } = params;
    return request(url, {
        method: 'POST',
        body: {
            ...paramsOpt,
        },
    });
}