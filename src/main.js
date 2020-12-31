//导入vue主文件
import Vue from 'vue'
//导入APP组件(根组件)
import App from './App.vue'
//导入路由配置，如果router文件夹的文件名称是index.js，导入时可以省略index文件
import router from './router'
//导入axios
import axios from 'axios'
//导入vue-axios
import VueAxios from 'vue-axios'
//注册axios
Vue.use(VueAxios, axios)


// lib-flexible 用于设置 rem 基准值
// 导入rem适配文件
import 'lib-flexible/flexible'

// 在main.js导入vant的组件
import {
  Tabbar,
  TabbarItem ,
  NavBar,
  Search,
  Empty,
  Icon,
  Toast,
  Tab,
  Tabs,
  Grid,
  GridItem,
  
  
} from 'vant';

//  在main.js注册的组件
Vue
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Search)
  .use(Empty)
  .use(Icon)
  .use(Toast)
  .use(Tab)
  .use(Tabs)
  .use(Grid)
  .use(GridItem)

//使用全局的axios和对应的配置在进行网络请求 配置请求基础路径
// axios.defaults.baseURL = 'http://novel.kele8.cn';
// axios.defaults.timeout = 5000;

// 封装request模块
import { request } from './network/request';

// 调用
// 用法一
// request({
//   // method:'GET',
//   url:'sub-categories'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 用法二
// request({
//   baseConfig:{

//   },
//   success: function(res){

//   },
//   failure: function(err){

//   }
// })

// 用法三
// request({
//   url:'sub-categories'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// 用法四 继续用 Promise  简单的封装
request({
  url:'sub-categories'
}).then(res => {
  // console.log(res);
}).catch(err => {
  // console.log(err);
})



//关闭生产环境提示
Vue.config.productionTip = false

//vue实例化
new Vue({
  //路由
  router,
  //渲染App组件
  render: h => h(App)
}).$mount('#app')
