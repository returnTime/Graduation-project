<template>
  <div>
    <nav-top></nav-top>
    <el-page-header v-if="!userType" @back="goBack" :content="'查看'+who+'的主页'" class="p-3" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"></el-page-header>
    <b-container class="p-0">
        <!-- 主页头部内容 -->
          <b-card img-src="https://fastly.picsum.photos/id/324/1200/260.jpg?hmac=CbrkBNaKH6d2E5HuC21ZpXLCrFq897fyrteRXLh-R7A" 
          img-alt="Card image" img-top class="mt-2 card-shadow">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeUpload">
            <b-button v-if="userType" variant="outline-secondary" size="sm" class="edit-img" ><i class="el-icon-camera"></i> 编辑封面图片</b-button>
            </el-upload>
            
            <b-card-text>
                <b-row no-gutters>
                    <!-- 头像 -->
                    <b-col sm="1">
                        <el-avatar :size="50" :src="userInfo.avatar" fit="cover"></el-avatar>
                    </b-col>
                    <b-col sm="11">
                        <!-- 用户名和签名 -->
                        <b-row no-gutters>
                            <b-col sm="3" class="b">
                                <!-- 用户名 -->
                                <span class="userName">{{ userInfo.name }}</span>
                            </b-col>
                            <b-col sm="9" class="b">
                                <!-- 一句话介绍 -->
                                <span class="article-date b">{{ userInfo.sentence }}</span>
                            </b-col>
                        </b-row>
                        <!-- 性别 -->
                        <i :class="genderIcon"></i>
                                <!-- 用户详细信息 -->
                                <div>
                                    <b-collapse id="collapse-2">
                                      <p class="mt-2 info-text"><span class="key-info mr-2">居住地</span><span>现居{{ userInfo.address }}</span></p>
                                      <p class="info-text"><span class="key-info mr-2">职业</span><span>{{ userInfo.industry }}</span></p>
                                    </b-collapse>
                                    <!-- 按钮 -->
                                    <b-button variant="link" v-b-toggle.collapse-2 class="p-0 btns">
                                        <span class="when-opened"><i class="el-icon-arrow-down"></i></span> <span class="when-closed"><i class="el-icon-arrow-up"></i></span>查看详细资料
                                    </b-button>
                                  </div>
                             <!-- 编辑个人资料按钮 -->
                            <div style="text-align: right;">
                                <b-button v-if="userType" variant="outline-primary" size="sm" to="./edit">编辑个人资料</b-button>
                                <b-button v-else :squared="true" variant="primary" @click="focuss" size="sm"><i :class="focus.icon"></i>{{ focus.text }}</b-button>
                            </div>
                    </b-col>
                </b-row>
            </b-card-text>
          </b-card>
          <!-- 用户的内容 -->
          <div class="card-shadow mt-3">
            <b-tabs content-class="mt-3">
                <b-tab title="文章"> 
                    <h6 class="p-2 my-title">{{ who }}的文章</h6>
                        <div v-if="listInfot.length>0">
                            <article-list
                            v-for="listInfo in listInfot"
                            :info="listInfo"
                            ></article-list>
                        </div>
                        <el-empty v-else description="空空如也"></el-empty>
                </b-tab>
                <b-tab title="图片" lazy>
                    <h6 class="p-2 my-title">{{ who }}的图片</h6>
                    
                        <b-row no-gutters v-if="imgList.length>0">
                            <b-col sm="4" class="p-1" v-for='(col, index) in imgList'>
                                <b-link
                                v-for="list in col" 
                                :to="{path:'/imageInfo',query:{url:list.src.original,imgId:list.id}}">
                                <!-- <img class="mb-1" :src="list.src.medium" alt="" width="100%"> -->
                                <el-image
                                :src="list.src.medium"
                                style="width:100%"
                                lazy
                                >
                                    <div slot="placeholder" style="height:200px; width:100%" class="image-slot" v-loading="true" element-loading-text="拼命加载中..."></div>
                                    <div slot="error" class="image-slot">
                                        <i class="el-icon-picture-outline"></i>
                                    </div>
                                </el-image>
                                </b-link>
                            </b-col>
                        </b-row>
                        <el-empty v-else description="空空如也"></el-empty>
                </b-tab>
                <b-tab title="视频" lazy>
                    <h6 class="p-2 my-title">{{ who }}的视频</h6>
                    <b-row no-gutters v-if="videoList.length>0">
                        <b-col sm="4" class="p-1" v-for='(col, index) in videoList' >
                            <b-link
                            style="position:relative; display:block"
                            v-for="list in col" 
                            :to="{path:'/videoInfo',query:{url:list.videos.medium.url}}">
                            <!-- <img class="mb-1" :src="imgUrl+list.picture_id+imgSize" alt="" width="100%"> -->
                            <el-image
                                :src="imgUrl+list.picture_id+imgSize"
                                style="width:100%"
                                lazy
                                >
                                  <div slot="placeholder" style="height:200px; width:100%" class="image-slot" v-loading="true" element-loading-text="拼命加载中..."></div>
                                  <div slot="error" class="image-slot">
                                    <i class="el-icon-picture-outline"></i>
                                  </div>
                              </el-image>
                              <i class="el-icon-video-play imgIcon"></i>
                            </b-link>
                        </b-col>
                    </b-row>
                    <el-empty v-else description="空空如也"></el-empty>
                </b-tab>
                <b-tab title="留言卡" lazy>
                    <h6 class="p-2 my-title">{{ who }}的留言卡</h6>
                    <b-row no-gutters v-if="provisional.length>0">
                        <b-col sm="4" class="p-1" v-for="col in provisional">
                            <message-card
                                v-for="message in col"
                                :imgUrl="message.img"
                                :text="message.text"
                                :userName="message.userName"
                                :go="message.go"
                            ></message-card>
                        </b-col>
                      </b-row>
                      <el-empty v-else description="空空如也"></el-empty>
                </b-tab>
                <b-tab title="收藏" lazy>
                    <h6 class="p-2 my-title">{{ who }}的收藏
                        <el-switch
                        v-if="userType"
                        style="float:right"
                        v-model="value1"
                        active-text="所有人可见"
                        inactive-text="仅自己可见"
                        >
                        </el-switch>
                    </h6>
                    
                    <div class="accordion pl-2" id="accordionExample">
                        <el-collapse v-model="activeName" accordion>
                            <!-- 收藏的文章 -->
                            <el-collapse-item title=" 文章" name="1">
                              <div v-if="myCollect.article.length>0" >
                                <article-list :info="cArticle" v-for="cArticle in myCollect.article"></article-list>
                              </div>
                              <div v-else >
                                <div style="text-align: center; ">
                                    <img src="../assets/img/锤子.svg" alt="" height="100px">
                                    <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">{{ collectText }}</p>
                                  </div>
                              </div>
                            </el-collapse-item>
                            <!-- 收藏的图片 -->
                            <el-collapse-item title="图片" name="2">
                                <div v-if="myCollect.img.length>0">
                                    <div class="row row-cols-3">
                                        <div class="col p-1" v-for="cImg in myCollect.img">
                                          <b-link
                                            :to="{path:'/imageInfo',query:{url:cImg.Original,imgId:cImg.id}}">
                                            <!-- <img class="mb-1" :src="list.src.medium" alt="" width="100%"> -->
                                            <el-image
                                            :src="cImg.cover"
                                            style="width:100%"
                                            lazy
                                            >
                                              <div slot="placeholder" style="height:200px; width:100%" class="image-slot" v-loading="true" element-loading-text="拼命加载中..."></div>
                                                <div slot="error" class="image-slot">
                                                <i class="el-icon-picture-outline"></i>
                                              </div>
                                            </el-image>
                                         </b-link>
                                        </div>
                                      </div>    
                                </div>
                                <div v-else >
                                    <div style="text-align: center; ">
                                        <img src="../assets/img/锤子.svg" alt="" height="100px">
                                        <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">{{ collectText }}</p>
                                      </div>
                                  </div>
                            </el-collapse-item>
                            <!-- 收藏的视频 -->
                            <el-collapse-item title="视频" name="3">
                              <div v-if="myCollect.video.length>0">

                              </div>
                              <div v-else >
                                <div style="text-align: center; ">
                                    <img src="../assets/img/锤子.svg" alt="" height="100px">
                                    <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">{{ collectText }}</p>
                                  </div>
                              </div>
                            </el-collapse-item>
                            <!-- 收藏的留言 -->
                            <el-collapse-item title="留言" name="4">
                                <div v-if="myCollect.message.length>0">

                                </div>
                                <div v-else >
                                  <div style="text-align: center; ">
                                      <img src="../assets/img/锤子.svg" alt="" height="100px">
                                      <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">{{ collectText }}</p>
                                    </div>
                                </div>
                            </el-collapse-item>
                          </el-collapse>
                      </div>
                </b-tab>
                <b-tab title="关注" lazy>
                    <div class="card-shadow mt-3">
                        <b-tabs content-class="mt-3">
                            <!-- 我的关注 -->
                            <b-tab :title="who+'关注的人'" class="pb-5">
                                <div v-if="userList.my.length>0">
                                    <div  v-for="myUser in userList.my" class="p-2 border-bottom">
                                        <user-col :info="myUser"></user-col>
                                    </div>
                                </div>
                                <div v-else>
                                    <div style="text-align: center;" class="p-5">
                                        <img src="../assets/img/锤子.svg" alt="" height="100px">
                                        <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">还没有关注的用户</p>
                                      </div> 
                                  </div>
                            </b-tab>
                            <!-- 关注我的 -->
                            <b-tab :title="'关注'+who+'的人'" class="pb-5">
                                <div v-if="userList.me.length>0">
                                    <div  v-for="meUser in userList.me" class="p-2 border-bottom">
                                        <user-col :info="meUser"></user-col>
                                    </div>
                                </div>
                                <div v-else>
                                    <div style="text-align: center;" class="p-5">
                                        <img src="../assets/img/锤子.svg" alt="" height="100px">
                                        <p class="mt-1" style="font-size: 17px; color:rgb(153, 153, 153);">还没有关注的用户</p>
                                      </div> 
                                  </div>
                            </b-tab>
                        </b-tabs>
                    </div>
                </b-tab>
              </b-tabs>
          </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import messageCard from './common/messageCard.vue';
