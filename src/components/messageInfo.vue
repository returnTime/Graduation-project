<template>
  <div>
    <nav-top></nav-top>
    <el-page-header @back="goBack" content="查看留言卡" class="p-3" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-page-header>
    <b-container fluid="xl" class="mt-2 mb-5" >
        <b-card  :img-src="message.img" img-alt="Card image" img-top>  
            <b-card-text>
                {{ message.text }}
            </b-card-text>
        </b-card>
        <!-- 点赞收藏 -->
        <b-row no-gutters class="mb-1">
            <b-button-group class="">
              <b-button :squared="true" size="sm" variant="primary" @click="support" class="btn-font-size"><i class="el-icon-caret-top"></i>{{ sup.text }} {{ sup.num }}</b-button>
              <b-button :squared="true" size="sm" :variant="isObjection" @click="objection"><i class="el-icon-caret-bottom"></i></b-button>
            </b-button-group>
            <b-button :squared="true" size="sm" style="margin-left: auto;" variant="success" @click="bookmark"><i :class="isbookmark.dis" class="btn-font-size"></i> {{ isbookmark.text }}</b-button>
        </b-row>
        <!-- 用户 -->
        <b-row no-gutters class="mt-2">
            <b-col cols="auto" class="mr-auto">
              <div style="display:flex" class="mb-2"><el-avatar :size="30" src="https://thirdqq.qlogo.cn/g?b=sdk&k=4qCqwgwWm5Eu5DJ6dWYBeQ&kti=Y8p9lQAAAAA&s=140&t=1605246299"></el-avatar><a href="" style="align-self: center; padding-left: 5px;">{{ message.userName }}</a></div>
            </b-col>
            <b-col cols="auto">
              <b-button :squared="true" variant="primary" @click="focuss" size="sm"><i :class="focus.icon"></i>{{ focus.text }}</b-button>
            </b-col>
        </b-row>
        
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        message:{
        },
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
      isObjection: 'secondary'
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
mounted(){
    console.log(this.message)
  },
  created () {
    
    this.message = this.$route.query.info;
  }
}

</script>

<style scoped>
</style>
