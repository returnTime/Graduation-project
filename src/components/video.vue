<template>
  <div>
    <nav-top :curV="true"></nav-top>
    <b-container fluid class="p-0 wrap" >
       <div class="video-background">
        <h1 class="Vtitle">分享你的画面。</h1>
        <video autoplay loop muted src="https://cdn.coverr.co/videos/coverr--07-022-22-girl-with-analog-camera_0009-7367/1080p.mp4">
        </video>
      </div>
    </b-container>
    
    <b-container fluid class="p-0">
        <b-row no-gutters>
            <b-col sm="3" class="p-1" v-for='(col, index) in videoList' >
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

    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
const client = '25244137-e9d45ba581ebcb0cf32e5b1a2';
export default {
  data() {
    return {
        videoList:[],
        imgUrl:'https://i.vimeocdn.com/video/',
        imgSize:'_200x150.jpg'
    }
  },
created() {
    axios.get('https://pixabay.com/api/videos/',{
      params:{
        key:client,
        per_page:30
      }
      
    }).then(
        (url)=>{
            for(let i=0;i<4;i++){
                this.videoList.push([]);
            }
            for(let i=0,n=0,x=0;i<url.data.hits.length;i++){
                this.videoList[n][x] = url.data.hits[i];
                ++n;
                x = n==4?x+1:x;
                n = n>3?0:n;
            }
                console.log(url);
        }
    )
  },
methods: {

  },
mounted(){
    // console.log(this.videoList);
  }
}
</script>

<style scoped>
.imgIcon{
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    z-index: 999;
    color: white;
    font-size: 30px;
}
.video-background {
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 80vh;
  overflow: hidden;
  z-index: -100;
  
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
  filter: brightness(80%);
}
.Vtitle{
  position: absolute;
  left: 10%;
  top: 10%;
  color: white;
  font-weight: 500;
  letter-spacing: 3px;
}
.wrap{
  overflow: hidden;
}
</style>