const client = 'YpK4UtF2F4xQRTq8B3KuvLj2mvcB2RTRyS0LW4HwDDcU24lMqnuBKJ51';
const clientV = '25244137-e9d45ba581ebcb0cf32e5b1a2';
export default {
  components:{
    messageCard
  },
  props:['hePage'],
  data() {
    return {
      userType:true,
      who:'',
      collectText:'',
      value1:true,
      show3: false,
      focus: {
        is: false,
        text: '关注',
        icon: 'el-icon-plus'
      },
      genderIcon:'',
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
      imgList:[],
      videoList:[],
      imgUrl:'https://i.vimeocdn.com/video/',
      imgSize:'_200x150.jpg',
      provisional:[
            [
                {
                    text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                    userName:'123',
                    img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg?auto=compress&cs=tinysrgb&h=350',
                    go:{
                        text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                        userName:'123',
                        img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg',
                    }
                }
                
            ],
            [
                {
                    text:'初见乍惊欢，久处亦怦然。',
                    userName:'122',
                    img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg?auto=compress&cs=tinysrgb&h=350',
                    go:{
                        text:'初见乍惊欢，久处亦怦然。',
                        userName:'122',
                        img:'https://images.pexels.com/photos/15647839/pexels-photo-15647839.jpeg',
                    }
                }
                
            ],
            [
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
                
            ]
        ],
      activeName: '',
      myCollect:{
        article:[
          {
            title: '艾伦·麦席森·图灵!',
            coverImg: 'https://picsum.photos/400/400/?image=20',
            brief: '艾伦·麦席森·图灵（英语：Alan Mathison Turing，1912年6月23日－1954年6月7日），英国数学家、逻辑学家，被称为计算机科学之父，人工智能之父。1931年图灵进入剑桥大学国王学院，毕业后到美国普林斯顿大学攻读博士学位，第二次世界大战爆发后回到剑桥，后曾协助军方破解德国的著名密码系统Enigma，帮助盟军取得了二战的胜利。',
            userId: '123412',
            commentsNum: 23,
            contentRequest: '文章详细内容请求地址xxxx.xxxx.xxxxx'
          }
        ],
        img:[
            {
                cover:'https://images.pexels.com/photos/15786098/pexels-photo-15786098.jpeg?auto=compress&cs=tinysrgb&h=350',
                Original:'https://images.pexels.com/photos/15786098/pexels-photo-15786098.jpeg',
                id:'15786098'
            }
        ],
        video:[],
        message:[]
      },
      userList:{
        my:[
            {
                is:true,
                name:'Tdiche',
                avater:'http://q1.qlogo.cn/g?b=qq&nk=2278085683&s=100',
                userUrl:'用户主页地址.xxxxxxxx'
            }
        ],
        me:[
            // {
            //     is:false,
            //     name:'user 00',
            //     avater:'http://q1.qlogo.cn/g?b=qq&nk=234692698&s=100'
            // }
        ]
      },
      userInfo: {
          sentence: '愿以至诚之心，领岁月之教诲。 愿存少年之志，无畏时之流逝',
          address: '地球',
          industry: '学生',
          gender: '男',
          name: 'User Name',
          avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
        },
      imageUrl: ''
    }
  },
methods: {
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeUpload(file) {
            this.loading = true
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt10M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                this.$message.error('上传图片只能是 JPG 或者 PNG 格式!');
            }
            if (!isLt10M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }
            return (isJPG || isPNG) && isLt10M;
            },
    },
