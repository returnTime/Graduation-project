<template>
<div>
    <div class="home-page" :style="bgImg">
      <!-- <log-in :visible.sync="logInPop"></log-in> -->
      <div v-if="this.global.isPop">
        <log-in></log-in>
      </div>
        <nav class="nav-boder">
            <button class="unfold" v-on:click="unfold" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16" style="color: white;">
                <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
              </svg></button>
            <a href="" class="m-logo"><img src="../assets/img/logo.png" alt=""></a>
            <a href="" class="logo"><img src="../assets/img/logo.png" alt=""></a>
            <div class="nav-content-box">

                <div class="content-box-top">
                  <div v-if="!this.global.isLogInUser">
                    <button type="button" class="log-in" @click="isPopLogIn">登录</button>
                    <button type="button" class="log-in" >注册</button>
                  </div>  
                </div>
                <div class="nav-content-bottom">
                      <div class="nav-a"><router-link to="./article">文字</router-link></div>
                      <div class="nav-a"><router-link to="./image">图片</router-link></div>
                      <div class="nav-a"><router-link to="./video">视频</router-link></div>
                      <div class="nav-a"><router-link to="./message">留言卡</router-link></div>
                      <div class="nav-a nav-a-right"><b-link to="./creation">创作</b-link></div>
                  </div>
            </div>
            <!-- <a href="" class="ava-pos"> </a> -->
            <b-link to="./userPage" class="ava-pos"><el-avatar :src="this.global.logInavatar" icon="el-icon-user-solid" size="medium" style="border:white solid 2px;"></el-avatar></b-link>
        </nav>
        <ul class="unfold-content" v-bind:style="unfoldH">
            <li v-if="!this.global.isLogInUser"><a @click="isPopLogIn">登录</a></li>
            <li><router-link to="./article">文字</router-link></li>
            <li><router-link to="./image">图片</router-link></li>
            <li><router-link to="./video">视频</router-link></li>
            <li><router-link to="./message">留言卡</router-link></li>
            <li><router-link to="./creation">创作</router-link></li>
        </ul>

        <div class="container sentence">
            <p class="word" id="word">{{ word.content }}</p>
                        <p class="author" id="author">{{ '————'+word.author }}</p>
          </div>

        <div class="container date-wrap">
            <div>
                <div class="date-time">
                    <p><span class="time" id="time">{{ printTime.hours }}</span><span class="seconds">.</span><span class="seconds" id="seconds">{{printTime.sec}}</span></p>
                    <p class="date" id="date">{{ printTime.date }}</p>
                </div>
            </div>

            <div class="weather">
                <!-- <div class="weather-wrap">00℃</div> -->
                <div class="weather-wrap" id="mycity">{{ city }}</div>
            </div>
        </div>
      </div>

      <div class="">
        <!-- <div class="jumbotron mb-3 ">
            <h1 class="display-4">推荐文章</h1>
            <p class="lead">为您推荐一些文章 {{ '——'+printTime.date }}</p>
            <hr class="my-1">
            <p>点击浏览更多文字作品</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">更多文章</a>
          </div> -->
          <div>
            <b-jumbotron bg-variant="info" text-variant="white" header="推荐文章" lead="">
              <p>为您推荐的一些文章</p>
              <b-button variant="primary" to="./article">更多文章</b-button>
            </b-jumbotron>
          </div>
      </div>
      <div class="container-fluid">
          <article-list :info = listInfo imgSize = 2></article-list>
          <article-list :info = listInfo imgSize = 2></article-list>
      </div>

        <div class="container-fluid">
            <b-card bg-variant="dark" text-variant="white" title="推荐图片" class="mt-5 mb-1">
                <b-card-text>
                  请用黑白两色的眼睛，去观察五彩缤纷的世界。
                </b-card-text>
                <b-button to="./image" variant="primary">更多图片</b-button>
              </b-card>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                  a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
              </b-carousel-slide>
            </b-carousel>

            <!-- <p class="mt-4">
              Slide #: {{ slide }}<br>
              Sliding: {{ sliding }}
            </p> -->
          </div>

          <div class="container-fluid">
            <b-card bg-variant="info" text-variant="white" title="推荐留言卡" class="mt-5 mb-1">
                <b-card-text>
                  生活能治愈的，都是愿意好起来的人。
                </b-card-text>
                <b-button to="./message" variant="primary">更多留言卡</b-button>
              </b-card>
            
              <b-row no-gutters >
                <b-col  v-for="message in provisional" sm="4" class="p-1">
                  <message-card
                    :imgUrl="message.img"
                    :text="message.text"
                    :userName="message.userName"
                    :go="message.go"
                ></message-card>
                </b-col>
              </b-row>
              
           
          </div>
          <footer class="mt-5 mb-0">
            <div class="jumbotron jumbotron-fluid mb-0 bg-dark text-white">
                <div class="container">
                <p style="text-align: center;"><img src="../assets/img/logo.png" alt="" srcset="" ></p>
                  <!-- <p class="lead" style="text-align: center;">毕业设计：<a href="">依夕网</a></p>
                  <p class="lead" style="text-align: center;">author:王晖</p> -->
                </div>
              </div>
          </footer>
</div>
</template>

