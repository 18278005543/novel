<template>
    <div class="search">
        <van-search v-model="value" placeholder="输入书名或者作者名" @input="getAutomatic"cancel=""/>
        <van-empty image="search" description="搜索你喜欢的小说或者作者" />
    </div>
</template>

<script>
    //导入外部样式表
  import '../assets/less/search.less'

    export default {
        name:'Search',
        data() {
            return {
                value: '',
            };
        },

        methods: {
            getAutomatic (){
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
                    url: 'auto-complete?query={keyword}',

                    params: {
                       keyword: this.keyword,
                    },

                }).then(result => {
                    //关闭加载提示
                    this.$toast.clear();

                    if(result.data.code == 200){
                        this.value = result.data.result;
                    }

                    console.log('result ==>',result);
                }).catch(err => {
                    //关闭加载提示
                    this.$toast.clear();

                    console.log('err ==>',err);
                })
          
            }
           

        },
    }
</script>