<template>
  <div style="background-color: #eeeeee;">
    <nav-top></nav-top>
    <el-page-header @back="goBack" content="查看文章" class="p-3" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-page-header>
    <b-container class="article-wrap mt-2 pt-3">
      
       <b-row no-gutters >
          <b-img src="https://www.thoughtco.com/thmb/YJrEa97afMREamU_dj85OLkBFoA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/alanturing-5b85aa874cedfd0025bf4240.png" fluid-grow></b-img>
       </b-row>

       <b-row no-gutters class="mt-4 mb-3">
        <h4 class="font-weight-bold">艾伦·麦席森·图灵</h4>
       </b-row>

       <b-row no-gutters class="mb-4">

        <b-col cols="auto" class="mr-auto">
          <div style="display:flex" class="mb-2"><el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><a href="" style="align-self: center; padding-left: 5px;">User Name</a></div>
        </b-col>

        <b-col cols="auto">
          <b-button variant="primary" @click="focuss"><i :class="focus.icon"></i>{{ focus.text }}</b-button>
        </b-col>

       </b-row>

       <b-row no-gutters>
          <p>艾伦·麦席森·图灵（英语：Alan Mathison Turing，1912年6月23日－1954年6月7日），英国数学家、逻辑学家，被称为计算机科学之父，人工智能之父。1931年图灵进入剑桥大学国王学院，毕业后到美国普林斯顿大学攻读博士学位，第二次世界大战爆发后回到剑桥，后曾协助军方破解德国的著名密码系统Enigma，帮助盟军取得了二战的胜利。</p>
          <p>1952年，英国政府对图灵的同性恋取向定罪，随后图灵接受化学阉割（雌激素注射）。1954年6月7日，图灵吃下含有氰化物的苹果中毒身亡，享年42岁。</p>
          <p>2013年12月24日，在英国司法大臣克里斯·格雷灵的要求下，英国女王伊丽莎白二世向图灵颁发了皇家赦免。</p>
          <p>图灵对于人工智能的发展有诸多贡献，提出了一种用于判定机器是否具有智能的试验方法，即图灵试验，每年都有试验的比赛。此外，图灵提出的著名的图灵机模型为现代计算机的逻辑工作方式奠定了基础。</p>
          <p class="article-date">发布于 2022-09-15 0：56</p>
       </b-row>

       <b-row no-gutters>
        <b-button-group class="">
          <b-button  variant="primary" @click="support" class="btn-font-size"><i class="el-icon-caret-top"></i>{{ sup.text }} {{ sup.num }}</b-button>
          <b-button :variant="isObjection" @click="objection"><i class="el-icon-caret-bottom"></i></b-button>
          <b-button variant="success" @click="bookmark"><i :class="isbookmark.dis" class="btn-font-size"></i> {{ isbookmark.text }}</b-button>
        </b-button-group>
       </b-row>
       <!-- 评论组件 -->
       <yx-remarks :remarksInfo="remarksInfo"></yx-remarks>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isbookmark: {
        is: false,
        dis: 'el-icon-star-off',
        text: '收藏'
      },
      sup: {
        is: false,
        text: '赞同',
        num: 13
      },
      focus: {
        is: false,
        text: '关注',
        icon: 'el-icon-plus'
      },
      isObjection: 'secondary',
      //  评论数据
      remarksInfo: {
        num: 5,
        remarks: [
          {
            // 父评论
            user: 'return time',
            avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
            date: '2023-1-22',
            supNum: 23,
            content: '图灵对于人工智能的发展有诸多贡献',
            subNum: 3,
            // 子评论
            subRemarks: [
              {
                user: 'time',
                avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
                date: '2023-1-22',
                supNum: 20,
                content: '是的',
                reply: false
              },
              {
                user: 'time2',
                avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
                date: '2023-1-22',
                supNum: 3,
                content: '是的，赞同',
                reply: false
              },
              {
                user: 'time3',
                avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
                date: '2023-1-22',
                supNum: 1,
                content: '对对',
                reply: 'time2'
              }
            ]
          },
          {
            user: 'return time',
            avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
            date: '2023-1-22',
            supNum: 13,
            content: '图灵试验，每年都有试验的比赛',
            subNum: 3,
            // 子评论
            subRemarks: [
              {
                user: 'time',
                avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299',
                date: '2023-1-22',
                supNum: 20,
                content: '是的',
                reply: false
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    bookmark () {
      this.isbookmark.is = !this.isbookmark.is
      if (this.isbookmark.is) {
        this.isbookmark.dis = 'el-icon-star-on'
        this.isbookmark.text = '已收藏'
      } else {
        this.isbookmark.dis = 'el-icon-star-off'
        this.isbookmark.text = '收藏'
      }
    },
    support () {
      this.sup.is = !this.sup.is
      if (this.sup.is) {
        this.sup.text = '已赞同'
        this.sup.num++
        this.isObjection = 'secondary'
      } else {
        this.sup.text = '赞同'
        this.sup.num--
      }
    },
    objection () {
      this.isObjection = this.isObjection == 'secondary' ? 'danger' : 'secondary'
      if (this.sup.is) {
        this.support()
      }
    },
    focuss () {
      this.focus.is = !this.focus.is
      if (this.focus.is) {
        this.focus.icon = 'el-icon-check'
        this.focus.text = '已关注'
      } else {
        this.focus.icon = 'el-icon-plus'
        this.focus.text = '关注'
      }
    },
    goBack() {
        this.$router.back();
      },
  },
  mounted () {
  },
  created () {
    console.log(this.$route.query.url)
  },
  
}
</script>

<style scoped>
.article-wrap{
  border-radius: 10px;
  background-color: white;
  min-height: 100vh;
}
.article-date {
  font-size: 15px;
  color: #999999;
  margin-bottom: 29px;
}
</style>
