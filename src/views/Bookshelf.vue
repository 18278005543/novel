<template>
    <div class="bookshelf">
        <!-- 头部 -->
        <van-nav-bar title="书架"></van-nav-bar>

        <!-- 内容 -->
        <div class="content">
            <div class="content-box" >
                <div class="left-img fl" @click="goBookDetail">
                    <img src="" class="img-box"/>
                </div>
                <div class="right-text fl">
                    <div class="title-box "@click="getbook">农家小福女</div>
                    <div class="author ">作者：</div>
                    <div class="text-box ">
                        <div class="time-box fl">8小时前：</div>
                        <div class="chapter-box fl">第2226章 生意</div>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
</template>

<script>    
    //导入外部样式表
    import '../assets/less/bookshelf.less'
    export default {
        name:'Bookshelf',
        // 数据
        data(){
            return{
                books: [],
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
                    url: 'book-info/53115e30173bfacb4904897e',

                    params: {
                      
                      
                    },

                }).then(result => {
                    //关闭加载提示
                    this.$toast.clear();
                    if(result.data.status == 200){
                        this.book = result.data.result;
                    }
                    console.log('result ==>',result);
                }).catch(err => {
                    //关闭加载提示
                    this.$toast.clear();

                    console.log('err ==>',err);
                })

            },

            // 查看小说详情页面 跳转详情
            goBookDetail(){
                this.$router.push({name:'BookDetail'});
            },

        //     //搜索小说
        //     getSearchBook(){
        //         //搜索小说
        //         let searchResult = BookApi.Search("凡人修仙传");

        //         //筛选
        //         let book = searchResult.books.FirstOrDefault(x=>x.author == "忘语");

        //     },

        //     //获取小说描述
        //     getBookDescribe(){
        //         //获取小说描述
        //         let detail = BookApi.GetBookDetails(book._id);
        //         System.Console.WriteLine(detail.JsonSerialize());
        //         System.Console.WriteLine();
        //     },
           
        //    //获取小说书评
            getBookReview(){
                //获取小说书评
                let comment = BookApi.GetComment(book._id, 0, 30);
                System.Console.WriteLine(comment.total);
            },
            
            //获取小说目录
            getBookSource(){
                //获取小说目录
                let catalog = BookApi.GetBookCatalog(sources[0]._id);
                for(let catalogChapter in catalog.chapters){
                    System.Console.WriteLine(catalogChapter.title);
                }
            },
            

            //获取指定章节正文
            getChapterText(){
                //获取指定章节正文
                let bookContent = BookApi.GetBookContent(catalog.chapters[0].link);
                System.Console.WriteLine(bookContent.chapter.cpContent);

            }

            
        }
    
    }
</script>