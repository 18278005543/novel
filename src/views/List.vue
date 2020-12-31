<template>
    <div class="list">
        <van-nav-bar title="榜单"></van-nav-bar>
        <!-- 内容 -->
        <div class="content">
            <div class="nan-box">
                <div class="title-nan">男</div>
                <div class="chasing-books">追书最热榜Top100</div>
                <div class="readers">读者留存率Top100</div>
                <div class="end-lis">追书完结榜Top100</div>
                <div class="package-month">包月排行榜</div>
                <div class="this-week">本周潜力榜</div>
            </div>

            <div class="nv-box">
                <div class="title-nv" @click="getbook">女</div>
                <div class="chasing-books">追书最热榜Top100</div>
                <div class="readers">读者留存率Top100</div>
                <div class="end-lis">追书完结榜Top100</div>
                <div class="package-month">包月排行榜</div>
                <div class="this-week">本周潜力榜</div>
            </div>
        </div>
        
    
    </div>
</template>

<script>
//导入外部样式表
  import '../assets/less/list.less'

    export default {
        name:'List',
        data() {
            return {
                
            }
        },

        methods: {
             getbook(){
                //启动加载提示
                this.$toast.loading({
                    //文本提示
                    message: '加载中...',
                    //禁止穿透点击
                    forbidClick: true,
                    //提示时间, 0: 没有时间限制
                    duration: 0
                });

                //发起注册请求
                this.axios({
                    //请求类型
                    method: 'GET',
                    //请求路径
                    url: '/ranking/:rankId',

                    params: {
                      _id: this._id,  //周榜ID
                      monthRank: this.monthRank, //月榜ID
                      totalRank: this.totalRank // 总榜ID
                    },

                }).then(result => {
                    //关闭加载提示
                    this.$toast.clear();
                    
                    console.log('result ==>',result);
                }).catch(err => {
                    //关闭加载提示
                    this.$toast.clear();

                    console.log('err ==>',err);
                })
            },
        },
    }
</script>