<template>
    <div class="p-1 mb-2">
        <b-card no-body class="overflow-hidden" style="max-width: auto;">
          <b-row no-gutters>
            <b-col :md="mdNum">
              <!-- <b-card img-src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card> -->
              <div style="max-height:200px; overflow:hidden">
                <b-card-img-lazy :src="articleInfo.coverImg" class="rounded-0 img-size" ></b-card-img-lazy>
              </div>
              
            </b-col>
            <b-col md="9">
              <b-card-body >
                <router-link :to="{path:'/articleRead',query:{content:info.contentRequest}}"><h4 class="card-title">{{ articleInfo.title }}</h4></router-link>
                <div style="display:flex" class="mb-2"><el-avatar :size="25" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><a href="" style="align-self: center; padding-left: 5px;">user name</a></div>
                <!-- 简介 -->
                <b-card-text>
                    {{ articleInfo.brief | ellipsis }}
                    <el-button type="text" ><router-link to="./articleRead">阅读全文</router-link><i class="el-icon-arrow-down"></i></el-button>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
          <!-- 按钮 -->
          <div class="p-2 bg-info">
            <b-button-group class="">
              <b-button  variant="primary" @click="support" class="btn-font-size" size="sm"><i class="el-icon-caret-top"></i>{{ sup.text }} {{ sup.num }}</b-button>
              <b-button :variant="isObjection" @click="objection" size="sm"><i class="el-icon-caret-bottom"></i></b-button>
              <b-button variant="success" @click="bookmark" size="sm"><i :class="isbookmark.dis" class="btn-font-size"></i> {{ isbookmark.text }}</b-button>
              <el-button type="text" class="text-light ml-2"><i class="el-icon-chat-round"></i>{{ articleInfo.commentsNum+' 条评论' }}</el-button>
            </b-button-group>
          </div>

        </b-card>
      </div>
</template>

<style scoped>
@media screen and (max-width:362px) {
    .btn-font-size{
        font-size: 12px;
    }
}
a{
  color: inherit;
  text-decoration: none;
}
</style>

<script>
export default {
  props: ['info', 'imgSize'],
  filters: { // 限制文本显示字数,超出部分用...代替
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 95) {
        return value.slice(0, 95) + ' ...'// 0:下标,从第一个字开始显示,95:显示字数,多余用...代替
      }
      return value
    }
  },
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
      articleInfo: this.info,
      isObjection: 'secondary',
      mdNum: ''
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
    }
  },
  mounted () {
    this.mdNum = this.imgSize ? this.imgSize : 3
  }
}
</script>
