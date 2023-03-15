<template>
    <div style="background-color: #eeeeee;">
        <!-- 导航栏 -->
        <nav-top :curT="true"></nav-top>
        <b-container  class="mt-3 p-0">
            <div class="article-list">
                <div class="article-l p-2">
                    <div class="article-wrap-l">
                        <h1 class="article-title">文章</h1>
                        <!-- 文章列表组件 -->
                        <article-list
                        v-for="listInfo in listInfot"
                        :info="listInfo"
                        ></article-list>

                    </div>
                </div>
                <!-- 右边栏 -->
                <div class="article-r p-2">
                    <div class="article-wrap-r">
                       <h5 style="text-align: center; ">搜索</h5>
                       <b-form>
                            <b-form-input size="sm" placeholder="请输入要搜索的内容"></b-form-input>
                            <b-button squared block variant="outline-secondary" value="search" class="mt-1">搜索</b-button>
                       </b-form>

                      <b-form class="mt-3">
                        <h6 style="text-align: center; ">按日期查找</h6>
                        <b-calendar
                            block local="zh-CN"
                            label-help="使用鼠标选择日期"
                            label-no-date-selected="当前未选择日期"
                            label-prev-year="上一年"
                            label-next-year="下一年"
                            label-prev-month="上个月"
                            label-next-month="下个月"
                            label-current-month="今天"
                          ></b-calendar>
                        <b-button squared block variant="outline-secondary"  class="mt-1">查找</b-button>
                      </b-form>
                    </div>
                </div>
            </div>
          </b-container>
    </div>
</template>

<style scoped>
.article-list{
    min-height: 100vh;
    display: flex;
}
.article-r{
    width: 350px;
}
.article-l{
    width: 100%;
    height: auto;
}
.article-wrap-l{
    border-radius: 10px;
    background-color: white;
    height: 100%;
}
.article-wrap-r{
    border-radius: 10px;
    background-color: white;
    height: 100vh;
    padding: 3px;
}
.article-title{
    height: 59px;
    border-bottom: 1px solid #b8b8b8;
    line-height: 60px;
    text-indent: 30px;
    font-size: 30px;
    color: #666666;
}

@media screen and (max-width: 768px){
    .article-r{
    display: none;
    }
    .article-title{
        font-size: 20px;
    }
}
</style>

<script >
// import axios from 'axios'
export default {
  data () {
    return {
      listInfot: [
        {
          title: '艾伦·麦席森·图灵!',
          coverImg: 'https://th.bing.com/th/id/OIP.ad9FZf8CNFJc55M3EIiSuAAAAA?w=141&h=194&c=7&r=0&o=5&pid=1.7',
          brief: '艾伦·麦席森·图灵（英语：Alan Mathison Turing，1912年6月23日－1954年6月7日），英国数学家、逻辑学家，被称为计算机科学之父，人工智能之父。1931年图灵进入剑桥大学国王学院，毕业后到美国普林斯顿大学攻读博士学位，第二次世界大战爆发后回到剑桥，后曾协助军方破解德国的著名密码系统Enigma，帮助盟军取得了二战的胜利。',
          userId: '123412',
          commentsNum: 23,
          contentRequest: '文章详细内容请求地址xxxx.xxxx.xxxxx'
        }
      ],
      search: ''
    }
  },
  methods: {

  },
  mounted () {

  },
  created () {
    // 请求文章列表
    // let url='';
    // axios.get(url).then(
    //     (list)=>{
    //         this.listInfot = list;
    //     }
    // )
  }
}
</script>
