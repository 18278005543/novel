import axios from 'axios'

// 方法四 简单的封装
export function request(config){
    
    // 1. 创建axios的实例
    const instance = axios.create({
        baseURL:'http://novel.kele8.cn',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 全局拦截
    // axios.interceptors
    instance.interceptors.request.use(config => {
        // console.log(config);
        // 1.比如config中的一些信息不符合服务器的要求

        // 2.比如每次发送网络请求时，都希望在页面中显示一个请求的图标

        // 3.某些网络请求（比如登录 （token令牌的东西）），必须携带一些特殊的信息
        return config;
    },err => {
        // console.log(err);
    })

    // 2.2 响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data;
    }, err => {
        console.log(err); 
    })
    
    // 本身就Promise 不用包装
    // 直接返回就是Promise 
    // 返回值就是Promise

    // 3.发送真正的网络请求  本身返回Promise return一个Promise
    return instance(config)
    
}



// 方法三
// export function request(config){
//     // 本身就Promise 不用包装
//     // 返回就是Promise
//     return  new Promise((resolve, reject) => {
//         // 1. 创建axios的实例
//         const instance = axios.create({
//             baseURL:'http://novel.kele8.cn',
//             timeout: 5000
//         })

//         // 发送真正的网络请求
//         instance(config)
//             .then(res =>{
//                 resolve(res)
//             }).catch(err =>{
//                 reject(err)
//             })

//         })
    
// }

// 方法二
// export function request(config){
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://novel.kele8.cn',
//         // timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config.baseCondig)
//         .then(res =>{
//             // console.log(res);
//             config.success(res);
//         }).catch(err =>{
//             // console.log(err);
//             config.failure(err);
//         })
// }


// 方法发一
// export function request(config , success, failure){
//     // 1. 创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://novel.kele8.cn',
//         // timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//         .then(res =>{
//             // console.log(res);
//             success(res);
//         }).catch(err =>{
//             // console.log(err);
//             failure(err);
//         })
// }