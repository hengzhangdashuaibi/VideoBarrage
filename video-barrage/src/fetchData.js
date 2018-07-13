import axios from 'axios'
//BASE_URL是默认的url地址，如果你安装了webpack，可以在webpack配置全局变量
// axios.defaults.baseURL = BASE_URL;

 //如果没有安装webpack，就使用下面这种写法
 axios.defaults.baseURL = 'http://ip:端口'


/*get封装*/
export const getData = (url, param) => {
    return (
        axios.get(`${url}`)
    )
}

/*post封装*/
export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}