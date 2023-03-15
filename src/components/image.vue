<template>
    <div>
        
        <nav-top :curI="true"></nav-top>
        
        <div>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
              <b-carousel-slide
                caption="First slide"
                img-src="https://picsum.photos/1024/480/?image=10"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Second Slide"
                img-src="https://picsum.photos/1024/480/?image=12"
              ></b-carousel-slide>
              <b-carousel-slide
                caption="Third Slide"
                img-src="https://picsum.photos/1024/480/?image=22"
              ></b-carousel-slide>
            </b-carousel>
          </div>

        <b-container fluid class="p-0">
            <b-row no-gutters>
                <b-col sm="3" class="p-1" v-for='(col, index) in imgList'>
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
        </b-container>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios'
// import { createClient } from 'pexels';
const client = 'YpK4UtF2F4xQRTq8B3KuvLj2mvcB2RTRyS0LW4HwDDcU24lMqnuBKJ51';
export default {
    data(){
        return{
            imgList:[],
            loading:true
        }
    },

    created() {
        axios.get('https://api.pexels.com/v1/curated?page=1&per_page=30',{
            headers:{
                'Authorization':client
            }
        }).then(
            (url)=>{
                for(let i=0;i<4;i++){
                    this.imgList.push([]);
                }
                for(let i=0,n=0,x=0;i<url.data.photos.length;i++){
                    this.imgList[n][x] = url.data.photos[i];
                    ++n;
                    x = n==4?x+1:x;
                    n = n>3?0:n;
                }
                // console.log(url);
            }
        )
        
    },
    mounted(){
        // console.log(this.imgList);
        
    },
    methods:{

    }
}
</script>