mounted(){
    if(this.userInfo.gender == '男'){
        this.genderIcon = 'el-icon-male';
    }else{
        this.genderIcon = 'el-icon-female';
    }
    if(this.userType){
        this.who = '我';
        this.collectText = '还没有收藏，快来收藏一个吧';
    }else {
        this.collectText = this.who+'还没有收藏';
        if(this.userInfo.gender == '男'){
            this.who = '他';
        }
        if(this.userInfo.gender == '女'){
            this.who = '她';
        }
    };
  },

  created() {
    console.log(this.hePage);
    if(this.hePage != null){
        this.userType = this.hePage.userType;
    }
    if(this.userType){
        axios.get('https://api.pexels.com/v1/curated?page=1&per_page=6',{
            headers:{
                'Authorization':client
            }
        }).then(
            (url)=>{
                for(let i=0;i<3;i++){
                    this.imgList.push([]);
                }
                for(let i=0,n=0,x=0;i<url.data.photos.length;i++){
                    this.imgList[n][x] = url.data.photos[i];
                    ++n;
                    x = n==3?x+1:x;
                    n = n>2?0:n;
                }
                // console.log(url);
            }
        );
        axios.get('https://pixabay.com/api/videos/',{
        params:{
        key:clientV,
        per_page:6
        } 
        }).then(
            (url)=>{
            for(let i=0;i<3;i++){
                this.videoList.push([]);
            }
            for(let i=0,n=0,x=0;i<url.data.hits.length;i++){
                this.videoList[n][x] = url.data.hits[i];
                ++n;
                x = n==3?x+1:x;
                n = n>2?0:n;
            }
                    // console.log(url);
            }
        )
    }else{
        this.userInfo = this.hePage.userInfo;
        this.listInfot = this.hePage.listInfot;
        this.imgList = this.hePage.imgList;
        this.videoList = this.hePage.videoList;
        this.myCollect = this.hePage.myCollect;
        this.userList =this.hePage.userList;
        this.provisional = this.hePage.provisional;
        this.userInfo = this.hePage.userInfo;
    }
       
    }
}

</script>

<style scoped>
.article-date {
    font-size: 15px;
    color: #999999;
    
  }
.userName{
    font-size: 24px;
    font-weight: 600;
}
.b{
    display: flex;
    align-items:center;
}

.info-text{
    font-size: 14px;
}
.key-info{
    font-weight: 600;
}
.card-shadow{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.edit-img{
    position: absolute;
    top: 10px;
    right:10px;
}
.imgIcon{
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    z-index: 999;
    color: white;
    font-size: 30px;
}
.my-title{
    font-weight: 600;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.btns:hover,
.btns:focus{
    box-shadow:none!important;
    text-decoration: none;   
}
.btns{
    color: #409EFF;
    font-size: 14px;
}

.btn:focus{
    box-shadow:none!important;
    text-decoration: none;   
}
</style>