<script>
import axios from 'axios';
import messageCard from './common/messageCard.vue';
export default {
  components:{
    messageCard
  },
  data () {
    return {
      isUnfold: false,
      unfoldH: {
        height: ''
      },
      printTime: {
        hours: '0:00',
        date: '1月1日 星期一',
        sec: '00'
      },
      word: {
        content: '',
        author: ''
      },
      bgIndex: 0,
      bgImg: {
        background: '',
        transition: 'all 2s linear'
      },
      myip: '',
      city: '',
      slide: 0,
      sliding: null,
      listInfo: {
        title: '艾伦·麦席森·图灵!',
        coverImg: 'https://picsum.photos/400/400/?image=20',
        brief: '艾伦·麦席森·图灵（英语：Alan Mathison Turing，1912年6月23日－1954年6月7日），英国数学家、逻辑学家，被称为计算机科学之父，人工智能之父。1931年图灵进入剑桥大学国王学院，毕业后到美国普林斯顿大学攻读博士学位，第二次世界大战爆发后回到剑桥，后曾协助军方破解德国的著名密码系统Enigma，帮助盟军取得了二战的胜利。',
        userId: '123412',
        commentsNum: 23
      },

      provisional:[
          {
               text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
               userName:'123',
               img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg?auto=compress&cs=tinysrgb&h=350',
               go:{
                  text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                  userName:'123',
                  img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg',
                  }
          },
                
          {
              text:'初见乍惊欢，久处亦怦然。',
              userName:'122',
              img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg?auto=compress&cs=tinysrgb&h=350',
              go:{
                  text:'初见乍惊欢，久处亦怦然。',
                  userName:'122',
                  img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg',
                  }
          },
                
          {
            text:'阳春布德泽，万物生光辉”，希望之光照亮了生命。胸怀希望，才能走出“飘如陌上尘”“天地一沙鸥”的慨叹，“今朝试卷孤篷看，依旧青山绿树多”。拥有希望，你就能打开更多的窗户，“雁引愁心去，山衔好月来。”无论面对怎样的艰难，我们“依然一笑作春温”。',
            userName:'121',
            img:'https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg?auto=compress&cs=tinysrgb&h=350',
            go:{
                text:'阳春布德泽，万物生光辉”，希望之光照亮了生命。胸怀希望，才能走出“飘如陌上尘”“天地一沙鸥”的慨叹，“今朝试卷孤篷看，依旧青山绿树多”。拥有希望，你就能打开更多的窗户，“雁引愁心去，山衔好月来。”无论面对怎样的艰难，我们“依然一笑作春温”。。',
                userName:'121',
                img:'https://images.pexels.com/photos/15591332/pexels-photo-15591332.jpeg',
              }
          } 
        ],
      logInPop:false,
      
    }
  },
  methods: {
    unfold: function () { // 展开列表
      this.isUnfold = !this.isUnfold
      if (this.isUnfold) {
        this.unfoldH.height = '240px'
      } else {
        this.unfoldH.height = '0px'
      }
    },
    time () {
      const myDate = new Date()
      let min = myDate.getMinutes()
      min = min > 9 ? min : '0' + min
      this.printTime.hours = myDate.getHours() + ':' + min// 时分
      let getsec = myDate.getSeconds()
      getsec = getsec < 10 ? '0' + getsec : getsec
      this.printTime.sec = getsec// 秒
      const dayChi = ['日', '一', '二', '三', '四', '五', '六']
      const day = myDate.getDay()
      this.printTime.date = myDate.getMonth() + 1 + '月' + myDate.getDate() + '日' + ' ' + '星期' + dayChi[day]
    },
    sentence () {
      const that = this
      axios.get('https://v1.hitokoto.cn/')
        .then(
          function (t) {
            that.word.content = t.data.hitokoto
            that.word.author = t.data.from
          }
        )
    },
    preload (url) {
      const img = new Image()
      img.src = url
    },
    bgimg () {
      const i = this.bgIndex
      const url = 'https://tuapi.eees.cc/api.php?category=biying&type=302&' + i + ''
      this.preload(url)
      setTimeout(() => {
        this.bgImg.background = 'url(' + url + ')'
        this.bgIndex++
        this.sentence()
      }, 6000)
    },
    ip () {
      axios.get('https://api.ipify.org/?format=json')
        .then(
          (ip1) => {
            this.myip = ip1.data.ip
            axios.get('https://www.fkcoder.com/ip?ip=' + this.myip)
              .then(
                (info) => {
                  if (info.data.city != 0) {
                    this.city = info.data.city.substring(0, 3)
                  } else if (info.data.country != 0) {
                    this.city = info.data.country.substring(0, 3)
                  } else {
                    this.city = '未知'
                  }
                }
              )
          }
        )
        .catch(
          (error) => {
            if (error.response) {
              // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
              this.city = '未知'
            } else if (error.request) {
              // 请求已经成功发起，但没有收到响应
              // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
              // 而在node.js中是 http.ClientRequest 的实例
              this.city = '未知'
            } else {
              // 发送请求时出了点问题
              this.city = '未知'
            }
          }
        )
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    // isJump(address){
    //   if(this.global.isLogInUser){
    //    this.$route.push({path:address});
    //   }else{
    //     this.logInPop = true;
    //   }
    // },
    isPopLogIn(){
    this.global.revisePop();
  },
  },
  mounted () {
    this.time()
    setInterval(this.time, 1000)
    this.sentence()
    setTimeout(() => {
        this.bgimg();
        setInterval(this.bgimg,60000);
    }, 6000);
    this.ip();
  },
  created () {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    });
  },
  beforeDestroy () {
    if (this.time) {
      clearInterval(this.time)
    }
    if (this.bgimg) {
      clearInterval(this.bgImg)
    }
  }
}
</script>

<style src="bootstrap/dist/css/bootstrap.min.css" scoped></style>

<style src="bootstrap-vue/dist/bootstrap-vue.css" scoped></style>

<style src="../assets/css/page.css" scoped></style>
