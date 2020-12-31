<template>
    <div class="bookdetail">
        <van-nav-bar
        title="详情"
        left-text="返回"
        @click-left="goState('Bookshelf') "
        />

          <!-- 内容 -->
        <div class="content">
            <div class="head-box">
                <div class="left-img fl">
                    <img src="" class="img-box"/>
                </div>
                <div class="right-text fl">
                    <div class="title-box ">农家小福女</div>
                    <div class="author ">作者：郁雨竹</div>
                    <div class="text-box ">
                        <div class="time-box fl">8小时前：</div>
                        <div class="chapter-box fl">第2226章 生意</div>
                    </div>
                </div>
                <div class="button-box fl">
                    <div class="fl btn-fl">最更新</div>
                    <div class="fr btn-fr">开始阅读</div>
                </div>
            </div>

            <div class="number-box">
                <div class="number-content">
                    <div class="number-content-box fl">
                        <div class="text-num">追书人气</div>
                        <div class="num-box">98221</div>
                    </div>
                    <div class="number-content-box fl">
                        <div class="text-num">读者留存率</div>
                        <div class="num-box">72.28%</div>
                    </div>
                    <div class="number-content-box fl">
                        <div class="text-num">日更新字数</div>
                        <div class="num-box">13816</div>
                    </div>
                </div>
            </div>

            <div class="label-box">
                <div class="label-conetnt">
                    <div class="label-text fl">古代</div>
                    <div class="label-text fl">架空</div>
                    <div class="label-text fl">玄幻</div>
                    <div class="label-text fl">奇遇</div>
                    <div class="label-text fl">东方玄幻</div>
                    <div class="label-text fl">升级练功</div>
                </div>
            </div>

            <div class="introduce-box">
                <div class="introduce-content">
                    <span>武道巅峰，是孤独，是寂寞，是慢慢求索，是高</span>
                    <span>武道巅峰，是孤独，是寂寞，是慢慢求索，是高</span>
                    <span>武道巅峰，是孤独，是寂寞，是慢慢求索，是高</span>
                    <span>武道巅峰，是孤独，是寂寞，是慢慢求索，是高</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //导入外部样式表
    import '../assets/less/bookDetail.less'
    export default {
        name:'BookDetail',
        data() {
            return {
                reponse:{
                    "_id": "57206c3539a913ad65d35c7b",
                    "title": "一念永恒",
                    "author": "耳根",
                    "longIntro": "一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒",
                    "cover": "/agent/http://image.cmfu.com/books/1003354631/1003354631.jpg",
                    "cat": "幻想修仙",
                    "majorCate": "仙侠",
                    "minorCate": "幻想修仙",
                    "creater": "Xiaomi Redmi 3",
                    "_le": false,
                    "allowMonthly": false,
                    "allowVoucher": true,
                    "allowBeanVoucher": false,
                    "hasCp": true,
                    "postCount": 33937,
                    "latelyFollower": 195114,
                    "followerCount": 0,
                    "wordCount": 1987456,
                    "serializeWordCount": 5972,
                    "retentionRatio": "75.68",
                    "updated": "2017-03-27T09:24:35.945Z",
                    "isSerial": true,
                    "chaptersCount": 683,
                    "lastChapter": "第683章 实力再涨",
                    "gender": [
                        "male"
                    ],
                    "tags": [
                        "仙侠"
                    ],
                    "donate": false,
                    "copyright": "阅文集团正版授权"
                }
            }
        },

        methods: {
           //跳转到页面
            goState(name) {
                this.$router.push({name});
            }
        },
    }
</script>