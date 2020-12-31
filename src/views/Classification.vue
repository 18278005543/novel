<template>
    <div class="classification">
        <van-nav-bar title="分类"></van-nav-bar>
        <van-tabs v-model="active">
            <van-tab title="男生" >
                <van-grid>
                    <van-grid-item  text="玄幻" />
                    <van-grid-item  text="奇幻" />
                    <van-grid-item  text="武侠" />
                    <van-grid-item  text="历史" />
                </van-grid>
                <van-grid>
                    <van-grid-item  text="玄幻" />
                    <van-grid-item  text="奇幻" />
                    <van-grid-item  text="武侠" />
                    <van-grid-item  text="历史" />
                </van-grid>
            </van-tab>
            <van-tab title="女生" >
                <van-grid>
                    <van-grid-item  text="古代言情" />
                    <van-grid-item  text="耽美" />
                    <van-grid-item  text="科幻" />
                    <van-grid-item  text="穿越" @click="getbook"/>
                </van-grid>
                 <van-grid>
                    <van-grid-item  text="古代言情" />
                    <van-grid-item  text="耽美" />
                    <van-grid-item  text="科幻" />
                    <van-grid-item  text="穿越" />
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
//导入外部样式表
  import '../assets/less/classification.less'

    export default {
        name:'Classification',
        data(){
            return{
                active: 2,

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
                    url: 'rank/:id',

                    params: {
                        id:this.id
                    },

                }).then(result => {
                    //关闭加载提示
                    this.$toast.clear();
                    if(result.data.code == 200){
                       
                    }
                    
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