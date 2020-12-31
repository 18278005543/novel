<template>
    <div class="home">
        <!-- 二级路由 -->
        <div>
            <router-view></router-view>
        </div>
        
        <van-tabbar v-model="active" inactive-color="#000" active-color="#07c160"  route>
            <van-tabbar-item :icon="item.icon" v-for="(item, index) in tabbarData" :key="index" :name="item.name" replace :to="item.path">
                {{item.title}}
            </van-tabbar-item>
        </van-tabbar>

    </div>

    
</template>

<script>
    export default {
        name:'Home',
        data(){
            return{
                // 激活标签下标的名称
                active: 'Bookshelf',
                 tabbarData:[
                    {
                        title:'书架',
                        // 图标
                        icon:'home-o',
                        // 路由名称 、标签名称
                        name:'Bookshelf',
                        path:'bookshelf'
                    }, 
                    {
                        title:'分类',
                        icon:'apps-o',
                        name:'Classification',
                        path:'classification'
                    }, 
                    {
                        title:'榜单',
                        icon:'bar-chart-o',
                        name:'List',
                        path:'list'
                    }, 
                    {
                        title:'搜索',
                        icon:'search',
                        name:'Search',
                        path:'search'
                    }
                ]
            }
        },

        methods:{
            goState(name){
                this.$router.push({name});
            }

            // // 切换激活
            // changeActive(name){
            //     
            //     this.$router.push({name});
            // }
        }
    }
</script>

<style lang="less" scoped>
    .home{
        padding-bottom:50px;
    }
</style>