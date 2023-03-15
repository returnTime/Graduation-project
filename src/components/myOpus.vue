<template>
  <div>
    <nav-top></nav-top>
    <b-container class="p-0">
        <el-page-header @back="goBack" content="我的作品" class="p-3" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
        </el-page-header>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="p-3 pt-4 mt-2" style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
            <el-tab-pane label="我的文章" name="first">
                <div v-for="art in article">
                    <my-opus-list :content="art"></my-opus-list>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的图片" name="second">
                <div v-for="art in image">
                    <my-opus-list :content="art"></my-opus-list>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的视频" name="third">
                <div v-for="art in video">
                    <my-opus-list :content="art"></my-opus-list>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的留言卡" name="fourth">
                <div v-for="art in message">
                    <my-opus-list :content="art"></my-opus-list>
                </div>
            </el-tab-pane>
          </el-tabs>
    </b-container>
  </div>
</template>

<script >
import myOpusList from './common/myOpusList.vue'
export default {
    components:{
        myOpusList
    },
  data() {
    return {
        activeName: 'second',
        article:[
            {
                img:'https://th.bing.com/th/id/OIP.ad9FZf8CNFJc55M3EIiSuAAAAA?w=141&h=194&c=7&r=0&o=5&pid=1.7',
                url:'数据请求地址xxxxxxxxx',
                type:'article',
                title:'艾伦·麦席森·图灵!',
                date:'2022-09-15 0：56',
                data:{
                    read:'143',
                    sup:'45',
                    collection:'23'
                },
                isShow:true
            },
            
        ],
        image:[
            {
                img:'https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg?auto=compress&cs=tinysrgb&h=350',
                url:'https://images.pexels.com/photos/15865829/pexels-photo-15865829.jpeg',
                imgId:'15865829',
                type:'img',
                title:'Title123',
                date:'2022-09-15 0：56',
                data:{
                    read:'143',
                    sup:'45',
                    collection:'23'
                },
                isShow:true
            }
        ],
        video:[
            {
                img:'https://i.vimeocdn.com/video/1610019310-d3f9ac1b7b9475e665b0da4e46f507091b328372b654ffe9aff24fa388a2590c-d_200x150.jpg',
                url:'https://cdn.pixabay.com/vimeo/798555662/Rain%20-%20150531.mp4?width=1280&hash=a7e0c21a92f4e7ea8bc3188a40f84ee88279481d',
                type:'video',
                title:'Title video',
                date:'2022-09-15 0：56',
                data:{
                    read:'143',
                    sup:'45',
                    collection:'23'
                },
                isShow:true
            }
        ],
        message:[
            {
                img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg?auto=compress&cs=tinysrgb&h=350',
                url:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg',
                type:'message',
                title:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                date:'2022-09-15 0：56',
                data:{
                    read:'143',
                    sup:'45',
                    collection:'23'
                },
                isShow:true,
                go:{
                        text:'我们乘着时代的风云，以微毫诠释盛大,且歌且舞而来。我们曼妙风姿里，就是生命。我们轻盈飞过处，就是天空。',
                        userName:'123',
                        img:'https://images.pexels.com/photos/15737949/pexels-photo-15737949.jpeg',
                    }
            }
        ]
    }
  },
methods: {
    goBack() {
        this.$router.back();
      },
      handleClick(tab, event) {
        
      },
      
  },
mounted(){
    
  }
}
</script>

<style scoped>

</style>
