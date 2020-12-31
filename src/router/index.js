import Vue from 'vue'
//导入路由主文件
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

//路由配置
const routes = [
  //Home路由
  {
    //一级路由
    //路由路径
    path: '/home',
    //路由名称
    name: 'Home',
    //路由渲染的组件
    component: () => import('../views/Home.vue'),
    
    // 二级路由配置的组件
    children:[
      {
        path: 'Bookshelf',
        name: 'Bookshelf',
        component: () => import('../views/Bookshelf.vue')
      },
      {
        path: 'classification',
        name: 'Classification',
        component: () => import('../views/Classification.vue')
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue')
      }

    ]
  },

  {
    path: '/bookdetail/:id',
    name: 'BookDetail',
    component: () => import('../views/BookDetail.vue')
  },
  // 重定向
  {
    path: '*',
    redirect: {
      name: 'Bookshelf'
    }
  }
]

//创建路由实例
const router = new VueRouter({
  routes
})
//导入路由实例
export default router
